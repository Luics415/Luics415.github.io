---
name: portfolio-planificar
description: >-
  Fase 2 del orquestador del portafolio. Úsala para descomponer las especificaciones en tareas atómicas, componentes afectados en portfolio-source, rutas estáticas y dependencias.
---

# Skill: Planificar (Portafolio)

- **Entrada:** `01-definir/definicion.yml`.
- **Acciones:**
  1. Desglosa los archivos a modificar o crear en `portfolio-source/src/` (`components/`, `routes/`, `styles/`).
  2. Determina la estrategia de prerenderizado y optimización de bundles en TanStack Start / Vite.
  3. Prevé assets necesarios en `portfolio-source/public/` (imágenes WebP, PDFs, miniatura de CV).
  4. Define el nombre de la rama Git atómica para el Pull Request (`feat/*`, `fix/*`, `docs/*`).
- **Entregable:** Genera `02-planificar/plan.yml` con orden de precedencia y dependencias.
