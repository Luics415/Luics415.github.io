# Portafolio de Luics415

Sitio profesional de **Luics415**, desarrollador de software enfocado en aplicaciones web, experiencias educativas, videojuegos, visión por computadora y herramientas interactivas.

[![Sitio publicado](https://img.shields.io/badge/GitHub%20Pages-en%20línea-2ea44f?logo=github)](https://luics415.github.io/)
[![Despliegue](https://github.com/Luics415/Luics415.github.io/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/Luics415/Luics415.github.io/actions/workflows/deploy-pages.yml)
[![Licencia del código](https://img.shields.io/badge/código-MIT-5aa9e6.svg)](LICENSE)

**Sitio:** [luics415.github.io](https://luics415.github.io/)

![Banner del portafolio de Luics415](docs/screenshots/portfolio-banner.png)

> Este repositorio contiene el artefacto estático publicado en GitHub Pages. Los archivos JavaScript y CSS están compilados y optimizados para producción; el desarrollo estructural debe realizarse en el proyecto fuente y posteriormente exportarse de nuevo.

## Índice

- [Objetivo](#objetivo)
- [Qué incluye](#qué-incluye)
- [Proyectos destacados](#proyectos-destacados)
- [Diseño e identidad visual](#diseño-e-identidad-visual)
- [Arquitectura técnica](#arquitectura-técnica)
- [Ejecución local](#ejecución-local)
- [Despliegue](#despliegue)
- [Mantenimiento](#mantenimiento)
- [Calidad, accesibilidad y rendimiento](#calidad-accesibilidad-y-rendimiento)
- [Licencia y derechos](#licencia-y-derechos)

## Objetivo

El portafolio presenta proyectos reales de Luics415 mediante tarjetas resumidas y páginas individuales con contexto profesional. Busca comunicar no solo el resultado visual, sino también el objetivo, la arquitectura, las decisiones técnicas, el rol desempeñado y los aprendizajes de cada proyecto.

Sus objetivos principales son:

- concentrar proyectos de distintas disciplinas en una identidad coherente;
- mostrar capturas reales, tecnologías y enlaces verificables;
- ofrecer fichas individuales que expliquen el valor y la implementación;
- mantener navegación accesible y responsiva en escritorio y dispositivos móviles;
- publicar automáticamente mediante GitHub Pages sin infraestructura de servidor.

## Qué incluye

| Área | Contenido |
| --- | --- |
| Portada | Firma digital de Luics415, presentación profesional y accesos principales. |
| Proyectos | Tarjetas con portada, resumen, año, rol, tecnologías, repositorio y demo cuando existe. |
| Fichas técnicas | Objetivo, arquitectura, decisiones, puntos destacados, capturas y enlaces externos. |
| Perfil | Experiencia, especialidades y servicios de desarrollo. |
| Identidad visual | Paleta inspirada en Arcane, fondos animados, grafitis originales y emblema de ancla con “L”. |
| Metadatos | SEO básico, Open Graph, imagen social, favicon, canonical y `robots.txt`. |
| Publicación | Flujo automático de GitHub Actions hacia GitHub Pages. |

## Proyectos destacados

### Palabra y Oración

[![Palabra y Oración](docs/screenshots/palabra-y-oracion.jpg)](https://luics415.github.io/proyectos/palabra-y-oracion/)

Aplicación devocional con Biblia en español, 38 oraciones, Santo Rosario guiado, favoritos, progreso local y lectura mediante Web Speech API.

- [Ficha en el portafolio](https://luics415.github.io/proyectos/palabra-y-oracion/)
- [Aplicación publicada](https://luics415.github.io/palabra-y-oracion/)
- [Repositorio](https://github.com/Luics415/palabra-y-oracion)

### Dev Visualizer

[![Dev Visualizer](docs/screenshots/dev-visualizer.webp)](https://luics415.github.io/proyectos/dev-visualizer/)

Atlas educativo visual para estudiar desarrollo de software mediante rutas progresivas, escenas animadas y modelos mentales reutilizables.

- [Ficha en el portafolio](https://luics415.github.io/proyectos/dev-visualizer/)
- [Repositorio](https://github.com/Luics415/Dev-Visualizer)

El sitio también documenta proyectos de videojuegos, visión por computadora, aplicaciones educativas y experimentos web. Consulta el [catálogo completo](https://luics415.github.io/#projects).

## Diseño e identidad visual

La dirección visual combina azul profundo, cian, rosa y magenta. La firma digital **Luics415** y el ancla con la letra **L** funcionan como elementos centrales de marca.

El fondo utiliza grafitis separados con transparencia y animaciones ambientales lentas. Estos elementos se mantienen detrás del contenido, con opacidad limitada, para conservar contraste y legibilidad. Cuando el visitante activa `prefers-reduced-motion`, los movimientos no esenciales se reducen o deshabilitan.

## Arquitectura técnica

```text
Luics415.github.io/
├── index.html                 Página principal prerenderizada
├── proyectos/                Una ruta estática por proyecto
├── assets/                   JavaScript, CSS e imágenes con hash
├── graffiti-v2/              Recursos decorativos optimizados
├── docs/screenshots/         Capturas estables para documentación
├── og.png                    Imagen para compartir el sitio
├── luics415-icon-*.png       Iconos de la marca
├── robots.txt                Directivas para rastreadores
├── .nojekyll                 Publicación directa sin Jekyll
└── .github/workflows/        Automatización de GitHub Pages
```

### Tecnologías de la aplicación

- React y TypeScript para la interfaz.
- TanStack Router para navegación y generación de rutas.
- Vite para compilación y optimización de producción.
- CSS responsivo con variables de diseño y utilidades compiladas.
- Lucide para iconografía funcional.
- GitHub Actions y GitHub Pages para entrega continua.

### Estrategia de publicación

El proyecto se prerenderiza antes de llegar a este repositorio. Como resultado, la portada y cada ficha existen como documentos HTML estáticos. Los recursos incluyen hashes en sus nombres para evitar conflictos de caché entre versiones.

## Ejecución local

Este repositorio no necesita instalar dependencias para visualizar el artefacto publicado. Debe servirse mediante HTTP para reproducir correctamente las rutas y módulos.

Con Python:

```bash
python -m http.server 8080
```

Después abre `http://localhost:8080/`.

También puede utilizarse cualquier servidor de archivos estáticos. Abrir `index.html` directamente mediante `file://` no representa el entorno real de GitHub Pages.

## Despliegue

El flujo [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) se ejecuta con cada cambio enviado a `main`:

1. descarga el contenido del repositorio;
2. configura el entorno de GitHub Pages;
3. empaqueta la raíz como sitio estático;
4. publica el artefacto;
5. actualiza [luics415.github.io](https://luics415.github.io/).

En **Settings → Pages → Build and deployment**, la fuente debe permanecer configurada como **GitHub Actions**.

## Mantenimiento

Para añadir o modificar un proyecto:

1. actualiza la fuente de datos del portafolio;
2. incorpora una portada y capturas reales optimizadas;
3. completa resumen, rol, año, tecnologías, enlaces, puntos destacados y secciones técnicas;
4. valida la compilación y todas las rutas prerenderizadas;
5. copia la nueva salida estática a este repositorio;
6. publica y verifica que GitHub Actions termine correctamente;
7. abre la página pública y confirma recursos, navegación y enlaces externos.

No deben editarse manualmente los archivos minificados salvo una emergencia documentada, porque esos cambios se perderán en la siguiente exportación.

## Calidad, accesibilidad y rendimiento

- Diseño adaptable a móvil y escritorio.
- Navegación mediante teclado y nombres accesibles en controles interactivos.
- Texto alternativo en imágenes relevantes.
- Respeto por `prefers-reduced-motion`.
- Carga diferida de capturas fuera del primer viewport.
- Imágenes WebP cuando resulta conveniente.
- Prerenderizado de la portada y las páginas de proyectos.
- Recursos versionados para una caché segura.
- Enlaces externos aislados mediante `noopener noreferrer`.

## Licencia y derechos

### Código

El código original de este repositorio se distribuye bajo la [Licencia MIT](LICENSE), salvo que un archivo indique condiciones diferentes. Cualquier copia o distribución sustancial debe conservar el aviso de copyright y el texto de la licencia.

### Marca e identidad visual

La Licencia MIT **no concede derechos de uso sobre la marca**. El nombre **Luics415**, su firma digital, el emblema de ancla con la letra “L”, logotipos, iconos, grafitis, banners y demás elementos distintivos están reservados por su titular. No pueden utilizarse para sugerir autoría, afiliación, patrocinio o respaldo sin autorización previa.

### Capturas y proyectos enlazados

Las capturas se incluyen con fines de documentación del portafolio. Cada proyecto conserva su propia licencia y sus derechos sobre código, contenido, datos, marcas e imágenes. La presencia de un proyecto aquí no cambia ni amplía su licencia original.

### Inspiración artística

La paleta cromática y la atmósfera visual están inspiradas en una estética de animación y grafiti. Este portafolio no está afiliado, patrocinado ni respaldado por Riot Games, Fortiche, Netflix ni por los titulares de *Arcane* o *League of Legends*. Sus marcas y obras pertenecen a sus respectivos propietarios.

Consulta [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) para conocer las dependencias, servicios y atribuciones relevantes.

## Autor

**Luics415** — diseño, desarrollo, documentación y mantenimiento.

- GitHub: [github.com/Luics415](https://github.com/Luics415)
- Portafolio: [luics415.github.io](https://luics415.github.io/)

