# Skill: Construir (Gestión, Ramas y Pull Requests del Portafolio)

En el repositorio oficial del portafolio (`Luics415.github.io`), la construcción sigue un protocolo estricto para maximizar la calidad del código y mantener la acumulación continua de contribuciones e insignias en GitHub (*Pull Shark*, *Pair Extraordinaire*).

## Modos de Operación

- **Auditoría Automática (Solo lectura):** Produce propuestas técnicas, borradores de especificación y descripciones de cambios sin alterar archivos.
- **Ejecución Autorizada:** Realiza las mutaciones de código en `portfolio-source`, compila y gestiona el flujo de Git / GitHub CLI.

## Protocolo de Entrega Git & GitHub

1. **Aislamiento en Rama Atómica:**
   ```bash
   git checkout -b <tipo>/<descripcion-kebab-case>
   ```
2. **Implementación y Compilación:**
   - Modificar archivos en `portfolio-source/`.
   - Ejecutar `npm run build` en `portfolio-source/`.
   - Copiar los artefactos generados de `portfolio-source/dist/client/*` a la raíz de `Luics415.github.io`.
3. **Commit Semántico:**
   ```bash
   git add .
   git commit -m "<tipo>(<alcance>): <descripcion concisa>"
   ```
4. **Push y Pull Request Formal:**
   ```bash
   git push -u origin <nombre-rama>
   gh pr create --title "<tipo>(<alcance>): <titulo claro>" --body "<descripcion y checklist>"
   ```
5. **Merge y Limpieza:**
   ```bash
   gh pr merge <NUM_PR> --merge --delete-branch
   git checkout main && git pull origin main
   ```

El artefacto de fase es `03-construir/construccion.yml`. Jamás afirmes que un Issue, PR o tarjeta fue creada o movida sin evidencia verificable devuelta por la API.
