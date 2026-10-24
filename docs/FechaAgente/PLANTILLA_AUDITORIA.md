# Contrato de Artefacto de Auditoría del Portafolio

Cada artefacto generado en las fases debe seguir estrictamente la siguiente estructura YAML:

```yaml
id_de_ejecucion: "YYYYMMDD-HHMMSS-<run>"
fecha_utc: "YYYY-MM-DD"
modo: auditoria_automatica
fase: 01-definir
entrada:
  instruccion: "<instrucción u orden recibida, sin datos sensibles>"
  artefacto_anterior: null
decisiones:
  adoptadas: []
  pendientes: []
riesgos:
  - id: R-001
    severidad: baja
    probabilidad: posible
    impacto: "<impacto potencial en UI/UX o build>"
    mitigacion: "<estrategia de mitigación>"
evidencia:
  - comando: "<comando reproducible, e.g. npm run build>"
    resultado: "<resumen verificable>"
    estado: pass
autorizaciones_requeridas:
  - operacion: "<mutación o acción>"
    motivo: "<por qué requiere autorización directa del operador>"
siguiente_fase: 02-planificar
handoff:
  responsable: maestro-orquestador
  fecha_utc: "YYYY-MM-DD"
  bloqueado: false
```

### Valores de Estado Permitidos:
- `pass`: Prueba o verificación superada conforme a los criterios.
- `fail`: Error, falla de compilación o desbordamiento móvil detectado.
- `warn`: Advertencia no bloqueante (e.g. aviso de tamaño de chunk Vite).
- `not_run`: Control no ejecutado en esta fase.
