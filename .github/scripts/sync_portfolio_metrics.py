#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Sincronizador Autónomo de Métricas del Portafolio y Ecosistema (@Luics415).
Audita métricas de estrellas, bifurcaciones, issues activos y estado de despliegue.
"""

import os
import sys
import json
import subprocess
from datetime import datetime, timezone

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass


def log(msg: str):
    print(f"[METRICS-SYNC] {msg}", flush=True)


def run_cmd(cmd):
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding="utf-8")
    return res.stdout.strip()


def main():
    repo = os.environ.get("GITHUB_REPOSITORY", "Luics415/Luics415.github.io")
    log(f"Consultando métricas para {repo}...")

    repo_data_raw = run_cmd(["gh", "repo", "view", "--json", "stargazerCount,forkCount,pushedAt,description,url"])
    data = {}
    try:
        data = json.loads(repo_data_raw)
    except Exception as e:
        log(f"Aviso al parsear datos de repositorio: {e}")

    stars = data.get("stargazerCount", 0)
    forks = data.get("forkCount", 0)
    pushed_at = data.get("pushedAt", "N/A")

    # Contar issues y discussions abiertos
    issues_raw = run_cmd(["gh", "issue", "list", "--state", "open", "--json", "number"])
    open_issues = 0
    try:
        open_issues = len(json.loads(issues_raw))
    except Exception:
        pass

    log(f"Métricas obtenidas: Estrellas={stars}, Forks={forks}, Issues={open_issues}")

    # Guardar reporte en docs/FechaAgente/metricas_portafolio.md
    now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    report_lines = [
        "# Métricas de Rendimiento del Ecosistema del Portafolio",
        f"**Última actualización:** {now_str}",
        "",
        "| Métrica | Valor | Estado |",
        "| :--- | :---: | :--- |",
        f"| **Estrellas (Stars)** | ⭐ {stars} | Comunidad activa |",
        f"| **Forks** | 🍴 {forks} | Proyectos derivados |",
        f"| **Issues Abiertos** | 📋 {open_issues} | Triage bajo control |",
        f"| **Último Despliegue / Push** | 🚀 {pushed_at} | Integración continua al día |"
    ]

    os.makedirs(os.path.join("docs", "FechaAgente"), exist_ok=True)
    report_file = os.path.join("docs", "FechaAgente", "metricas_portafolio.md")
    with open(report_file, "w", encoding="utf-8") as f:
        f.write("\n".join(report_lines) + "\n")
    log(f"Reporte de métricas guardado en: {report_file}")

    # Escribir en Step Summary si está en Actions
    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as f:
            f.write("\n".join(report_lines) + "\n")


if __name__ == "__main__":
    main()
