# Skill: Centinela de Discussions (Soporte Autónomo, Buffer Humano y Escalamiento)

- **Contexto de entrada:** Consultas públicas y debates abiertos o continuados en GitHub Discussions (`hasDiscussionsEnabled: true`).
- **Tarea:** Atiende de forma desatendida y periódica dudas técnicas sobre el portafolio, ejecutando un protocolo de 5 capas:
  1. **Soporte Bilingüe y Calidad Textual (Párrafos Densos y Naturales):**
     - Detección de idioma (Español / Inglés).
     - **Formato en Prosa Técnica Cohesiva:** La respuesta se estructura prioritariamente en **párrafos densos, sustanciales y bien articulados** (3 a 4 párrafos), minimizando el uso de listas y viñetas salvo contrastes técnicos puntuales.
     - **Voz Auténtica de Ingeniería:** Tono profesional, pedagógico y en primera persona del plural ("En el portafolio diseñamos...", "Bajo el capó..."), explicando la decisión arquitectónica y los trade-offs de rendimiento.
     - **Prohibición Estricta de Diagramas:** No generar diagramas ASCII ni bloques Mermaid simplistas. Las preguntas complejas se responden con explicaciones conceptuales profundas fundamentadas en el stack y proyectos reales (`TanStack Start`, `React 19`, `Tailwind CSS v4`, `Vite 8`, `QR Voxel Studio`, `AussieCare`, `Bio-Gesture Control Android`, `KASA Service Tracker`, `Tlalne-Priority`, `gitleaks`, `GitHub Secrets`).
  2. **Ventana de Espera Humana (10 Minutos) y Envío de Borrador Inmediato:**
     - Al detectarse una discusión, el agente genera de inmediato el borrador técnico y despacha una notificación Nivel 3 en paralelo (Discord DM y WhatsApp) con vista previa y aviso de ventana de 10 minutos.
     - Aplica un temporizador de 10 minutos (desde la creación de la discusión) para brindar la percepción natural de que `@Luics415` leyó y redactó la respuesta personalmente.
     - Si el mantenedor responde manualmente durante esos 10 minutos, el agente detecta la intervención, cancela la publicación automática, descarta el borrador y notifica por Discord y WhatsApp.
     - Si transcurren los 10 minutos sin intervención manual, el agente publica la respuesta de forma autónoma.
  3. **Notificaciones en Tres Niveles:**
     - *Nivel 1:* Mención nativa con enlace directo a `@Luics415` (push móvil + email de GitHub).
     - *Nivel 2:* Step Summary de GitHub Actions con tabla ejecutiva, enlaces y estado operativo.
     - *Nivel 3:* Notificaciones en paralelo vía **Discord DM** (`DISCORD_BOT_TOKEN` + `DISCORD_USER_ID`) y **WhatsApp** (CallMeBot / Twilio / Meta Cloud API / Webhook) en 3 estados: Borrador en espera, Publicado con éxito o Cancelado por intervención manual. Soporta además canal Telegram como fallback.
  4. **Escalamiento de Seguridad / Bugs:** Detección de vulnerabilidades o fallos críticos y apertura automática de Issue etiquetado como `security` o `bug` asignado a `@Luics415`.
  5. **Expediente Histórico:** Registro de trazabilidad en `docs/FechaAgente/<fecha>/discusiones_atendidas.md`.
- **Restricción de Moderación:** La publicación se realiza con la cuenta del mantenedor sin invocar `markDiscussionCommentAsAnswer`, reservando la validación final a la intervención humana.
- **Portabilidad:** Estructura modular sincronizada con `Dev Visualizer` mediante `.github/scripts/discussions_centinel.py` y `.github/workflows/discussions-centinel.yml`.
