# Skill: Verificar (Validación Técnica, Build y Responsive)

- **Contexto de entrada:** Consume `03-construir/construccion.yml`.
- **Tarea:** Ejecuta y documenta la batería completa de validaciones funcionales, visuales y de rendimiento del portafolio.
- **Puntos Críticos de Validación:**
  1. **Compilación Limpia:**
     - `npm run build` en `portfolio-source` debe finalizar con código de salida `0` y todas las páginas prerenderizadas (31+ páginas).
  2. **Auditoría de Responsividad Móvil (Estricta):**
     - Verificar que no exista desbordamiento ni scroll horizontal (`window.scrollX === 0` y `document.documentElement.scrollWidth <= window.innerWidth`) en viewports de 360px, 390px y 412px.
     - Comprobar que grids, tablas o bloques de código cuenten con `overflow-x-auto` o empaquetado `flex-wrap` / `min-w-0`.
  3. **Accesibilidad (a11y) y Enlaces:**
     - Contraste legible de texto sobre fondos oscuros (tema cyber/dark).
     - Atributos `alt` en imágenes y etiquetas `aria-label` en botones con solo iconos.
     - Comprobación de que el enlace de descarga del CV (`cv-luis-rivera.pdf`) apunte al documento oficial verificado.
  4. **Fidelidad Visual Desktop:**
     - Comportamiento suave de interactividad en componentes Hero con aceleración por hardware.
- **Entregable:** Checklist reproducible con comandos ejecutados, estado (`pass`/`fail`), evidencia y observaciones.
- **Persistencia:** `04-verificar/verificacion.yml`.
