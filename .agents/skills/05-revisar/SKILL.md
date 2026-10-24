---
name: portfolio-revisar
description: >-
  Fase 5 del orquestador del portafolio. Úsala para auditar dependencias vulnerables con npm audit, comprobar licencias de terceros y verificar la ausencia de secretos expuestos.
---

# Skill: Revisar (Portafolio)

- **Entrada:** `04-verificar/verificacion.yml`.
- **Acciones:**
  1. Ejecutar análisis de seguridad con `npm audit` en el proyecto fuente.
  2. Reportar hallazgos de severidad y proponer mitigaciones manuales (nunca ejecutar `npm audit fix --force` de forma desatendida).
  3. Auditar licencias de paquetes externos para garantizar compatibilidad.
  4. Revisar que no existan credenciales, variables privadas ni secretos en el historial de Git o código.
- **Entregable:** Genera `05-revisar/revision.yml`.
