import{x as e}from"./index-C3rqRalZ.js";import{d as t}from"./Header-DrX6sQLA.js";var n=t(`braces`,[[`path`,{d:`M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1`,key:`ezmyqa`}],[`path`,{d:`M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1`,key:`e1hn23`}]]),r=t(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),i=t(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),a=t(`git-branch`,[[`path`,{d:`M15 6a9 9 0 0 0-9 9V3`,key:`1cii5b`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}]]),o=t(`monitor`,[[`rect`,{width:`20`,height:`14`,x:`2`,y:`3`,rx:`2`,key:`48i651`}],[`line`,{x1:`8`,x2:`16`,y1:`21`,y2:`21`,key:`1svkeh`}],[`line`,{x1:`12`,x2:`12`,y1:`17`,y2:`21`,key:`vw1qmm`}]]),s=t(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),c=t(`workflow`,[[`rect`,{width:`8`,height:`8`,x:`3`,y:`3`,rx:`2`,key:`by2w9f`}],[`path`,{d:`M7 11v4a2 2 0 0 0 2 2h4`,key:`xkn7yn`}],[`rect`,{width:`8`,height:`8`,x:`13`,y:`13`,rx:`2`,key:`1cgmvn`}]]),l=`Código representativo. Reconstrucción conceptual basada en el objetivo y stack públicos del proyecto; no es un extracto literal del repositorio.`,u={"pwa-cinematic":{architecture:`Una interfaz web estática separa contenido, estado de presentación y servicios del navegador. La navegación o el desplazamiento producen un estado normalizado; persistencia local y caché sin conexión se mantienen detrás de adaptadores para no acoplar la experiencia visual a una API remota.`,flow:[`La interacción del visitante genera una posición, selección o intención de navegación.`,`Una capa de estado normaliza la entrada y decide qué contenido, escena o progreso mostrar.`,`La vista renderiza el resultado y conserva únicamente las preferencias o avances necesarios en el dispositivo.`],decisions:[`Modelar el contenido como datos permite reutilizar la misma fuente en búsqueda, navegación y vistas detalladas.`,`Derivar el estado visual de una entrada normalizada facilita reproducir la experiencia hacia adelante y hacia atrás.`,`Mantener la persistencia en el navegador reduce infraestructura y evita exigir una cuenta al visitante.`],tradeoffs:[`La operación sin backend mejora privacidad y disponibilidad, pero limita sincronización entre dispositivos.`,`Las escenas ricas aumentan el impacto visual, aunque exigen presupuestos estrictos de peso y movimiento.`,`Una caché agresiva acelera visitas posteriores, pero requiere versionado cuidadoso para no servir recursos antiguos.`],codeSample:{title:`Progreso normalizado de una experiencia guiada`,language:`TypeScript`,description:`Ejemplo conceptual de cómo convertir una posición de desplazamiento en un estado estable entre 0 y 1.`,code:`type ProgressInput = { scrollY: number; start: number; end: number };

export function deriveProgress(input: ProgressInput) {
  const distance = Math.max(input.end - input.start, 1);
  const offset = input.scrollY - input.start;
  const raw = offset / distance;
  const progress = Math.min(1, Math.max(0, raw));

  return {
    progress,
    complete: progress === 1,
  };
}`,disclaimer:l}},"learning-atlas":{architecture:`El atlas desacopla el contenido educativo de su representación. Un catálogo tipado describe temas, capítulos y metáforas visuales; la ruta selecciona una entrada y una capa de presentación compone la escena correspondiente sin duplicar navegación ni estructura editorial.`,flow:[`La ruta identifica la colección y el concepto solicitado.`,`El catálogo resuelve contenido, nivel, relaciones y familia visual.`,`La vista combina explicación, ejemplo y escena, y ofrece continuidad hacia el siguiente concepto.`],decisions:[`Centralizar el manifiesto evita discrepancias entre rutas, contadores e índices.`,`Separar contenido y escena permite mejorar una metáfora sin reescribir la explicación técnica.`,`Usar componentes visuales reutilizables conserva coherencia sin hacer idénticas todas las lecciones.`],tradeoffs:[`Un manifiesto estricto mejora consistencia, pero obliga a validar cada alta de contenido.`,`La reutilización reduce mantenimiento, aunque demasiada abstracción puede diluir metáforas específicas.`,`La exportación estática simplifica publicación, pero desplaza búsqueda y filtrado al cliente.`],codeSample:{title:`Selección tipada de una metáfora visual`,language:`TypeScript`,description:`Ejemplo conceptual de un catálogo que elige una familia visual a partir del tipo de concepto.`,code:`type ConceptKind = "pipeline" | "tree" | "state";

const sceneByKind: Record<ConceptKind, string> = {
  pipeline: "flujo por etapas",
  tree: "jerarquía navegable",
  state: "transición de estados",
};

export function describeScene(kind: ConceptKind) {
  return sceneByKind[kind];
}`,disclaimer:l}},"qr-voxel":{architecture:`Una aplicación estática ejecuta todo el pipeline en el navegador: normaliza la imagen, decodifica el contenido, reconstruye una matriz binaria y la entrega a un renderer WebGL desacoplado. El estado QRSlot conecta procesamiento, perfil estacional, exportación y enlaces compartidos sin depender de una API o base de datos.`,flow:[`El archivo se valida y normaliza en un canvas antes de intentar la lectura con jsQR.`,`El contenido decodificado se reconstruye como una matriz QR y se almacena junto con su perfil visual.`,`React Three Fiber convierte los módulos activos en instancias voxel y permite interpolar entre bosque y matriz cenital.`,`La exportación captura el canvas; el enlace compartido serializa una versión compacta de la matriz y la estación.`],decisions:[`Reconstruir la matriz desde el contenido desacopla el renderer de los píxeles y del formato del archivo original.`,`Usar InstancedMesh reduce el costo de representar muchas piezas repetidas de troncos, hojas y módulos.`,`Versionar y empaquetar la matriz por bits mantiene los enlaces reproducibles sin subir la imagen a un servidor.`],tradeoffs:[`El procesamiento local mejora privacidad y elimina infraestructura, pero traslada decodificación y exportación al dispositivo.`,`WebGL ofrece profundidad y animación, aunque necesita niveles de calidad y límites de frecuencia para móviles modestos.`,`Regenerar la matriz desde el contenido preserva el QR funcional, pero no reproduce defectos, logotipos o estilización del archivo original.`],codeSample:{title:`Frontera conceptual entre QR y escena 3D`,language:`TypeScript`,description:`Modelo mínimo de un pipeline donde el renderer depende de una matriz normalizada, no del archivo cargado.`,code:`type Matrix = Array<Array<0 | 1>>;

type GardenInput = {
  matrix: Matrix;
  season: "spring" | "summer" | "autumn" | "winter";
};

export async function buildGarden(file: File): Promise<GardenInput> {
  const content = await decodeLocally(file);
  const matrix = reconstructMatrix(content);

  return { matrix, season: "spring" };
}`,disclaimer:l}},"rpg-web":{architecture:`El juego organiza datos, mapas, recursos audiovisuales y lógica de eventos como capas separadas. El motor procesa una cola de acciones y actualiza la escena en ciclos discretos, mientras el empaquetado de escritorio incorpora la aplicación web y sus recursos en un ejecutable local.`,flow:[`La entrada del jugador se traduce en una orden de movimiento, interacción o combate.`,`El motor valida la orden contra el estado del mapa y encola los eventos resultantes.`,`Cada evento actualiza el estado y después la escena refleja los cambios visuales y sonoros.`],decisions:[`Conservar datos y recursos fuera de la lógica facilita ajustar contenido sin alterar el bucle principal.`,`Procesar eventos de forma secuencial evita que diálogos, combates y transiciones compitan por el estado.`,`Reutilizar un motor orientado a eventos acelera la construcción de mapas y reglas narrativas.`],tradeoffs:[`El motor reduce trabajo de infraestructura, pero condiciona la organización y las capacidades del juego.`,`Empaquetar todos los recursos mejora ejecución local, aunque aumenta el tamaño de distribución.`,`Muchos eventos activos enriquecen los mapas, pero requieren limitar actualizaciones innecesarias.`],codeSample:{title:`Procesamiento secuencial de eventos`,language:`JavaScript`,description:`Ejemplo conceptual de una cola mínima que evita ejecutar dos acciones del juego al mismo tiempo.`,code:`const eventQueue = [];

export function enqueueEvent(event) {
  eventQueue.push(event);
}

export function updateEvents(context) {
  const next = eventQueue.shift();
  if (!next) return false;

  next(context);
  return true;
}`,disclaimer:l}},"rpg-android":{architecture:`Una base web del juego vive dentro de un contenedor híbrido. El contenido mantiene su estructura de datos, scripts y recursos, mientras la capa móvil gestiona el ciclo de vida de Android, rutas locales y configuración de empaquetado sin duplicar la lógica jugable.`,flow:[`Android inicia el contenedor y habilita el entorno web embebido.`,`La aplicación carga recursos locales y restaura el estado compatible del juego.`,`Los eventos de pausa o reanudación se traducen a cambios seguros en el bucle de ejecución.`],decisions:[`Reutilizar la base web conserva paridad funcional entre plataformas.`,`Mantener la integración móvil en una capa delgada reduce divergencias del contenido jugable.`,`Empaquetar recursos localmente evita depender de conectividad durante una partida.`],tradeoffs:[`El enfoque híbrido acelera la adaptación, pero consume más memoria que una implementación nativa especializada.`,`Una sola base simplifica mantenimiento, aunque exige adaptar entrada, pantalla y ciclo de vida al dispositivo.`,`Los recursos incluidos permiten uso sin conexión, a costa de un paquete de instalación mayor.`],codeSample:{title:`Adaptación conceptual al ciclo de vida móvil`,language:`JavaScript`,description:`Ejemplo conceptual de cómo una capa híbrida puede traducir pausa y reanudación al estado del juego.`,code:`let gamePaused = false;

document.addEventListener("deviceready", () => {
  document.addEventListener("pause", () => setPaused(true));
  document.addEventListener("resume", () => setPaused(false));
});

function setPaused(value) {
  gamePaused = value;
  document.body.dataset.gamePaused = String(value);
}`,disclaimer:l}},"browser-pet":{architecture:`El dominio de la mascota se mantiene separado del renderer y del adaptador del navegador. Un estado serializable concentra necesidades, inventario y progreso; las entradas del usuario producen transiciones puras y una capa de persistencia guarda cambios sin mezclar reglas con APIs de plataforma.`,flow:[`El reloj o una interacción genera una acción con tiempo transcurrido.`,`El motor calcula el nuevo estado aplicando límites y reglas de progresión.`,`El renderer actualiza la escena y el adaptador persiste únicamente el estado resultante.`],decisions:[`Mantener el motor independiente del navegador permite probar reglas y cambiar de renderer.`,`Usar transiciones deterministas facilita exportar, importar y recuperar el progreso.`,`Limitar valores en cada actualización evita estados imposibles después de periodos largos de inactividad.`],tradeoffs:[`La persistencia frecuente protege el avance, pero debe agruparse para evitar escrituras excesivas.`,`Más especies y escenarios aumentan personalización, aunque multiplican combinaciones de recursos.`,`La ejecución continua aporta sensación de vida, pero requiere ajustar frecuencia para reducir consumo.`],codeSample:{title:`Transición determinista del estado de una mascota`,language:`JavaScript`,description:`Ejemplo conceptual de una actualización pura que limita necesidades a un rango válido.`,code:`const clamp = (value) => Math.max(0, Math.min(100, value));

export function advancePet(state, elapsedMinutes) {
  const hungerDelta = elapsedMinutes * 0.08;
  const energyDelta = elapsedMinutes * 0.05;

  return {
    ...state,
    hunger: clamp(state.hunger + hungerDelta),
    energy: clamp(state.energy - energyDelta),
    updatedAt: Date.now(),
  };
}`,disclaimer:l}},"vision-python":{architecture:`El pipeline separa captura, estimación de landmarks, suavizado, clasificación y ejecución de acciones. Cada etapa recibe datos simples y devuelve una salida explícita, lo que permite ajustar sensibilidad o sustituir el mecanismo de control sin acoplarlo a la cámara.`,flow:[`La cámara entrega un fotograma con resolución y frecuencia controladas.`,`El estimador obtiene puntos de referencia y el filtro reduce variaciones entre cuadros.`,`El clasificador reconoce una intención y el adaptador del sistema ejecuta la acción permitida.`],decisions:[`Separar observación e intención evita que ruido visual dispare directamente acciones del sistema.`,`Aplicar una ventana corta de suavizado equilibra estabilidad y latencia.`,`Centralizar umbrales facilita calibrar distintos tamaños de mano, cámaras y distancias.`],tradeoffs:[`Más suavizado reduce falsos positivos, pero hace que el cursor responda con mayor retraso.`,`Una resolución alta mejora detalle, aunque eleva uso de CPU y temperatura.`,`Reglas geométricas son explicables y rápidas, pero menos flexibles ante posturas ambiguas.`],codeSample:{title:`Suavizado de una trayectoria detectada`,language:`Python`,description:`Ejemplo conceptual de una ventana móvil para estabilizar coordenadas antes de producir una acción.`,code:`from collections import deque

history = deque(maxlen=5)

def stable_point(x: float, y: float) -> tuple[float, float]:
    history.append((x, y))
    count = len(history)
    mean_x = sum(point[0] for point in history) / count
    mean_y = sum(point[1] for point in history) / count

    return mean_x, mean_y`,disclaimer:l}},"gesture-android":{architecture:`El flujo Android divide adquisición de cámara, transformación de coordenadas, clasificación gestual y despacho de efectos. La capa de accesibilidad recibe intenciones ya estabilizadas; orientación, espejo, calibración e insets se resuelven antes de llegar a la pantalla.`,flow:[`CameraX entrega un fotograma bajo un presupuesto de resolución y frecuencia.`,`Los landmarks pasan por rotación, espejo, normalización, calibración y suavizado.`,`Una máquina de estados confirma el gesto y un dispatcher serializa la acción de accesibilidad.`],decisions:[`Transformar coordenadas en etapas explícitas permite localizar inversiones o desplazamientos.`,`Confirmar gestos durante varios cuadros evita convertir detecciones aisladas en clics.`,`Adaptar la frecuencia de análisis protege batería y temperatura sin detener el servicio.`],tradeoffs:[`Una confirmación más larga mejora precisión, pero incrementa la latencia percibida.`,`Analizar más cuadros da mayor continuidad, aunque aumenta costo térmico.`,`AccessibilityService amplía el alcance de control, pero requiere consentimiento y comunicación transparentes.`],codeSample:{title:`Promedio conceptual de coordenadas normalizadas`,language:`Kotlin`,description:`Ejemplo conceptual de suavizado previo al mapeo de una posición hacia la pantalla.`,code:`fun smoothPoint(samples: List<Pair<Float, Float>>): Pair<Float, Float> {
    require(samples.isNotEmpty())

    val sum = samples.fold(0f to 0f) { acc, point ->
        (acc.first + point.first) to (acc.second + point.second)
    }
    val count = samples.size.toFloat()

    return (sum.first / count) to (sum.second / count)
}`,disclaimer:l}},"restaurant-ops":{architecture:`La solución separa dominio, casos de uso, persistencia y presentación Blazor. Un único backend aplica autorización por rol y conserva la fuente de verdad en PostgreSQL; SignalR distribuye cambios de comandas sin acoplar Meseros, Cocina y Administración entre sí.`,flow:[`El mesero abre una mesa, construye una ronda y envía productos con comentarios y alertas de alergia.`,`El servicio crea snapshots de producto y precio, registra el estado Nuevo y publica la actualización.`,`Cocina avanza la comanda por transiciones permitidas y cada cambio agrega una entrada de historial.`,`Administración consulta la operación y el proceso automático exporta a XLSX los cierres elegibles.`],decisions:[`Guardar snapshots evita que una edición posterior del catálogo cambie el contenido histórico de una venta.`,`Separar autorización y layouts por rol reduce errores operativos y elimina cambios de función dentro de una sesión.`,`Combinar eventos en tiempo real con actualización periódica mantiene continuidad después de una reconexión.`,`Separar configuración privada, datos operativos y binarios permite personalizar y transferir una instalación sin publicar credenciales.`],tradeoffs:[`Un servidor local simplifica la operación dentro del restaurante, pero requiere que la computadora principal y la red permanezcan disponibles.`,`PostgreSQL ofrece integridad y concurrencia, aunque añade una dependencia de instalación frente a una base embebida.`,`La PWA reutiliza la interfaz en tablets y celulares, pero no sustituye todavía un APK nativo firmado.`],codeSample:{title:`Transición controlada de una comanda`,language:`C#`,description:`Ejemplo conceptual de una regla que evita saltos arbitrarios entre estados de cocina.`,code:`public static bool CanMove(OrderStatus current, OrderStatus next) =>
    (current, next) switch
    {
        (OrderStatus.New, OrderStatus.Preparing) => true,
        (OrderStatus.Preparing, OrderStatus.Ready) => true,
        (OrderStatus.Ready, OrderStatus.Completed) => true,
        (_, OrderStatus.Cancelled) => current is not OrderStatus.Completed,
        _ => false,
    };`,disclaimer:l}},"console-dotnet":{architecture:`La aplicación de consola separa interfaz, servicios de aplicación, dominio, persistencia y exportación. Una fuente local conserva todos los registros e historial; las vistas operativas consultan subconjuntos sin eliminar datos y los exportadores reciben modelos ya normalizados.`,flow:[`La interfaz valida una orden del usuario y la entrega al servicio correspondiente.`,`El servicio aplica reglas, actualiza la fuente persistente y registra el cambio trazable.`,`Las consultas filtran la vista activa y la exportación reconstruye el periodo solicitado con su historial.`],decisions:[`Separar la vista semanal de la retención histórica evita confundir visibilidad con eliminación.`,`Conservar una fuente de verdad reduce divergencias entre consola, búsquedas y hojas exportadas.`,`Inyectar selectores de fecha hace reutilizable la lógica de periodos sin acoplarla a una entidad concreta.`],tradeoffs:[`Un archivo local simplifica instalación, pero necesita escrituras atómicas y respaldo ante corrupción.`,`El historial completo mejora auditoría, aunque aumenta volumen y complejidad de correcciones.`,`Generar el libro tras cambios garantiza consistencia, pero añade costo de entrada y salida.`],codeSample:{title:`Consulta genérica de la semana activa`,language:`C#`,description:`Ejemplo conceptual de un filtro semanal que no elimina registros fuera del periodo visible.`,code:`static IEnumerable<T> CurrentWeek<T>(
    IEnumerable<T> items,
    Func<T, DateTime> dateOf,
    DateTime today)
{
    int offset = ((int)today.DayOfWeek + 6) % 7;
    DateTime start = today.Date.AddDays(-offset);
    DateTime end = start.AddDays(7);

    return items.Where(item =>
        dateOf(item) >= start && dateOf(item) < end);
}`,disclaimer:l}},"console-cpp":{architecture:`El dominio se divide en modelos, servicios, repositorios y una interfaz de consola. Una cola de prioridad atiende el orden operativo, un índice por clave acelera consultas directas y la persistencia conserva registros e historial como conjuntos separados.`,flow:[`La entrada se valida y se transforma en un registro de dominio.`,`El servicio calcula la prioridad, actualiza el índice y coloca una referencia en la cola.`,`Las consultas recuperan por clave o prioridad y el repositorio persiste el cambio junto con su historial.`],decisions:[`Combinar cola de prioridad e índice evita recorrer toda la colección para las dos consultas principales.`,`Recalcular puntuaciones dependientes del tiempo impide ordenar con valores envejecidos.`,`Aislar CSV detrás de repositorios evita contaminar las reglas de negocio con serialización.`],tradeoffs:[`Mantener dos estructuras mejora consultas, pero obliga a sincronizarlas después de cada edición.`,`CSV es portable y auditable, aunque ofrece menos garantías transaccionales que una base de datos.`,`Una fórmula explícita es fácil de explicar, pero necesita calibración para no favorecer un único factor.`],codeSample:{title:`Puntuación acotada de prioridad`,language:`C++`,description:`Ejemplo conceptual de una fórmula legible que combina señales y conserva el resultado dentro de un rango.`,code:`#include <algorithm>

int priorityScore(int risk, int reports, int daysOpen, int typeWeight) {
    const int raw =
        risk * 10 +
        std::min(reports * 2, 20) +
        std::min(daysOpen, 15) +
        typeWeight;

    return std::clamp(raw, 0, 100);
}`,disclaimer:l}},"php-mvc":{architecture:`La aplicación organiza solicitudes HTTP en controladores, reglas de negocio en servicios o modelos y presentación en vistas. El acceso a datos queda encapsulado, mientras autenticación y autorización se evalúan antes de permitir transiciones sobre expedientes o documentos.`,flow:[`La ruta recibe una petición y valida sesión, rol y datos de entrada.`,`El controlador delega la operación al dominio y el repositorio ejecuta la persistencia.`,`La respuesta presenta el nuevo estado y conserva información suficiente para seguimiento.`],decisions:[`Separar validación, negocio y HTML reduce controladores difíciles de mantener.`,`Representar los estados como transiciones permitidas evita cambios arbitrarios de un expediente.`,`Aplicar permisos en servidor impide depender únicamente de controles ocultos en la interfaz.`],tradeoffs:[`MVC aporta estructura clara, aunque añade capas a operaciones pequeñas.`,`La validación estricta protege integridad, pero debe comunicar errores sin perder datos del formulario.`,`Los archivos adjuntos simplifican el expediente digital, pero requieren límites, nombres seguros y control de acceso.`],codeSample:{title:`Validación conceptual de una solicitud`,language:`PHP`,description:`Ejemplo conceptual de validación en servidor antes de entregar datos normalizados al dominio.`,code:`function validateApplication(array $input): array
{
    $name = trim((string) ($input['name'] ?? ''));
    $program = trim((string) ($input['program'] ?? ''));

    if ($name === '' || $program === '') {
        throw new InvalidArgumentException('Faltan campos requeridos.');
    }

    return ['name' => $name, 'program' => $program];
}`,disclaimer:l}},"vanilla-web":{architecture:`Una interfaz pequeña puede mantener estado, reglas y renderizado en módulos conceptuales aun sin framework. Los eventos producen acciones, un reductor calcula el siguiente estado y una función de presentación actualiza únicamente la parte necesaria del DOM.`,flow:[`Un control del navegador emite una acción con datos mínimos.`,`La lógica calcula un nuevo estado sin modificar directamente la interfaz.`,`El renderizado refleja el resultado y ofrece retroalimentación inmediata al usuario.`],decisions:[`Conservar una única fuente de estado evita que texto, marcador y controles se contradigan.`,`Usar funciones puras vuelve predecibles las reglas incluso sin una biblioteca de componentes.`,`Delegar eventos reduce escuchas repetidas cuando la interfaz genera elementos dinámicos.`],tradeoffs:[`JavaScript directo ofrece una carga pequeña, pero requiere disciplina manual al crecer la interfaz.`,`Actualizar solo nodos necesarios mejora rendimiento, aunque aumenta lógica de sincronización.`,`El estado en memoria es sencillo, pero se pierde al recargar salvo que se añada persistencia explícita.`],codeSample:{title:`Reductor mínimo para una interacción web`,language:`JavaScript`,description:`Ejemplo conceptual de reglas separadas del DOM para mantener predecible una miniaplicación.`,code:`const initialState = { score: 0, rounds: 0 };

export function reduce(state = initialState, action) {
  if (action.type === "win") {
    return { score: state.score + 1, rounds: state.rounds + 1 };
  }
  if (action.type === "loss") {
    return { ...state, rounds: state.rounds + 1 };
  }

  return state;
}`,disclaimer:l}},"flask-api":{architecture:`La aplicación separa una interfaz ligera del endpoint Flask que actúa como frontera frente a TheCatAPI. El servidor controla red, timeout y forma de la respuesta; el navegador concentra historial, navegación y favoritos persistidos localmente.`,flow:[`La interfaz solicita un recurso aleatorio al endpoint same-origin de Flask.`,`El proxy consulta el proveedor externo con timeout y traduce el resultado a un contrato JSON estable.`,`El cliente actualiza historial e imagen activa; los favoritos se guardan de manera idempotente en localStorage.`],decisions:[`Colocar el proveedor detrás de un endpoint propio evita acoplar toda la interfaz a su respuesta.`,`Separar historial de favoritos permite navegar sin convertir cada imagen visitada en contenido guardado.`,`Persistir en el dispositivo conserva privacidad y elimina la necesidad de cuentas para una mini-app.`],tradeoffs:[`El proxy mejora el contrato, pero la disponibilidad sigue dependiendo de la API remota.`,`localStorage es simple y suficiente para URLs, aunque no ofrece sincronización entre dispositivos.`,`La versión actual normaliza errores generales; una evolución útil sería distinguir timeout, límite de cuota y respuesta inválida.`],codeSample:{title:`Decodificación defensiva de la respuesta cliente`,language:`JavaScript`,description:`Patrón conceptual para validar el contrato del endpoint antes de incorporarlo al estado de la interfaz.`,code:`async function requestCat() {
  const response = await fetch("/api/cats/random");
  const payload = await response.json();

  if (!response.ok || payload.success !== true || !payload.url) {
    throw new Error(payload.message ?? "No fue posible cargar la imagen");
  }

  return { id: payload.id, url: payload.url };
}`,disclaimer:l}},"external-web-integration":{architecture:`La ficha trata el simulador como una base externa integrada, no como un motor propio. La revisión técnica separa con claridad el núcleo adoptado, la presentación del repositorio y cualquier adaptación comprobable, conservando la atribución junto a la evidencia.`,flow:[`La entrada del visitante se entrega a los controles provistos por la base integrada.`,`El motor externo transforma el estado y coordina la representación 3D, el temporizador y la sesión.`,`La capa de presentación publica la experiencia y debe conservar versión, origen y límites de autoría.`],decisions:[`No presentar fragmentos coincidentes con la base externa como implementación original.`,`Usar patrones conceptuales propios para explicar geometría y orquestación sin copiar el motor.`,`Enlazar la fuente original permite que un revisor compruebe procedencia y alcance del trabajo.`],tradeoffs:[`Partir de una demostración existente acelera la exploración, pero reduce la autoría sobre el núcleo técnico.`,`Los cambios internos heredan estructura y deuda de la base, por lo que conviene aislar futuras adaptaciones.`,`La ficha gana credibilidad al limitar sus afirmaciones, aunque el proyecto pesa menos como evidencia algorítmica propia.`],codeSample:{title:`Adaptador conceptual para una base 3D externa`,language:`TypeScript`,description:`Patrón conceptual de una frontera que permitiría integrar el motor sin acoplar la interfaz a sus detalles internos.`,code:`interface PuzzleEngine {
  start(): void;
  apply(move: string): void;
  isSolved(): boolean;
}

export function createPuzzleSession(engine: PuzzleEngine) {
  engine.start();
  return {
    move(token: string) {
      engine.apply(token);
      return { solved: engine.isSolved() };
    },
  };
}`,disclaimer:l}},"tactical-strategy":{architecture:`Motor de juego por turnos con separación estricta entre modelo de estado puro (GameState inmutable), validador de caminos BFS en tiempo constante O(1), sincronización multijugador en tiempo real con Firebase Realtime Database y evaluación de IA Minimax ejecutada en Web Worker dedicado para evitar micro-bloqueos en el hilo de renderizado.`,flow:[`El usuario selecciona un movimiento de peón o posiciona un muro táctico horizontal/vertical sobre el tablero.`,`El validador de pathfinding genera un conjunto de aristas bloqueadas O(1) y verifica por BFS que ningún jugador quede completamente encerrado.`,`Si la acción es válida, el estado inmutable se actualiza localmente y se transmite por WebSockets/Firebase a los rivales conectados.`,`Si el turno corresponde a la máquina, se envía un mensaje estructurado al Web Worker para evaluar el árbol de búsqueda Minimax con poda alpha-beta.`],decisions:[`Ejecutar la IA en un Web Worker independiente garantiza 60–120 FPS fluidos en el hilo principal de la interfaz durante cómputos profundos.`,`Preconstruir la tabla de aristas bloqueadas transforma cada comprobación de colisión de caminos en una búsqueda O(1) ultra-rápida.`,`Diseño offline-first mediante Service Worker PWA para habilitar juego local y contra IA sin conexión a internet.`],tradeoffs:[`La validación exhaustiva de caminos en cada previsualización de muro añade cómputo, mitigado con el conjunto de aristas precalculadas.`,`El modelo serverless con Firebase simplifica infraestructura pero requiere reconciliación de latencia en multijugador entre dispositivos distantes.`],codeSample:{title:`Construcción de aristas bloqueadas O(1) y validación de camino`,language:`TypeScript`,description:`Código extraído directamente de AnchorGrid que indexa las aristas de los muros para evaluar la conectividad de la meta sin recorrer el arreglo completo en cada paso.`,code:`function buildBlockedEdges(walls: Wall[]) {
  const blocked = new Set<string>();

  for (const wall of walls) {
    if (wall.orientation === 'horizontal') {
      blocked.add(edgeKey({ row: wall.row, col: wall.col }, { row: wall.row + 1, col: wall.col }));
      blocked.add(edgeKey({ row: wall.row, col: wall.col + 1 }, { row: wall.row + 1, col: wall.col + 1 }));
    } else {
      blocked.add(edgeKey({ row: wall.row, col: wall.col }, { row: wall.row, col: wall.col + 1 }));
      blocked.add(edgeKey({ row: wall.row + 1, col: wall.col }, { row: wall.row + 1, col: wall.col + 1 }));
    }
  }

  return blocked;
}`}},"aws-ephemeral-cloud":{architecture:`Una arquitectura de microservicios efímeros en Amazon ECS Fargate con reloj de vida (TTL) controlado por Amazon DynamoDB y un EventBridge Reaper Lambda. La interfaz web interactúa mediante API REST y credenciales temporales AWS STS AssumeRole de mínimo privilegio.`,flow:[`El usuario selecciona un vehículo, plantilla de servicio automotriz y TTL en la interfaz de mando.`,`El plano de control verifica colisiones de VIN; si no hay conflicto, provisiona la tarea en ECS Fargate Spot y registra el epoch límite en DynamoDB.`,`El microservicio transmite telemetría ECU y tramas CAN en tiempo real a Amazon CloudWatch Logs.`,`Al vencer el TTL, DynamoDB purga el registro y EventBridge Reaper apaga el contenedor, archivando el estado comprimido en la Bóveda en Frío.`],decisions:[`Fargate Spot reduce los costos de cómputo en un 70% frente a instancias dedicadas para cargas de prueba desechables.`,`El guardián anti-duplicados previene colisiones de puertos y telemetría sobre el mismo VIN físico.`,`Las credenciales temporales STS AssumeRole garantizan cero secretos a largo plazo en los clientes.`,`La Bóveda Histórica con filtros de tiempo (<1 semana, <1 mes, <1 año) evita la saturación de la bahía activa de taller.`],tradeoffs:[`Fargate Spot puede ser interrumpido si AWS requiere capacidad, aunque para entornos de prueba automotriz de corta duración el ahorro justifica el riesgo.`,`La compresión de estado en frío requiere deserialización para el relanzamiento, pero mantiene el consumo de almacenamiento bajo 2 KB por registro.`],codeSample:{title:`Controlador de Ciclo de Vida y Detección de Conflictos TTL`,language:`TypeScript`,description:`Lógica del motor de aprovisionamiento efímero que valida colisiones de VIN activo y programa el auto-desmantelamiento.`,code:`export function createSandbox(params: CreateSandboxParams): ProvisionResult {
  const store = getStore();
  const now = Date.now();

  // 1. Guardián Anti-Duplicados para el mismo vehículo (VIN)
  const activeConflict = store.sandboxes.find(
    s => s.vehicle.vin === params.vehicleVin && new Date(s.expiresAt).getTime() > now
  );

  if (activeConflict && params.action !== 'restart_ttl' && params.action !== 'force_duplicate') {
    return { conflict: true, existingSandbox: activeConflict };
  }

  // 2. Cálculo estricto de expiración (TTL) y credenciales STS temporales
  const expiresAt = new Date(now + params.ttlMinutes * 60 * 1000).toISOString();
  const credentials = generateScopedStsToken(params.ttlMinutes);

  const newSandbox: EphemeralSandbox = {
    id: \`sbx-\${generateShortId()}\`,
    name: params.customName,
    templateId: params.templateId,
    vehicle: findVehicleByVin(params.vehicleVin),
    status: 'HEALTHY',
    createdAt: new Date().toISOString(),
    expiresAt,
    credentials,
  };

  store.sandboxes.unshift(newSandbox);
  return { sandbox: newSandbox };
}`,disclaimer:l}},"hire-protocol-security":{architecture:`Arquitectura desacoplada en tres planos: un plano de orquestación y conectividad de terminal (Terminal Hub interactivo con Rich), un plano de servicios REST y análisis algorítmico asíncrono (FastAPI + Pydantic v2 + SQLite con modo WAL), y un plano de integración con workflows externos (n8n, Evolution API WhatsApp, Webhooks de Discord e IMAP seguro). Toda credencial y estado se almacena estrictamente en la máquina anfitriona.`,flow:[`Al arrancar el entorno (start.bat o start.sh), el Terminal Hub carga las credenciales locales de SQLite y .env y despliega un menú interactivo con diagnóstico en vivo de las herramientas conectadas.`,`El usuario puede buscar y vincular servicios (WhatsApp, IMAP, Discord, n8n); el sistema valida la conexión en tiempo real mediante sockets/HTTP y persiste los ajustes en la tabla local 'settings'.`,`FastAPI levanta los endpoints REST con ciclo de vida 'lifespan', inicializando tablas e índices en SQLite sin bloqueos concurrentes.`,`Los webhooks de n8n o scripts de ingesta envían vacantes o adjuntos; el motor de deduplicación procesa los flujos en chunks de 64 KB calculando firmas SHA-256.`,`El detector heurístico escanea el cuerpo del correo o descripción evaluando patrones de fraude, calcula el puntaje de amenaza y registra la postulación.`,`Si se detectan recordatorios de entrevista o cambios de estatus, el despachador emite notificaciones formateadas a los canales activos seleccionados.`],decisions:[`Diseño 100% Local-First: Ningún token, correo ni contraseña sale del equipo del usuario hacia servidores de terceros.`,`Streaming SHA-256 en chunks de 64 KB: Previene MemoryErrors y garantiza consumo de memoria O(1) independientemente del tamaño de CVs o contratos adjuntos.`,`Persistencia dual (SQLite settings + .env): Permite tanto configuración declarativa para contenedores Docker como edición interactiva en consola que sobrevive a reinicios de máquina.`,`FastAPI Lifespan Context Manager: Reemplaza los eventos obsoletos @app.on_event('startup') garantizando cierre limpio de conexiones y compatibilidad con versiones recientes de Starlette.`,`Pruebas automatizadas con TestClient en memoria: 22 tests verifican deduplicación, heurísticas anti-estafas, validación de esquemas y códigos de respuesta HTTP sin depender de red externa.`],tradeoffs:[`El enfoque local-first requiere que la máquina del usuario esté encendida o alojada en un servidor hogareño/Docker local para escuchar eventos continuos de n8n.`,`El análisis heurístico de phishing opera por reglas ponderadas de alta velocidad; captura los vectores más comunes de fraude laboral sin requerir llamadas costosas a modelos LLM en la nube.`,`SQLite soporta cientos de consultas locales por segundo con consumo despreciable, suficiente para la gestión personal de miles de candidaturas sin la sobrecarga de un motor cliente-servidor como Postgres.`],codeSample:{title:`Streaming Hash SHA-256 en Bloques de 64 KB`,language:`Python · hashlib`,description:`Lectura fragmentada de archivos binarios para deduplicación estricta sin cargar el archivo completo en memoria RAM.`,code:`import hashlib
from pathlib import Path

CHUNK_SIZE = 65536  # 64 KB

def calculate_file_hash(file_path: Path) -> str:
    """Calcula el hash SHA-256 de un archivo en streaming.
    
    Garantiza complejidad espacial O(1) en memoria incluso al procesar
    portafolios en PDF o grabaciones de entrevistas de cientos de megabytes.
    """
    sha256 = hashlib.sha256()
    with open(file_path, "rb") as f:
        while chunk := f.read(CHUNK_SIZE):
            sha256.update(chunk)
    return sha256.hexdigest()`,disclaimer:l}},"aws-bedrock-rag":{architecture:`Arquitectura Cloud Serverless basada en Amazon Web Services (AWS) orientada a Retrieval-Augmented Generation (RAG). Los manuales de servicio oficiales (PDFs de más de 4,000 páginas) se almacenan en Amazon S3 y son procesados mediante AWS Textract para extraer tablas de torques y diagramas eléctricos sin pérdida estructural. Un pipeline en AWS Lambda genera embeddings vectoriales multidimensionales almacenados en Amazon OpenSearch Serverless. Ante una consulta diagnóstica o código DTC, Amazon Bedrock invoca Claude 3.5 Sonnet combinando la semántica recuperada con guardrails estrictos de seguridad automotriz.`,flow:[`El técnico en bahía selecciona el perfil del vehículo (marca, modelo, motor) y el código de falla OBD-II (ej. P0301 o P0A80).`,`El frontend en Next.js 15 emite la petición con streaming hacia la API Route autenticada con AWS IAM / Cognito.`,`La base de conocimiento en OpenSearch Serverless ejecuta búsqueda vectorial k-NN y rescata los 4 fragmentos OEM de mayor similitud con cita de página.`,`Amazon Bedrock Runtime inyecta los fragmentos recuperados en el prompt de Claude 3.5 Sonnet, aplicando guardrails de seguridad y rango de tolerancia de multímetro.`,`Claude 3.5 Sonnet genera el procedimiento diagnóstico paso a paso: pruebas con multímetro (Ohms/Volts), pares de apriete exactos en N·m y advertencias críticas.`,`El motor FinOps local calcula en tiempo real el ahorro en pesos mexicanos ($ MXN) basado en el tiempo técnico ahorrado (39 min/auto) y piezas zombi evitadas.`],decisions:[`Amazon Bedrock en lugar de APIs públicas de LLMs: Garantiza cumplimiento estricto de privacidad empresarial para manuales propietarios OEM y ejecución dentro de VPC con latencias mínimas.`,`AWS Textract con análisis de tablas: Esencial para evitar la desestructuración de tablas de torques (N·m vs lb-ft) y pines de conectores ECU que los OCR estándar rompen.`,`OpenSearch Serverless: Elimina costos fijos por servidores de búsqueda inactivos y escala automáticamente a cero cuando el taller no tiene bahías activas en la noche.`,`Temperatura 0.1 en inferencia de Bedrock: Minimiza alucinaciones en especificaciones mecánicas críticas donde un valor erróneo de apriete podría degollar un tornillo de motor.`,`Tablero FinOps en Moneda Local ($ MXN): Comunica de inmediato el valor económico tangible del software tanto a directores de taller como a gerentes de servicio automotriz.`],tradeoffs:[`El procesamiento inicial con Textract y chunking vectorial requiere una fase de ingesta asíncrona, pero una vez indexado el manual, la consulta tarda menos de 1.8 segundos.`,`La restricción a manuales oficiales OEM aumenta la precisión técnica al 100%, descartando foros o tutoriales no validados por los fabricantes.`,`OpenSearch Serverless incurre en costos por OCU (OpenSearch Compute Units), mitigados concentrando consultas frecuentes en caché local en Redis / ElastiCache.`],codeSample:{title:`Invocación a Amazon Bedrock Runtime con Claude 3.5 Sonnet`,language:`TypeScript · @aws-sdk/client-bedrock-runtime`,description:`Consulta de inferencia RAG con contexto OEM inyectado y parámetros deterministas para diagnóstico automotriz.`,code:`import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";

const bedrockClient = new BedrockRuntimeClient({
  region: process.env.AWS_REGION || "us-east-1",
});

interface BedrockDiagnosticPayload {
  vehicleModel: string;
  dtcCode: string;
  ragContext: string;
}

export async function invokeDiagnosticCopilot(payload: BedrockDiagnosticPayload) {
  const prompt = \`Eres el copiloto técnico experto en talleres automotrices de México.
Contexto oficial del manual OEM:
\${payload.ragContext}

Vehículo: \${payload.vehicleModel}
Código DTC: \${payload.dtcCode}

Proporciona:
1. Procedimiento de prueba con multímetro (pines, Ohms y Volts).
2. Tabla de pares de apriete (torques en N·m).
3. Advertencias de seguridad críticas.\`;

  const requestBody = {
    anthropic_version: "bedrock-2023-05-31",
    max_tokens: 1500,
    temperature: 0.1, // Determinismo estricto para especificaciones mecánicas
    messages: [{ role: "user", content: prompt }],
  };

  const command = new InvokeModelCommand({
    modelId: "anthropic.claude-3-5-sonnet-20240620-v1:0",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify(requestBody),
  });

  const response = await bedrockClient.send(command);
  const decoded = JSON.parse(new TextDecoder().decode(response.body));
  return decoded.content[0].text;
}`,disclaimer:l}}},d=e(),f={web:`WEB SYSTEM`,desktop:`DESKTOP SYSTEM`,mobile:`MOBILE APP`,games:`GAME SYSTEM`,vision:`COMPUTER VISION`,education:`LEARNING PLATFORM`},p={web:`from-cyan/25 via-background to-blue-500/20`,desktop:`from-emerald-400/20 via-background to-cyan/20`,mobile:`from-violet-500/25 via-background to-magenta/20`,games:`from-magenta/25 via-background to-orange-400/15`,vision:`from-cyan/25 via-background to-violet-500/25`,education:`from-amber-300/15 via-background to-cyan/25`};function m({project:e,compact:t=!1}){let r=[...new Set([e.language,...e.stack])].slice(0,t?3:5);return(0,d.jsxs)(`div`,{className:`technical-cover bg-gradient-to-br ${p[e.category]} ${t?`technical-cover-compact`:``}`,role:`img`,"aria-label":`Portada editorial técnica de ${e.name}; no es una captura de la aplicación`,children:[(0,d.jsx)(`div`,{className:`technical-cover-grid`,"aria-hidden":`true`}),(0,d.jsxs)(`div`,{className:`technical-cover-terminal`,"aria-hidden":`true`,children:[(0,d.jsxs)(`div`,{className:`technical-cover-terminal-bar`,children:[(0,d.jsx)(`span`,{}),(0,d.jsx)(`span`,{}),(0,d.jsx)(`span`,{})]}),(0,d.jsxs)(`div`,{className:`technical-cover-code`,children:[(0,d.jsx)(`span`,{className:`text-magenta`,children:`const`}),` pipeline = [`,(0,d.jsx)(`br`,{}),`\xA0\xA0`,(0,d.jsx)(`span`,{className:`text-cyan`,children:`input`}),`, validate, process,`,(0,d.jsx)(`br`,{}),`\xA0\xA0persist, output`,(0,d.jsx)(`br`,{}),`];`]})]}),(0,d.jsxs)(`div`,{className:`technical-cover-copy`,children:[(0,d.jsxs)(`span`,{className:`technical-cover-kicker`,children:[(0,d.jsx)(s,{"aria-hidden":`true`}),` `,f[e.category]]}),(0,d.jsx)(`strong`,{children:e.name}),!t&&(0,d.jsx)(`span`,{children:e.summary}),(0,d.jsx)(`div`,{className:`technical-cover-stack`,"aria-hidden":`true`,children:r.map(e=>(0,d.jsx)(`span`,{children:e},e))})]}),(0,d.jsxs)(`div`,{className:`technical-cover-nodes`,"aria-hidden":`true`,children:[(0,d.jsx)(n,{}),(0,d.jsx)(a,{}),(0,d.jsx)(i,{})]})]})}export{o as a,r as c,s as i,u as n,a as o,c as r,i as s,m as t};