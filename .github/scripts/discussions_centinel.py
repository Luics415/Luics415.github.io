#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Agente Centinela de GitHub Discussions para el Portafolio Oficial de Luis Rivera (@Luics415).
Monitorea discussions periódicamente (cada 6 horas o bajo demanda), analiza el estado vivo del
repositorio (código, dependencias, issues, actions, skills de auditoría) y genera respuestas
precisas, contextualizadas y fundamentadas en el proyecto sin marcar como respuesta oficial.
"""

import os
import sys
import json
import argparse
import subprocess
import urllib.request
import urllib.error
from typing import Dict, Any, List, Optional

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

OWNER_DEFAULT = "Luics415"
REPO_DEFAULT = "Luics415.github.io"
SIGNATURE_MARKER = "🤖 *Respuesta técnica generada automáticamente por el Agente Autónomo del Portafolio"


def log(msg: str):
    print(f"[CENTINELA] {msg}", flush=True)


def run_cmd(cmd: List[str], check: bool = True) -> str:
    """Ejecuta un comando en terminal y retorna su salida estándar."""
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding="utf-8")
    if check and res.returncode != 0:
        raise RuntimeError(f"Error ejecutando {' '.join(cmd)}: {res.stderr.strip()}")
    return res.stdout.strip()


def gh_graphql(query: str, variables: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    """Ejecuta una consulta o mutación GraphQL mediante la CLI de GitHub o API REST."""
    cmd = ["gh", "api", "graphql", "-f", f"query={query}"]
    if variables:
        for k, v in variables.items():
            if isinstance(v, bool):
                cmd.extend(["-F", f"{k}={str(v).lower()}"])
            elif isinstance(v, int):
                cmd.extend(["-F", f"{k}={v}"])
            else:
                cmd.extend(["-F", f"{k}={str(v)}"])
    
    out = run_cmd(cmd)
    try:
        data = json.loads(out)
    except json.JSONDecodeError as e:
        raise RuntimeError(f"Respuesta JSON no válida de GitHub: {out}") from e
    
    if "errors" in data:
        raise RuntimeError(f"Errores devueltos por GraphQL: {json.dumps(data['errors'], indent=2)}")
    return data.get("data", {})


def gather_repository_context() -> Dict[str, Any]:
    """Extrae el estado vivo del repositorio para alimentar el contexto del agente."""
    context: Dict[str, Any] = {
        "stack": "TanStack Start / React 19 / Vite 8 / Tailwind CSS v4",
        "arquitectura": "Generación Estática (SSG) / Single Page Application desplegada en GitHub Pages sin backend persistente",
        "habilidades": [],
        "ultimos_commits": [],
        "ci_cd_status": "Sin datos",
        "seguridad": "Secretos gestionados exclusivamente en GitHub Secrets; habilidad 05-revisar en pre-merge"
    }

    # Leer package.json del portafolio si existe
    for pkg_path in ["portfolio-source/package.json", "../portfolio-source/package.json"]:
        if os.path.isfile(pkg_path):
            try:
                with open(pkg_path, "r", encoding="utf-8") as f:
                    pkg = json.load(f)
                    context["dependencies"] = list(pkg.get("dependencies", {}).keys())
                    context["devDependencies"] = list(pkg.get("devDependencies", {}).keys())
                    break
            except Exception as e:
                log(f"Aviso: no se pudo leer {pkg_path}: {e}")

    # Obtener últimos commits
    try:
        log_out = run_cmd(["git", "log", "-n", "3", "--oneline"], check=False)
        if log_out:
            context["ultimos_commits"] = log_out.splitlines()
    except Exception:
        pass

    # Obtener estado reciente de GitHub Actions
    try:
        runs_out = run_cmd(["gh", "run", "list", "-L", "3", "--json", "name,status,conclusion"], check=False)
        if runs_out:
            context["ci_cd_runs"] = json.loads(runs_out)
    except Exception:
        pass

    return context


def get_discussion_details(owner: str, repo: str, number: int) -> Dict[str, Any]:
    """Obtiene los detalles y comentarios de una discusión específica."""
    query = """
    query($owner: String!, $name: String!, $num: Int!) {
      repository(owner: $owner, name: $name) {
        discussion(number: $num) {
          id
          number
          title
          body
          url
          author {
            login
          }
          answer {
            id
          }
          category {
            id
            name
            isAnswerable
          }
          comments(last: 15) {
            totalCount
            nodes {
              id
              author {
                login
              }
              body
              createdAt
            }
          }
        }
      }
    }
    """
    res = gh_graphql(query, {"owner": owner, "name": repo, "num": number})
    discussion = res.get("repository", {}).get("discussion")
    if not discussion:
        raise ValueError(f"No se encontró la discusión #{number} en {owner}/{repo}")
    return discussion


def get_open_discussions(owner: str, repo: str, limit: int = 10) -> List[Dict[str, Any]]:
    """Obtiene las discusiones recientes para auditar cuáles requieren respuesta."""
    query = """
    query($owner: String!, $name: String!, $limit: Int!) {
      repository(owner: $owner, name: $name) {
        discussions(first: $limit, orderBy: {field: UPDATED_AT, direction: DESC}) {
          nodes {
            id
            number
            title
            body
            url
            author {
              login
            }
            answer {
              id
            }
            category {
              id
              name
              isAnswerable
            }
            comments(last: 5) {
              totalCount
              nodes {
                id
                author {
                  login
                }
                body
                createdAt
              }
            }
          }
        }
      }
    }
    """
    res = gh_graphql(query, {"owner": owner, "name": repo, "limit": limit})
    return res.get("repository", {}).get("discussions", {}).get("nodes", [])


def needs_response(discussion: Dict[str, Any], force: bool = False) -> Optional[Dict[str, Any]]:
    """
    Evalúa si la discusión o un hilo continuado tiene preguntas sin responder.
    Retorna el comentario o nodo al que se debe responder, o None si ya está atendida.
    """
    comments = discussion.get("comments", {}).get("nodes", [])
    
    if force:
        return comments[-1] if comments else {"body": discussion.get("body", ""), "author": discussion.get("author")}

    # Si no hay comentarios aún y la discusión fue abierta por un usuario externo
    if not comments:
        disc_author = discussion.get("author", {}).get("login", "")
        if disc_author and disc_author != OWNER_DEFAULT:
            return {"body": discussion.get("body", ""), "author": discussion.get("author")}
        return None

    last_comment = comments[-1]
    last_author = last_comment.get("author", {}).get("login", "")
    last_body = last_comment.get("body", "")

    # Si el último comentario ya fue emitido por el agente centinela o por Luics415, ya está atendido
    if SIGNATURE_MARKER in last_body:
        return None

    if last_author == OWNER_DEFAULT:
        return None

    # Si el último comentario fue hecho por un usuario externo (ej. ESSTLALOC), requiere atención
    return last_comment


def call_gemini_api(prompt: str, api_key: str) -> Optional[str]:
    """Llama a la API de Gemini usando los modelos estables disponibles."""
    models = ["gemini-2.5-flash", "gemini-1.5-flash"]
    for model in models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
        headers = {"Content-Type": "application/json"}
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "temperature": 0.2,
                "maxOutputTokens": 1500
            }
        }
        req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                candidates = data.get("candidates", [])
                if candidates:
                    parts = candidates[0].get("content", {}).get("parts", [])
                    if parts and "text" in parts[0]:
                        return parts[0]["text"].strip()
        except Exception as e:
            log(f"Fallo al invocar modelo {model}: {e}. Probando alternativa...")
    return None


def synthesize_project_response(discussion_title: str, query_text: str, author: str, context: Dict[str, Any]) -> str:
    """
    Motor de síntesis contextual de alta fidelidad basado en el estado del portafolio.
    Genera explicaciones técnicas sólidas vinculadas a la arquitectura de Luics415.github.io.
    """
    q_lower = (discussion_title + " " + query_text).lower()

    # Caso específico: Prevención de fuga de secretos (.env, git-secrets, gitleaks, Vault/Doppler)
    if any(k in q_lower for k in ["secreto", ".env", "gitleaks", "git-secrets", "vault", "doppler", "token"]):
        return f"""¡Hola @{author}! Con gusto profundizamos en la comparativa técnica entre estas herramientas y cómo se aplican en la arquitectura real de este portafolio:

