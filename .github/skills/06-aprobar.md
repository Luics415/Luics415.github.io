# Skill: Aprobar (Control de Calidad y Dictamen Final)

- **Requisito estricto:** Redacción 100% en español profesional y técnico.
- **Tarea:** Consolida todos los hallazgos y evidencias de las habilidades 01 a 05 en una tabla ejecutiva de dictamen.
- **Estructura del Dictamen:**
  - **Estado:** `Aprobado`, `Requiere Cambios` o `Bloqueado`.
  - **Resumen Ejecutivo:** Síntesis del alcance abordado y valor añadido al portafolio.
  - **Tabla de Evidencias:**
    | Fase | Verificación | Estado | Evidencia |
    | :--- | :--- | :--- | :--- |
    | 01 Definir | Requisitos y alcance | Conforme | Alcance delimitado |
    | 02 Planificar | Desglose e impacto | Conforme | Componentes y rutas planificadas |
    | 03 Construir | Flujo de rama y PR | Conforme | Rama y PR creados formalmente |
    | 04 Verificar | Build y Responsive | Conforme | 0 errores en build / 0 overflow móvil |
    | 05 Revisar | Seguridad y Licencias | Conforme | Auditoría de dependencias y secretos limpia |
  - **Enlaces Trazables:** Vínculo directo al Pull Request en GitHub o Issue correspondiente.
- **Criterio de Rechazo:** Jamás emitas un dictamen `Aprobado` si el build falla, si existe desbordamiento móvil no resuelto o si faltan pruebas verificables.
- **Persistencia:** `06-aprobar/aprobacion.yml`.
