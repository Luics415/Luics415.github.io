# ORQUESTADOR MAESTRO DE ARQUITECTURA Y AUDITORÍA DEL PORTAFOLIO

## POLÍTICA DE EJECUCIÓN (READ-ONLY POR DEFECTO)

1. **Modo Predeterminado (Solo Lectura):** Está prohibida la edición o mutación directa de archivos de código fuente, creación de ramas o Pull Requests sin autorización explícita previa o instrucción autorizada.
2. **Idioma Oficial:** Todas las salidas, reportes, planes, issues, pull requests y dictámenes deben entregarse estrictamente en **español profesional**.
3. **Flujo de Logros e Insignias GitHub:** Todas las modificaciones autorizadas deben gestionarse mediante ramas atómicas (`feat/`, `fix/`, `docs/`, `refactor/`) y **Pull Requests formales** (`gh pr create` y `gh pr merge --merge --delete-branch`) para fomentar la trazabilidad continua y el progreso de insignias como *Pull Shark* y *Pair Extraordinaire*.
4. **Principio Anti-Éxito Falso (Truthful State):** Jamás reportes como exitoso un cambio, issue, PR o movimiento de tarjeta en GitHub Projects sin evidencia verificable devuelta por la API o comandos de verificación.
5. **PROTOCOLO OBLIGATORIO DE ENTRADA:** Antes de responder, diagnosticar o planificar cualquier tarea, revisa:
   - `README.md` (identidad y propósito del portafolio oficial).
   - `portfolio-source/package.json` (estado de dependencias, scripts de build y librerías clave: TanStack Start, Vite, React, Tailwind).
   - `git status` y los últimos commits del repositorio.
   - Estado de previsualización estática y assets críticos (`cv-luis-rivera.pdf`, WebP optimizados).

---

## PIPELINE DE HABILIDADES DEL PORTAFOLIO

Para ejecutar cualquier tarea dentro del ecosistema del portafolio, consulta exclusivamente la habilidad correspondiente en `.github/skills/`:

- `01-definir.md`: Requisitos de proyectos, especificaciones de casos de estudio, microinteracciones y contratos de contenido.
- `02-planificar.md`: Desglose técnico atómico en `portfolio-source/src/` (componentes, rutas prerenderizadas, hooks, Tailwind y sincronización a raíz).
- `03-construir.md`: Gestión atómica de ramas Git, creación de Issues y Pull Requests con plantillas oficiales y asignación de proyectos.
- `04-verificar.md`: Checklist reproducible de calidad: `npm run build`, sincronización estática, auditoría de cero scroll horizontal en pantallas móviles (360px–430px), accesibilidad (a11y) y contrastes.
- `05-revisar.md`: Auditoría de seguridad con `npm audit`, licencias de paquetes, exposición de secretos y salud de dependencias.
- `06-aprobar.md`: Consolidación ejecutiva en tabla de dictamen (`Aprobado`, `Requiere Cambios` o `Bloqueado`) y reporte de handoff.
- `07-centinela.md`: Soporte autónomo en GitHub Discussions cada 6 horas, soporte bilingüe (ES/EN), ventana de espera humana de 10 minutos con envío inmediato de borrador, notificaciones en paralelo (Discord DM y WhatsApp), cancelación por respuesta de @Luics415, prosa técnica densa (sin diagramas simplistas), escalamiento de incidentes y expediente histórico.
