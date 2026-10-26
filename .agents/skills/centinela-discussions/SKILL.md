---
name: portfolio-centinela
description: >-
  Habilidad del Agente Centinela de GitHub Discussions. Gestiona respuestas automáticas contextualizadas en 3 niveles de notificación, soporte bilingüe, escalamiento de incidentes y expediente histórico.
---

# Skill: Centinela de GitHub Discussions (Soporte Autónomo y Escalamiento)

Esta habilidad dota a cualquier repositorio (Portafolio Oficial, Dev Visualizer, etc.) de un **Agente Centinela Autónomo** para atender preguntas y debates en GitHub Discussions con contexto vivo del proyecto, soporte bilingüe y trazabilidad completa.

---

## Capacidades Operativas

### 1. Soporte Bilingüe Automático (ES / EN)
- Analiza el texto de la duda y detecta si está formulada en español o inglés.
- Responde en el mismo idioma, adaptando el tono técnico, el glosario de arquitectura y los avisos de moderación.

### 2. Notificaciones en Tres Niveles
- **Nivel 1 (Mención Nativa Directa):**
  Inyecta en el pie del comentario una mención explícita con enlace de validación a `@Luics415`:
  > 🔔 **Aviso para @Luics415:** Respuesta lista para tu revisión. Puedes [validarla y marcarla como definitiva aquí](...).
  *Efecto:* GitHub despacha de forma nativa notificaciones push al móvil y un correo electrónico.
- **Nivel 2 (GitHub Actions Step Summary):**
  Genera una tabla ejecutiva en el resumen de ejecución de GitHub Actions (`$GITHUB_STEP_SUMMARY`) con métricas, enlaces directos y estado de escalamiento.
- **Nivel 3 (Webhooks de Telegram y Discord):**
  Si se configuran `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` o `DISCORD_WEBHOOK_URL` en los Secrets del repositorio, envía una alerta instantánea al chat personal con enlace de revisión directa.

### 3. Detección y Escalamiento de Seguridad / Bugs
- Escanea patrones de vulnerabilidades (`vulnerability`, `exploit`, `cve`, `inyección`, `rce`, `fuga crítica`, `compromised`).
- Si detecta un riesgo:
  1. Agradece el reporte e informa al usuario que el caso ha sido escalado.
  2. Crea automáticamente un **Issue interno asignado a @Luics415** con etiqueta `security` o `bug`, enlazando la discusión original.

### 4. Historial en Expediente de Auditoría
- Registra cada respuesta en `docs/FechaAgente/<YYYY-MM-DD>/discusiones_atendidas.md` para métricas comunitarias, trazabilidad de soporte y generación de casos de estudio.

---

## Guía de Réplica en Otros Proyectos (ej. Dev Visualizer)

Para replicar esta habilidad exactamente igual en otro repositorio:
1. Copiar el script: `.github/scripts/discussions_centinel.py`.
2. Copiar el workflow: `.github/workflows/discussions-centinel.yml`.
3. Copiar esta habilidad a `.agents/skills/centinela-discussions/SKILL.md`.
4. Configurar en el repositorio destino los Secrets opcionales:
   - `GEMINI_API_KEY` (opcional para IA generativa avanzada).
   - `TELEGRAM_BOT_TOKEN` y `TELEGRAM_CHAT_ID` (opcional para Nivel 3).
   - `DISCORD_WEBHOOK_URL` (opcional para Nivel 3).
