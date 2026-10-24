# Arquitectura del Orquestador Maestro del Portafolio

## Propósito

Esta arquitectura coordina las seis habilidades operativas del portafolio oficial de Luis Rivera (`Luics415.github.io`) garantizando estándares de calidad de software, trazabilidad completa, máxima seguridad y el cumplimiento del flujo de desarrollo basado en Pull Requests para la obtención e incremento de insignias en GitHub (*Pull Shark*, *Pair Extraordinaire*).

La configuración canónica se encuentra centralizada en [`.github/maestro-orquestador.yml`](../.github/maestro-orquestador.yml).

---

## Modos y Límites de Ejecución

| Modo | Disparador | Operaciones Permitidas | Operaciones Prohibidas |
| :--- | :--- | :--- | :--- |
| **Auditoría Automática** | `schedule` (semanal) o `workflow_dispatch` con `audit` | Inspeccionar código, ejecutar builds de prueba, auditar dependencias, generar reportes estáticos en `docs/FechaAgente/`, crear/actualizar Issue de auditoría | Modificar código fuente en `main`, crear PRs no solicitados, alterar dependencias (`npm audit fix --force`), mutar GitHub Projects |
| **Ejecución Autorizada** | `workflow_dispatch` con confirmación exacta: `AUTORIZO EJECUCIÓN DIRECTA` | Modificar código en rama atómica, compilar bundle (`npm run build`), sincronizar a raíz, abrir Pull Request formal y actualizar Projects | Cualquier acción fuera del alcance explícitamente redactado en la instrucción |

---

## Cadena de Seis Fases

```text
01 Definir ──► 02 Planificar ──► 03 Construir ──► 04 Verificar ──► 05 Revisar ──► 06 Aprobar
```

Cada fase del pipeline consume el artefacto generado por la fase previa y produce su propio expediente formal en formato YAML:

1. **01 Definir:** Establece requisitos visuales, de diseño responsivo y metadatos de proyectos/secciones. Artefacto: `definicion.yml`.
2. **02 Planificar:** Desglosa los archivos en `portfolio-source/src/`, componentes UI y estrategia de rutas estáticas. Artefacto: `plan.yml`.
3. **03 Construir:** Administra el ciclo Git: rama atómica `feat/*` o `fix/*`, commits semánticos y creación de Pull Requests. Artefacto: `construccion.yml`.
4. **04 Verificar:** Audita la compilación exitosa (Vite + TanStack Start), ausencia de overflow horizontal en móviles y accesibilidad. Artefacto: `verificacion.yml`.
5. **05 Revisar:** Inspecciona vulnerabilidades (`npm audit`), licencias de fuentes y ausencia de secretos. Artefacto: `revision.yml`.
6. **06 Aprobar:** Consolida la tabla ejecutiva de dictamen final (`Aprobado`, `Requiere Cambios`, `Bloqueado`). Artefacto: `aprobacion.yml`.

---

## Principio Anti-Éxito Falso (Truthful State)

Bajo ninguna circunstancia un agente o workflow puede simular o reportar que un cambio, Issue, Pull Request o tarjeta de GitHub Projects fue creado o movido exitosamente sin contar con la confirmación explícita y verificable devuelta por la API (`gh`, `git` o el sistema operativo).
