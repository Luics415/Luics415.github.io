#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Triage Automático de Issues para el Portafolio Oficial (@Luics415).
Analiza issues nuevos, clasifica su categoría (bug, enhancement, question, a11y),
asigna etiquetas en GitHub, publica un mensaje de bienvenida y notifica a Discord DM.
"""

import os
import sys
import json
import urllib.request
import subprocess

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass


def log(msg: str):
    print(f"[ISSUE-TRIAGE] {msg}", flush=True)


def run_cmd(cmd):
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding="utf-8")
    return res.stdout.strip()


def classify_issue(title: str, body: str) -> str:
    """Clasifica el issue según palabras clave o tipo de reporte."""
    combined = (title + " " + body).lower()
    if any(k in combined for k in ["error", "bug", "fallo", "roto", "crash", "broken", "overflow"]):
        return "bug"
    if any(k in combined for k in ["accesibilidad", "a11y", "contraste", "aria", "screen reader"]):
        return "accessibility"
    if any(k in combined for k in ["mejora", "feature", "sugerencia", "propuesta", "enhancement"]):
        return "enhancement"
    if any(k in combined for k in ["documentacion", "readme", "guia", "docs"]):
        return "documentation"
    return "question"


def send_discord_dm(repo: str, issue_num: int, title: str, author: str, issue_url: str, label: str):
    token = os.environ.get("DISCORD_BOT_TOKEN", "").strip()
    user_id = os.environ.get("DISCORD_USER_ID", "").strip()
    if not (token and user_id):
        return

    try:
        dm_url = "https://discord.com/api/v10/users/@me/channels"
        headers = {
            "Authorization": f"Bot {token}",
            "Content-Type": "application/json",
            "User-Agent": "CentinelaAgent/1.0"
        }
        payload = json.dumps({"recipient_id": user_id}).encode("utf-8")
        req = urllib.request.Request(dm_url, data=payload, headers=headers, method="POST")
        with urllib.request.urlopen(req, timeout=10) as resp:
            if resp.status in (200, 201):
                channel_id = json.loads(resp.read().decode("utf-8")).get("id")
                if channel_id:
                    msg_url = f"https://discord.com/api/v10/channels/{channel_id}/messages"
                    text = (
                        f"📋 **[Nuevo Issue en {repo}]**\n\n"
                        f"**#{issue_num}:** {title}\n"
                        f"**Autor:** @{author} | **Categoría:** `{label}`\n\n"
                        f"🔗 **Revisar Issue:** <{issue_url}>"
                    )
                    msg_payload = json.dumps({"content": text}).encode("utf-8")
                    req_msg = urllib.request.Request(msg_url, data=msg_payload, headers=headers, method="POST")
                    urllib.request.urlopen(req_msg, timeout=10)
                    log("Notificación de Issue enviada por Discord DM.")
    except Exception as e:
        log(f"Aviso al enviar alerta a Discord: {e}")


def main():
    event_path = os.environ.get("GITHUB_EVENT_PATH")
    if not event_path or not os.path.isfile(event_path):
        log("No se detectó evento de GitHub. Modo local / simulación.")
        return

    with open(event_path, "r", encoding="utf-8") as f:
        event = json.load(f)

    issue = event.get("issue")
    if not issue:
        log("El evento no contiene un objeto issue. Saliendo.")
        return

    issue_num = issue.get("number")
    title = issue.get("title", "")
    body = issue.get("body", "")
    author = issue.get("user", {}).get("login", "")
    issue_url = issue.get("html_url", "")
    repo = os.environ.get("GITHUB_REPOSITORY", "Luics415/Luics415.github.io")

    log(f"Procesando Issue #{issue_num}: '{title}' por @{author}...")
    category = classify_issue(title, body)
    log(f"Categoría asignada: {category}")

    # Asignar etiqueta en GitHub
    try:
        run_cmd(["gh", "issue", "edit", str(issue_num), "--add-label", category])
        log(f"Etiqueta '{category}' aplicada al Issue #{issue_num}.")
    except Exception as e:
        log(f"Aviso al etiquetar Issue: {e}")

    # Enviar mensaje de bienvenida en el Issue
    comment_body = f"""¡Hola @{author}! 👋 Gracias por abrir este reporte.

El Agente Centinela ha clasificado esta incidencia bajo la categoría **`{category}`** y ha notificado a @Luics415 para su revisión.

---
> 🤖 *Mensaje automático de triage del repositorio. @Luics415 te responderá en breve.*
"""
    try:
        run_cmd(["gh", "issue", "comment", str(issue_num), "--body", comment_body])
        log(f"Comentario de bienvenida publicado en Issue #{issue_num}.")
    except Exception as e:
        log(f"Aviso al comentar en Issue: {e}")

    # Notificar a Discord DM
    send_discord_dm(repo, issue_num, title, author, issue_url, category)
    log("Triage completado con éxito.")


if __name__ == "__main__":
    main()