### 1. `.env` vs `git-secrets` vs `gitleaks` vs `Vault / Doppler`

La diferencia principal radica en **en qué fase del ciclo de vida del dato actúa cada herramienta** dentro de una estrategia de Defensa en Profundidad (*Defense-in-Depth*):

| Herramienta | Rol Arquitectural | Dónde se ejecuta | Mecanismo | Cuándo usarlo |
| :--- | :--- | :--- | :--- | :--- |
| **`.env`** | Configuración local en runtime | Máquina local del dev | Archivo plano (`KEY=VALUE`) excluido en `.gitignore`. | Desarrollo local para variables de entorno no críticas (`PORT`, URLs locales). **Nunca** para claves maestras ni producción, ya que no cifra ni audita. |
| **`git-secrets`** | Prevención en hook de cliente | Local (`pre-commit`) | Hook de Git que intercepta el commit si coincide con patrones Regex o claves AWS (`AKIA...`). | Como primera línea de defensa en la estación del desarrollador para evitar crear commits con credenciales por error. |
| **`gitleaks`** | Auditoría estática (SAST) y compuerta CI/CD | Local y en **GitHub Actions** | Binario en Go ultrarrápido que analiza entropía y más de 150 firmas de tokens en diffs y en todo el historial `git log`. | **Indispensable en CI/CD**: Bloquea Pull Requests antes del merge si alguien intenta filtrar credenciales al repositorio remoto. |
| **Vault / Doppler** | Gestor centralizado de secretos (KMS) | Servicio Cloud / Dedicado | Almacén cifrado (AES-256) con RBAC, tokens efímeros, rotación automática de claves y auditoría de accesos. | En producción y microservicios donde las credenciales deben rotar periódicamente y nunca residir en archivos planos en disco. |

