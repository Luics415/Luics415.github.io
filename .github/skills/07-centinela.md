# Skill: Centinela de Discussions (Soporte Autónomo, Notificaciones y Escalamiento)

- **Contexto de entrada:** Consultas públicas y debates abiertos o continuados en GitHub Discussions (`hasDiscussionsEnabled: true`).
- **Tarea:** Atiende de forma desatendida y periódica dudas técnicas sobre el proyecto, ejecutando un protocolo de 4 capas:
  1. **Soporte Bilingüe Automático:** Detección de idioma (Español / Inglés) y respuesta adaptada al glosario de arquitectura local.
  2. **Notificaciones en Tres Niveles:**
     - *Nivel 1:* Mención nativa con enlace directo a `@Luics415` (push móvil + email de GitHub).
     - *Nivel 2:* Step Summary de GitHub Actions con métricas y enlaces.
     - *Nivel 3:* Despacho opcional a Webhooks de Telegram y Discord.
  3. **Escalamiento de Seguridad / Bugs:** Detección de vulnerabilidades o fallos críticos y apertura automática de Issue etiquetado como `security` o `bug` asignado al mantenedor.
  4. **Expediente Histórico:** Registro de trazabilidad en `docs/FechaAgente/<fecha>/discusiones_atendidas.md`.
- **Restricción de Moderación:** La publicación se realiza con la cuenta del mantenedor sin invocar `markDiscussionCommentAsAnswer`, reservando la validación final a la intervención humana.
- **Portabilidad:** Estructura modular replicable en `Dev Visualizer` y repositorios futuros mediante `.github/scripts/discussions_centinel.py` y `.github/workflows/discussions-centinel.yml`.
