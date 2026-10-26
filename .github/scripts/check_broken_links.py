#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Monitor Autónomo de Enlaces Rotos y Salud de Documentos (Zero 404).
Verifica que todos los assets locales (PDF, WebP, PNG) existan y que
los enlaces de navegación y proyectos no devuelvan errores 404/500.
"""

import os
import re
import sys
import json
import urllib.request
import urllib.error
from typing import List, Dict, Tuple

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass


def log(msg: str):
    print(f"[ZERO-404] {msg}", flush=True)


def check_critical_documents() -> List[Dict[str, str]]:
    """Verifica que los documentos esenciales del portafolio existan y tengan tamaño válido."""
    critical_files = [
        "cv-luis-rivera.pdf",
        "cv-luis-rivera.png",
        "index.html",
        "favicon.ico",
        "robots.txt"
    ]
    results = []
    for cf in critical_files:
        if os.path.isfile(cf):
            size_kb = os.path.getsize(cf) / 1024.0
            results.append({"archivo": cf, "estado": "OK", "detalle": f"{size_kb:.1f} KB"})
        else:
            results.append({"archivo": cf, "estado": "ERROR", "detalle": "Archivo no encontrado"})
    return results


def extract_links_from_html(html_path: str) -> List[str]:
    """Extrae enlaces href de archivos HTML descartando preconnects y protocolos locales."""
    if not os.path.isfile(html_path):
        return []
    with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    raw_links = re.findall(r'href=[\'"]([^\'"]+)[\'"]', content)
    
    # Orígenes CDN que solo se usan para preconnect/dns-prefetch
    ignore_hosts = ["fonts.googleapis.com", "fonts.gstatic.com"]

    valid_links = []
    for link in raw_links:
        if link.startswith("#") or link.startswith("mailto:") or link.startswith("tel:") or link.startswith("javascript:"):
            continue
        if any(h in link for h in ignore_hosts) and not link.endswith(".css"):
            continue
        valid_links.append(link)
    return list(set(valid_links))


def verify_link(link: str) -> Tuple[bool, str]:
    """Verifica si un enlace local o externo está vivo."""
    # Enlace local
    if not link.startswith("http://") and not link.startswith("https://"):
        clean_path = link.lstrip("/").split("?")[0].split("#")[0]
        if not clean_path:
            return True, "Ruta raíz"
        if os.path.exists(clean_path):
            return True, "Archivo local verificado"
        return False, "Archivo local no encontrado (404)"

    # Enlace externo
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
    req = urllib.request.Request(link, headers=headers, method="GET")
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            return True, f"HTTP {resp.status}"
    except urllib.error.HTTPError as e:
        # LinkedIn y plataformas con protección anti-scraping devuelven 999 o 429
        if e.code in (999, 429, 403):
            return True, f"Protegido por Anti-Bot ({e.code})"
        return False, f"HTTP {e.code}"
    except Exception as e:
        return False, f"Error de conexión: {str(e)[:40]}"


def send_discord_alert(repo: str, broken_links: List[Dict[str, str]]):
    """Envía alerta por DM en Discord si se detectan enlaces caídos."""
    token = os.environ.get("DISCORD_BOT_TOKEN", "").strip()
    user_id = os.environ.get("DISCORD_USER_ID", "").strip()
    if not (token and user_id and broken_links):
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
                    items_txt = "\n".join([f"• `{b['link']}` ({b['detalle']})" for b in broken_links[:5]])
                    text = f"⚠️ **[Alerta Zero 404 - {repo}]**\nSe detectaron enlaces con error en la auditoría:\n{items_txt}"
                    msg_payload = json.dumps({"content": text}).encode("utf-8")
                    req_msg = urllib.request.Request(msg_url, data=msg_payload, headers=headers, method="POST")
                    urllib.request.urlopen(req_msg, timeout=10)
                    log("Alerta Zero 404 enviada a Discord DM.")
    except Exception as e:
        log(f"Aviso al enviar alerta a Discord: {e}")


def main():
    repo = os.environ.get("GITHUB_REPOSITORY", "Luics415/Luics415.github.io")
    log("Iniciando verificación de integridad de documentos...")
    doc_results = check_critical_documents()

    log("Extrayendo enlaces de index.html...")
    links = extract_links_from_html("index.html")
    log(f"Enlaces únicos a auditar: {len(links)}")

    link_results = []
    broken_links = []
    for link in links:
        ok, detail = verify_link(link)
        status = "OK" if ok else "ERROR"
        res = {"link": link, "estado": status, "detalle": detail}
        link_results.append(res)
        if not ok:
            broken_links.append(res)
            log(f"FALLO: {link} -> {detail}")

    if broken_links:
        log(f"Se detectaron {len(broken_links)} enlaces con incidencias.")
        send_discord_alert(repo, broken_links)
    else:
        log("Todos los enlaces locales y documentos críticos están al 100% operativos.")


if __name__ == "__main__":
    main()