---

### 2. ¿Cómo se aplica esto directamente a este Portafolio?

En este proyecto ([`Luics415.github.io`](https://github.com/Luics415/Luics415.github.io)):

1. **Sin `.env` en producción**: El portafolio es un sitio web estático generado con **TanStack Start y Vite** desplegado en GitHub Pages. Al no tener un servidor persistente Node/Python en runtime, **no debe compilarse ninguna credencial privada dentro del bundle de cliente**.
2. **Secretos en GitHub Actions**: Las credenciales de automatización, tokens y despliegues residen exclusivamente en **GitHub Secrets** (`secrets.GITHUB_TOKEN`, `secrets.GEMINI_API_KEY`) y se inyectan como variables de entorno efímeras en los runners de GitHub Actions.
3. **Auditoría Pre-Merge (Habilidad 05 - Revisar)**: Antes de aprobar y fusionar cualquier cambio o Pull Request, el pipeline orquestador ejecuta la fase de revisión para certificar la ausencia total de tokens expuestos en commits o código compilado.
4. **Por qué no usamos Vault/Doppler aquí**: Gestores como HashiCorp Vault o Doppler están diseñados para arquitecturas complejas con rotación dinámica de claves de bases de datos cada 15 minutos; para un portafolio SSG/SPA público en GitHub Pages, GitHub Secrets y herramientas de escaneo estático como `gitleaks` cubren el estándar de seguridad óptimo sin añadir sobrecostos de infraestructura.

---
> {SIGNATURE_MARKER} en base al estado y arquitectura del repositorio. Pendiente de validación por @Luics415.*"""

    # Respuesta técnica general anclada en el proyecto
    return f"""¡Hola @{author}! Gracias por tu consulta sobre el proyecto.

Actualmente el portafolio oficial opera bajo la siguiente arquitectura técnica:
- **Core de Frontend:** TanStack Start, React 19, Tailwind CSS v4 y Vite.
- **Flujo de Entrega:** Modelo orquestado de 6 fases atómicas (`01-definir`, `02-planificar`, `03-construir`, `04-verificar`, `05-revisar` y `06-aprobar`).
- **Despliegue:** Generación estática alojada en GitHub Pages mediante GitHub Actions.

Para revisar los detalles específicos del código o los estándares de arquitectura, puedes consultar la documentación técnica en `README.md` y `AGENTS.md`.

---
> {SIGNATURE_MARKER} en base al estado y arquitectura del repositorio. Pendiente de validación por @Luics415.*"""


def generate_response(discussion: Dict[str, Any], target_comment: Dict[str, Any], context: Dict[str, Any]) -> str:
    """Genera la respuesta adaptada mediante LLM (Gemini) o motor contextual del proyecto."""
    title = discussion.get("title", "")
    author = target_comment.get("author", {}).get("login", "") or discussion.get("author", {}).get("login", "")
    query_text = target_comment.get("body", "")

    gemini_key = os.environ.get("GEMINI_API_KEY", "").strip()
    if gemini_key:
        log("GEMINI_API_KEY detectada. Generando respuesta contextual mediante LLM...")
        system_prompt = f"""Eres el Agente Autónomo del Portafolio de Luis Rivera (@Luics415) en el repositorio Luics415/Luics415.github.io.
Debes responder de manera profesional, técnica y pedagógica en español formal.

Contexto real del proyecto:
- Arquitectura: {context.get('arquitectura')}
- Tecnologías: {context.get('stack')}
- Dependencias: {', '.join(context.get('dependencies', [])[:15])}
- Gestión de seguridad: {context.get('seguridad')}

Consulta del usuario (@{author}):
Título del hilo: {title}
Pregunta: {query_text}

Requisitos de respuesta:
1. Responde directamente la duda conceptual de forma clara y comparativa (puedes usar tablas markdown).
2. Explica cómo aplica específicamente en este portafolio (TanStack Start, GitHub Actions, sin .env de producción, fase de revisión de seguridad).
3. Termina obligatoriamente con el siguiente pie de página exacto:
---
> {SIGNATURE_MARKER} en base al estado y arquitectura del repositorio. Pendiente de validación por @Luics415.*
"""
        generated = call_gemini_api(system_prompt, gemini_key)
        if generated:
            return generated

    log("Generando respuesta utilizando el motor contextual integrado del repositorio...")
    return synthesize_project_response(title, query_text, author, context)


def post_reply(discussion_id: str, body: str, reply_to_id: Optional[str] = None, dry_run: bool = False) -> Optional[str]:
    """Publica la respuesta en la discusión sin marcarla como 'answer'."""
    if dry_run:
        log("Modo DRY-RUN activo. Respuesta que se enviaría:")
        print("--------------------------------------------------")
        print(body)
        print("--------------------------------------------------")
        return "dry-run-comment-id"

    mutation = """
    mutation($discussionId: ID!, $body: String!) {
      addDiscussionComment(input: {discussionId: $discussionId, body: $body}) {
        comment {
          id
          url
          createdAt
        }
      }
    }
    """
    res = gh_graphql(mutation, {"discussionId": discussion_id, "body": body})
    comment = res.get("addDiscussionComment", {}).get("comment", {})
    return comment.get("url")


def main():
    parser = argparse.ArgumentParser(description="Agente Centinela de GitHub Discussions del Portafolio")
    parser.add_argument("--owner", default=OWNER_DEFAULT, help="Propietario del repositorio")
    parser.add_argument("--repo", default=REPO_DEFAULT, help="Nombre del repositorio")
    parser.add_argument("--discussion-number", type=int, help="Número de discusión específico a procesar")
    parser.add_argument("--dry-run", action="store_true", help="Simular sin publicar comentarios")
    parser.add_argument("--force", action="store_true", help="Forzar respuesta omitiendo comprobación de duplicados")
    args = parser.parse_args()

    log(f"Iniciando centinela para {args.owner}/{args.repo}...")
    context = gather_repository_context()

    if args.discussion_number:
        discussions = [get_discussion_details(args.owner, args.repo, args.discussion_number)]
    else:
        discussions = get_open_discussions(args.owner, args.repo)

    log(f"Analizando {len(discussions)} discusión(es)...")
    respuestas_enviadas = 0

    for disc in discussions:
        disc_num = disc.get("number")
        target_comment = needs_response(disc, force=args.force)

        if not target_comment:
            log(f"Discusión #{disc_num} ('{disc.get('title')}') está al día o ya respondida. Omitiendo.")
            continue

        log(f"Procesando respuesta para Discusión #{disc_num} ('{disc.get('title')}')...")
        response_body = generate_response(disc, target_comment, context)

        url = post_reply(
            discussion_id=disc.get("id"),
            body=response_body,
            reply_to_id=target_comment.get("id"),
            dry_run=args.dry_run
        )
        if url:
            log(f"Comentario publicado con éxito en #{disc_num}: {url}")
            respuestas_enviadas += 1

    log(f"Ejecución completada. Total de respuestas gestionadas: {respuestas_enviadas}.")


if __name__ == "__main__":
    main()
