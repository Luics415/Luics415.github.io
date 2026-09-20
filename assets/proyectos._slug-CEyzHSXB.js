import{a as e,c as t,s as n,t as r}from"./index-C050LOy2.js";import{a as i,l as a,n as o,o as s,r as c,s as l,t as u}from"./Header-p0HeURFK.js";import{n as d,t as f}from"./badge-check-B_-mMKDC.js";import{i as p,n as m,s as h,t as g}from"./ProjectTechnicalCover-Dw-Enngm.js";var _=a(`file-code-corner`,[[`path`,{d:`M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35`,key:`1wthlu`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`m5 16-3 3 3 3`,key:`331omg`}],[`path`,{d:`m9 22 3-3-3-3`,key:`lsp7cz`}]]),v=a(`git-pull-request`,[[`circle`,{cx:`18`,cy:`18`,r:`3`,key:`1xkwt0`}],[`circle`,{cx:`6`,cy:`6`,r:`3`,key:`1lh9wr`}],[`path`,{d:`M13 6h3a2 2 0 0 1 2 2v7`,key:`1yeb86`}],[`line`,{x1:`6`,x2:`6`,y1:`9`,y2:`21`,key:`rroup`}]]),y=a(`image-off`,[[`line`,{x1:`2`,x2:`22`,y1:`2`,y2:`22`,key:`a6p6uj`}],[`path`,{d:`M10.41 10.41a2 2 0 1 1-2.83-2.83`,key:`1bzlo9`}],[`line`,{x1:`13.5`,x2:`6`,y1:`13.5`,y2:`21`,key:`1q0aeu`}],[`line`,{x1:`18`,x2:`21`,y1:`12`,y2:`15`,key:`5mozeu`}],[`path`,{d:`M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59`,key:`mmje98`}],[`path`,{d:`M21 15V5a2 2 0 0 0-2-2H9`,key:`43el77`}]]),b=a(`network`,[[`rect`,{x:`16`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`4q2zg0`}],[`rect`,{x:`2`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`8cvhb9`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`6`,rx:`1`,key:`1egb70`}],[`path`,{d:`M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3`,key:`1jsf9p`}],[`path`,{d:`M12 12V8`,key:`2874zd`}]]),x=a(`scale`,[[`path`,{d:`M12 3v18`,key:`108xh3`}],[`path`,{d:`m19 8 3 8a5 5 0 0 1-6 0zV7`,key:`zcdpyk`}],[`path`,{d:`M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1`,key:`1yorad`}],[`path`,{d:`m5 8 3 8a5 5 0 0 1-6 0zV7`,key:`eua70x`}],[`path`,{d:`M7 21h10`,key:`1b0cd5`}]]),S=a(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),C={"qr-voxel-studio":[{title:`Decodificación local tolerante a inversión`,language:`TypeScript · jsQR`,description:`Normaliza el archivo, prueba orientaciones de contraste opuestas y devuelve un contrato explícito con contenido y dimensiones; un fallo produce un mensaje accionable para el usuario.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 1fedc2a · src/features/qr-engine/decode-qr.ts, líneas 11–29.`,sourceUrl:`https://github.com/Luics415/QRVoxelStudio/blob/1fedc2a963159fbb693abe25e7b1e6fa8d55ffac/src/features/qr-engine/decode-qr.ts#L11-L29`,code:`export async function decodeQRFromFile(file: File): Promise<DecodedQR> {
  const { imageData, width, height } = await normalizeImageFile(file);

  const result = jsQR(imageData.data, width, height, {
    inversionAttempts: "attemptBoth",
  });

  if (!result) {
    throw new Error(
      "No pude detectar un QR válido en la imagen. " +
      "Prueba con una imagen más nítida, frontal y con margen blanco alrededor.",
    );
  }

  return {
    data: result.data,
    binaryData: Array.from(result.binaryData),
    sourceWidth: width,
    sourceHeight: height,
  };
}`},{title:`Matriz compartible empaquetada por bits`,language:`TypeScript`,description:`Comprime cada módulo del QR en un bit y convierte el resultado a Base64 URL-safe, evitando incluir el archivo original en el enlace compartido.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 1fedc2a · src/features/share/share-payload.ts, líneas 51–68.`,sourceUrl:`https://github.com/Luics415/QRVoxelStudio/blob/1fedc2a963159fbb693abe25e7b1e6fa8d55ffac/src/features/share/share-payload.ts#L51-L68`,code:`function packMatrix(matrix: QRMatrix) {
  const size = matrix.length;
  const totalBits = size * size;
  const bytes = new Uint8Array(Math.ceil(totalBits / 8));
  let bitIndex = 0;

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      if (matrix[row]?.[col]) {
        const byteIndex = Math.floor(bitIndex / 8);
        const shift = 7 - (bitIndex % 8);
        bytes[byteIndex] |= 1 << shift;
      }
      bitIndex += 1;
    }
  }

  return bytesToBase64Url(bytes);
}`},{title:`Morph 3D con presupuesto de actualización`,language:`TypeScript · React Three Fiber`,description:`Deriva las fases de la transición bosque–QR y limita las actualizaciones pesadas según dispositivo y estado para equilibrar fluidez y consumo.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 1fedc2a · src/components/visual/qr-forest-3d.tsx, líneas 1290–1310.`,sourceUrl:`https://github.com/Luics415/QRVoxelStudio/blob/1fedc2a963159fbb693abe25e7b1e6fa8d55ffac/src/components/visual/qr-forest-3d.tsx#L1290-L1310`,code:`useFrame(({ clock }) => {
  const morph = smoother(progress);
  const moduleReveal = smoothstep(0.46, 0.88, morph);
  const qrLock = smoothstep(0.82, 0.99, morph);
  const organic = 1 - smoothstep(0.2, 0.72, morph);
  const leafFade = 1 - smoothstep(0.93, 0.996, morph);
  const trunkFade = 1 - smoothstep(0.56, 0.82, morph);

  if (worldRef.current) {
    worldRef.current.position.y =
      Math.sin(clock.elapsedTime * 0.48) * 0.08 *
      (1 - smoothstep(0.32, 0.8, morph));
  }

  const transitioning = progress > 0.015 && progress < 0.985;
  const minHeavyFrame = transitioning
    ? quality === "mobile" ? 1 / 22 : 1 / 30
    : quality === "mobile" ? 1 / 16 : 1 / 24;
  if (clock.elapsedTime - lastHeavyFrameRef.current < minHeavyFrame) return;
  lastHeavyFrameRef.current = clock.elapsedTime;
});`}],aussiecare:[{title:`Actualización controlada de la PWA`,language:`TypeScript · React`,description:`Registra el Service Worker respetando el subdirectorio de GitHub Pages, evita reutilizar una versión cacheada del propio worker y detecta cuándo existe un núcleo offline nuevo listo para activar.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 083c6c8 · app/service-worker-registration.tsx, líneas 32–44.`,sourceUrl:`https://github.com/Luics415/AussieCare/blob/083c6c8e08954fd1cc917fe8e5323477b34d36cd/app/service-worker-registration.tsx#L32-L44`,code:`navigator.serviceWorker.register(withBasePath('/sw.js'), {
  scope: withBasePath('/'),
  updateViaCache: 'none'
}).then(async (registration) => {
  registrationRef.current = registration;
  if (registration.waiting) setUpdateReady(true);
  registration.addEventListener('updatefound', () => {
    const worker = registration.installing;
    if (!worker) return;
    worker.addEventListener('statechange', () => {
      if (worker.state === 'installed' && navigator.serviceWorker.controller) {
        setUpdateReady(true);
      }
    });
  });
  const ready = await navigator.serviceWorker.ready;
  ready.active?.postMessage({ type: 'GET_CORE_STATUS' });
}).catch(() => emitStatus('unavailable'));`},{title:`Scroll cinematográfico limitado al viewport`,language:`TypeScript · React`,description:`Combina geometría, requestAnimationFrame, IntersectionObserver, umbral de actualización y escucha pasiva para no calcular escenas lejanas ni provocar varios renders durante un mismo cuadro.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 083c6c8 · app/use-scene-progress.ts, líneas 41–64.`,sourceUrl:`https://github.com/Luics415/AussieCare/blob/083c6c8e08954fd1cc917fe8e5323477b34d36cd/app/use-scene-progress.ts#L41-L64`,code:`const next = clamp(-rect.top / Math.max(1, section.offsetHeight - innerHeight));
const nextState: SceneState =
  rect.top > 0 ? 'before' : rect.bottom < innerHeight ? 'after' : 'active';

if (Math.abs(next - progressRef.current) > .0005) {
  progressRef.current = next;
  setProgress(next);
}
if (nextState === 'active') progressCallbackRef.current(next);

const onScroll = () => {
  if (!nearScene) return;
  if (!frame) frame = requestAnimationFrame(() => update());
};
const observer = new IntersectionObserver(([entry]) => {
  nearScene = entry.isIntersecting;
  update(true);
}, { rootMargin });

observer.observe(section);
addEventListener('scroll', onScroll, { passive: true });`}],"dev-visualizer":[{title:`Manifiesto central con invariantes ejecutables`,language:`TypeScript`,description:`El catálogo funciona como fuente única de verdad y falla temprano si cambia el número esperado de colecciones o aparecen identificadores y rutas en conflicto.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 4053f8c · src/data/collectionManifest.ts, líneas 95–114.`,sourceUrl:`https://github.com/Luics415/Dev-Visualizer/blob/4053f8ce2253b1615db3c52dd03239ef5490102b/src/data/collectionManifest.ts#L95-L114`,code:`function validateCollectionManifest() {
  if (collectionManifest.length !== 39) {
    throw new Error(\`El manifiesto debe contener 39 colecciones; contiene \${collectionManifest.length}.\`);
  }
  const ids = new Set<string>();
  const routes = new Set<string>();

  for (const collection of collectionManifest) {
    if (ids.has(collection.id)) {
      throw new Error(\`ID de colección duplicado: \${collection.id}\`);
    }
    ids.add(collection.id);

    for (const path of [collection.href, collection.actionHref]) {
      if (routes.has(path)) throw new Error(\`Ruta canónica duplicada: \${path}\`);
      if (!path.startsWith('/')) throw new Error(\`Ruta no absoluta: \${path}\`);
      routes.add(path);
    }
  }
}`},{title:`Máquina de reproducción accesible`,language:`TypeScript · React`,description:`Una escena solo se anima si está visible, la pestaña permanece activa y el visitante no solicitó movimiento reducido; los estados explícitos también facilitan pruebas.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 4053f8c · src/components/visual/useScenePlayback.ts, líneas 13–28.`,sourceUrl:`https://github.com/Luics415/Dev-Visualizer/blob/4053f8ce2253b1615db3c52dd03239ef5490102b/src/components/visual/useScenePlayback.ts#L13-L28`,code:`export function useScenePlayback(ref: RefObject<HTMLElement | null>) {
  const inView = useInView(ref, { amount: 0.08, margin: '0px' });
  const reducedMotion = useReducedMotion();
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const syncVisibility = () =>
      setPageVisible(document.visibilityState === 'visible');
    syncVisibility();
    document.addEventListener('visibilitychange', syncVisibility);
    return () => document.removeEventListener('visibilitychange', syncVisibility);
  }, []);

  const shouldAnimate = inView && pageVisible && !reducedMotion;
  const playback = reducedMotion ? 'reduced' : shouldAnimate ? 'running' : 'resting';
  return { playback, shouldAnimate } as const;
}`}],"palabra-y-oracion":[{title:`Captura de rutas profundas desde 404`,language:`JavaScript · HTML`,description:`Convierte una ruta que GitHub Pages no reconoce en un parámetro seguro y devuelve al punto de entrada de la SPA sin perder query ni hash.`,provenance:`verified-repository`,sourceLabel:`Código real del artefacto público · commit 38beb16 · 404.html, líneas 9–16.`,sourceUrl:`https://github.com/Luics415/palabra-y-oracion/blob/38beb166729a4fa38af8f86fbac5830b5cc2ec34/404.html#L9-L16`,code:`<script>
  (function () {
    var base = '/palabra-y-oracion/';
    var route = location.pathname.slice(base.length - 1)
      + location.search
      + location.hash;
    location.replace(base + '?__route=' + encodeURIComponent(route));
  }());
<\/script>`},{title:`Restauración de ruta al cargar la SPA`,language:`JavaScript · HTML`,description:`Recupera la ruta codificada, reemplaza la URL sin recargar el documento y emite popstate para devolver el control al router del cliente.`,provenance:`verified-repository`,sourceLabel:`Código real del artefacto público · commit 38beb16 · index.html, líneas 11–23. El retardo fijo es una solución pragmática pendiente de una señal explícita del router.`,sourceUrl:`https://github.com/Luics415/palabra-y-oracion/blob/38beb166729a4fa38af8f86fbac5830b5cc2ec34/index.html#L11-L23`,code:`<script>
  (function () {
    var params = new URLSearchParams(location.search);
    var route = params.get('__route');
    if (!route) return;

    window.addEventListener('load', function () {
      setTimeout(function () {
        history.replaceState({}, '', '/palabra-y-oracion' + decodeURIComponent(route));
        dispatchEvent(new PopStateEvent('popstate'));
      }, 750);
    });
  }());
<\/script>`}],"sistema-becas":[{title:`Consulta parametrizada y verificación de credenciales`,language:`PHP`,description:`La búsqueda limita el acceso a usuarios activos, usa parámetros en vez de interpolar el correo y verifica el hash mediante la API nativa de PHP.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 1e54016 · models/UsuarioModel.php, líneas 10–29.`,sourceUrl:`https://github.com/Luics415/sistema-becas/blob/1e54016698ffa942da4d2ce223557ce1cbb7cbc4/models/UsuarioModel.php#L10-L29`,code:`public function findByEmail(string $email): ?array
{
    $stmt = $this->db->query(
        'SELECT u.*, r.nombre AS rol_nombre
         FROM usuarios u
         JOIN roles r ON r.id = u.rol_id
         WHERE u.email = ? AND u.activo = 1
         LIMIT 1',
        [$email]
    );
    $row = $stmt->fetch();
    return $row ?: null;
}

public function autenticar(string $email, string $password): ?array
{
    $user = $this->findByEmail($email);
    if (!$user) return null;
    if (!password_verify($password, $user['password_hash'])) return null;
    return $user;
}`},{title:`Transición de estado condicionada y auditable`,language:`PHP`,description:`El envío solo ocurre si coinciden ID, propietario y estado anterior; después comprueba las filas afectadas y registra evidencia en el historial.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 1e54016 · models/SolicitudModel.php, líneas 149–161. La siguiente mejora sería envolver actualización e historial en una transacción.`,sourceUrl:`https://github.com/Luics415/sistema-becas/blob/1e54016698ffa942da4d2ce223557ce1cbb7cbc4/models/SolicitudModel.php#L149-L161`,code:`public function enviar(int $id, int $usuarioId): bool
{
    $stmt = $this->db->query(
        "UPDATE solicitudes SET estado = 'enviada', fecha_envio = NOW()
         WHERE id = ? AND usuario_id = ? AND estado = 'borrador'",
        [$id, $usuarioId]
    );
    if ($stmt->rowCount() > 0) {
        $this->registrarHistorial(
            $id, 'borrador', 'enviada',
            'Solicitud enviada por el alumno.', $usuarioId
        );
        return true;
    }
    return false;
}`}],anchorgrid:[{title:`Indexación de aristas bloqueadas O(1) y validador BFS`,language:`TypeScript`,description:`Precalcula un conjunto de aristas restringidas para que la comprobación de camino de victoria hacia la meta en cada colocación de muro se realice en tiempo O(1) sin degradar los FPS.`,provenance:`verified-repository`,sourceLabel:`Código real del proyecto · src/game/pathfinding.ts, líneas 25–51.`,sourceUrl:`https://github.com/Luics415/AnchorGrid/blob/main/src/game/pathfinding.ts#L25-L51`,code:`function buildBlockedEdges(walls: Wall[]) {
  const blocked = new Set<string>();

  for (const wall of walls) {
    if (wall.orientation === 'horizontal') {
      blocked.add(edgeKey(
        { row: wall.row, col: wall.col },
        { row: wall.row + 1, col: wall.col }
      ));
      blocked.add(edgeKey(
        { row: wall.row, col: wall.col + 1 },
        { row: wall.row + 1, col: wall.col + 1 }
      ));
    } else {
      blocked.add(edgeKey(
        { row: wall.row, col: wall.col },
        { row: wall.row, col: wall.col + 1 }
      ));
      blocked.add(edgeKey(
        { row: wall.row + 1, col: wall.col },
        { row: wall.row + 1, col: wall.col + 1 }
      ));
    }
  }

  return blocked;
}`},{title:`Comunicación asíncrona con el Web Worker de IA`,language:`TypeScript · Web Workers`,description:`Despacha el cálculo del árbol Minimax con poda alpha-beta a un sub-proceso aislado en segundo plano para mantener la renderización del tablero a 60-120 FPS.`,provenance:`verified-repository`,sourceLabel:`Código real del proyecto · src/ai/client.ts, líneas 15–38.`,sourceUrl:`https://github.com/Luics415/AnchorGrid/blob/main/src/ai/client.ts#L15-L38`,code:`export function requestAiMove(
  state: GameState,
  difficulty: AiDifficulty,
  seat: Seat
): Promise<AiMoveResult> {
  return new Promise((resolve) => {
    const worker = getOrCreateWorker();
    const requestId = crypto.randomUUID();

    const handler = (e: MessageEvent<AiResponse>) => {
      if (e.data.requestId === requestId) {
        worker.removeEventListener('message', handler);
        resolve(e.data.result);
      }
    };

    worker.addEventListener('message', handler);
    worker.postMessage({ type: 'COMPUTE_MOVE', requestId, state, difficulty, seat });
  });
}`}],"bio-gesture-control":[{title:`Menú radial por coordenadas polares y permanencia`,language:`Python`,description:`Transforma la posición del pulgar en ángulo y radio, divide 360 grados en ocho sectores y exige 1.2 segundos de permanencia antes de ejecutar una opción.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 6e3c944 · control.py, líneas 223–241.`,sourceUrl:`https://github.com/Luics415/Bio-Gesture-Control-Pro/blob/6e3c944087269b935bd9a237d076ff890c55b4ee/control.py#L223-L241`,code:`ang_p = np.arctan2(int(pulgar.y*h)-cy, int(pulgar.x*w)-cx)
if ang_p < 0: ang_p += 2*np.pi
dist_p = np.hypot(int(pulgar.x*w)-cx, int(pulgar.y*h)-cy)

for i in range(8):
    rad = np.deg2rad(i * 45)
    tx = int(cx + RADIO_MENU_ICONOS*np.cos(rad))
    ty = int(cy + RADIO_MENU_ICONOS*np.sin(rad))
    label = self.opciones_actuales[i]
    if dist_p > 40 and np.deg2rad(i*45-22.5) < ang_p < np.deg2rad(i*45+22.5):
        if self.opcion_actual != i:
            self.opcion_actual = i
            self.inicio_seleccion = t_actual
        progreso = t_actual - self.inicio_seleccion
        if progreso >= 1.2:
            self.ejecutar_comando_pro(label)
            self.inicio_seleccion = t_actual + 1`},{title:`Suavizado y máquina mínima de clic/arrastre`,language:`Python`,description:`Interpola landmarks a píxeles, aplica suavizado exponencial y utiliza la duración de la pinza para distinguir clic de arrastre; una segunda pinza produce clic contextual con cooldown.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 6e3c944 · control.py, líneas 272–290. El mapeo fijo 1920×1080 muestra el carácter experimental de esta versión.`,sourceUrl:`https://github.com/Luics415/Bio-Gesture-Control-Pro/blob/6e3c944087269b935bd9a237d076ff890c55b4ee/control.py#L272-L290`,code:`mx = np.interp(indice.x, [0.1, 0.9], [0, 1920])
my = np.interp(indice.y, [0.1, 0.9], [0, 1080])
self.prev_x += (mx - self.prev_x) / self.SUAVIZADO
self.prev_y += (my - self.prev_y) / self.SUAVIZADO
mouse.position = (self.prev_x, self.prev_y)

if dist_izq < 0.035:
    if self.inicio_pinza == 0: self.inicio_pinza = t_actual
    if (t_actual - self.inicio_pinza) > 0.3 and not self.arrastrando:
        mouse.press(Button.left)
        self.arrastrando = True
else:
    if self.arrastrando:
        mouse.release(Button.left)
        self.arrastrando = False
    if 0 < (t_actual - self.inicio_pinza) < 0.3:
        mouse.click(Button.left, 1)
    self.inicio_pinza = 0`}],"bio-gesture-control-android":[{title:`Transición determinista de pinza a clic o arrastre`,language:`Kotlin`,description:`Una máquina de estados confirma la liberación durante una ventana estable, emite Tap dentro del intervalo válido y promueve a Dragging al superar el tiempo de sostenimiento.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 9f21160 · gesture/GestureEngine.kt, líneas 334–355.`,sourceUrl:`https://github.com/Luics415/Bio-Gesture-Control-Android/blob/9f21160af2882fa9cc0fede86735a2d57ef8717f/app/src/main/java/com/luics415/biogesture/gesture/GestureEngine.kt#L334-L355`,code:`is Interaction.PrimaryCandidate -> when {
    contextClosed -> interaction = Interaction.Ambiguous()
    primaryReleased -> {
        val releaseStartedAt = current.releaseStartedAtMs ?: timestampMs
        if (timestampMs - releaseStartedAt >= thresholds.pinchReleaseConfirmMs) {
            val heldFor = releaseStartedAt - current.startedAtMs
            if (heldFor >= thresholds.primaryClickMinMs &&
                heldFor < thresholds.primaryDragHoldMs
            ) effects += GestureEffect.Tap(current.anchor)
            interaction = Interaction.Neutral
        } else interaction = current.copy(releaseStartedAtMs = releaseStartedAt)
    }
    timestampMs - current.startedAtMs >= thresholds.primaryDragHoldMs -> {
        effects += GestureEffect.DragStarted(current.anchor)
        if (indexTip != current.anchor) effects += GestureEffect.DragMoved(indexTip)
        interaction = Interaction.Dragging(indexTip)
    }
}`},{title:`Continuidad del arrastre mediante segmentos serializados`,language:`Kotlin · Android`,description:`Continúa un StrokeDescription solo cuando existe desplazamiento significativo; evita inundar AccessibilityService con un gesto por cuadro y limpia el estado si Android rechaza la continuación.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 9f21160 · AccessibilityGestureDispatcher.kt, líneas 101–120.`,sourceUrl:`https://github.com/Luics415/Bio-Gesture-Control-Android/blob/9f21160af2882fa9cc0fede86735a2d57ef8717f/app/src/main/java/com/luics415/biogesture/AccessibilityGestureDispatcher.kt#L101-L120`,code:`private fun dispatchNextDragSegment() {
    val previousStroke = activeStroke
        ?: return clearDragState(notifyUnexpected = !finishRequested)
    val from = dispatchedEndPoint
        ?: return clearDragState(notifyUnexpected = !finishRequested)
    val to = latestTarget ?: from
    val finalSegment = finishRequested

    val path = Path().apply {
        moveTo(from.x, from.y)
        if (abs(from.x - to.x) >= 0.5f || abs(from.y - to.y) >= 0.5f) {
            lineTo(to.x, to.y)
        }
    }
    val continued = previousStroke.continueStroke(
        path, 0, DRAG_SEGMENT_MS, !finalSegment
    )
    activeStroke = continued
}`}],"kasa-service-tracker":[{title:`Invariantes de flujo y bitácora por transición`,language:`C#`,description:`Impide regresiones y cambios idempotentes, normaliza la nota, agrega un evento trazable y sincroniza persistencia más exportación después de una transición válida.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 8c38c57 · Services/ServiceOrderService.cs, líneas 150–171.`,sourceUrl:`https://github.com/Luics415/KASA-Service-Tracker/blob/8c38c57699f70d8de831746c13901e16dd4919c6/src/KasaServiceTracker/Services/ServiceOrderService.cs#L150-L171`,code:`if ((int)newStatus < (int)order.Status) {
    throw new InvalidOperationException(
        "El flujo de servicio no permite regresar a un estado anterior.");
}
if (newStatus == order.Status) {
    throw new InvalidOperationException("La orden ya se encuentra en ese estado.");
}

order.Status = newStatus;
order.History.Add(new StatusChange {
    Status = newStatus,
    ChangedAt = DateTime.Now,
    Note = string.IsNullOrWhiteSpace(note)
        ? "CAMBIO DE ESTADO."
        : Upper(note.Trim())
});

_repository.SaveAll(orders);
_exporter?.ExportAll(orders);`},{title:`Generación nativa de XLSX con archivo temporal`,language:`C# · OOXML`,description:`Construye el paquete OOXML como ZIP, incluye hojas separadas para órdenes e historial y solo sustituye el libro final después de cerrar correctamente el temporal.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 8c38c57 · Services/MonthlyExcelExportService.cs, líneas 29–48.`,sourceUrl:`https://github.com/Luics415/KASA-Service-Tracker/blob/8c38c57699f70d8de831746c13901e16dd4919c6/src/KasaServiceTracker/Services/MonthlyExcelExportService.cs#L29-L48`,code:`private static void WriteWorkbook(string path, IReadOnlyList<ServiceOrder> orders)
{
    var temporaryPath = path + ".tmp";
    if (File.Exists(temporaryPath)) File.Delete(temporaryPath);

    using (var archive = ZipFile.Open(temporaryPath, ZipArchiveMode.Create)) {
        Add(archive, "[Content_Types].xml", ContentTypes);
        Add(archive, "_rels/.rels", RootRelationships);
        Add(archive, "xl/workbook.xml", Workbook);
        Add(archive, "xl/_rels/workbook.xml.rels", WorkbookRelationships);
        Add(archive, "xl/styles.xml", Styles);
        Add(archive, "xl/worksheets/sheet1.xml", BuildOrdersSheet(orders));
        Add(archive, "xl/worksheets/sheet2.xml", BuildHistorySheet(orders));
    }

    File.Move(temporaryPath, path, overwrite: true);
}`}],"tlalne-priority":[{title:`Puntuación explicable y sensible a antigüedad`,language:`C++20`,description:`Combina riesgo, reportes, días abiertos y peso del tipo; limita las señales que podrían dominar, acota el total a 0–100 y lo traduce a una clase operativa.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit a6eb898 · services/PriorityCalculator.cpp, líneas 17–33.`,sourceUrl:`https://github.com/Luics415/Tlalne-Priority/blob/a6eb898debf967c9c129146005550b9da9f0c77f/src/services/PriorityCalculator.cpp#L17-L33`,code:`int PriorityCalculator::calculate(
    const Incident& incident,
    std::chrono::system_clock::time_point now
) {
    const auto ageHours = std::max<long long>(0,
        std::chrono::duration_cast<std::chrono::hours>(
            now - incident.createdAt
        ).count());
    const int ageDays = static_cast<int>(ageHours / 24);
    const int score = incident.risk * 10
        + std::min(20, incident.citizenReports * 2)
        + std::min(15, ageDays)
        + typeWeight(incident.type);
    return std::clamp(score, 0, 100);
}`},{title:`Persistencia CSV por staging y reemplazo controlado`,language:`C++20`,description:`Escribe la bitácora en un temporal, termina los archivos y después intercambia incidencias e historial con comprobación explícita de errores.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit a6eb898 · repositories/IncidentRepository.cpp, líneas 105–119.`,sourceUrl:`https://github.com/Luics415/Tlalne-Priority/blob/a6eb898debf967c9c129146005550b9da9f0c77f/src/repositories/IncidentRepository.cpp#L105-L119`,code:`{
    std::ofstream out(historyTmp, std::ios::trunc);
    if (!out) throw std::runtime_error("NO SE PUDO GUARDAR HISTORIAL.CSV.");
    out << "FOLIO,FECHA_HORA,EVENTO,NOTA\\n";
    for (const auto& i : incidents)
        for (const auto& h : i.history)
            out << escapeCsv(h.folio) << ','
                << escapeCsv(timeToString(h.timestamp)) << ','
                << escapeCsv(h.event) << ',' << escapeCsv(h.note) << '\\n';
}
std::error_code ec;
std::filesystem::remove(incidentsPath_, ec); ec.clear();
std::filesystem::rename(incidentsTmp, incidentsPath_, ec);
if (ec) throw std::runtime_error("NO SE PUDO REEMPLAZAR INCIDENCIAS.CSV.");`}],"gx-pets":[{title:`Bucle resiliente con delta temporal acotado`,language:`TypeScript`,description:`Limita el salto temporal después de suspender la pestaña, captura fallos por cuadro y vuelve a programar el ciclo desde finally para que una excepción no detenga la simulación permanentemente.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 0f6e089 · src/engine/game-loop.ts, líneas 69–87.`,sourceUrl:`https://github.com/Luics415/GX-Pets/blob/0f6e089029933246b62c7c8870c9e210943de2a4/src/engine/game-loop.ts#L69-L87`,code:`private scheduleNext(): void {
    if (!this.started) return;
    this.frameHandle = this.scheduler.request(this.onFrame);
}

private readonly onFrame = (timestamp: number): void => {
    if (!this.started) return;
    this.frameHandle = undefined;
    const previous = this.previousTimestamp ?? timestamp;
    const deltaMs = Math.min(
        this.maxDeltaMs,
        Math.max(0, timestamp - previous)
    );
    this.previousTimestamp = timestamp;
    try {
        this.update(deltaMs);
    } catch (error) {
        this.onError?.(error);
    } finally {
        this.scheduleNext();
    }
};`},{title:`Snapshot versionado y validado en el borde`,language:`TypeScript`,description:`Desacopla el motor de la API de almacenamiento y trata el JSON como unknown hasta comprobar versión y estructura mínima antes de admitirlo como estado del motor.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 0f6e089 · src/persistence/storage.ts, líneas 15–35.`,sourceUrl:`https://github.com/Luics415/GX-Pets/blob/0f6e089029933246b62c7c8870c9e210943de2a4/src/persistence/storage.ts#L15-L35`,code:`async load(): Promise<EngineSnapshot | undefined> {
    const value = await this.read();
    if (!value) return undefined;
    const parsed: unknown = JSON.parse(value);
    if (!isEngineSnapshot(parsed)) {
        throw new Error('Stored GX Pets snapshot is invalid.');
    }
    return parsed;
}

save(snapshot: EngineSnapshot): Promise<void> {
    return this.write(JSON.stringify(snapshot));
}

function isEngineSnapshot(value: unknown): value is EngineSnapshot {
    if (!value || typeof value !== 'object') return false;
    const candidate = value as { version?: unknown; pets?: unknown };
    return candidate.version === 1 && Array.isArray(candidate.pets);
}`}],"gx-pets-army":[{title:`Bóveda privada de música en IndexedDB`,language:`JavaScript`,description:`Mantiene audio personal solo en el dispositivo, crea el almacén durante la migración de esquema, reutiliza la conexión y responde a cambios de versión.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 56fbc44 · apps/opera-sidebar/src/sidebar.js, líneas 610–627.`,sourceUrl:`https://github.com/Luics415/GX-Pets-ARMY-Edition/blob/56fbc445405251cdece80f6c88b96b5ac0315404/apps/opera-sidebar/src/sidebar.js#L610-L627`,code:`function openPrivateMusicVault() {
    if (privateMusicDatabase) return Promise.resolve(privateMusicDatabase);
    if (!globalThis.indexedDB) {
        return Promise.reject(new Error('IndexedDB no está disponible'));
    }
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(MUSIC_VAULT_DB, MUSIC_VAULT_VERSION);
        request.onupgradeneeded = () => {
            const database = request.result;
            if (!database.objectStoreNames.contains(MUSIC_VAULT_STORE)) {
                database.createObjectStore(MUSIC_VAULT_STORE, { keyPath: 'key' });
            }
        };
        request.onsuccess = () => {
            privateMusicDatabase = request.result;
            privateMusicDatabase.onversionchange = () => privateMusicDatabase.close();
            resolve(privateMusicDatabase);
        };
        request.onerror = () => reject(request.error);
    });
}`},{title:`Caché offline consciente de privacidad`,language:`JavaScript · Service Worker`,description:`Aplica fallback offline para navegación, usa cache-first para el shell y excluye explícitamente el audio desbloqueable de la caché compartida.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 56fbc44 · apps/opera-sidebar/src/service-worker.js, líneas 29–48.`,sourceUrl:`https://github.com/Luics415/GX-Pets-ARMY-Edition/blob/56fbc445405251cdece80f6c88b96b5ac0315404/apps/opera-sidebar/src/service-worker.js#L29-L48`,code:`self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin ||
      url.pathname.includes('/assets/audio/unlockable/')) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match('./sidebar.html')));
    return;
  }

  event.respondWith(caches.match(request).then((cached) =>
    cached || fetch(request).then((response) => {
      if (!response || response.status !== 200 || response.type === 'opaque') {
        return response;
      }
      const copy = response.clone();
      void caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
      return response;
    })
  ));
});`}],"eternal-mazes-rpg":[{title:`Arranque del juego dentro de NW.js`,language:`JSON · NW.js`,description:`Dirige el contenedor de escritorio a la aplicación web local y fija toolbar, resolución, icono y banderas de JavaScript para distribuir la build de Windows.`,provenance:`verified-repository`,sourceLabel:`Configuración real del repositorio · commit fb54de9 · package.json, líneas 3–10. El título vacío queda registrado como deuda de empaquetado.`,sourceUrl:`https://github.com/Luics415/EternalMazesRPG-Windows/blob/fb54de9e659dccb079d195d040d2a9f502c91eea/package.json#L3-L10`,code:`{
  "main": "www/index.html",
  "js-flags": "--expose-gc",
  "window": {
    "title": "",
    "toolbar": false,
    "width": 816,
    "height": 624,
    "icon": "www/icon/icon.png"
  }
}`},{title:`Traducción legible del evento de día y noche`,language:`JavaScript conceptual`,description:`Expone como una tabla legible las comparaciones temporales y los cuatro tintes declarados en el evento común de RPG Maker MV.`,provenance:`representative`,sourceLabel:`Reconstrucción conceptual del evento 10 declarado en www/data/CommonEvents.json; no es un extracto literal ni código del motor RPG Maker.`,sourceUrl:`https://github.com/Luics415/EternalMazesRPG-Windows/blob/fb54de9e659dccb079d195d040d2a9f502c91eea/www/data/CommonEvents.json#L12`,code:`const TONE_BY_PHASE = new Map([
  [0, [-68, -68,   0, 68]],
  [3, [-35, -68, -68, 50]],
  [6, [  0,   0,   0,  0]],
  [9, [-35, -68, -68, 50]],
]);

function applyDayNightCycle(hour, screen) {
  const tone = TONE_BY_PHASE.get(hour);
  if (!tone) return;
  screen.tint(tone, 60);
}`}],"eternal-mazes-rpg-android":[{title:`Política inmersiva del contenedor Cordova`,language:`XML · Cordova`,description:`Fija orientación horizontal, pantalla completa, tratamiento de la barra de estado, documento inicial e intents permitidos para la envoltura Android.`,provenance:`verified-repository`,sourceLabel:`Configuración real del repositorio · commit 9262b59 · config.xml, líneas 8–15.`,sourceUrl:`https://github.com/Luics415/EternalMazesRPG-Android/blob/9262b59fcb456e483ee7a67831d3b6f59187646f/config.xml#L8-L15`,code:`<preference name="Orientation" value="landscape" />
<preference name="Fullscreen" value="true" />
<preference name="StatusBarOverlaysWebView" value="true" />
<preference name="StatusBarStyle" value="hidden" />
<content src="index.html" />
<allow-intent href="http://*/*" />
<allow-intent href="https://*/*" />`},{title:`Puente de ciclo de vida móvil`,language:`JavaScript conceptual`,description:`Modela el límite que coordina guardado, pausa y reanudación al envolver el juego web en Android sin duplicar el dominio jugable.`,provenance:`representative`,sourceLabel:`Patrón de integración representativo; no existe como archivo propio verificable en el repositorio actual.`,sourceUrl:`https://github.com/Luics415/EternalMazesRPG-Android/tree/9262b59fcb456e483ee7a67831d3b6f59187646f`,code:`document.addEventListener('deviceready', () => {
  const suspend = async () => {
    await saveStore.flush();
    gameLoop.pause();
  };

  const restore = async () => {
    await saveStore.restore();
    gameLoop.resume();
  };

  document.addEventListener('pause', suspend);
  document.addEventListener('resume', restore);
});`}],"stone-paper-scissors":[{title:`Sincronización de animación, CPU y desbloqueo`,language:`JavaScript`,description:`Mantiene bloqueada la entrada mientras culmina el impacto visual, elige la jugada de CPU y sincroniza DOM, evaluación y reactivación.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 9a85714 · script.js, líneas 96–114.`,sourceUrl:`https://github.com/Luics415/stone-paper-and-scissors/blob/9a857142bdccde7d43e4c9600110bb02244f70d8/script.js#L96-L114`,code:`if (gameCard) {
  gameCard.classList.add('screen-shake');
  setTimeout(() => gameCard.classList.remove('screen-shake'), 300);
}

const choices = Object.keys(HAND_ICONS);
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

playerHand.textContent = HAND_ICONS[playerChoice];
computerHand.textContent = HAND_ICONS[computerChoice];

evaluateWinner(playerChoice, computerChoice);
setButtonsState(false);`},{title:`Reglas declarativas y efectos por resultado`,language:`JavaScript`,description:`Usa WINNING_RULES como tabla de decisión y asocia cada desenlace con marcador, color y retroalimentación visual diferenciada.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 9a85714 · script.js, líneas 116–135.`,sourceUrl:`https://github.com/Luics415/stone-paper-and-scissors/blob/9a857142bdccde7d43e4c9600110bb02244f70d8/script.js#L116-L135`,code:`function evaluateWinner(player, computer) {
  if (player === computer) {
    statusMsg.textContent = '¡EMPATE! 🤝';
    statusMsg.style.color = '#fde047';
    spawnBackgroundTaunt(TAUNTS_DRAW, 'taunt-draw');
  } else if (WINNING_RULES[player] === computer) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    statusMsg.textContent = '¡GANASTE LA RONDA! 🎉';
    burstParticles();
    spawnBackgroundTaunt(TAUNTS_CPU_LOSE, 'taunt-frustrated');
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    statusMsg.textContent = '¡GANA LA CPU! 🤖';
    spawnBackgroundTaunt(TAUNTS_CPU_WIN, 'taunt-taunt');
  }
}`}],"gatitos-app":[{title:`Proxy Flask con timeout y contrato JSON`,language:`Python · Flask`,description:`Evita exponer TheCatAPI directamente a la vista, establece un timeout de red y normaliza éxito o fallo mediante un contrato JSON propio.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 7ff90f8 · app.py, líneas 16–35.`,sourceUrl:`https://github.com/Luics415/gatitos-app/blob/7ff90f81bc638e0b25fd71ee28b15dc74cee52ba/app.py#L16-L35`,code:`@app.route('/api/cats/random', methods=['GET'])
def get_random_cat():
  try:
    headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
    response = requests.get(CAT_API_URL, headers=headers, timeout=10)

    if response.status_code == 200:
      data = response.json()
      return jsonify({
        'success': True,
        'url': data[0]['url'],
        'id': data[0]['id']
      })

    return jsonify({
      'success': False,
      'message': 'Respuesta no válida de la API'
    }), 500`},{title:`Colección local idempotente`,language:`JavaScript`,description:`Implementa una transición agregar/eliminar sin duplicados y persiste la colección de favoritos únicamente en el dispositivo.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · commit 7ff90f8 · templates/index.html, líneas 317–328.`,sourceUrl:`https://github.com/Luics415/gatitos-app/blob/7ff90f81bc638e0b25fd71ee28b15dc74cee52ba/templates/index.html#L317-L328`,code:`btnFav.addEventListener('click', () => {
  const currentUrl = history[currentIndex];
  if (!currentUrl) return;

  if (favorites.includes(currentUrl)) {
    favorites = favorites.filter((url) => url !== currentUrl);
  } else {
    favorites.push(currentUrl);
  }

  localStorage.setItem('cat_favs', JSON.stringify(favorites));
  updateButtons();
});`}],"cubo-rubik":[{title:`Interpretación de notación de movimientos`,language:`JavaScript conceptual`,description:`Ilustra el patrón geométrico de convertir una notación de cara en eje, capa y ángulo sin copiar el motor externo integrado por el proyecto.`,provenance:`external-base`,sourceLabel:`Patrón conceptual para explicar una integración basada en “The Cube” de bsehovac. No es código original de Luics415 ni un extracto del motor externo.`,sourceUrl:`https://codepen.io/bsehovac/pen/EMyWVv`,code:`const FACE_RULES = {
  U: { axis: 'y', layer:  1, sign:  1 },
  D: { axis: 'y', layer: -1, sign: -1 },
  L: { axis: 'x', layer: -1, sign:  1 },
  R: { axis: 'x', layer:  1, sign: -1 },
  F: { axis: 'z', layer:  1, sign: -1 },
  B: { axis: 'z', layer: -1, sign:  1 },
};

function parseMove(token) {
  const rule = FACE_RULES[token[0]];
  const turns = token.includes('2') ? 2 : 1;
  const inverse = token.includes("'") ? -1 : 1;
  return {
    ...rule,
    radians: rule.sign * inverse * turns * Math.PI / 2,
  };
}`},{title:`Orquestación conceptual al completar el cubo`,language:`JavaScript conceptual`,description:`Explica la coordinación observable entre detección, controles, temporizador, sesión y puntuación sin adjudicarse la implementación de la base externa.`,provenance:`external-base`,sourceLabel:`Patrón conceptual con atribución explícita a la base externa “The Cube” de bsehovac; no es código literal del repositorio.`,sourceUrl:`https://codepen.io/bsehovac/pen/EMyWVv`,code:`function completeIfSolved(context) {
  if (!context.cube.isSolved()) return false;

  context.controls.disable();
  context.timer.stop();
  context.storage.clearSession();
  context.scores.record(context.timer.elapsed);
  context.setMode('complete');
  context.effects.startConfetti();

  return true;
}`}],"multiple-window-3d-scene":[{title:`Sincronización inter-ventana vía eventos de storage`,language:`JavaScript`,description:`Detecta modificaciones del registro de ventanas en localStorage desde cualquier otra instancia y actualiza el árbol de entidades 3D en tiempo real.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · WindowManager.js, líneas 15–38.`,sourceUrl:`https://github.com/Luics415/multipleWindow3dScene/blob/main/WindowManager.js`,code:`// Escucha cuando el localStorage cambia desde otra ventana
window.addEventListener("storage", (event) => {
  if (event.key === "windows") {
    const newWindows = JSON.parse(event.newValue);
    const winChange = that.#didWindowsChange(that.#windows, newWindows);

    that.#windows = newWindows;

    if (winChange) {
      if (that.#winChangeCallback) that.#winChangeCallback();
    }
  }
});

// Desregistro ordenado al cerrar la ventana actual
window.addEventListener("beforeunload", () => {
  const index = that.getWindowIndexFromId(that.#id);
  that.#windows.splice(index, 1);
  that.updateWindowsLocalStorage();
});`},{title:`Modulación de partículas mediante análisis de frecuencias`,language:`JavaScript · Web Audio API`,description:`Obtiene las amplitudes del espectro de audio mediante un AnalyserNode y escala la velocidad y dispersión de las partículas Three.js.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · main.js.`,sourceUrl:`https://github.com/Luics415/multipleWindow3dScene`,code:`function updateParticlesWithAudio(analyser, dataArray, particleSystem) {
  analyser.getByteFrequencyData(dataArray);

  // Calcula energía media del rango de graves y medios
  let sum = 0;
  for (let i = 0; i < dataArray.length; i++) {
    sum += dataArray[i];
  }
  const averageEnergy = sum / dataArray.length;
  const audioFactor = Math.min(Math.max(averageEnergy / 128, 0.4), 2.5);

  const positions = particleSystem.geometry.attributes.position.array;
  for (let i = 0; i < positions.length; i += 3) {
    positions[i + 1] += Math.sin(Date.now() * 0.002 + i) * 0.2 * audioFactor;
  }
  particleSystem.geometry.attributes.position.needsUpdate = true;
}`}],"credit-card":[{title:`Volteo 3D y seguimiento de foco al campo CVV`,language:`JavaScript · CSS 3D`,description:`Añade la clase de rotación de 180° cuando el campo de seguridad recibe foco y gestiona el marcador visual flotante.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · script.js, líneas 1–28.`,sourceUrl:`https://github.com/Luics415/Credit-Card/blob/main/script.js`,code:`document.getElementById("number").addEventListener("focus", () => {
  document.getElementById("card").classList.remove('flip');
  document.getElementById("highlight").className = 'highlight__number';
});

document.getElementById("holder").addEventListener("focus", () => {
  document.getElementById("card").classList.remove('flip');
  document.getElementById("highlight").className = 'highlight__holder';
});

document.getElementById("cvv").addEventListener("focus", () => {
  document.getElementById("card").classList.add('flip');
  document.getElementById("highlight").className = 'highlight__cvv';
});

document.getElementById("cvv").addEventListener("focusout", () => {
  document.getElementById("card").classList.remove('flip');
  document.getElementById("highlight").className = 'hidden';
});`},{title:`Detección instantánea de franquicia por prefijos BIN`,language:`JavaScript`,description:`Evalúa los primeros dígitos de la tarjeta para identificar en tiempo real la marca bancaria y adaptar logotipos y fondos.`,provenance:`verified-repository`,sourceLabel:`Código real del repositorio · script.js, líneas 30–50.`,sourceUrl:`https://github.com/Luics415/Credit-Card/blob/main/script.js`,code:`function detectCardInfo(number) {
  if (number.length === 0) return { brand: 'default', type: 'CreditCard' };

  // Limpiamos los espacios en blanco
  const num = number.replace(/\\s/g, '');

  // Identificadores de red bancaria (BIN)
  if (/^4/.test(num)) return { brand: 'visa', type: 'VISA' };
  if (/^5[1-5]/.test(num)) return { brand: 'mastercard', type: 'MASTERCARD' };
  if (/^3[47]/.test(num)) return { brand: 'amex', type: 'AMERICAN EXPRESS' };
  if (/^6(?:011|5)/.test(num)) return { brand: 'discover', type: 'DISCOVER' };

  return { brand: 'default', type: 'CreditCard' };
}`}],"break-the-glass":[{title:`Configuración matemática de fractura de cristal`,language:`JavaScript`,description:`Parámetros balísticos de propagación de rayos de fisura, ondas de choque y partículas de vidrio en el punto de impacto.`,provenance:`verified-repository`,sourceLabel:`Código real del proyecto · script.js, objeto CONFIG.`,sourceUrl:`https://github.com/Luics415/break_the_glass`,code:`const CONFIG = {
  crack: {
    rayCountMin: 4,
    rayCountMax: 16,
    maxRadiusMin: 180,
    maxRadiusMax: 340,
    rayLengthMin: 0.55,
    segmentMin: 12,
    segmentMax: 64,
    driftBase: 0.12,
    driftGrowth: 0.22,
    strokeMin: 0.5,
    strokeMax: 1.5,
    branchProbability: 0.35,
  },
  ring: {
    countMin: 3,
    countMax: 6,
    radiusBase: 15,
    radiusStepMin: 25,
    radiusStepMax: 45,
    wobbleRange: 12,
  },
  particle: {
    countMin: 15,
    countMax: 30,
    gravityMin: 250,
    gravityMax: 400,
    rotateMax: 540,
    durationMin: 900,
    durationMax: 1800,
  },
};`},{title:`Despacho de esquirlas con física gravitatoria`,language:`JavaScript · Canvas/SVG`,description:`Proyecta fragmentos de cristal en trayectorias cinéticas calculando velocidad inicial, ángulo de eyección y amortiguación.`,provenance:`verified-repository`,sourceLabel:`Código real del proyecto · script.js, sistema de partículas.`,sourceUrl:`https://github.com/Luics415/break_the_glass`,code:`function spawnGlassShards(impactX, impactY, count, config) {
  const shards = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
    const force = config.particle.forceMin + Math.random() * (config.particle.forceMax - config.particle.forceMin);

    shards.push({
      x: impactX,
      y: impactY,
      vx: Math.cos(angle) * force,
      vy: Math.sin(angle) * force - config.particle.liftOffset,
      rotation: 0,
      vRot: (Math.random() - 0.5) * config.particle.rotateMax,
      gravity: config.particle.gravityMin + Math.random() * 100,
      alpha: 1.0,
    });
  }
  return shards;
}`}]},w=t();function T({title:e,items:t,icon:n,tone:r}){return(0,w.jsxs)(`section`,{className:`rounded-2xl border border-border bg-card/60 p-5 sm:p-6`,children:[(0,w.jsxs)(`h2`,{className:`flex items-center gap-3 font-display text-xl font-bold text-foreground`,children:[(0,w.jsx)(`span`,{className:`inline-flex h-10 w-10 items-center justify-center rounded-xl ${r===`cyan`?`bg-cyan/10 text-cyan`:`bg-magenta/10 text-magenta`}`,children:(0,w.jsx)(n,{className:`h-5 w-5`,"aria-hidden":`true`})}),e]}),(0,w.jsx)(`ul`,{className:`mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground`,children:t.map(e=>(0,w.jsxs)(`li`,{className:`flex gap-3`,children:[(0,w.jsx)(`span`,{className:`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${r===`cyan`?`bg-cyan`:`bg-magenta`}`,"aria-hidden":`true`}),(0,w.jsx)(`span`,{children:e})]},e))})]})}var E={"verified-repository":`border-emerald-300/25 bg-emerald-300/8 text-emerald-100`,"verified-local":`border-cyan/25 bg-cyan/8 text-cyan`,representative:`border-amber-300/25 bg-amber-300/8 text-amber-100`,"external-base":`border-violet-300/25 bg-violet-300/8 text-violet-100`};function D({sample:e}){let t=e.provenance===`verified-repository`;return(0,w.jsxs)(`article`,{className:`technical-evidence-card overflow-hidden rounded-2xl border border-border bg-[oklch(0.14_0.035_260/0.92)]`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background/45 px-5 py-4`,children:[(0,w.jsxs)(`h3`,{className:`flex items-center gap-2 font-display text-lg font-bold text-foreground`,children:[(0,w.jsx)(_,{className:`h-5 w-5 text-cyan`,"aria-hidden":`true`}),e.title]}),(0,w.jsx)(`span`,{className:`rounded-full border border-magenta/30 bg-magenta/10 px-3 py-1 font-mono text-xs text-magenta`,children:e.language})]}),(0,w.jsxs)(`div`,{className:`p-5 sm:p-6`,children:[(0,w.jsx)(`p`,{className:`text-sm leading-relaxed text-muted-foreground`,children:e.description}),(0,w.jsxs)(`div`,{className:`mt-4 flex gap-3 rounded-xl border p-4 text-sm leading-relaxed ${E[e.provenance]}`,children:[t?(0,w.jsx)(f,{className:`mt-0.5 h-5 w-5 shrink-0`,"aria-hidden":`true`}):(0,w.jsx)(S,{className:`mt-0.5 h-5 w-5 shrink-0`,"aria-hidden":`true`}),(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`strong`,{className:`font-semibold`,children:`Procedencia:`}),` `,e.sourceLabel]})]}),(0,w.jsx)(`pre`,{className:`technical-code mt-5 overflow-x-auto rounded-xl border border-border bg-background/80 p-5 text-sm leading-6 text-foreground`,tabIndex:0,"aria-label":`Código de ${e.title} en ${e.language}`,children:(0,w.jsx)(`code`,{children:e.code})}),e.sourceUrl&&(0,w.jsxs)(`a`,{href:e.sourceUrl,target:`_blank`,rel:`noopener noreferrer`,className:`mt-4 inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-cyan transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan`,children:[`Abrir fuente o evidencia`,(0,w.jsx)(s,{className:`h-4 w-4`,"aria-hidden":`true`})]})]})]})}function O({profile:e,projectId:t}){let n=C[t]??[];return(0,w.jsxs)(`div`,{className:`space-y-8`,children:[(0,w.jsxs)(`section`,{children:[(0,w.jsxs)(`h2`,{className:`flex items-center gap-3 font-display text-2xl font-bold text-foreground`,children:[(0,w.jsx)(b,{className:`h-6 w-6 text-cyan`,"aria-hidden":`true`}),`Arquitectura técnica`]}),(0,w.jsx)(`p`,{className:`mt-4 leading-relaxed text-muted-foreground`,children:e.architecture})]}),(0,w.jsxs)(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[(0,w.jsx)(T,{title:`Flujo de ejecución`,items:e.flow,icon:m,tone:`cyan`}),(0,w.jsx)(T,{title:`Decisiones de ingeniería`,items:e.decisions,icon:v,tone:`magenta`})]}),(0,w.jsx)(T,{title:`Compromisos y límites`,items:e.tradeoffs,icon:x,tone:`cyan`}),n.length>0&&(0,w.jsxs)(`section`,{children:[(0,w.jsxs)(`h2`,{className:`flex items-center gap-3 font-display text-2xl font-bold text-foreground`,children:[(0,w.jsx)(f,{className:`h-6 w-6 text-cyan`,"aria-hidden":`true`}),`Código clave y evidencia de implementación`]}),(0,w.jsx)(`p`,{className:`mt-4 max-w-3xl leading-relaxed text-muted-foreground`,children:`Fragmentos seleccionados por su valor arquitectónico o algorítmico. Cada bloque declara si procede del repositorio, de la fuente de trabajo o de una reconstrucción conceptual.`}),(0,w.jsx)(`div`,{className:`mt-6 space-y-6`,children:n.map(e=>(0,w.jsx)(D,{sample:e},`${e.title}-${e.language}`))})]}),(0,w.jsxs)(`section`,{className:`overflow-hidden rounded-2xl border border-border bg-[oklch(0.14_0.035_260/0.92)]`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background/45 px-5 py-4`,children:[(0,w.jsxs)(`h2`,{className:`flex items-center gap-2 font-display text-xl font-bold text-foreground`,children:[(0,w.jsx)(h,{className:`h-5 w-5 text-magenta`,"aria-hidden":`true`}),`Patrón técnico relacionado: `,e.codeSample.title]}),(0,w.jsx)(`span`,{className:`rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan`,children:e.codeSample.language})]}),(0,w.jsxs)(`div`,{className:`p-5 sm:p-6`,children:[(0,w.jsx)(`p`,{className:`text-sm leading-relaxed text-muted-foreground`,children:e.codeSample.description}),(0,w.jsxs)(`div`,{className:`mt-4 flex gap-3 rounded-xl border border-amber-300/25 bg-amber-300/8 p-4 text-sm leading-relaxed text-amber-100`,children:[(0,w.jsx)(S,{className:`mt-0.5 h-5 w-5 shrink-0 text-amber-300`,"aria-hidden":`true`}),(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`strong`,{className:`font-semibold`,children:`Procedencia del ejemplo:`}),` `,e.codeSample.disclaimer]})]}),(0,w.jsx)(`pre`,{className:`technical-code mt-5 overflow-x-auto rounded-xl border border-border bg-background/80 p-5 text-sm leading-6 text-foreground`,tabIndex:0,"aria-label":`Código conceptual en ${e.codeSample.language}`,children:(0,w.jsx)(`code`,{children:e.codeSample.code})})]})]})]})}var k=`Código representativo. Reconstrucción conceptual basada en el objetivo y stack públicos del proyecto; no es un extracto literal del repositorio.`,A={"pwa-cinematic":{architecture:`Una interfaz web estática separa contenido, estado de presentación y servicios del navegador. La navegación o el desplazamiento producen un estado normalizado; persistencia local y caché sin conexión se mantienen detrás de adaptadores para no acoplar la experiencia visual a una API remota.`,flow:[`La interacción del visitante genera una posición, selección o intención de navegación.`,`Una capa de estado normaliza la entrada y decide qué contenido, escena o progreso mostrar.`,`La vista renderiza el resultado y conserva únicamente las preferencias o avances necesarios en el dispositivo.`],decisions:[`Modelar el contenido como datos permite reutilizar la misma fuente en búsqueda, navegación y vistas detalladas.`,`Derivar el estado visual de una entrada normalizada facilita reproducir la experiencia hacia adelante y hacia atrás.`,`Mantener la persistencia en el navegador reduce infraestructura y evita exigir una cuenta al visitante.`],tradeoffs:[`La operación sin backend mejora privacidad y disponibilidad, pero limita sincronización entre dispositivos.`,`Las escenas ricas aumentan el impacto visual, aunque exigen presupuestos estrictos de peso y movimiento.`,`Una caché agresiva acelera visitas posteriores, pero requiere versionado cuidadoso para no servir recursos antiguos.`],codeSample:{title:`Progreso normalizado de una experiencia guiada`,language:`TypeScript`,description:`Ejemplo conceptual de cómo convertir una posición de desplazamiento en un estado estable entre 0 y 1.`,code:`type ProgressInput = { scrollY: number; start: number; end: number };

export function deriveProgress(input: ProgressInput) {
  const distance = Math.max(input.end - input.start, 1);
  const offset = input.scrollY - input.start;
  const raw = offset / distance;
  const progress = Math.min(1, Math.max(0, raw));

  return {
    progress,
    complete: progress === 1,
  };
}`,disclaimer:k}},"learning-atlas":{architecture:`El atlas desacopla el contenido educativo de su representación. Un catálogo tipado describe temas, capítulos y metáforas visuales; la ruta selecciona una entrada y una capa de presentación compone la escena correspondiente sin duplicar navegación ni estructura editorial.`,flow:[`La ruta identifica la colección y el concepto solicitado.`,`El catálogo resuelve contenido, nivel, relaciones y familia visual.`,`La vista combina explicación, ejemplo y escena, y ofrece continuidad hacia el siguiente concepto.`],decisions:[`Centralizar el manifiesto evita discrepancias entre rutas, contadores e índices.`,`Separar contenido y escena permite mejorar una metáfora sin reescribir la explicación técnica.`,`Usar componentes visuales reutilizables conserva coherencia sin hacer idénticas todas las lecciones.`],tradeoffs:[`Un manifiesto estricto mejora consistencia, pero obliga a validar cada alta de contenido.`,`La reutilización reduce mantenimiento, aunque demasiada abstracción puede diluir metáforas específicas.`,`La exportación estática simplifica publicación, pero desplaza búsqueda y filtrado al cliente.`],codeSample:{title:`Selección tipada de una metáfora visual`,language:`TypeScript`,description:`Ejemplo conceptual de un catálogo que elige una familia visual a partir del tipo de concepto.`,code:`type ConceptKind = "pipeline" | "tree" | "state";

const sceneByKind: Record<ConceptKind, string> = {
  pipeline: "flujo por etapas",
  tree: "jerarquía navegable",
  state: "transición de estados",
};

export function describeScene(kind: ConceptKind) {
  return sceneByKind[kind];
}`,disclaimer:k}},"qr-voxel":{architecture:`Una aplicación estática ejecuta todo el pipeline en el navegador: normaliza la imagen, decodifica el contenido, reconstruye una matriz binaria y la entrega a un renderer WebGL desacoplado. El estado QRSlot conecta procesamiento, perfil estacional, exportación y enlaces compartidos sin depender de una API o base de datos.`,flow:[`El archivo se valida y normaliza en un canvas antes de intentar la lectura con jsQR.`,`El contenido decodificado se reconstruye como una matriz QR y se almacena junto con su perfil visual.`,`React Three Fiber convierte los módulos activos en instancias voxel y permite interpolar entre bosque y matriz cenital.`,`La exportación captura el canvas; el enlace compartido serializa una versión compacta de la matriz y la estación.`],decisions:[`Reconstruir la matriz desde el contenido desacopla el renderer de los píxeles y del formato del archivo original.`,`Usar InstancedMesh reduce el costo de representar muchas piezas repetidas de troncos, hojas y módulos.`,`Versionar y empaquetar la matriz por bits mantiene los enlaces reproducibles sin subir la imagen a un servidor.`],tradeoffs:[`El procesamiento local mejora privacidad y elimina infraestructura, pero traslada decodificación y exportación al dispositivo.`,`WebGL ofrece profundidad y animación, aunque necesita niveles de calidad y límites de frecuencia para móviles modestos.`,`Regenerar la matriz desde el contenido preserva el QR funcional, pero no reproduce defectos, logotipos o estilización del archivo original.`],codeSample:{title:`Frontera conceptual entre QR y escena 3D`,language:`TypeScript`,description:`Modelo mínimo de un pipeline donde el renderer depende de una matriz normalizada, no del archivo cargado.`,code:`type Matrix = Array<Array<0 | 1>>;

type GardenInput = {
  matrix: Matrix;
  season: "spring" | "summer" | "autumn" | "winter";
};

export async function buildGarden(file: File): Promise<GardenInput> {
  const content = await decodeLocally(file);
  const matrix = reconstructMatrix(content);

  return { matrix, season: "spring" };
}`,disclaimer:k}},"rpg-web":{architecture:`El juego organiza datos, mapas, recursos audiovisuales y lógica de eventos como capas separadas. El motor procesa una cola de acciones y actualiza la escena en ciclos discretos, mientras el empaquetado de escritorio incorpora la aplicación web y sus recursos en un ejecutable local.`,flow:[`La entrada del jugador se traduce en una orden de movimiento, interacción o combate.`,`El motor valida la orden contra el estado del mapa y encola los eventos resultantes.`,`Cada evento actualiza el estado y después la escena refleja los cambios visuales y sonoros.`],decisions:[`Conservar datos y recursos fuera de la lógica facilita ajustar contenido sin alterar el bucle principal.`,`Procesar eventos de forma secuencial evita que diálogos, combates y transiciones compitan por el estado.`,`Reutilizar un motor orientado a eventos acelera la construcción de mapas y reglas narrativas.`],tradeoffs:[`El motor reduce trabajo de infraestructura, pero condiciona la organización y las capacidades del juego.`,`Empaquetar todos los recursos mejora ejecución local, aunque aumenta el tamaño de distribución.`,`Muchos eventos activos enriquecen los mapas, pero requieren limitar actualizaciones innecesarias.`],codeSample:{title:`Procesamiento secuencial de eventos`,language:`JavaScript`,description:`Ejemplo conceptual de una cola mínima que evita ejecutar dos acciones del juego al mismo tiempo.`,code:`const eventQueue = [];

export function enqueueEvent(event) {
  eventQueue.push(event);
}

export function updateEvents(context) {
  const next = eventQueue.shift();
  if (!next) return false;

  next(context);
  return true;
}`,disclaimer:k}},"rpg-android":{architecture:`Una base web del juego vive dentro de un contenedor híbrido. El contenido mantiene su estructura de datos, scripts y recursos, mientras la capa móvil gestiona el ciclo de vida de Android, rutas locales y configuración de empaquetado sin duplicar la lógica jugable.`,flow:[`Android inicia el contenedor y habilita el entorno web embebido.`,`La aplicación carga recursos locales y restaura el estado compatible del juego.`,`Los eventos de pausa o reanudación se traducen a cambios seguros en el bucle de ejecución.`],decisions:[`Reutilizar la base web conserva paridad funcional entre plataformas.`,`Mantener la integración móvil en una capa delgada reduce divergencias del contenido jugable.`,`Empaquetar recursos localmente evita depender de conectividad durante una partida.`],tradeoffs:[`El enfoque híbrido acelera la adaptación, pero consume más memoria que una implementación nativa especializada.`,`Una sola base simplifica mantenimiento, aunque exige adaptar entrada, pantalla y ciclo de vida al dispositivo.`,`Los recursos incluidos permiten uso sin conexión, a costa de un paquete de instalación mayor.`],codeSample:{title:`Adaptación conceptual al ciclo de vida móvil`,language:`JavaScript`,description:`Ejemplo conceptual de cómo una capa híbrida puede traducir pausa y reanudación al estado del juego.`,code:`let gamePaused = false;

document.addEventListener("deviceready", () => {
  document.addEventListener("pause", () => setPaused(true));
  document.addEventListener("resume", () => setPaused(false));
});

function setPaused(value) {
  gamePaused = value;
  document.body.dataset.gamePaused = String(value);
}`,disclaimer:k}},"browser-pet":{architecture:`El dominio de la mascota se mantiene separado del renderer y del adaptador del navegador. Un estado serializable concentra necesidades, inventario y progreso; las entradas del usuario producen transiciones puras y una capa de persistencia guarda cambios sin mezclar reglas con APIs de plataforma.`,flow:[`El reloj o una interacción genera una acción con tiempo transcurrido.`,`El motor calcula el nuevo estado aplicando límites y reglas de progresión.`,`El renderer actualiza la escena y el adaptador persiste únicamente el estado resultante.`],decisions:[`Mantener el motor independiente del navegador permite probar reglas y cambiar de renderer.`,`Usar transiciones deterministas facilita exportar, importar y recuperar el progreso.`,`Limitar valores en cada actualización evita estados imposibles después de periodos largos de inactividad.`],tradeoffs:[`La persistencia frecuente protege el avance, pero debe agruparse para evitar escrituras excesivas.`,`Más especies y escenarios aumentan personalización, aunque multiplican combinaciones de recursos.`,`La ejecución continua aporta sensación de vida, pero requiere ajustar frecuencia para reducir consumo.`],codeSample:{title:`Transición determinista del estado de una mascota`,language:`JavaScript`,description:`Ejemplo conceptual de una actualización pura que limita necesidades a un rango válido.`,code:`const clamp = (value) => Math.max(0, Math.min(100, value));

export function advancePet(state, elapsedMinutes) {
  const hungerDelta = elapsedMinutes * 0.08;
  const energyDelta = elapsedMinutes * 0.05;

  return {
    ...state,
    hunger: clamp(state.hunger + hungerDelta),
    energy: clamp(state.energy - energyDelta),
    updatedAt: Date.now(),
  };
}`,disclaimer:k}},"vision-python":{architecture:`El pipeline separa captura, estimación de landmarks, suavizado, clasificación y ejecución de acciones. Cada etapa recibe datos simples y devuelve una salida explícita, lo que permite ajustar sensibilidad o sustituir el mecanismo de control sin acoplarlo a la cámara.`,flow:[`La cámara entrega un fotograma con resolución y frecuencia controladas.`,`El estimador obtiene puntos de referencia y el filtro reduce variaciones entre cuadros.`,`El clasificador reconoce una intención y el adaptador del sistema ejecuta la acción permitida.`],decisions:[`Separar observación e intención evita que ruido visual dispare directamente acciones del sistema.`,`Aplicar una ventana corta de suavizado equilibra estabilidad y latencia.`,`Centralizar umbrales facilita calibrar distintos tamaños de mano, cámaras y distancias.`],tradeoffs:[`Más suavizado reduce falsos positivos, pero hace que el cursor responda con mayor retraso.`,`Una resolución alta mejora detalle, aunque eleva uso de CPU y temperatura.`,`Reglas geométricas son explicables y rápidas, pero menos flexibles ante posturas ambiguas.`],codeSample:{title:`Suavizado de una trayectoria detectada`,language:`Python`,description:`Ejemplo conceptual de una ventana móvil para estabilizar coordenadas antes de producir una acción.`,code:`from collections import deque

history = deque(maxlen=5)

def stable_point(x: float, y: float) -> tuple[float, float]:
    history.append((x, y))
    count = len(history)
    mean_x = sum(point[0] for point in history) / count
    mean_y = sum(point[1] for point in history) / count

    return mean_x, mean_y`,disclaimer:k}},"gesture-android":{architecture:`El flujo Android divide adquisición de cámara, transformación de coordenadas, clasificación gestual y despacho de efectos. La capa de accesibilidad recibe intenciones ya estabilizadas; orientación, espejo, calibración e insets se resuelven antes de llegar a la pantalla.`,flow:[`CameraX entrega un fotograma bajo un presupuesto de resolución y frecuencia.`,`Los landmarks pasan por rotación, espejo, normalización, calibración y suavizado.`,`Una máquina de estados confirma el gesto y un dispatcher serializa la acción de accesibilidad.`],decisions:[`Transformar coordenadas en etapas explícitas permite localizar inversiones o desplazamientos.`,`Confirmar gestos durante varios cuadros evita convertir detecciones aisladas en clics.`,`Adaptar la frecuencia de análisis protege batería y temperatura sin detener el servicio.`],tradeoffs:[`Una confirmación más larga mejora precisión, pero incrementa la latencia percibida.`,`Analizar más cuadros da mayor continuidad, aunque aumenta costo térmico.`,`AccessibilityService amplía el alcance de control, pero requiere consentimiento y comunicación transparentes.`],codeSample:{title:`Promedio conceptual de coordenadas normalizadas`,language:`Kotlin`,description:`Ejemplo conceptual de suavizado previo al mapeo de una posición hacia la pantalla.`,code:`fun smoothPoint(samples: List<Pair<Float, Float>>): Pair<Float, Float> {
    require(samples.isNotEmpty())

    val sum = samples.fold(0f to 0f) { acc, point ->
        (acc.first + point.first) to (acc.second + point.second)
    }
    val count = samples.size.toFloat()

    return (sum.first / count) to (sum.second / count)
}`,disclaimer:k}},"restaurant-ops":{architecture:`La solución separa dominio, casos de uso, persistencia y presentación Blazor. Un único backend aplica autorización por rol y conserva la fuente de verdad en PostgreSQL; SignalR distribuye cambios de comandas sin acoplar Meseros, Cocina y Administración entre sí.`,flow:[`El mesero abre una mesa, construye una ronda y envía productos con comentarios y alertas de alergia.`,`El servicio crea snapshots de producto y precio, registra el estado Nuevo y publica la actualización.`,`Cocina avanza la comanda por transiciones permitidas y cada cambio agrega una entrada de historial.`,`Administración consulta la operación y el proceso automático exporta a XLSX los cierres elegibles.`],decisions:[`Guardar snapshots evita que una edición posterior del catálogo cambie el contenido histórico de una venta.`,`Separar autorización y layouts por rol reduce errores operativos y elimina cambios de función dentro de una sesión.`,`Combinar eventos en tiempo real con actualización periódica mantiene continuidad después de una reconexión.`,`Separar configuración privada, datos operativos y binarios permite personalizar y transferir una instalación sin publicar credenciales.`],tradeoffs:[`Un servidor local simplifica la operación dentro del restaurante, pero requiere que la computadora principal y la red permanezcan disponibles.`,`PostgreSQL ofrece integridad y concurrencia, aunque añade una dependencia de instalación frente a una base embebida.`,`La PWA reutiliza la interfaz en tablets y celulares, pero no sustituye todavía un APK nativo firmado.`],codeSample:{title:`Transición controlada de una comanda`,language:`C#`,description:`Ejemplo conceptual de una regla que evita saltos arbitrarios entre estados de cocina.`,code:`public static bool CanMove(OrderStatus current, OrderStatus next) =>
    (current, next) switch
    {
        (OrderStatus.New, OrderStatus.Preparing) => true,
        (OrderStatus.Preparing, OrderStatus.Ready) => true,
        (OrderStatus.Ready, OrderStatus.Completed) => true,
        (_, OrderStatus.Cancelled) => current is not OrderStatus.Completed,
        _ => false,
    };`,disclaimer:k}},"console-dotnet":{architecture:`La aplicación de consola separa interfaz, servicios de aplicación, dominio, persistencia y exportación. Una fuente local conserva todos los registros e historial; las vistas operativas consultan subconjuntos sin eliminar datos y los exportadores reciben modelos ya normalizados.`,flow:[`La interfaz valida una orden del usuario y la entrega al servicio correspondiente.`,`El servicio aplica reglas, actualiza la fuente persistente y registra el cambio trazable.`,`Las consultas filtran la vista activa y la exportación reconstruye el periodo solicitado con su historial.`],decisions:[`Separar la vista semanal de la retención histórica evita confundir visibilidad con eliminación.`,`Conservar una fuente de verdad reduce divergencias entre consola, búsquedas y hojas exportadas.`,`Inyectar selectores de fecha hace reutilizable la lógica de periodos sin acoplarla a una entidad concreta.`],tradeoffs:[`Un archivo local simplifica instalación, pero necesita escrituras atómicas y respaldo ante corrupción.`,`El historial completo mejora auditoría, aunque aumenta volumen y complejidad de correcciones.`,`Generar el libro tras cambios garantiza consistencia, pero añade costo de entrada y salida.`],codeSample:{title:`Consulta genérica de la semana activa`,language:`C#`,description:`Ejemplo conceptual de un filtro semanal que no elimina registros fuera del periodo visible.`,code:`static IEnumerable<T> CurrentWeek<T>(
    IEnumerable<T> items,
    Func<T, DateTime> dateOf,
    DateTime today)
{
    int offset = ((int)today.DayOfWeek + 6) % 7;
    DateTime start = today.Date.AddDays(-offset);
    DateTime end = start.AddDays(7);

    return items.Where(item =>
        dateOf(item) >= start && dateOf(item) < end);
}`,disclaimer:k}},"console-cpp":{architecture:`El dominio se divide en modelos, servicios, repositorios y una interfaz de consola. Una cola de prioridad atiende el orden operativo, un índice por clave acelera consultas directas y la persistencia conserva registros e historial como conjuntos separados.`,flow:[`La entrada se valida y se transforma en un registro de dominio.`,`El servicio calcula la prioridad, actualiza el índice y coloca una referencia en la cola.`,`Las consultas recuperan por clave o prioridad y el repositorio persiste el cambio junto con su historial.`],decisions:[`Combinar cola de prioridad e índice evita recorrer toda la colección para las dos consultas principales.`,`Recalcular puntuaciones dependientes del tiempo impide ordenar con valores envejecidos.`,`Aislar CSV detrás de repositorios evita contaminar las reglas de negocio con serialización.`],tradeoffs:[`Mantener dos estructuras mejora consultas, pero obliga a sincronizarlas después de cada edición.`,`CSV es portable y auditable, aunque ofrece menos garantías transaccionales que una base de datos.`,`Una fórmula explícita es fácil de explicar, pero necesita calibración para no favorecer un único factor.`],codeSample:{title:`Puntuación acotada de prioridad`,language:`C++`,description:`Ejemplo conceptual de una fórmula legible que combina señales y conserva el resultado dentro de un rango.`,code:`#include <algorithm>

int priorityScore(int risk, int reports, int daysOpen, int typeWeight) {
    const int raw =
        risk * 10 +
        std::min(reports * 2, 20) +
        std::min(daysOpen, 15) +
        typeWeight;

    return std::clamp(raw, 0, 100);
}`,disclaimer:k}},"php-mvc":{architecture:`La aplicación organiza solicitudes HTTP en controladores, reglas de negocio en servicios o modelos y presentación en vistas. El acceso a datos queda encapsulado, mientras autenticación y autorización se evalúan antes de permitir transiciones sobre expedientes o documentos.`,flow:[`La ruta recibe una petición y valida sesión, rol y datos de entrada.`,`El controlador delega la operación al dominio y el repositorio ejecuta la persistencia.`,`La respuesta presenta el nuevo estado y conserva información suficiente para seguimiento.`],decisions:[`Separar validación, negocio y HTML reduce controladores difíciles de mantener.`,`Representar los estados como transiciones permitidas evita cambios arbitrarios de un expediente.`,`Aplicar permisos en servidor impide depender únicamente de controles ocultos en la interfaz.`],tradeoffs:[`MVC aporta estructura clara, aunque añade capas a operaciones pequeñas.`,`La validación estricta protege integridad, pero debe comunicar errores sin perder datos del formulario.`,`Los archivos adjuntos simplifican el expediente digital, pero requieren límites, nombres seguros y control de acceso.`],codeSample:{title:`Validación conceptual de una solicitud`,language:`PHP`,description:`Ejemplo conceptual de validación en servidor antes de entregar datos normalizados al dominio.`,code:`function validateApplication(array $input): array
{
    $name = trim((string) ($input['name'] ?? ''));
    $program = trim((string) ($input['program'] ?? ''));

    if ($name === '' || $program === '') {
        throw new InvalidArgumentException('Faltan campos requeridos.');
    }

    return ['name' => $name, 'program' => $program];
}`,disclaimer:k}},"vanilla-web":{architecture:`Una interfaz pequeña puede mantener estado, reglas y renderizado en módulos conceptuales aun sin framework. Los eventos producen acciones, un reductor calcula el siguiente estado y una función de presentación actualiza únicamente la parte necesaria del DOM.`,flow:[`Un control del navegador emite una acción con datos mínimos.`,`La lógica calcula un nuevo estado sin modificar directamente la interfaz.`,`El renderizado refleja el resultado y ofrece retroalimentación inmediata al usuario.`],decisions:[`Conservar una única fuente de estado evita que texto, marcador y controles se contradigan.`,`Usar funciones puras vuelve predecibles las reglas incluso sin una biblioteca de componentes.`,`Delegar eventos reduce escuchas repetidas cuando la interfaz genera elementos dinámicos.`],tradeoffs:[`JavaScript directo ofrece una carga pequeña, pero requiere disciplina manual al crecer la interfaz.`,`Actualizar solo nodos necesarios mejora rendimiento, aunque aumenta lógica de sincronización.`,`El estado en memoria es sencillo, pero se pierde al recargar salvo que se añada persistencia explícita.`],codeSample:{title:`Reductor mínimo para una interacción web`,language:`JavaScript`,description:`Ejemplo conceptual de reglas separadas del DOM para mantener predecible una miniaplicación.`,code:`const initialState = { score: 0, rounds: 0 };

export function reduce(state = initialState, action) {
  if (action.type === "win") {
    return { score: state.score + 1, rounds: state.rounds + 1 };
  }
  if (action.type === "loss") {
    return { ...state, rounds: state.rounds + 1 };
  }

  return state;
}`,disclaimer:k}},"flask-api":{architecture:`La aplicación separa una interfaz ligera del endpoint Flask que actúa como frontera frente a TheCatAPI. El servidor controla red, timeout y forma de la respuesta; el navegador concentra historial, navegación y favoritos persistidos localmente.`,flow:[`La interfaz solicita un recurso aleatorio al endpoint same-origin de Flask.`,`El proxy consulta el proveedor externo con timeout y traduce el resultado a un contrato JSON estable.`,`El cliente actualiza historial e imagen activa; los favoritos se guardan de manera idempotente en localStorage.`],decisions:[`Colocar el proveedor detrás de un endpoint propio evita acoplar toda la interfaz a su respuesta.`,`Separar historial de favoritos permite navegar sin convertir cada imagen visitada en contenido guardado.`,`Persistir en el dispositivo conserva privacidad y elimina la necesidad de cuentas para una mini-app.`],tradeoffs:[`El proxy mejora el contrato, pero la disponibilidad sigue dependiendo de la API remota.`,`localStorage es simple y suficiente para URLs, aunque no ofrece sincronización entre dispositivos.`,`La versión actual normaliza errores generales; una evolución útil sería distinguir timeout, límite de cuota y respuesta inválida.`],codeSample:{title:`Decodificación defensiva de la respuesta cliente`,language:`JavaScript`,description:`Patrón conceptual para validar el contrato del endpoint antes de incorporarlo al estado de la interfaz.`,code:`async function requestCat() {
  const response = await fetch("/api/cats/random");
  const payload = await response.json();

  if (!response.ok || payload.success !== true || !payload.url) {
    throw new Error(payload.message ?? "No fue posible cargar la imagen");
  }

  return { id: payload.id, url: payload.url };
}`,disclaimer:k}},"external-web-integration":{architecture:`La ficha trata el simulador como una base externa integrada, no como un motor propio. La revisión técnica separa con claridad el núcleo adoptado, la presentación del repositorio y cualquier adaptación comprobable, conservando la atribución junto a la evidencia.`,flow:[`La entrada del visitante se entrega a los controles provistos por la base integrada.`,`El motor externo transforma el estado y coordina la representación 3D, el temporizador y la sesión.`,`La capa de presentación publica la experiencia y debe conservar versión, origen y límites de autoría.`],decisions:[`No presentar fragmentos coincidentes con la base externa como implementación original.`,`Usar patrones conceptuales propios para explicar geometría y orquestación sin copiar el motor.`,`Enlazar la fuente original permite que un revisor compruebe procedencia y alcance del trabajo.`],tradeoffs:[`Partir de una demostración existente acelera la exploración, pero reduce la autoría sobre el núcleo técnico.`,`Los cambios internos heredan estructura y deuda de la base, por lo que conviene aislar futuras adaptaciones.`,`La ficha gana credibilidad al limitar sus afirmaciones, aunque el proyecto pesa menos como evidencia algorítmica propia.`],codeSample:{title:`Adaptador conceptual para una base 3D externa`,language:`TypeScript`,description:`Patrón conceptual de una frontera que permitiría integrar el motor sin acoplar la interfaz a sus detalles internos.`,code:`interface PuzzleEngine {
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
}`,disclaimer:k}},"tactical-strategy":{architecture:`Motor de juego por turnos con separación estricta entre modelo de estado puro (GameState inmutable), validador de caminos BFS en tiempo constante O(1), sincronización multijugador en tiempo real con Firebase Realtime Database y evaluación de IA Minimax ejecutada en Web Worker dedicado para evitar micro-bloqueos en el hilo de renderizado.`,flow:[`El usuario selecciona un movimiento de peón o posiciona un muro táctico horizontal/vertical sobre el tablero.`,`El validador de pathfinding genera un conjunto de aristas bloqueadas O(1) y verifica por BFS que ningún jugador quede completamente encerrado.`,`Si la acción es válida, el estado inmutable se actualiza localmente y se transmite por WebSockets/Firebase a los rivales conectados.`,`Si el turno corresponde a la máquina, se envía un mensaje estructurado al Web Worker para evaluar el árbol de búsqueda Minimax con poda alpha-beta.`],decisions:[`Ejecutar la IA en un Web Worker independiente garantiza 60–120 FPS fluidos en el hilo principal de la interfaz durante cómputos profundos.`,`Preconstruir la tabla de aristas bloqueadas transforma cada comprobación de colisión de caminos en una búsqueda O(1) ultra-rápida.`,`Diseño offline-first mediante Service Worker PWA para habilitar juego local y contra IA sin conexión a internet.`],tradeoffs:[`La validación exhaustiva de caminos en cada previsualización de muro añade cómputo, mitigado con el conjunto de aristas precalculadas.`,`El modelo serverless con Firebase simplifica infraestructura pero requiere reconciliación de latencia en multijugador entre dispositivos distantes.`],codeSample:{title:`Construcción de aristas bloqueadas O(1) y validación de camino`,language:`TypeScript`,description:`Código extraído directamente de AnchorGrid que indexa las aristas de los muros para evaluar la conectividad de la meta sin recorrer el arreglo completo en cada paso.`,code:`function buildBlockedEdges(walls: Wall[]) {
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
}`}}};function j(e,t){return(t??(e.id===`gx-pets`?`contain`:`cover`))===`contain`?`object-contain`:`object-cover`}function M({project:e,compact:t=!1}){return e.cover?(0,w.jsx)(`img`,{src:e.cover,alt:t?``:`Vista principal de ${e.name}`,loading:t?`lazy`:void 0,width:1280,height:720,className:`h-full w-full ${j(e,e.coverFit)}`}):(0,w.jsx)(g,{project:e,compact:t})}function N(){let{project:t}=r.useLoaderData(),a=A[t.technicalProfile],f=e(t),m=t.screenshots.length>0&&t.screenshots.every(e=>e.orientation===`portrait`);return(0,w.jsxs)(`div`,{className:`relative min-h-screen bg-transparent text-foreground`,children:[(0,w.jsx)(c,{}),(0,w.jsx)(u,{projectTitle:t.name}),(0,w.jsxs)(`main`,{id:`main-content`,className:`relative`,children:[(0,w.jsx)(`section`,{className:`relative overflow-hidden px-6 pt-32 pb-14`,children:(0,w.jsxs)(`div`,{className:`mx-auto max-w-5xl`,children:[(0,w.jsxs)(n,{to:`/`,hash:`projects`,className:`inline-flex min-h-11 items-center gap-2 rounded-full text-sm text-muted-foreground transition-colors hover:text-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan`,children:[(0,w.jsx)(d,{className:`h-4 w-4`,"aria-hidden":`true`}),`Todos los proyectos`]}),(0,w.jsxs)(`div`,{className:`mt-7 flex flex-wrap items-center gap-2`,children:[(0,w.jsx)(`span`,{className:`rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan`,children:t.role}),(0,w.jsx)(`span`,{className:`rounded-full border border-border px-3 py-1 text-xs text-muted-foreground`,children:t.year}),(0,w.jsx)(`span`,{className:`rounded-full border border-magenta/30 bg-magenta/10 px-3 py-1 text-xs font-semibold text-magenta`,children:t.status})]}),(0,w.jsx)(`h1`,{className:`mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl`,children:t.name}),(0,w.jsx)(`p`,{className:`mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground`,children:t.summary}),(0,w.jsxs)(`div`,{className:`mt-8 flex flex-wrap gap-3`,children:[(0,w.jsxs)(`a`,{href:t.url,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-8px_var(--color-cyan)] transition-colors hover:bg-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan`,children:[(0,w.jsx)(i,{className:`h-4 w-4`,"aria-hidden":`true`}),`Revisar repositorio`]}),t.demoUrl&&(0,w.jsxs)(`a`,{href:t.demoUrl,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-magenta/50 hover:bg-magenta/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magenta`,children:[(0,w.jsx)(s,{className:`h-4 w-4`,"aria-hidden":`true`}),`Abrir demo`]})]})]})}),(0,w.jsx)(`section`,{className:`px-6`,"aria-label":`Presentación visual de ${t.name}`,children:(0,w.jsxs)(`figure`,{className:`mx-auto max-w-5xl`,children:[(0,w.jsx)(`div`,{className:`aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-card shadow-[0_0_80px_-30px_var(--color-cyan)]`,children:(0,w.jsx)(M,{project:t})}),t.coverCaption?(0,w.jsx)(`figcaption`,{className:`mt-3 text-xs leading-relaxed text-muted-foreground`,children:t.coverCaption}):t.cover?null:(0,w.jsx)(`figcaption`,{className:`mt-3 text-xs text-muted-foreground`,children:`Portada editorial técnica. No representa una captura de la aplicación.`})]})}),(0,w.jsx)(`section`,{className:`px-6 py-20`,children:(0,w.jsxs)(`div`,{className:`mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,w.jsxs)(`div`,{className:`min-w-0 space-y-12`,children:[t.sections.map(e=>(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{className:`font-display text-2xl font-bold text-foreground`,children:e.title}),(0,w.jsx)(`p`,{className:`mt-3 leading-relaxed text-muted-foreground`,children:e.body})]},e.title)),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{className:`font-display text-2xl font-bold text-foreground`,children:`Puntos destacados`}),(0,w.jsx)(`ul`,{className:`mt-4 space-y-3`,children:t.highlights.map(e=>(0,w.jsxs)(`li`,{className:`flex gap-3 text-muted-foreground`,children:[(0,w.jsx)(l,{className:`mt-0.5 h-5 w-5 shrink-0 text-cyan`,"aria-hidden":`true`}),(0,w.jsx)(`span`,{children:e})]},e))})]}),(0,w.jsx)(O,{profile:a,projectId:t.id}),t.screenshots.length>0?(0,w.jsxs)(`section`,{children:[(0,w.jsxs)(`h2`,{className:`flex items-center gap-3 font-display text-2xl font-bold text-foreground`,children:[(0,w.jsx)(p,{className:`h-6 w-6 text-cyan`,"aria-hidden":`true`}),`Evidencia visual`]}),(0,w.jsx)(`div`,{className:`mt-5 grid gap-5 ${m?`sm:grid-cols-3`:`sm:grid-cols-2`}`,children:t.screenshots.map(e=>(0,w.jsxs)(`figure`,{className:`overflow-hidden rounded-2xl border border-border bg-card`,children:[(0,w.jsx)(`img`,{src:e.src,alt:e.caption,loading:`lazy`,width:1280,height:720,className:`w-full ${e.orientation===`portrait`?`aspect-[9/16]`:`aspect-[16/9]`} ${j(t,e.fit)}`}),(0,w.jsx)(`figcaption`,{className:`px-4 py-3 text-xs leading-relaxed text-muted-foreground`,children:e.caption})]},e.caption))})]}):t.coverCaption?null:(0,w.jsxs)(`section`,{className:`rounded-2xl border border-dashed border-border bg-card/45 p-6`,children:[(0,w.jsxs)(`h2`,{className:`flex items-center gap-3 font-display text-xl font-bold text-foreground`,children:[(0,w.jsx)(y,{className:`h-5 w-5 text-magenta`,"aria-hidden":`true`}),`Sin capturas públicas verificables`]}),(0,w.jsx)(`p`,{className:`mt-3 text-sm leading-relaxed text-muted-foreground`,children:`El repositorio no publica capturas de la interfaz. Por eso esta ficha prioriza arquitectura, flujo, decisiones y un patrón conceptual claramente rotulado, sin presentar una imagen inventada como evidencia del producto.`})]})]}),(0,w.jsxs)(`aside`,{className:`h-fit space-y-6 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm lg:sticky lg:top-28`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{className:`text-xs font-semibold uppercase tracking-wider text-cyan`,children:`Rol`}),(0,w.jsx)(`p`,{className:`mt-2 text-sm text-foreground`,children:t.role})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{className:`text-xs font-semibold uppercase tracking-wider text-cyan`,children:`Plataforma`}),(0,w.jsx)(`p`,{className:`mt-2 text-sm text-foreground`,children:t.platform})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{className:`text-xs font-semibold uppercase tracking-wider text-cyan`,children:`Stack`}),(0,w.jsx)(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[...new Set([t.language,...t.stack])].map(e=>(0,w.jsx)(`span`,{className:`rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground`,children:e},e))})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{className:`text-xs font-semibold uppercase tracking-wider text-cyan`,children:`Etiquetas`}),(0,w.jsx)(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:t.tags.map(e=>(0,w.jsx)(`span`,{className:`rounded-full bg-magenta/10 px-2.5 py-1 text-xs text-magenta`,children:e},e))})]}),(0,w.jsxs)(`a`,{href:t.url,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-cyan/50 hover:bg-cyan/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan`,children:[(0,w.jsx)(i,{className:`h-4 w-4`,"aria-hidden":`true`}),`Ver evidencia pública`]})]})]})}),(0,w.jsx)(`section`,{className:`px-6 pb-24`,children:(0,w.jsxs)(`div`,{className:`mx-auto max-w-5xl`,children:[(0,w.jsx)(`h2`,{className:`font-display text-2xl font-bold text-foreground`,children:`Proyectos relacionados`}),(0,w.jsx)(`div`,{className:`mt-6 grid gap-4 sm:grid-cols-3`,children:f.map(e=>(0,w.jsxs)(n,{to:`/proyectos/$slug`,params:{slug:e.slug},className:`group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-cyan/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan`,children:[(0,w.jsx)(`div`,{className:`aspect-[16/9] overflow-hidden bg-surface`,children:(0,w.jsx)(M,{project:e,compact:!0})}),(0,w.jsxs)(`div`,{className:`p-4`,children:[(0,w.jsx)(`h3`,{className:`font-display font-semibold text-foreground group-hover:text-cyan`,children:e.name}),(0,w.jsx)(`p`,{className:`mt-1 line-clamp-2 text-xs text-muted-foreground`,children:e.summary})]})]},e.slug))})]})})]}),(0,w.jsx)(o,{})]})}export{N as component};