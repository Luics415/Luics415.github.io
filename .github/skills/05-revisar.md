# Skill: Revisar (Seguridad, Dependencias y Normativa)

- **Contexto de entrada:** Consume `04-verificar/verificacion.yml`.
- **Tarea:** Ejecuta una auditoría integral de seguridad, dependencias y cumplimiento normativo del portafolio.
- **Puntos de Control:**
  1. **Auditoría de Vulnerabilidades:**
     - Ejecutar `npm audit` en `portfolio-source`.
     - Identificar vulnerabilidades altas o críticas, evaluando su impacto real en el cliente.
     - **Límite:** Reporta las vulnerabilidades y recomienda soluciones; jamás ejecutes `npm audit fix --force` sin autorización explícita.
  2. **Exposición de Secretos y Privacidad:**
     - Confirmar que ningún token de API, clave privada o variable sensible se encuentre en commits o archivos compilados.
  3. **Licencias de Terceros:**
     - Validar que las tipografías, librerías gráficas e iconos de terceros cuenten con licencias compatibles (MIT, Apache 2.0, SIL Open Font License).
  4. **Optimización de Assets:**
     - Comprobar que los assets estáticos pesados estén optimizados (WebP para imágenes, SVG para vectores, compresión de PDF).
- **Entregable:** Hallazgos clasificados por severidad, evidencia comprobable y recomendaciones de mitigación.
- **Persistencia:** `05-revisar/revision.yml`.
