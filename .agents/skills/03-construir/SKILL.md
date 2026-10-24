---
name: portfolio-construir
description: >-
  Fase 3 del orquestador del portafolio. Úsala para gestionar la creación de ramas atómicas, ejecución de cambios de código, compilación y apertura de Pull Requests formales.
---

# Skill: Construir (Portafolio)

- **Entrada:** `02-planificar/plan.yml`.
- **Acciones:**
  1. Crear y aislar el trabajo en una rama dedicada: `git checkout -b <tipo>/<nombre-tarea>`.
  2. Aplicar los cambios en `portfolio-source` y compilar (`npm run build`).
  3. Sincronizar el bundle estático hacia `Luics415.github.io`.
  4. Realizar commits semánticos y crear Pull Request formal con `gh pr create` para acumulación de insignias de GitHub.
- **Entregable:** Genera `03-construir/construccion.yml`.
- **Regla estricta:** No afirmar que un PR o Issue fue creado sin evidencia devuelta por la API.
