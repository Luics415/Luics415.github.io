---
name: portfolio-verificar
description: >-
  Fase 4 del orquestador del portafolio. Úsala para validar el build estático, comprobar la responsividad móvil sin overflow horizontal y auditar accesibilidad.
---

# Skill: Verificar (Portafolio)

- **Entrada:** `03-construir/construccion.yml`.
- **Acciones:**
  1. Verificar compilación completa (`npm run build`) con código de salida 0 y prerenderizado de todas las rutas.
  2. Ejecutar auditoría estricta de responsividad en vista móvil (360px a 430px) garantizando cero desbordamiento horizontal (`scrollWidth <= innerWidth`).
  3. Comprobar contrastes de color, etiquetas aria y accesibilidad web (a11y).
  4. Validar enlace de descarga y miniatura del CV oficial (`cv-luis-rivera.pdf`).
- **Entregable:** Genera `04-verificar/verificacion.yml` con checklist reproducible y resultados de validación.
