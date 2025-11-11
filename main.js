var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);


var import_obsidian = require("obsidian");
var THREE = __toESM(require("three"));
var import_GLTFLoader = require("three/examples/jsm/loaders/GLTFLoader.js");
var import_FBXLoader = require("three/examples/jsm/loaders/FBXLoader.js");
var import_OBJLoader = require("three/examples/jsm/loaders/OBJLoader.js");
var import_USDZLoader = require("three/examples/jsm/loaders/USDZLoader.js");
var import_OrbitControls = require("three/examples/jsm/controls/OrbitControls.js");
var translations = {
  en: {
    settingsTitle: "Window Settings",
    menuPosition: "Menu Position",
    menuPositionLeft: "Left",
    menuPositionTop: "Top",
    menuPositionBottom: "Bottom",
    menuPositionRight: "Right",
    initialDisplay: "Initial Display",
    initialDisplayCollapsed: "Collapsed",
    initialDisplayExpanded: "Expanded",
    onlyForThisFile: "Only for this file",
    initialDisplayThisFile: "Initial display of this file",
    windowFormat: "Window Format",
    windowFormatStandard: "Standard",
    windowFormatLong: "Long",
    windowFormatCustom: "Custom",
    windowSize: "Window Size",
    width: "Width",
    height: "Height",
    grid: "Grid",
    initialCameraPosition: "Initial Camera Position",
    setCameraPosition: "Set Camera Position",
    resetCameraPosition: "Reset Camera Position",
    cameraPositionSet: "Initial camera position set",
    cameraPositionReset: "Initial camera position reset",
    lockCameraHorizontal: "Lock Camera Horizontally",
    lockCameraVertical: "Lock Camera Vertically",
    removeBackground: "Remove Background",
    setBackground: "Set Background",
    lighting: "Lighting",
    lightingType: "Light Type",
    lightingTypeAmbient: "Ambient",
    lightingTypeDirectional: "Directional",
    lightingTypePoint: "Point",
    lightingTypeHemisphere: "Hemisphere",
    lightingTypeMixed: "Mixed",
    lightingIntensity: "Intensity",
    closeContainer: "Close Container",
    insertLink: "Insert Link",
    panorama: "Panorama",
    ok: "OK",
    cancel: "Cancel",
    fileNotFound: "File not found!",
    wrongFormat: "Wrong format! Use images (png, jpg, gif, etc.)",
    backgroundLoadError: "Background loading error!",
    errorLoading3DModel: "Error loading 3D model",
    linkPlaceholder: "[[file]] or URL"
  },
  ru: {
    settingsTitle: "Настройки окна",
    menuPosition: "Позиция меню",
    menuPositionLeft: "Слева",
    menuPositionTop: "Сверху",
    menuPositionBottom: "Снизу",
    menuPositionRight: "Справа",
    initialDisplay: "Начальное отображение",
    initialDisplayCollapsed: "Свернутым",
    initialDisplayExpanded: "Развернутым",
    onlyForThisFile: "Только для этого файла",
    initialDisplayThisFile: "Начальное отображение этого файла",
    windowFormat: "Формат окна",
    windowFormatStandard: "Стандартный",
    windowFormatLong: "Длинный",
    windowFormatCustom: "Кастомный",
    windowSize: "Размер окна",
    width: "Ширина",
    height: "Высота",
    grid: "Сетка",
    initialCameraPosition: "Начальная позиция камеры",
    setCameraPosition: "Выставить",
    resetCameraPosition: "Сбросить",
    cameraPositionSet: "Начальное положение камеры выставлено",
    cameraPositionReset: "Начальное положение камеры сброшено",
    lockCameraHorizontal: "Заблокировать камеру по горизонтали",
    lockCameraVertical: "Заблокировать камеру по вертикали",
    removeBackground: "Убрать фон",
    setBackground: "Поставить фон",
    lighting: "Освещение",
    lightingType: "Тип света",
    lightingTypeAmbient: "Рассеянный (Ambient)",
    lightingTypeDirectional: "Направленный (Directional)",
    lightingTypePoint: "Точечный (Point)",
    lightingTypeHemisphere: "Полусферный (Hemisphere)",
    lightingTypeMixed: "Смешанный (Mixed)",
    lightingIntensity: "Интенсивность",
    closeContainer: "Закрыть контейнер",
    insertLink: "Вставьте ссылку",
    panorama: "Панорама",
    ok: "ОК",
    cancel: "Отмена",
    fileNotFound: "Файл не найден!",
    wrongFormat: "Формат не подходящий! Используйте изображения (png, jpg, gif и т.д.)",
    backgroundLoadError: "Ошибка загрузки фона!",
    errorLoading3DModel: "Ошибка загрузки 3D модели",
    linkPlaceholder: "[[файл]] или URL"
  },
  uk: {
    settingsTitle: "Налаштування вікна",
    menuPosition: "Позиція меню",
    menuPositionLeft: "Зліва",
    menuPositionTop: "Зверху",
    menuPositionBottom: "Знизу",
    menuPositionRight: "Справа",
    initialDisplay: "Початкове відображення",
    initialDisplayCollapsed: "Згорнутим",
    initialDisplayExpanded: "Розгорнутим",
    onlyForThisFile: "Тільки для цього файлу",
    initialDisplayThisFile: "Початкове відображення цього файлу",
    windowFormat: "Формат вікна",
    windowFormatStandard: "Стандартний",
    windowFormatLong: "Довгий",
    windowFormatCustom: "Власний",
    windowSize: "Розмір вікна",
    width: "Ширина",
    height: "Висота",
    grid: "Сітка",
    initialCameraPosition: "Початкова позиція камери",
    setCameraPosition: "Встановити",
    resetCameraPosition: "Скинути",
    cameraPositionSet: "Початкове положення камери встановлено",
    cameraPositionReset: "Початкове положення камери скинуто",
    lockCameraHorizontal: "Заблокувати камеру по горизонталі",
    lockCameraVertical: "Заблокувати камеру по вертикалі",
    removeBackground: "Прибрати фон",
    setBackground: "Встановити фон",
    lighting: "Освітлення",
    lightingType: "Тип світла",
    lightingTypeAmbient: "Розсіяне (Ambient)",
    lightingTypeDirectional: "Спрямоване (Directional)",
    lightingTypePoint: "Точкове (Point)",
    lightingTypeHemisphere: "Напівсферичне (Hemisphere)",
    lightingTypeMixed: "Змішане (Mixed)",
    lightingIntensity: "Інтенсивність",
    closeContainer: "Закрити контейнер",
    insertLink: "Вставте посилання",
    panorama: "Панорама",
    ok: "OK",
    cancel: "Скасувати",
    fileNotFound: "Файл не знайдено!",
    wrongFormat: "Невірний формат! Використовуйте зображення (png, jpg, gif тощо)",
    backgroundLoadError: "Помилка завантаження фону!",
    errorLoading3DModel: "Помилка завантаження 3D моделі",
    linkPlaceholder: "[[файл]] або URL"
  },
  be: {
    settingsTitle: "Налады акна",
    menuPosition: "Пазіцыя меню",
    menuPositionLeft: "Злева",
    menuPositionTop: "Зверху",
    menuPositionBottom: "Знізу",
    menuPositionRight: "Справа",
    initialDisplay: "Пачатковае адлюстраванне",
    initialDisplayCollapsed: "Згорнутым",
    initialDisplayExpanded: "Разгорнутым",
    onlyForThisFile: "Толькі для гэтага файла",
    initialDisplayThisFile: "Пачатковае адлюстраванне гэтага файла",
    windowFormat: "Фармат акна",
    windowFormatStandard: "Стандартны",
    windowFormatLong: "Доўгі",
    windowFormatCustom: "Карыстацкі",
    windowSize: "Памер акна",
    width: "Шырыня",
    height: "Вышыня",
    grid: "Сетка",
    initialCameraPosition: "Пачатковая пазіцыя камеры",
    setCameraPosition: "Усталяваць",
    resetCameraPosition: "Скінуць",
    cameraPositionSet: "Пачатковае становішча камеры ўсталявана",
    cameraPositionReset: "Пачатковае становішча камеры скінута",
    lockCameraHorizontal: "Заблакаваць камеру па гарызанталі",
    lockCameraVertical: "Заблакаваць камеру па вертыкалі",
    removeBackground: "Прыбраць фон",
    setBackground: "Усталяваць фон",
    lighting: "Асвятленне",
    lightingType: "Тып святла",
    lightingTypeAmbient: "Рассеянае (Ambient)",
    lightingTypeDirectional: "Накіраванае (Directional)",
    lightingTypePoint: "Кропкавае (Point)",
    lightingTypeHemisphere: "Паўсферычнае (Hemisphere)",
    lightingTypeMixed: "Змяшанае (Mixed)",
    lightingIntensity: "Інтэнсіўнасць",
    closeContainer: "Закрыць кантэйнер",
    insertLink: "Устаўце спасылку",
    panorama: "Панарама",
    ok: "OK",
    cancel: "Адмена",
    fileNotFound: "Файл не знойдзены!",
    wrongFormat: "Няправільны фармат! Выкарыстоўвайце выявы (png, jpg, gif і г.д.)",
    backgroundLoadError: "Памылка загрузкі фону!",
    errorLoading3DModel: "Памылка загрузкі 3D мадэлі",
    linkPlaceholder: "[[файл]] або URL"
  },
  kk: {
    settingsTitle: "Терезе параметрлері",
    menuPosition: "Мәзір орны",
    menuPositionLeft: "Сол жақта",
    menuPositionTop: "Жоғарыда",
    menuPositionBottom: "Төменде",
    menuPositionRight: "Оң жақта",
    initialDisplay: "Бастапқы көрініс",
    initialDisplayCollapsed: "Жиылған",
    initialDisplayExpanded: "Кеңейтілген",
    onlyForThisFile: "Тек осы файл үшін",
    initialDisplayThisFile: "Осы файлдың бастапқы көрінісі",
    windowFormat: "Терезе форматы",
    windowFormatStandard: "Стандартты",
    windowFormatLong: "Ұзын",
    windowFormatCustom: "Реттелетін",
    windowSize: "Терезе өлшемі",
    width: "Ені",
    height: "Биіктігі",
    grid: "Тор",
    initialCameraPosition: "Камераның бастапқы орны",
    setCameraPosition: "Орнату",
    resetCameraPosition: "Қалпына келтіру",
    cameraPositionSet: "Камераның бастапқы орны орнатылды",
    cameraPositionReset: "Камераның бастапқы орны қалпына келтірілді",
    lockCameraHorizontal: "Камераны көлденеңінен бұғаттау",
    lockCameraVertical: "Камераны тігінен бұғаттау",
    removeBackground: "Фонды жою",
    setBackground: "Фонды орнату",
    lighting: "Жарықтандыру",
    lightingType: "Жарық түрі",
    lightingTypeAmbient: "Шашыраңқы (Ambient)",
    lightingTypeDirectional: "Бағытталған (Directional)",
    lightingTypePoint: "Нүктелік (Point)",
    lightingTypeHemisphere: "Жартышар (Hemisphere)",
    lightingTypeMixed: "Аралас (Mixed)",
    lightingIntensity: "Қарқындылық",
    closeContainer: "Контейнерді жабу",
    insertLink: "Сілтемені енгізіңіз",
    panorama: "Панорама",
    ok: "OK",
    cancel: "Болдырмау",
    fileNotFound: "Файл табылмады!",
    wrongFormat: "Қате формат! Суреттерді пайдаланыңыз (png, jpg, gif және т.б.)",
    backgroundLoadError: "Фонды жүктеу қатесі!",
    errorLoading3DModel: "3D үлгісін жүктеу қатесі",
    linkPlaceholder: "[[файл]] немесе URL"
  },
  de: {
    settingsTitle: "Fenstereinstellungen",
    menuPosition: "Menüposition",
    menuPositionLeft: "Links",
    menuPositionTop: "Oben",
    menuPositionBottom: "Unten",
    menuPositionRight: "Rechts",
    initialDisplay: "Anfangsanzeige",
    initialDisplayCollapsed: "Eingeklappt",
    initialDisplayExpanded: "Ausgeklappt",
    onlyForThisFile: "Nur für diese Datei",
    initialDisplayThisFile: "Anfangsanzeige dieser Datei",
    windowFormat: "Fensterformat",
    windowFormatStandard: "Standard",
    windowFormatLong: "Lang",
    windowFormatCustom: "Benutzerdefiniert",
    windowSize: "Fenstergröße",
    width: "Breite",
    height: "Höhe",
    grid: "Raster",
    initialCameraPosition: "Anfangsposition der Kamera",
    setCameraPosition: "Setzen",
    resetCameraPosition: "Zurücksetzen",
    cameraPositionSet: "Anfangsposition der Kamera gesetzt",
    cameraPositionReset: "Anfangsposition der Kamera zurückgesetzt",
    lockCameraHorizontal: "Kamera horizontal sperren",
    lockCameraVertical: "Kamera vertikal sperren",
    removeBackground: "Hintergrund entfernen",
    setBackground: "Hintergrund setzen",
    lighting: "Beleuchtung",
    lightingType: "Lichttyp",
    lightingTypeAmbient: "Umgebungslicht (Ambient)",
    lightingTypeDirectional: "Gerichtetes Licht (Directional)",
    lightingTypePoint: "Punktlicht (Point)",
    lightingTypeHemisphere: "Hemisphärisches Licht (Hemisphere)",
    lightingTypeMixed: "Gemischtes Licht (Mixed)",
    lightingIntensity: "Intensität",
    closeContainer: "Container schließen",
    insertLink: "Link einfügen",
    panorama: "Panorama",
    ok: "OK",
    cancel: "Abbrechen",
    fileNotFound: "Datei nicht gefunden!",
    wrongFormat: "Falsches Format! Verwenden Sie Bilder (png, jpg, gif usw.)",
    backgroundLoadError: "Fehler beim Laden des Hintergrunds!",
    errorLoading3DModel: "Fehler beim Laden des 3D-Modells",
    linkPlaceholder: "[[Datei]] oder URL"
  },
  fr: {
    settingsTitle: "Paramètres de la fenêtre",
    menuPosition: "Position du menu",
    menuPositionLeft: "Gauche",
    menuPositionTop: "Haut",
    menuPositionBottom: "Bas",
    menuPositionRight: "Droite",
    initialDisplay: "Affichage initial",
    initialDisplayCollapsed: "Réduit",
    initialDisplayExpanded: "Étendu",
    onlyForThisFile: "Seulement pour ce fichier",
    initialDisplayThisFile: "Affichage initial de ce fichier",
    windowFormat: "Format de fenêtre",
    windowFormatStandard: "Standard",
    windowFormatLong: "Long",
    windowFormatCustom: "Personnalisé",
    windowSize: "Taille de fenêtre",
    width: "Largeur",
    height: "Hauteur",
    grid: "Grille",
    initialCameraPosition: "Position initiale de la caméra",
    setCameraPosition: "Définir",
    resetCameraPosition: "Réinitialiser",
    cameraPositionSet: "Position initiale de la caméra définie",
    cameraPositionReset: "Position initiale de la caméra réinitialisée",
    lockCameraHorizontal: "Verrouiller la caméra horizontalement",
    lockCameraVertical: "Verrouiller la caméra verticalement",
    removeBackground: "Supprimer l'arrière-plan",
    setBackground: "Définir l'arrière-plan",
    lighting: "Éclairage",
    lightingType: "Type de lumière",
    lightingTypeAmbient: "Ambiante (Ambient)",
    lightingTypeDirectional: "Directionnelle (Directional)",
    lightingTypePoint: "Ponctuelle (Point)",
    lightingTypeHemisphere: "Hémisphérique (Hemisphere)",
    lightingTypeMixed: "Mixte (Mixed)",
    lightingIntensity: "Intensité",
    closeContainer: "Fermer le conteneur",
    insertLink: "Insérer un lien",
    panorama: "Panorama",
    ok: "OK",
    cancel: "Annuler",
    fileNotFound: "Fichier introuvable!",
    wrongFormat: "Format incorrect! Utilisez des images (png, jpg, gif, etc.)",
    backgroundLoadError: "Erreur de chargement de l'arrière-plan!",
    errorLoading3DModel: "Erreur de chargement du modèle 3D",
    linkPlaceholder: "[[fichier]] ou URL"
  },
  es: {
    settingsTitle: "Configuración de ventana",
    menuPosition: "Posición del menú",
    menuPositionLeft: "Izquierda",
    menuPositionTop: "Arriba",
    menuPositionBottom: "Abajo",
    menuPositionRight: "Derecha",
    initialDisplay: "Visualización inicial",
    initialDisplayCollapsed: "Colapsado",
    initialDisplayExpanded: "Expandido",
    onlyForThisFile: "Solo para este archivo",
    initialDisplayThisFile: "Visualización inicial de este archivo",
    windowFormat: "Formato de ventana",
    windowFormatStandard: "Estándar",
    windowFormatLong: "Largo",
    windowFormatCustom: "Personalizado",
    windowSize: "Tamaño de ventana",
    width: "Ancho",
    height: "Alto",
    grid: "Cuadrícula",
    initialCameraPosition: "Posición inicial de la cámara",
    setCameraPosition: "Establecer",
    resetCameraPosition: "Restablecer",
    cameraPositionSet: "Posición inicial de la cámara establecida",
    cameraPositionReset: "Posición inicial de la cámara restablecida",
    lockCameraHorizontal: "Bloquear cámara horizontalmente",
    lockCameraVertical: "Bloquear cámara verticalmente",
    removeBackground: "Eliminar fondo",
    setBackground: "Establecer fondo",
    lighting: "Iluminación",
    lightingType: "Tipo de luz",
    lightingTypeAmbient: "Ambiental (Ambient)",
    lightingTypeDirectional: "Direccional (Directional)",
    lightingTypePoint: "Puntual (Point)",
    lightingTypeHemisphere: "Hemisférica (Hemisphere)",
    lightingTypeMixed: "Mixta (Mixed)",
    lightingIntensity: "Intensidad",
    closeContainer: "Cerrar contenedor",
    insertLink: "Insertar enlace",
    panorama: "Panorama",
    ok: "OK",
    cancel: "Cancelar",
    fileNotFound: "¡Archivo no encontrado!",
    wrongFormat: "¡Formato incorrecto! Use imágenes (png, jpg, gif, etc.)",
    backgroundLoadError: "¡Error al cargar el fondo!",
    errorLoading3DModel: "Error al cargar el modelo 3D",
    linkPlaceholder: "[[archivo]] o URL"
  },
  it: {
    settingsTitle: "Impostazioni finestra",
    menuPosition: "Posizione del menu",
    menuPositionLeft: "Sinistra",
    menuPositionTop: "Alto",
    menuPositionBottom: "Basso",
    menuPositionRight: "Destra",
    initialDisplay: "Visualizzazione iniziale",
    initialDisplayCollapsed: "Compresso",
    initialDisplayExpanded: "Espanso",
    onlyForThisFile: "Solo per questo file",
    initialDisplayThisFile: "Visualizzazione iniziale di questo file",
    windowFormat: "Formato finestra",
    windowFormatStandard: "Standard",
    windowFormatLong: "Lungo",
    windowFormatCustom: "Personalizzato",
    windowSize: "Dimensione finestra",
    width: "Larghezza",
    height: "Altezza",
    grid: "Griglia",
    initialCameraPosition: "Posizione iniziale della fotocamera",
    setCameraPosition: "Imposta",
    resetCameraPosition: "Reimposta",
    cameraPositionSet: "Posizione iniziale della fotocamera impostata",
    cameraPositionReset: "Posizione iniziale della fotocamera reimpostata",
    lockCameraHorizontal: "Blocca fotocamera orizzontalmente",
    lockCameraVertical: "Blocca fotocamera verticalmente",
    removeBackground: "Rimuovi sfondo",
    setBackground: "Imposta sfondo",
    lighting: "Illuminazione",
    lightingType: "Tipo di luce",
    lightingTypeAmbient: "Ambientale (Ambient)",
    lightingTypeDirectional: "Direzionale (Directional)",
    lightingTypePoint: "Puntuale (Point)",
    lightingTypeHemisphere: "Emisferica (Hemisphere)",
    lightingTypeMixed: "Mista (Mixed)",
    lightingIntensity: "Intensità",
    closeContainer: "Chiudi contenitore",
    insertLink: "Inserisci link",
    panorama: "Panorama",
    ok: "OK",
    cancel: "Annulla",
    fileNotFound: "File non trovato!",
    wrongFormat: "Formato errato! Usa immagini (png, jpg, gif, ecc.)",
    backgroundLoadError: "Errore nel caricamento dello sfondo!",
    errorLoading3DModel: "Errore nel caricamento del modello 3D",
    linkPlaceholder: "[[file]] o URL"
  },
  pl: {
    settingsTitle: "Ustawienia okna",
    menuPosition: "Pozycja menu",
    menuPositionLeft: "Lewo",
    menuPositionTop: "Góra",
    menuPositionBottom: "Dół",
    menuPositionRight: "Prawo",
    initialDisplay: "Początkowy wyświetlacz",
    initialDisplayCollapsed: "Zwinięty",
    initialDisplayExpanded: "Rozwinięty",
    onlyForThisFile: "Tylko dla tego pliku",
    initialDisplayThisFile: "Początkowy wyświetlacz tego pliku",
    windowFormat: "Format okna",
    windowFormatStandard: "Standardowy",
    windowFormatLong: "Długi",
    windowFormatCustom: "Niestandardowy",
    windowSize: "Rozmiar okna",
    width: "Szerokość",
    height: "Wysokość",
    grid: "Siatka",
    initialCameraPosition: "Początkowa pozycja kamery",
    setCameraPosition: "Ustaw",
    resetCameraPosition: "Zresetuj",
    cameraPositionSet: "Początkowa pozycja kamery ustawiona",
    cameraPositionReset: "Początkowa pozycja kamery zresetowana",
    lockCameraHorizontal: "Zablokuj kamerę poziomo",
    lockCameraVertical: "Zablokuj kamerę pionowo",
    removeBackground: "Usuń tło",
    setBackground: "Ustaw tło",
    lighting: "Oświetlenie",
    lightingType: "Typ światła",
    lightingTypeAmbient: "Otoczenia (Ambient)",
    lightingTypeDirectional: "Kierunkowe (Directional)",
    lightingTypePoint: "Punktowe (Point)",
    lightingTypeHemisphere: "Półsferyczne (Hemisphere)",
    lightingTypeMixed: "Mieszane (Mixed)",
    lightingIntensity: "Intensywność",
    closeContainer: "Zamknij kontener",
    insertLink: "Wstaw link",
    panorama: "Panorama",
    ok: "OK",
    cancel: "Anuluj",
    fileNotFound: "Plik nie znaleziony!",
    wrongFormat: "Nieprawidłowy format! Użyj obrazów (png, jpg, gif itp.)",
    backgroundLoadError: "Błąd ładowania tła!",
    errorLoading3DModel: "Błąd ładowania modelu 3D",
    linkPlaceholder: "[[plik]] lub URL"
  },
  cs: {
    settingsTitle: "Nastavení okna",
    menuPosition: "Pozice menu",
    menuPositionLeft: "Vlevo",
    menuPositionTop: "Nahoře",
    menuPositionBottom: "Dole",
    menuPositionRight: "Vpravo",
    initialDisplay: "Počáteční zobrazení",
    initialDisplayCollapsed: "Sbalené",
    initialDisplayExpanded: "Rozbalené",
    onlyForThisFile: "Pouze pro tento soubor",
    initialDisplayThisFile: "Počáteční zobrazení tohoto souboru",
    windowFormat: "Formát okna",
    windowFormatStandard: "Standardní",
    windowFormatLong: "Dlouhý",
    windowFormatCustom: "Vlastní",
    windowSize: "Velikost okna",
    width: "Šířka",
    height: "Výška",
    grid: "Mřížka",
    initialCameraPosition: "Počáteční pozice kamery",
    setCameraPosition: "Nastavit",
    resetCameraPosition: "Resetovat",
    cameraPositionSet: "Počáteční pozice kamery nastavena",
    cameraPositionReset: "Počáteční pozice kamery resetována",
    lockCameraHorizontal: "Zamknout kameru horizontálně",
    lockCameraVertical: "Zamknout kameru vertikálně",
    removeBackground: "Odstranit pozadí",
    setBackground: "Nastavit pozadí",
    lighting: "Osvětlení",
    lightingType: "Typ světla",
    lightingTypeAmbient: "Okolní (Ambient)",
    lightingTypeDirectional: "Směrové (Directional)",
    lightingTypePoint: "Bodové (Point)",
    lightingTypeHemisphere: "Hemisférické (Hemisphere)",
    lightingTypeMixed: "Smíšené (Mixed)",
    lightingIntensity: "Intenzita",
    closeContainer: "Zavřít kontejner",
    insertLink: "Vložit odkaz",
    panorama: "Panorama",
    ok: "OK",
    cancel: "Zrušit",
    fileNotFound: "Soubor nenalezen!",
    wrongFormat: "Nesprávný formát! Použijte obrázky (png, jpg, gif atd.)",
    backgroundLoadError: "Chyba načítání pozadí!",
    errorLoading3DModel: "Chyba načítání 3D modelu",
    linkPlaceholder: "[[soubor]] nebo URL"
  },
  pt: {
    settingsTitle: "Configurações da janela",
    menuPosition: "Posição do menu",
    menuPositionLeft: "Esquerda",
    menuPositionTop: "Topo",
    menuPositionBottom: "Inferior",
    menuPositionRight: "Direita",
    initialDisplay: "Exibição inicial",
    initialDisplayCollapsed: "Recolhido",
    initialDisplayExpanded: "Expandido",
    onlyForThisFile: "Apenas para este arquivo",
    initialDisplayThisFile: "Exibição inicial deste arquivo",
    windowFormat: "Formato da janela",
    windowFormatStandard: "Padrão",
    windowFormatLong: "Longo",
    windowFormatCustom: "Personalizado",
    windowSize: "Tamanho da janela",
    width: "Largura",
    height: "Altura",
    grid: "Grade",
    initialCameraPosition: "Posição inicial da câmera",
    setCameraPosition: "Definir",
    resetCameraPosition: "Redefinir",
    cameraPositionSet: "Posição inicial da câmera definida",
    cameraPositionReset: "Posição inicial da câmera redefinida",
    lockCameraHorizontal: "Bloquear câmera horizontalmente",
    lockCameraVertical: "Bloquear câmera verticalmente",
    removeBackground: "Remover fundo",
    setBackground: "Definir fundo",
    lighting: "Iluminação",
    lightingType: "Tipo de luz",
    lightingTypeAmbient: "Ambiente (Ambient)",
    lightingTypeDirectional: "Direcional (Directional)",
    lightingTypePoint: "Pontual (Point)",
    lightingTypeHemisphere: "Hemisférica (Hemisphere)",
    lightingTypeMixed: "Mista (Mixed)",
    lightingIntensity: "Intensidade",
    closeContainer: "Fechar contêiner",
    insertLink: "Inserir link",
    panorama: "Panorama",
    ok: "OK",
    cancel: "Cancelar",
    fileNotFound: "Arquivo não encontrado!",
    wrongFormat: "Formato incorreto! Use imagens (png, jpg, gif, etc.)",
    backgroundLoadError: "Erro ao carregar fundo!",
    errorLoading3DModel: "Erro ao carregar modelo 3D",
    linkPlaceholder: "[[arquivo]] ou URL"
  },
  zh: {
    settingsTitle: "窗口设置",
    menuPosition: "菜单位置",
    menuPositionLeft: "左侧",
    menuPositionTop: "顶部",
    menuPositionBottom: "底部",
    menuPositionRight: "右侧",
    initialDisplay: "初始显示",
    initialDisplayCollapsed: "折叠",
    initialDisplayExpanded: "展开",
    onlyForThisFile: "仅用于此文件",
    initialDisplayThisFile: "此文件的初始显示",
    windowFormat: "窗口格式",
    windowFormatStandard: "标准",
    windowFormatLong: "长",
    windowFormatCustom: "自定义",
    windowSize: "窗口大小",
    width: "宽度",
    height: "高度",
    grid: "网格",
    initialCameraPosition: "相机初始位置",
    setCameraPosition: "设置",
    resetCameraPosition: "重置",
    cameraPositionSet: "相机初始位置已设置",
    cameraPositionReset: "相机初始位置已重置",
    lockCameraHorizontal: "水平锁定相机",
    lockCameraVertical: "垂直锁定相机",
    removeBackground: "移除背景",
    setBackground: "设置背景",
    lighting: "照明",
    lightingType: "光源类型",
    lightingTypeAmbient: "环境光 (Ambient)",
    lightingTypeDirectional: "定向光 (Directional)",
    lightingTypePoint: "点光源 (Point)",
    lightingTypeHemisphere: "半球光 (Hemisphere)",
    lightingTypeMixed: "混合光 (Mixed)",
    lightingIntensity: "强度",
    closeContainer: "关闭容器",
    insertLink: "插入链接",
    panorama: "全景",
    ok: "确定",
    cancel: "取消",
    fileNotFound: "文件未找到！",
    wrongFormat: "格式错误！请使用图像文件（png、jpg、gif等）",
    backgroundLoadError: "背景加载错误！",
    errorLoading3DModel: "3D模型加载错误",
    linkPlaceholder: "[[文件]] 或 URL"
  }
};
function t(key) {
  const locale = import_obsidian.moment.locale();
  const langMap = {
    "ru": "ru",
    "uk": "uk",
    "be": "be",
    "kk": "kk",
    "de": "de",
    "fr": "fr",
    "es": "es",
    "it": "it",
    "pl": "pl",
    "cs": "cs",
    "pt": "pt",
    "pt-BR": "pt",
    "zh": "zh",
    "zh-CN": "zh",
    "zh-TW": "zh"
  };
  let lang = langMap[locale];
  if (!lang) {
    const prefix = locale.split("-")[0];
    lang = langMap[prefix];
  }
  if (!lang) {
    lang = "en";
  }
  return translations[lang][key] || translations["en"][key];
}
var VIEW_TYPE_3D = "3d-viewer";
var SUPPORTED_3D_FORMATS = [
  "fbx",
  "gltf",
  "glb",
  "obj",
  "usdz",
  "x3d",
  "stl",
  "dae",
  "3ds",
  "ply",
  "3mf"
];
var DEFAULT_SETTINGS = {
  settingsMenuPosition: "left",
  initialDisplay: "collapsed",
  perFileSettings: {}
};
var ThreeDView = class extends import_obsidian.TextFileView {
  scene = null;
  camera = null;
  renderer = null;
  controls = null;
  animationId = null;
  observer = null;
  isAnimating = true;
  plugin;
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.plugin.log("[3D Viewer] ThreeDView constructor called");
  }
  getViewType() {
    return VIEW_TYPE_3D;
  }
  getDisplayText() {
    return this.file?.basename || "3D Model";
  }
  async onLoadFile(file) {
    this.plugin?.log("[3D Viewer] onLoadFile called for:", file.path);
    this.clear();
    await this.render3DModel(file);
  }
  async onUnloadFile(file) {
    this.clear();
  }
  clear() {
    this.plugin?.log("Clearing ThreeDView resources...");
    this.isAnimating = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.scene) {
      this.scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => {
              this.disposeMaterial(material);
            });
          } else {
            this.disposeMaterial(object.material);
          }
        }
      });
      this.scene.clear();
      this.scene = null;
    }
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
      this.renderer = null;
    }
    if (this.controls) {
      this.controls.dispose();
      this.controls = null;
    }
    this.camera = null;
    this.contentEl.empty();
    this.plugin?.log("ThreeDView resources cleared");
  }
  disposeMaterial(material) {
    if (material.map) material.map.dispose();
    if (material.lightMap) material.lightMap.dispose();
    if (material.bumpMap) material.bumpMap.dispose();
    if (material.normalMap) material.normalMap.dispose();
    if (material.specularMap) material.specularMap.dispose();
    if (material.envMap) material.envMap.dispose();
    if (material.alphaMap) material.alphaMap.dispose();
    if (material.aoMap) material.aoMap.dispose();
    if (material.displacementMap) material.displacementMap.dispose();
    if (material.emissiveMap) material.emissiveMap.dispose();
    if (material.gradientMap) material.gradientMap.dispose();
    if (material.metalnessMap) material.metalnessMap.dispose();
    if (material.roughnessMap) material.roughnessMap.dispose();
    material.dispose();
  }
  async render3DModel(file) {
    this.plugin?.log("[3D Viewer] render3DModel called for:", file.path);
    const fileSettings = this.plugin.settings.perFileSettings[file.path];
    const containerClasses = fileSettings?.removeBackground ? "three-d-viewer-container transparent-background" : "three-d-viewer-container";
    const container = this.contentEl.createDiv({ cls: containerClasses });
    if (fileSettings?.removeBackground) {
      container.style.background = "transparent";
      this.plugin?.log("[3D Viewer] Container created with transparent background");
    }
    this.scene = new THREE.Scene();
    if (!fileSettings?.removeBackground && !fileSettings?.customBackground) {
      this.scene.background = new THREE.Color(2763306);
    }
    const width = container.clientWidth || 800;
    const height = Math.floor(width * 2 / 3);
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1e3);
    this.camera.position.set(0, 1, 3);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    if (fileSettings?.removeBackground) {
      this.renderer.setClearAlpha(0);
      this.plugin?.log("[3D Viewer] Renderer transparency enabled");
    }
    container.appendChild(this.renderer.domElement);
    this.controls = new import_OrbitControls.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    const lightingEnabled = fileSettings?.lightingEnabled !== false;
    const lightingType = fileSettings?.lightingType || "mixed";
    const lightIntensity = fileSettings?.lightIntensity || 1;
    if (lightingEnabled) {
      switch (lightingType) {
        case "ambient":
          const ambientLight = new THREE.AmbientLight(16777215, 1.5 * lightIntensity);
          this.scene.add(ambientLight);
          break;
        case "directional":
          const dirLight = new THREE.DirectionalLight(16777215, 2 * lightIntensity);
          dirLight.position.set(5, 10, 7.5);
          this.scene.add(dirLight);
          const ambLight1 = new THREE.AmbientLight(16777215, 0.3 * lightIntensity);
          this.scene.add(ambLight1);
          break;
        case "point":
          const pointLight1 = new THREE.PointLight(16777215, 2 * lightIntensity, 100);
          pointLight1.position.set(10, 10, 10);
          this.scene.add(pointLight1);
          const pointLight2 = new THREE.PointLight(16777215, 1 * lightIntensity, 100);
          pointLight2.position.set(-10, -10, -10);
          this.scene.add(pointLight2);
          const ambLight2 = new THREE.AmbientLight(16777215, 0.3 * lightIntensity);
          this.scene.add(ambLight2);
          break;
        case "hemisphere":
          const hemiLight = new THREE.HemisphereLight(16777215, 4473924, 1.5 * lightIntensity);
          hemiLight.position.set(0, 20, 0);
          this.scene.add(hemiLight);
          break;
        case "mixed":
        default:
          const mixedAmbient = new THREE.AmbientLight(16777215, 0.5 * lightIntensity);
          this.scene.add(mixedAmbient);
          const mixedDir1 = new THREE.DirectionalLight(16777215, 1 * lightIntensity);
          mixedDir1.position.set(5, 10, 7.5);
          this.scene.add(mixedDir1);
          const mixedDir2 = new THREE.DirectionalLight(16777215, 0.5 * lightIntensity);
          mixedDir2.position.set(-5, -10, -7.5);
          this.scene.add(mixedDir2);
          break;
      }
    } else {
      const minAmbient = new THREE.AmbientLight(16777215, 0.3);
      this.scene.add(minAmbient);
    }
    const gridHelper = new THREE.GridHelper(10, 10, 4473924, 2236962);
    this.scene.add(gridHelper);
    const showGrid = fileSettings?.showGrid !== void 0 ? fileSettings.showGrid : true;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = showGrid ? 1 : 0;
    this.plugin?.log("[3D Viewer] Grid initial opacity:", showGrid ? 1 : 0);
    try {
      this.plugin?.log("[3D Viewer] Loading model:", file.path);
      const arrayBuffer = await this.app.vault.readBinary(file);
      const blob = new Blob([arrayBuffer]);
      const url = URL.createObjectURL(blob);
      const extension = file.extension.toLowerCase();
      await this.loadModel(url, extension, this.scene, this.camera, file);
      this.plugin?.log("[3D Viewer] Model loaded successfully!");
      if (fileSettings?.cameraPosition && fileSettings?.cameraTarget && this.controls) {
        this.camera.position.set(
          fileSettings.cameraPosition.x,
          fileSettings.cameraPosition.y,
          fileSettings.cameraPosition.z
        );
        this.controls.target.set(
          fileSettings.cameraTarget.x,
          fileSettings.cameraTarget.y,
          fileSettings.cameraTarget.z
        );
        this.controls.update();
        this.plugin?.log("[3D Viewer] Applied saved camera position:", fileSettings.cameraPosition, fileSettings.cameraTarget);
      }
      if (this.controls) {
        if (fileSettings?.lockHorizontal) {
          const currentAzimuth = this.controls.getAzimuthalAngle();
          this.controls.minAzimuthAngle = currentAzimuth;
          this.controls.maxAzimuthAngle = currentAzimuth;
          this.plugin?.log("[3D Viewer] Applied horizontal lock");
        }
        if (fileSettings?.lockVertical) {
          const currentPolar = this.controls.getPolarAngle();
          this.controls.minPolarAngle = currentPolar;
          this.controls.maxPolarAngle = currentPolar;
          this.plugin?.log("[3D Viewer] Applied vertical lock");
        }
      }
      if (fileSettings?.removeBackground) {
        this.scene.background = null;
        this.plugin?.log("[3D Viewer] Scene background removed after loading");
      } else if (!fileSettings?.customBackground) {
        this.scene.background = new THREE.Color(2763306);
        if (this.renderer) {
          this.renderer.setClearAlpha(1);
        }
        this.plugin?.log("[3D Viewer] Standard gray background restored");
      }
      if (fileSettings?.customBackground) {
        this.plugin?.log("[3D Viewer] Loading custom background:", fileSettings.customBackground);
        await this.loadCustomBackground(fileSettings.customBackground, fileSettings.isPanorama || false, container);
        const forcedReloadPanorama = async () => {
          if (fileSettings?.customBackground && fileSettings?.isPanorama) {
            this.plugin?.log("[3D Viewer] FORCED panorama reload attempt");
            await this.loadCustomBackground(fileSettings.customBackground, true, container);
          }
        };
        setTimeout(() => forcedReloadPanorama(), 100);
        setTimeout(() => forcedReloadPanorama(), 300);
        setTimeout(() => forcedReloadPanorama(), 500);
      }
      const animate = () => {
        if (!this.isAnimating) return;
        this.animationId = requestAnimationFrame(animate);
        if (this.controls) this.controls.update();
        if (this.renderer && this.scene && this.camera) {
          this.renderer.render(this.scene, this.camera);
        }
      };
      animate();
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!this.isAnimating) {
              this.isAnimating = true;
              animate();
              this.plugin?.log("Resumed rendering (ThreeDView visible)");
            }
          } else {
            if (this.isAnimating) {
              this.isAnimating = false;
              if (this.animationId) {
                cancelAnimationFrame(this.animationId);
              }
              this.plugin?.log("Paused rendering (ThreeDView not visible)");
            }
          }
        });
      }, {
        threshold: 0.01
      });
      this.observer.observe(this.contentEl);
      URL.revokeObjectURL(url);
      if (fileSettings?.removeBackground && this.scene && this.renderer) {
        setTimeout(() => {
          this.plugin?.log("[3D Viewer] Auto-applying removeBackground");
          if (this.scene && this.renderer) {
            this.scene.background = null;
            this.renderer.setClearAlpha(0);
            container.style.background = "transparent";
            container.addClass("transparent-background");
            this.plugin?.log("[3D Viewer] removeBackground applied");
          }
        }, 200);
      }
    } catch (error) {
      this.plugin?.log("[3D Viewer] Error loading 3D model:", error);
      this.showError(container, t("errorLoading3DModel"));
    }
  }
  async loadModel(url, extension, scene, camera, modelFile) {
    return new Promise(async (resolve, reject) => {
      const onLoad = async (object) => {
        await this.loadTextures(object, modelFile);
        this.centerAndScaleModel(object, camera);
        scene.add(object);
        resolve();
      };
      const onError = (error) => {
        this.plugin?.log(`[3D Viewer] Error loading ${extension}:`, error);
        reject(error);
      };
      const manager = new THREE.LoadingManager();
      const customTextureLoader = new THREE.TextureLoader(manager);
      const originalLoad = customTextureLoader.load.bind(customTextureLoader);
      customTextureLoader.load = (url2, onLoad2, onProgress, onError2) => {
        const textureName = url2.split("/").pop()?.split("?")[0];
        if (textureName) {
          this.plugin?.log(`[3D Viewer] Manager intercepted texture load request: ${textureName}`);
          this.resolveTexturePath(textureName, modelFile).then((texturePath) => {
            if (texturePath) {
              const textureFile = this.plugin.app.vault.getAbstractFileByPath(texturePath);
              if (textureFile instanceof import_obsidian.TFile) {
                this.plugin?.log(`[3D Viewer] Loading intercepted texture: ${texturePath}`);
                this.plugin.app.vault.readBinary(textureFile).then((arrayBuffer) => {
                  const blob = new Blob([arrayBuffer]);
                  const newUrl = URL.createObjectURL(blob);
                  originalLoad(newUrl, onLoad2, onProgress, onError2);
                }).catch((err) => {
                  this.plugin?.log(`[3D Viewer] Failed to read texture file:`, err);
                  if (onError2) onError2(err);
                });
                return;
              }
            }
            this.plugin?.log(`[3D Viewer] Texture not found, trying original URL: ${url2}`);
            originalLoad(url2, onLoad2, onProgress, onError2);
          });
        } else {
          originalLoad(url2, onLoad2, onProgress, onError2);
        }
        return new THREE.Texture();
      };
      manager.textureLoader = customTextureLoader;
      switch (extension) {
        case "gltf":
        case "glb":
          new import_GLTFLoader.GLTFLoader(manager).load(url, (gltf) => onLoad(gltf.scene), void 0, onError);
          break;
        case "fbx":
          const fbxLoader = new import_FBXLoader.FBXLoader(manager);
          fbxLoader.textureLoader = customTextureLoader;
          fbxLoader.load(url, onLoad, void 0, onError);
          break;
        case "obj":
          new import_OBJLoader.OBJLoader(manager).load(url, onLoad, void 0, onError);
          break;
        case "usdz":
          new import_USDZLoader.USDZLoader(manager).load(url, onLoad, void 0, onError);
          break;
        default:
          this.plugin?.log("[3D Viewer] Unsupported format:", extension);
          reject(new Error(`Unsupported format: ${extension}`));
      }
    });
  }
  async loadTextures(object, modelFile) {
    const textureLoader = new THREE.TextureLoader();
    const promises = [];
    const materialUsageCount = new Map();
    const processedMaterials = new Set();
    let meshesWithoutMaterial = 0;
    let totalMeshes = 0;
    this.plugin?.log("[3D Viewer] Starting smart texture loading by material names...");
    const availableTextures = await this.getAvailableTextures(modelFile);
    this.plugin?.log(`[3D Viewer] Found ${availableTextures.length} texture files in folders`);
    object.traverse((child) => {
      if (child.isMesh) {
        totalMeshes++;
        if (child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          for (const material of materials) {
            const name = material.name || "unnamed";
            materialUsageCount.set(name, (materialUsageCount.get(name) || 0) + 1);
          }
        } else {
          meshesWithoutMaterial++;
          this.plugin?.log(`[3D Viewer] ⚠️ Mesh "${child.name || "unnamed"}" has NO MATERIAL - will appear WHITE!`);
        }
      }
    });
    this.plugin?.log(`[3D Viewer] === Model Statistics ===`);
    this.plugin?.log(`[3D Viewer] Total meshes: ${totalMeshes}`);
    this.plugin?.log(`[3D Viewer] Meshes without material: ${meshesWithoutMaterial}`);
    this.plugin?.log(`[3D Viewer] Material usage (one material can be shared by multiple meshes):`);
    materialUsageCount.forEach((count, name) => {
      this.plugin?.log(`[3D Viewer]   "${name}" -> used on ${count} mesh(es)`);
    });
    this.plugin?.log(`[3D Viewer] === Processing Textures ===`);
    object.traverse((child) => {
      if (child.isMesh && child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        for (const material of materials) {
          const materialName = material.name || "unnamed";
          if (processedMaterials.has(materialName)) {
            return;
          }
          processedMaterials.add(materialName);
          const usageCount = materialUsageCount.get(materialName) || 0;
          this.plugin?.log(`[3D Viewer] Processing material: "${materialName}" (shared by ${usageCount} mesh(es))`);
          const matchedTextures = this.matchTexturesForMaterial(materialName, availableTextures);
          if (matchedTextures.diffuse) {
            this.plugin?.log(`[3D Viewer] ✅ Found diffuse texture: ${matchedTextures.diffuse.split("/").pop()}`);
            const promise = this.loadAndApplyTexture(matchedTextures.diffuse, material, "map", textureLoader);
            promises.push(promise);
          } else {
            this.plugin?.log(`[3D Viewer] ⚠️ NO diffuse texture found - material will use default color`);
          }
          if (matchedTextures.normal) {
            this.plugin?.log(`[3D Viewer] Found normal texture for ${materialName}: ${matchedTextures.normal}`);
            const promise = this.loadAndApplyTexture(matchedTextures.normal, material, "normalMap", textureLoader);
            promises.push(promise);
          }
          if (matchedTextures.roughness) {
            this.plugin?.log(`[3D Viewer] Found roughness texture for ${materialName}: ${matchedTextures.roughness}`);
            const promise = this.loadAndApplyTexture(matchedTextures.roughness, material, "roughnessMap", textureLoader);
            promises.push(promise);
          }
          if (matchedTextures.metalness) {
            this.plugin?.log(`[3D Viewer] Found metalness texture for ${materialName}: ${matchedTextures.metalness}`);
            const promise = this.loadAndApplyTexture(matchedTextures.metalness, material, "metalnessMap", textureLoader);
            promises.push(promise);
          }
          if (matchedTextures.emissive) {
            this.plugin?.log(`[3D Viewer] Found emissive texture for ${materialName}: ${matchedTextures.emissive}`);
            const promise = this.loadAndApplyTexture(matchedTextures.emissive, material, "emissiveMap", textureLoader);
            promises.push(promise);
          }
        }
      }
    });
    await Promise.all(promises);
    this.plugin?.log(`[3D Viewer] Finished loading ${promises.length} textures`);
  }
  async getAvailableTextures(modelFile) {
    const textures = [];
    const modelDir = modelFile.parent?.path || "";
    const modelBaseName = modelFile.basename;
    this.plugin?.log(`[3D Viewer] Scanning for textures in folder: ${modelBaseName}`);
    const modelFolder = `${modelDir}/${modelBaseName}`;
    const modelFolderFiles = this.plugin.app.vault.getAbstractFileByPath(modelFolder);
    if (modelFolderFiles && "children" in modelFolderFiles) {
      this.plugin?.log(`[3D Viewer] Found model texture folder: ${modelFolder}`);
      for (const file of modelFolderFiles.children) {
        if (file instanceof import_obsidian.TFile && this.isImageFile(file.name)) {
          textures.push(file.path);
          this.plugin?.log(`[3D Viewer] Found texture: ${file.name}`);
        }
      }
    } else {
      this.plugin?.log(`[3D Viewer] Model texture folder not found: ${modelFolder}`);
      this.plugin?.log(`[3D Viewer] Textures should be in: ${modelDir}/${modelBaseName}/`);
    }
    this.plugin?.log(`[3D Viewer] Total textures found: ${textures.length}`);
    return textures;
  }
  isImageFile(filename) {
    const ext = filename.split(".").pop()?.toLowerCase();
    return ["jpg", "jpeg", "png", "bmp", "tga", "tiff", "webp"].includes(ext || "");
  }
  matchTexturesForMaterial(materialName, availableTextures) {
    const result = {};
    if (!materialName) return result;
    const materialNameLower = materialName.toLowerCase();
    const diffusePatterns = ["diffuse", "color", "albedo", "basecolor", "base_color"];
    const normalPatterns = ["normal", "norm", "nrm", "normmap"];
    const roughnessPatterns = ["roughness", "rough"];
    const metalnessPatterns = ["metalness", "metallic", "metal"];
    const emissivePatterns = ["emissive", "emission", "glow"];
    for (const texturePath of availableTextures) {
      if (!texturePath) continue;
      const textureName = texturePath.split("/").pop() || "";
      if (!textureName) continue;
      const textureBaseName = textureName.split(".")[0] || "";
      if (!textureBaseName) continue;
      const splitCamelCase = (str) => {
        return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2").replace(/\d+/g, " $& ").toLowerCase().replace(/shader|material|mtl|sg|vray|mesh|plain|map/g, "").split(/[\s_\-]+/).filter((w) => w.length > 2);
      };
      const materialWords = splitCamelCase(materialName);
      const textureWords = splitCamelCase(textureBaseName);
      if (materialName === "OnePiece" || materialName === "ArmShader" || materialName === "Gloves") {
        this.plugin?.log(`[3D Viewer] DEBUG: Material "${materialName}" → words: [${materialWords.join(", ")}]`);
        this.plugin?.log(`[3D Viewer] DEBUG: Texture "${textureBaseName}" → words: [${textureWords.join(", ")}]`);
      }
      let matches = false;
      let matchedWords = 0;
      for (const materialWord of materialWords) {
        if (materialWord.length >= 3) {
          for (const textureWord of textureWords) {
            if (textureWord.length >= 3) {
              if (materialWord === textureWord) {
                matchedWords++;
                if (materialName === "OnePiece" || materialName === "ArmShader") {
                  this.plugin?.log(`[3D Viewer] DEBUG: MATCH! "${materialWord}" === "${textureWord}"`);
                }
                break;
              }
              if (materialWord.includes(textureWord) || textureWord.includes(materialWord)) {
                matchedWords++;
                if (materialName === "OnePiece" || materialName === "ArmShader") {
                  this.plugin?.log(`[3D Viewer] DEBUG: MATCH! "${materialWord}" contains/in "${textureWord}"`);
                }
                break;
              }
              if (materialWord.length >= 4 && textureWord.length >= 4) {
                if (materialWord.substring(0, 4) === textureWord.substring(0, 4)) {
                  matchedWords++;
                  if (materialName === "OnePiece" || materialName === "ArmShader") {
                    this.plugin?.log(`[3D Viewer] DEBUG: MATCH! "${materialWord}" ≈ "${textureWord}" (first 4 letters)`);
                  }
                  break;
                }
              }
            }
          }
        }
      }
      matches = matchedWords > 0;
      if (materialName === "OnePiece" || materialName === "ArmShader") {
        this.plugin?.log(`[3D Viewer] DEBUG: Matched words: ${matchedWords}, matches: ${matches}`);
      }
      if (matches) {
        const textureNameLower = textureName.toLowerCase();
        if (!result.diffuse && diffusePatterns.some((p) => textureNameLower.includes(p))) {
          result.diffuse = texturePath;
          this.plugin?.log(`[3D Viewer] Matched diffuse for ${materialName}: ${texturePath}`);
        }
        if (!result.normal && normalPatterns.some((p) => textureNameLower.includes(p))) {
          result.normal = texturePath;
          this.plugin?.log(`[3D Viewer] Matched normal for ${materialName}: ${texturePath}`);
        }
        if (!result.roughness && roughnessPatterns.some((p) => textureName.includes(p))) {
          result.roughness = texturePath;
          this.plugin?.log(`[3D Viewer] Matched roughness for ${materialName}: ${texturePath}`);
        }
        if (!result.metalness && metalnessPatterns.some((p) => textureName.includes(p))) {
          result.metalness = texturePath;
          this.plugin?.log(`[3D Viewer] Matched metalness for ${materialName}: ${texturePath}`);
        }
        if (!result.emissive && emissivePatterns.some((p) => textureName.includes(p))) {
          result.emissive = texturePath;
          this.plugin?.log(`[3D Viewer] Matched emissive for ${materialName}: ${texturePath}`);
        }
      }
    }
    return result;
  }
  async loadAndApplyTexture(texturePath, material, property, textureLoader) {
    try {
      const textureFile = this.plugin.app.vault.getAbstractFileByPath(texturePath);
      if (textureFile instanceof import_obsidian.TFile) {
        const arrayBuffer = await this.plugin.app.vault.readBinary(textureFile);
        const blob = new Blob([arrayBuffer]);
        const url = URL.createObjectURL(blob);
        const texture = await new Promise((resolve, reject) => {
          textureLoader.load(url, resolve, void 0, reject);
        });
        material[property] = texture;
        material.needsUpdate = true;
        this.plugin?.log(`[3D Viewer] ✅ Applied ${property}: ${texturePath.split("/").pop()} to material: ${material.name}`);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      this.plugin?.log(`[3D Viewer] ❌ Failed to load texture ${texturePath}:`, error);
    }
  }
  async resolveTexturePath(textureFileName, modelFile) {
    const modelDir = modelFile.parent?.path || "";
    const modelBaseName = modelFile.basename;
    const texturesFolder = `${modelDir}/${modelBaseName}`;
    const pathInModelFolder = `${texturesFolder}/${textureFileName}`;
    let textureFile = this.plugin.app.vault.getAbstractFileByPath(pathInModelFolder);
    if (textureFile instanceof import_obsidian.TFile) {
      this.plugin?.log(`[3D Viewer] Found texture in model folder: ${pathInModelFolder}`);
      return pathInModelFolder;
    }
    const pathInSameFolder = `${modelDir}/${textureFileName}`;
    textureFile = this.plugin.app.vault.getAbstractFileByPath(pathInSameFolder);
    if (textureFile instanceof import_obsidian.TFile) {
      this.plugin?.log(`[3D Viewer] Found texture in same folder: ${pathInSameFolder}`);
      return pathInSameFolder;
    }
    this.plugin?.log(`[3D Viewer] Texture not found: ${textureFileName}`);
    return null;
  }
  centerAndScaleModel(model, camera) {
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2 / maxDim;
    model.scale.multiplyScalar(scale);
    box.setFromObject(model);
    box.getCenter(center);
    model.position.sub(center);
  }
  async loadCustomBackground(link, isPanorama, container) {
    let filePath = link;
    const wikiLinkMatch = link.match(/\[\[(.+?)\]\]/);
    if (wikiLinkMatch) {
      filePath = wikiLinkMatch[1];
    }
    const files = this.app.vault.getFiles();
    let targetFile = null;
    for (const f of files) {
      if (f.path.includes(filePath) || f.basename === filePath || f.name === filePath) {
        targetFile = f;
        break;
      }
    }
    try {
      let imageUrl;
      if (targetFile) {
        const arrayBuffer = await this.app.vault.readBinary(targetFile);
        const blob = new Blob([arrayBuffer]);
        imageUrl = URL.createObjectURL(blob);
      } else {
        imageUrl = link;
      }
      const textureLoader = new THREE.TextureLoader();
      await new Promise((resolve, reject) => {
        textureLoader.load(
          imageUrl,
          (texture) => {
            if (!this.scene) {
              resolve();
              return;
            }
            texture.colorSpace = THREE.SRGBColorSpace;
            if (isPanorama) {
              this.scene.traverse((obj) => {
                if (obj.userData && obj.userData.isPanoramaSphere) {
                  this.scene?.remove(obj);
                }
              });
              const geometry = new THREE.SphereGeometry(500, 60, 40);
              geometry.scale(-1, 1, 1);
              const material = new THREE.MeshBasicMaterial({ map: texture });
              const panoramaSphere = new THREE.Mesh(geometry, material);
              panoramaSphere.userData.isPanoramaSphere = true;
              this.scene.add(panoramaSphere);
              this.scene.background = null;
              this.plugin?.log("[3D Viewer] Panorama background loaded");
            } else {
              this.scene.traverse((obj) => {
                if (obj.userData && obj.userData.isPanoramaSphere) {
                  this.scene?.remove(obj);
                }
              });
              this.scene.background = texture;
              this.plugin?.log("[3D Viewer] Custom background loaded");
            }
            if (targetFile) {
              URL.revokeObjectURL(imageUrl);
            }
            resolve();
          },
          void 0,
          (error) => {
            this.plugin?.log("[3D Viewer] Error loading texture:", error);
            reject(error);
          }
        );
      });
    } catch (error) {
      this.plugin?.log("[3D Viewer] Error loading custom background:", error);
    }
  }
  showError(container, message) {
    container.empty();
    const errorDiv = container.createDiv({ cls: "three-d-viewer-error" });
    errorDiv.textContent = message;
  }
  getViewData() {
    return "";
  }
  setViewData(data, clear) {
  }
};
var ThreeDViewerPlugin = class extends import_obsidian.Plugin {
  debugLogs = [];
  expandedModels = new Set();
  settings = DEFAULT_SETTINGS;
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.log("=== SETTINGS LOADED ===");
    this.log("initialDisplay:", this.settings.initialDisplay);
  }
  async saveSettings() {
    this.log("=== SAVING SETTINGS ===");
    this.log("initialDisplay being saved:", this.settings.initialDisplay);
    await this.saveData(this.settings);
    this.log("=== SETTINGS SAVED ===");
  }
  log(message, ...args) {
    const timestamp = (new Date()).toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage, ...args);
    const argsString = args.map((a) => {
      try {
        if (typeof a === "object" && a !== null) {
          return `[${a.constructor?.name || "Object"}]`;
        }
        return JSON.stringify(a);
      } catch (e) {
        return "[Circular]";
      }
    }).join(" ");
    this.debugLogs.push(logMessage + " " + argsString);
  }
  async onload() {
    this.log("=== Plugin onload START ===");
    await this.loadSettings();
    this.log("Settings loaded:", this.settings);
    this.log("Registering view type:", VIEW_TYPE_3D);
    this.registerView(VIEW_TYPE_3D, (leaf) => {
      this.log("View factory called for leaf:", leaf);
      return new ThreeDView(leaf, this);
    });
    this.log("View registered successfully");
    this.log("Registering extensions:", SUPPORTED_3D_FORMATS);
    SUPPORTED_3D_FORMATS.forEach((ext) => {
      this.log("Registering extension:", ext, "->", VIEW_TYPE_3D);
      this.registerExtensions([ext], VIEW_TYPE_3D);
    });
    this.log("All extensions registered");
    const autoExpandContainers = () => {
      this.log("=== AUTO-EXPAND CHECK START ===");
      this.log("Global initialDisplay setting:", this.settings.initialDisplay);
      const embeds = document.querySelectorAll(".internal-embed");
      this.log("Found embeds:", embeds.length);
      const existingContainers = document.querySelectorAll(".three-d-viewer-inline-container");
      this.log("Existing 3D containers on page:", existingContainers.length);
      embeds.forEach((embed) => {
        const src = embed.getAttribute("src");
        this.log("Checking embed with src:", src);
        if (!src) {
          this.log("  -> No src, skipping");
          return;
        }
        const extension = src.split(".").pop()?.toLowerCase();
        if (!extension || !SUPPORTED_3D_FORMATS.includes(extension)) {
          this.log("  -> Not a 3D file, skipping");
          return;
        }
        if (embed.querySelector(".three-d-viewer-inline-container")) {
          this.log("  -> Container already exists, skipping");
          return;
        }
        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
          this.log("  -> No active file, skipping");
          return;
        }
        const file = this.app.metadataCache.getFirstLinkpathDest(src, activeFile.path);
        if (!file) {
          this.log("  -> File not found in vault, skipping");
          return;
        }
        this.log("  -> File found:", file.path);
        const fileSettings = this.settings.perFileSettings[file.path];
        this.log("  -> File settings:", fileSettings);
        let shouldExpand = false;
        if (fileSettings && fileSettings.useLocal && fileSettings.initialDisplay) {
          shouldExpand = fileSettings.initialDisplay === "expanded";
          this.log("  -> Using LOCAL settings - shouldExpand:", shouldExpand, "initialDisplay:", fileSettings.initialDisplay);
        } else {
          shouldExpand = this.settings.initialDisplay === "expanded";
          this.log("  -> Using GLOBAL settings - shouldExpand:", shouldExpand, "initialDisplay:", this.settings.initialDisplay);
        }
        if (shouldExpand) {
          this.log("  -> ✓ EXPANDING:", src);
          this.createInlineContainer(embed, file, extension);
        } else {
          this.log("  -> ✗ NOT expanding (shouldExpand=false)");
        }
      });
      this.log("=== AUTO-EXPAND CHECK END ===");
    };
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", () => {
        this.log("=== ACTIVE LEAF CHANGED ===");
        this.log("Current initialDisplay setting:", this.settings.initialDisplay);
        setTimeout(() => autoExpandContainers(), 100);
      })
    );
    this.registerEvent(
      this.app.workspace.on("layout-change", () => {
        this.log("=== LAYOUT CHANGED ===");
        this.log("Current initialDisplay setting:", this.settings.initialDisplay);
        setTimeout(() => autoExpandContainers(), 100);
      })
    );
    this.app.workspace.onLayoutReady(() => {
      this.log("=== LAYOUT READY ===");
      this.log("Current initialDisplay setting:", this.settings.initialDisplay);
      setTimeout(() => autoExpandContainers(), 200);
    });
    let observerTimeout = null;
    const observer = new MutationObserver((mutations) => {
      let hasNewEmbeds = false;
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              if (node.classList?.contains("internal-embed") || node.querySelector(".internal-embed")) {
                hasNewEmbeds = true;
              }
            }
          });
        }
      }
      if (hasNewEmbeds) {
        if (observerTimeout) {
          clearTimeout(observerTimeout);
        }
        observerTimeout = setTimeout(() => {
          this.log("=== NEW EMBEDS DETECTED BY OBSERVER ===");
          autoExpandContainers();
          observerTimeout = null;
        }, 100);
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    this.register(() => {
      observer.disconnect();
      if (observerTimeout) {
        clearTimeout(observerTimeout);
        observerTimeout = null;
      }
    });
    this.registerDomEvent(document, "click", (event) => {
      const target = event.target;
      if (target.closest(".three-d-viewer-toolbar") || target.closest(".three-d-viewer-settings-menu")) {
        this.log("Click on toolbar/menu - ignoring");
        return;
      }
      const embed = target.closest(".internal-embed");
      if (!embed) return;
      const src = embed.getAttribute("src");
      if (!src) return;
      const extension = src.split(".").pop()?.toLowerCase();
      if (!extension || !SUPPORTED_3D_FORMATS.includes(extension)) return;
      this.log("3D embed clicked, intercepting:", src);
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      const activeFile = this.app.workspace.getActiveFile();
      if (!activeFile) return;
      const file = this.app.metadataCache.getFirstLinkpathDest(src, activeFile.path);
      if (!file) {
        this.log("File not found:", src);
        return;
      }
      const existingContainer = embed.querySelector(".three-d-viewer-inline-container");
      if (existingContainer) {
        if (existingContainer.style.display === "none") {
          existingContainer.style.display = "block";
          this.log("Showing existing container");
        } else {
          existingContainer.style.display = "none";
          this.log("Hiding container");
        }
      } else {
        this.createInlineContainer(embed, file, extension);
      }
    }, true);
    this.log("Global click interceptor registered");
    this.addCommand({
      id: "save-debug-logs",
      name: "3D Viewer: Save debug logs to file",
      callback: async () => {
        await this.saveLogsToFile();
      }
    });
  }
  createInlineContainer(embed, file, extension) {
    this.log("Creating new inline container");
    const fileSettings = this.settings.perFileSettings[file.path] || { useLocal: false, windowFormat: "standard" };
    embed.empty();
    embed.setAttribute("data-no-resize", "true");
    embed.setAttribute("contenteditable", "false");
    embed.addClass("no-resize");
    embed.style.background = "transparent";
    embed.style.padding = "0";
    embed.style.margin = "0";
    const blockOverlay = embed.createDiv({ cls: "three-d-viewer-block-overlay" });
    const containerClasses = fileSettings?.removeBackground ? "three-d-viewer-inline-container transparent-background" : "three-d-viewer-inline-container";
    const container = embed.createDiv({ cls: containerClasses });
    if (fileSettings?.removeBackground) {
      container.style.background = "transparent";
      this.log("Inline container created with transparent background");
    }
    container.setAttribute("data-no-resize", "true");
    container.setAttribute("contenteditable", "false");
    const toolbar = container.createDiv({ cls: "three-d-viewer-toolbar" });
    const settingsButton = toolbar.createEl("button", {
      cls: "three-d-viewer-settings-button"
    });
    settingsButton.innerHTML = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAnlJREFUSImtlb9PFFEQxz/zDjkI9yeYwNvFBIIlEI3RAhuMxkJrawo1qNHEX52/YoJgog21tTY0NEoiVnDthhgu77GJ/4GE3OHxxmbBY4FdjE61O/P9MS+7M084RjjnvgLnc+nlKIoulHFNGUBVK8DoIaWxrPZvBhsbG6eA3kNKPd77wWMbJEnSnaZplAeEEC4dRRaRA7U0TaMkSbr3MLsP3vuXqvoIqIvIB2BFVWeAcyVNfhORB8C4qt4ARkXklbX28Z5BmqbRzs5OAvSUiB03tlX1dBzH6wag3W7P/EdxgG7gNYA0Go0JY8znEsKCiMz29vauAjSbzfEQwj3gShEphHCxyxgzXARS1cdxHL/KpZeAJefcE+D5UVxjzLAAeO+nVPUdcCLfeRRFV4sacM4tcPAkv0TktrV23gBYa+dDCJNAqxMlIrNF4gAhhLlcqhVCmLTWzkPHHAwODn4BQidya2urXmbQbrdX856ZFvsMstAywXxUKhXJpfZp7Bk0Go0JYN9u6evrGyszEJH8nqpkWn8MvPdTxphFoNqJzH7FwjDG5DFVY8yi934KQJxzN4H3BRpPoyh6cVjBOfcUeFbAvdUVQlgzpnCpPnfOnQkhzLVarRWAarU6nnV+uYgYQljbnYOPqnqtCPy3ISKfrLXXTfZyH2j+R/3tEMJDyD7ywMCAF5HdgamLyLSInAWWjyG2LCJnRWQaqGcNv4njeB067oMkSbprtdrJ/v5+18n23t9R1fy0kgndtda+7cylaRptbm7+GBkZ2d5ncFR474dUde2I8lAURd+L+KUGqlrx3v/k4L3ctNbWRGSniF966WcCh+2klTJxgN8IGPL4MAMepgAAAABJRU5ErkJggg==" style="width: 20px; height: 20px; display: block;">`;
    const settingsMenu = document.body.createDiv({ cls: "three-d-viewer-settings-menu" });
    settingsMenu.style.display = "none";
    settingsMenu.style.position = "fixed";
    settingsMenu.style.zIndex = "10000";
    settingsMenu.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      this.log("Click on settings menu - prevented");
    });
    const menuHeader = settingsMenu.createDiv({ cls: "settings-menu-header" });
    menuHeader.createDiv({ cls: "settings-menu-title", text: t("settingsTitle") });
    const settingsContent = settingsMenu.createDiv({ cls: "settings-menu-content" });
    const positionSetting = settingsContent.createDiv({ cls: "setting-item" });
    positionSetting.createDiv({ cls: "setting-item-name", text: t("menuPosition") });
    const positionControl = positionSetting.createDiv({ cls: "setting-item-control" });
    const positionSelect = positionControl.createEl("select");
    ["left", "top", "bottom", "right"].forEach((pos) => {
      const option = positionSelect.createEl("option", {
        value: pos,
        text: pos === "left" ? t("menuPositionLeft") : pos === "top" ? t("menuPositionTop") : pos === "bottom" ? t("menuPositionBottom") : t("menuPositionRight")
      });
      if (pos === this.settings.settingsMenuPosition) {
        option.selected = true;
      }
    });
    positionSelect.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    });
    positionSelect.addEventListener("change", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const newPosition = positionSelect.value;
      this.settings.settingsMenuPosition = newPosition;
      await this.saveSettings();
      this.log("Settings menu position changed to:", newPosition);
    });
    const displayWrapper = settingsContent.createDiv({ cls: "setting-group" });
    const displaySetting = displayWrapper.createDiv({ cls: "setting-item" });
    displaySetting.createDiv({ cls: "setting-item-name", text: t("initialDisplay") });
    const displayControl = displaySetting.createDiv({ cls: "setting-item-control" });
    const displaySelect = displayControl.createEl("select");
    [
      { value: "collapsed", label: t("initialDisplayCollapsed") },
      { value: "expanded", label: t("initialDisplayExpanded") }
    ].forEach((opt) => {
      const option = displaySelect.createEl("option", {
        value: opt.value,
        text: opt.label
      });
      if (opt.value === this.settings.initialDisplay) {
        option.selected = true;
      }
    });
    displaySelect.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    displaySelect.addEventListener("change", async (e) => {
      e.stopPropagation();
      const newDisplay = displaySelect.value;
      this.log("=== CHANGING GLOBAL INITIAL DISPLAY ===");
      this.log("Old value:", this.settings.initialDisplay);
      this.log("New value:", newDisplay);
      this.settings.initialDisplay = newDisplay;
      await this.saveSettings();
      this.log("Settings saved! Current initialDisplay:", this.settings.initialDisplay);
      this.log("=== GLOBAL INITIAL DISPLAY CHANGED ===");
    });
    const localSetting = displayWrapper.createDiv({ cls: "setting-item setting-sub" });
    localSetting.createDiv({ cls: "setting-item-name", text: t("onlyForThisFile") });
    const localControl = localSetting.createDiv({ cls: "setting-item-control" });
    const localCheckbox = localControl.createEl("input", { type: "checkbox" });
    localCheckbox.checked = fileSettings?.useLocal || false;
    localCheckbox.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const localDisplaySetting = displayWrapper.createDiv({ cls: "setting-item local-display-setting setting-sub" });
    localDisplaySetting.createDiv({ cls: "setting-item-name", text: t("initialDisplayThisFile") });
    const localDisplayControl = localDisplaySetting.createDiv({ cls: "setting-item-control" });
    const localDisplaySelect = localDisplayControl.createEl("select");
    [
      { value: "collapsed", label: t("initialDisplayCollapsed") },
      { value: "expanded", label: t("initialDisplayExpanded") }
    ].forEach((opt) => {
      const option = localDisplaySelect.createEl("option", {
        value: opt.value,
        text: opt.label
      });
      if (opt.value === fileSettings.initialDisplay) {
        option.selected = true;
      }
    });
    localDisplaySelect.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    localDisplaySelect.addEventListener("change", async (e) => {
      e.stopPropagation();
      const newDisplay = localDisplaySelect.value;
      this.log("=== CHANGING LOCAL INITIAL DISPLAY ===");
      this.log("File:", file.path);
      this.log("Old value:", this.settings.perFileSettings[file.path]?.initialDisplay);
      this.log("New value:", newDisplay);
      if (!this.settings.perFileSettings[file.path]) {
        this.settings.perFileSettings[file.path] = { useLocal: true, initialDisplay: newDisplay, windowFormat: "standard" };
      } else {
        this.settings.perFileSettings[file.path].initialDisplay = newDisplay;
      }
      await this.saveSettings();
      this.log("Settings saved! Current local initialDisplay:", this.settings.perFileSettings[file.path].initialDisplay);
      this.log("=== LOCAL INITIAL DISPLAY CHANGED ===");
    });
    const windowFormatWrapper = settingsContent.createDiv({ cls: "setting-group" });
    const windowFormatSetting = windowFormatWrapper.createDiv({ cls: "setting-item" });
    windowFormatSetting.createDiv({ cls: "setting-item-name", text: t("windowFormat") });
    const windowFormatControl = windowFormatSetting.createDiv({ cls: "setting-item-control" });
    const windowFormatSelect = windowFormatControl.createEl("select");
    [
      { value: "standard", label: t("windowFormatStandard") },
      { value: "long", label: t("windowFormatLong") },
      { value: "custom", label: t("windowFormatCustom") }
    ].forEach((opt) => {
      const option = windowFormatSelect.createEl("option", {
        value: opt.value,
        text: opt.label
      });
      if (opt.value === fileSettings.windowFormat) {
        option.selected = true;
      }
    });
    windowFormatSelect.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    });
    const customSizeSetting = windowFormatWrapper.createDiv({ cls: "setting-item custom-size-setting setting-sub" });
    customSizeSetting.createDiv({ cls: "setting-item-name", text: t("windowSize") });
    const customSizeControl = customSizeSetting.createDiv({ cls: "setting-item-control custom-size-control" });
    const widthInput = customSizeControl.createEl("input", {
      type: "number",
      placeholder: t("width"),
      attr: { min: "256", max: "3840" }
    });
    widthInput.value = fileSettings.customWidth?.toString() || "";
    customSizeControl.createEl("span", { text: " × ", cls: "custom-size-separator" });
    const heightInput = customSizeControl.createEl("input", {
      type: "number",
      placeholder: t("height"),
      attr: { min: "256", max: "3840" }
    });
    heightInput.value = fileSettings.customHeight?.toString() || "";
    const applyButton = customSizeControl.createEl("button", {
      cls: "custom-size-apply-button",
      text: "✓"
    });
    applyButton.disabled = true;
    const validateInputs = () => {
      const width = parseInt(widthInput.value);
      const height = parseInt(heightInput.value);
      const isValid = !isNaN(width) && !isNaN(height) && width >= 256 && width <= 3840 && height >= 256 && height <= 3840;
      applyButton.disabled = !isValid;
    };
    widthInput.addEventListener("input", validateInputs);
    heightInput.addEventListener("input", validateInputs);
    [widthInput, heightInput].forEach((input) => {
      input.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
    applyButton.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const width = parseInt(widthInput.value);
      const height = parseInt(heightInput.value);
      if (!this.settings.perFileSettings[file.path]) {
        this.settings.perFileSettings[file.path] = {
          useLocal: false,
          windowFormat: "custom",
          customWidth: width,
          customHeight: height
        };
      } else {
        this.settings.perFileSettings[file.path].customWidth = width;
        this.settings.perFileSettings[file.path].customHeight = height;
      }
      await this.saveSettings();
      this.log("Custom size applied:", width, "x", height);
      container.removeClass("window-format-long");
      container.addClass("window-format-custom");
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
      container.style.aspectRatio = "unset";
      settingsMenu.removeClass("window-format-long");
      settingsMenu.addClass("window-format-custom");
      settingsMenu.style.setProperty("--custom-menu-height", `${height}px`);
      settingsMenu.style.setProperty("--custom-menu-height-half", `${height / 2}px`);
      setTimeout(() => {
        const canvas = container.querySelector("canvas");
        if (canvas && canvas.__three_renderer) {
          const renderer = canvas.__three_renderer;
          const camera = canvas.__three_camera;
          renderer.setSize(width, height);
          if (camera) {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
          }
          this.log("Canvas resized to custom:", width, "x", height);
        }
      }, 100);
    });
    if (fileSettings.windowFormat === "custom") {
      customSizeSetting.addClass("is-visible");
      validateInputs();
    } else {
      customSizeSetting.removeClass("is-visible");
    }
    windowFormatSelect.addEventListener("change", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const newFormat = windowFormatSelect.value;
      if (!this.settings.perFileSettings[file.path]) {
        this.settings.perFileSettings[file.path] = { useLocal: true, initialDisplay: this.settings.initialDisplay, windowFormat: newFormat };
      } else {
        this.settings.perFileSettings[file.path].windowFormat = newFormat;
      }
      await this.saveSettings();
      this.log("Window format for", file.path, "changed to:", newFormat);
      if (newFormat === "custom") {
        customSizeSetting.addClass("is-visible");
      } else {
        customSizeSetting.removeClass("is-visible");
      }
      container.removeClass("window-format-long");
      container.removeClass("window-format-custom");
      container.style.width = "";
      container.style.height = "";
      container.style.aspectRatio = "";
      if (newFormat === "long") {
        container.addClass("window-format-long");
      } else if (newFormat === "custom" && fileSettings.customWidth && fileSettings.customHeight) {
        container.addClass("window-format-custom");
        container.style.width = `${fileSettings.customWidth}px`;
        container.style.height = `${fileSettings.customHeight}px`;
        container.style.aspectRatio = "unset";
      }
      settingsMenu.removeClass("window-format-long");
      settingsMenu.removeClass("window-format-custom");
      if (newFormat === "long") {
        settingsMenu.addClass("window-format-long");
      } else if (newFormat === "custom" && fileSettings.customWidth && fileSettings.customHeight) {
        settingsMenu.addClass("window-format-custom");
        settingsMenu.style.setProperty("--custom-menu-height", `${fileSettings.customHeight}px`);
        settingsMenu.style.setProperty("--custom-menu-height-half", `${fileSettings.customHeight / 2}px`);
      }
      setTimeout(() => {
        const canvas = container.querySelector("canvas");
        if (canvas && canvas.__three_renderer) {
          const rect = container.getBoundingClientRect();
          const renderer = canvas.__three_renderer;
          const camera = canvas.__three_camera;
          renderer.setSize(rect.width, rect.height);
          if (camera) {
            camera.aspect = rect.width / rect.height;
            camera.updateProjectionMatrix();
          }
          this.log("Canvas resized to:", rect.width, "x", rect.height);
        }
      }, 350);
    });
    const gridSetting = settingsContent.createDiv({ cls: "setting-item" });
    gridSetting.createDiv({ cls: "setting-item-name", text: t("grid") });
    const gridControl = gridSetting.createDiv({ cls: "setting-item-control" });
    const gridCheckbox = gridControl.createEl("input", { type: "checkbox" });
    const showGrid = fileSettings.showGrid !== void 0 ? fileSettings.showGrid : true;
    gridCheckbox.checked = showGrid;
    gridCheckbox.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    gridCheckbox.addEventListener("change", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const isGridVisible = gridCheckbox.checked;
      if (!this.settings.perFileSettings[file.path]) {
        this.settings.perFileSettings[file.path] = {
          useLocal: false,
          windowFormat: "standard",
          showGrid: isGridVisible
        };
      } else {
        this.settings.perFileSettings[file.path].showGrid = isGridVisible;
      }
      await this.saveSettings();
      this.log("Grid visibility for", file.path, "changed to:", isGridVisible);
      const canvas = container.querySelector("canvas");
      if (canvas && canvas.__three_scene) {
        const scene = canvas.__three_scene;
        scene.traverse((object) => {
          if (object.type === "GridHelper") {
            object.material.opacity = isGridVisible ? 1 : 0;
            object.material.transparent = true;
            this.log("Grid opacity set to:", isGridVisible ? 1 : 0);
          }
        });
      }
    });
    const cameraSetting = settingsContent.createDiv({ cls: "setting-item" });
    cameraSetting.createDiv({ cls: "setting-item-name", text: t("initialCameraPosition") });
    const cameraControl = cameraSetting.createDiv({ cls: "setting-item-control camera-control" });
    const saveCameraButton = cameraControl.createEl("button", {
      cls: "camera-save-button",
      text: "✓"
    });
    const resetCameraButton = cameraControl.createEl("button", {
      cls: "camera-reset-button",
      text: "↻"
    });
    saveCameraButton.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const canvas = container.querySelector("canvas");
      if (canvas && canvas.__three_camera && canvas.__three_controls) {
        const camera = canvas.__three_camera;
        const controls = canvas.__three_controls;
        const cameraPosition = {
          x: camera.position.x,
          y: camera.position.y,
          z: camera.position.z
        };
        const cameraTarget = {
          x: controls.target.x,
          y: controls.target.y,
          z: controls.target.z
        };
        if (!this.settings.perFileSettings[file.path]) {
          this.settings.perFileSettings[file.path] = {
            useLocal: false,
            windowFormat: "standard",
            cameraPosition,
            cameraTarget
          };
        } else {
          this.settings.perFileSettings[file.path].cameraPosition = cameraPosition;
          this.settings.perFileSettings[file.path].cameraTarget = cameraTarget;
        }
        await this.saveSettings();
        this.log("Camera position saved for", file.path, ":", cameraPosition, cameraTarget);
        new import_obsidian.Notice(t("cameraPositionSet"));
      }
    });
    resetCameraButton.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      if (this.settings.perFileSettings[file.path]) {
        delete this.settings.perFileSettings[file.path].cameraPosition;
        delete this.settings.perFileSettings[file.path].cameraTarget;
        await this.saveSettings();
        this.log("Camera position reset for", file.path);
        new import_obsidian.Notice(t("cameraPositionReset"));
      }
    });
    const lockHorizontalSetting = settingsContent.createDiv({ cls: "setting-item" });
    lockHorizontalSetting.createDiv({ cls: "setting-item-name", text: t("lockCameraHorizontal") });
    const lockHorizontalControl = lockHorizontalSetting.createDiv({ cls: "setting-item-control" });
    const lockHorizontalCheckbox = lockHorizontalControl.createEl("input", { type: "checkbox" });
    const isLockedHorizontal = fileSettings?.lockHorizontal || false;
    lockHorizontalCheckbox.checked = isLockedHorizontal;
    lockHorizontalCheckbox.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    lockHorizontalCheckbox.addEventListener("change", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const isLocked = lockHorizontalCheckbox.checked;
      if (!this.settings.perFileSettings[file.path]) {
        this.settings.perFileSettings[file.path] = {
          useLocal: false,
          windowFormat: "standard",
          lockHorizontal: isLocked
        };
      } else {
        this.settings.perFileSettings[file.path].lockHorizontal = isLocked;
      }
      await this.saveSettings();
      this.log("Lock horizontal for", file.path, "changed to:", isLocked);
      const canvas = container.querySelector("canvas");
      if (canvas && canvas.__three_controls) {
        const controls = canvas.__three_controls;
        const isVerticalLocked = this.settings.perFileSettings[file.path]?.lockVertical || false;
        if (isLocked) {
          const currentAzimuth = controls.getAzimuthalAngle();
          controls.minAzimuthAngle = currentAzimuth;
          controls.maxAzimuthAngle = currentAzimuth;
        } else {
          controls.minAzimuthAngle = -Infinity;
          controls.maxAzimuthAngle = Infinity;
        }
        this.log("Horizontal lock applied, azimuth locked:", isLocked);
      }
    });
    const lockVerticalSetting = settingsContent.createDiv({ cls: "setting-item" });
    lockVerticalSetting.createDiv({ cls: "setting-item-name", text: t("lockCameraVertical") });
    const lockVerticalControl = lockVerticalSetting.createDiv({ cls: "setting-item-control" });
    const lockVerticalCheckbox = lockVerticalControl.createEl("input", { type: "checkbox" });
    const isLockedVertical = fileSettings?.lockVertical || false;
    lockVerticalCheckbox.checked = isLockedVertical;
    lockVerticalCheckbox.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    lockVerticalCheckbox.addEventListener("change", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const isLocked = lockVerticalCheckbox.checked;
      if (!this.settings.perFileSettings[file.path]) {
        this.settings.perFileSettings[file.path] = {
          useLocal: false,
          windowFormat: "standard",
          lockVertical: isLocked
        };
      } else {
        this.settings.perFileSettings[file.path].lockVertical = isLocked;
      }
      await this.saveSettings();
      this.log("Lock vertical for", file.path, "changed to:", isLocked);
      const canvas = container.querySelector("canvas");
      if (canvas && canvas.__three_controls) {
        const controls = canvas.__three_controls;
        const isHorizontalLocked = this.settings.perFileSettings[file.path]?.lockHorizontal || false;
        if (isLocked) {
          const currentPolar = controls.getPolarAngle();
          controls.minPolarAngle = currentPolar;
          controls.maxPolarAngle = currentPolar;
        } else {
          controls.minPolarAngle = 0;
          controls.maxPolarAngle = Math.PI;
        }
        this.log("Vertical lock applied, polar locked:", isLocked);
      }
    });
    const removeBackgroundSetting = settingsContent.createDiv({ cls: "setting-item" });
    removeBackgroundSetting.createDiv({ cls: "setting-item-name", text: t("removeBackground") });
    const removeBackgroundControl = removeBackgroundSetting.createDiv({ cls: "setting-item-control" });
    const removeBackgroundCheckbox = removeBackgroundControl.createEl("input", { type: "checkbox" });
    const isBackgroundRemoved = fileSettings?.removeBackground || false;
    removeBackgroundCheckbox.checked = isBackgroundRemoved;
    removeBackgroundCheckbox.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    removeBackgroundCheckbox.addEventListener("change", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const removeBackground = removeBackgroundCheckbox.checked;
      if (!this.settings.perFileSettings[file.path]) {
        this.settings.perFileSettings[file.path] = {
          useLocal: false,
          windowFormat: "standard",
          removeBackground
        };
      } else {
        this.settings.perFileSettings[file.path].removeBackground = removeBackground;
      }
      await this.saveSettings();
      this.log("Remove background for", file.path, "changed to:", removeBackground);
      const canvas = container.querySelector("canvas");
      if (canvas && canvas.__three_scene && canvas.__three_renderer) {
        const scene = canvas.__three_scene;
        const renderer = canvas.__three_renderer;
        if (removeBackground) {
          scene.background = null;
          renderer.setClearAlpha(0);
          container.style.background = "transparent";
          container.addClass("transparent-background");
        } else {
          const customBg = this.settings.perFileSettings[file.path]?.customBackground;
          if (!customBg) {
            scene.background = new THREE.Color(2763306);
            renderer.setClearAlpha(1);
            container.style.background = "";
          }
          container.removeClass("transparent-background");
        }
        this.log("Background transparency applied:", removeBackground);
      }
    });
    const setBackgroundSetting = settingsContent.createDiv({ cls: "setting-item" });
    setBackgroundSetting.createDiv({ cls: "setting-item-name", text: t("setBackground") });
    const setBackgroundControl = setBackgroundSetting.createDiv({ cls: "setting-item-control" });
    const setBackgroundButton = setBackgroundControl.createEl("button", {
      cls: "set-background-button",
      text: "+"
    });
    const lightingSetting = settingsContent.createDiv({ cls: "setting-item" });
    lightingSetting.createDiv({ cls: "setting-item-name", text: t("lighting") });
    const lightingControl = lightingSetting.createDiv({ cls: "setting-item-control" });
    const lightingCheckbox = lightingControl.createEl("input", {
      type: "checkbox",
      cls: "lighting-checkbox"
    });
    lightingCheckbox.checked = fileSettings.lightingEnabled !== false;
    lightingCheckbox.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    lightingCheckbox.addEventListener("change", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const enabled = lightingCheckbox.checked;
      if (!this.settings.perFileSettings[file.path]) {
        this.settings.perFileSettings[file.path] = { useLocal: false, windowFormat: "standard" };
      }
      this.settings.perFileSettings[file.path].lightingEnabled = enabled;
      await this.saveSettings();
      this.log("Lighting enabled:", enabled);
      const canvas = container.querySelector("canvas");
      if (canvas && canvas.__three_scene) {
        const scene = canvas.__three_scene;
        const existingLights = scene.children.filter((child) => child.isLight);
        if (enabled) {
          existingLights.forEach((light) => light.visible = true);
        } else {
          existingLights.forEach((light) => {
            if (light.type !== "AmbientLight") {
              light.visible = false;
            } else {
              light.intensity = 0.3;
            }
          });
        }
      }
    });
    const lightTypeSetting = settingsContent.createDiv({ cls: "setting-item" });
    lightTypeSetting.createDiv({ cls: "setting-item-name", text: t("lightingType") });
    const lightTypeControl = lightTypeSetting.createDiv({ cls: "setting-item-control" });
    const lightTypeSelect = lightTypeControl.createEl("select");
    const lightTypes = [
      { value: "ambient", label: t("lightingTypeAmbient") },
      { value: "directional", label: t("lightingTypeDirectional") },
      { value: "point", label: t("lightingTypePoint") },
      { value: "hemisphere", label: t("lightingTypeHemisphere") },
      { value: "mixed", label: t("lightingTypeMixed") }
    ];
    lightTypes.forEach((type) => {
      const option = lightTypeSelect.createEl("option", {
        value: type.value,
        text: type.label
      });
    });
    lightTypeSelect.value = fileSettings.lightingType || "mixed";
    lightTypeSelect.addEventListener("change", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const newType = lightTypeSelect.value;
      if (!this.settings.perFileSettings[file.path]) {
        this.settings.perFileSettings[file.path] = { useLocal: false, windowFormat: "standard" };
      }
      this.settings.perFileSettings[file.path].lightingType = newType;
      await this.saveSettings();
      this.log("Lighting type changed to:", newType);
      const canvas = container.querySelector("canvas");
      if (canvas && canvas.__three_scene) {
        const scene = canvas.__three_scene;
        const renderer = canvas.__three_renderer;
        const existingLights = scene.children.filter((child) => child.isLight);
        existingLights.forEach((light) => scene.remove(light));
        const currentIntensity = fileSettings.lightIntensity || 1;
        switch (newType) {
          case "ambient":
            const ambientLight = new THREE.AmbientLight(16777215, 1.5 * currentIntensity);
            ambientLight.userData.baseIntensity = 1.5;
            scene.add(ambientLight);
            break;
          case "directional":
            const dirLight = new THREE.DirectionalLight(16777215, 2 * currentIntensity);
            dirLight.position.set(5, 10, 7.5);
            dirLight.userData.baseIntensity = 2;
            scene.add(dirLight);
            const ambLight1 = new THREE.AmbientLight(16777215, 0.3 * currentIntensity);
            ambLight1.userData.baseIntensity = 0.3;
            scene.add(ambLight1);
            break;
          case "point":
            const pointLight1 = new THREE.PointLight(16777215, 2 * currentIntensity, 100);
            pointLight1.position.set(10, 10, 10);
            pointLight1.userData.baseIntensity = 2;
            scene.add(pointLight1);
            const pointLight2 = new THREE.PointLight(16777215, 1 * currentIntensity, 100);
            pointLight2.position.set(-10, -10, -10);
            pointLight2.userData.baseIntensity = 1;
            scene.add(pointLight2);
            const ambLight2 = new THREE.AmbientLight(16777215, 0.3 * currentIntensity);
            ambLight2.userData.baseIntensity = 0.3;
            scene.add(ambLight2);
            break;
          case "hemisphere":
            const hemiLight = new THREE.HemisphereLight(16777215, 4473924, 1.5 * currentIntensity);
            hemiLight.position.set(0, 20, 0);
            hemiLight.userData.baseIntensity = 1.5;
            scene.add(hemiLight);
            break;
          case "mixed":
          default:
            const mixedAmbient = new THREE.AmbientLight(16777215, 0.5 * currentIntensity);
            mixedAmbient.userData.baseIntensity = 0.5;
            scene.add(mixedAmbient);
            const mixedDir1 = new THREE.DirectionalLight(16777215, 1 * currentIntensity);
            mixedDir1.position.set(5, 10, 7.5);
            mixedDir1.userData.baseIntensity = 1;
            scene.add(mixedDir1);
            const mixedDir2 = new THREE.DirectionalLight(16777215, 0.5 * currentIntensity);
            mixedDir2.position.set(-5, -10, -7.5);
            mixedDir2.userData.baseIntensity = 0.5;
            scene.add(mixedDir2);
            break;
        }
        renderer.render(scene, canvas.__three_camera);
      }
    });
    const lightIntensitySetting = settingsContent.createDiv({ cls: "setting-item" });
    lightIntensitySetting.createDiv({ cls: "setting-item-name", text: t("lightingIntensity") });
    const lightIntensityControl = lightIntensitySetting.createDiv({ cls: "setting-item-control" });
    const intensityInput = lightIntensityControl.createEl("input", {
      type: "number",
      attr: { min: "0", max: "5", step: "0.1", placeholder: "1.0" }
    });
    intensityInput.value = String(fileSettings.lightIntensity || 1);
    intensityInput.addEventListener("input", async (e) => {
      e.stopPropagation();
      const intensity = parseFloat(intensityInput.value);
      if (isNaN(intensity) || intensity < 0) return;
      if (!this.settings.perFileSettings[file.path]) {
        this.settings.perFileSettings[file.path] = { useLocal: false, windowFormat: "standard" };
      }
      this.settings.perFileSettings[file.path].lightIntensity = intensity;
      await this.saveSettings();
      this.log("Light intensity changed to:", intensity);
      const canvas = container.querySelector("canvas");
      if (canvas && canvas.__three_scene) {
        const scene = canvas.__three_scene;
        const renderer = canvas.__three_renderer;
        const existingLights = scene.children.filter((child) => child.isLight);
        existingLights.forEach((light) => {
          if (light.intensity !== void 0 && light.userData?.baseIntensity !== void 0) {
            light.intensity = light.userData.baseIntensity * intensity;
          }
        });
        renderer.render(scene, canvas.__three_camera);
      }
    });
    this.log("Creating close container button...");
    const closeSetting = settingsContent.createDiv({ cls: "setting-item" });
    closeSetting.createDiv({ cls: "setting-item-name", text: t("closeContainer") });
    const closeControl = closeSetting.createDiv({ cls: "setting-item-control" });
    const closeButton = closeControl.createEl("button", {
      cls: "close-container-button",
      text: "✕"
    });
    this.log("Close button created:", closeButton);
    closeButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      this.log("Close button clicked - restoring original embed");
      const canvas = container.querySelector("canvas");
      if (canvas) {
        const cleanup = canvas.__three_cleanup;
        if (cleanup) {
          cleanup();
        }
        const observer2 = canvas.__three_observer;
        if (observer2) {
          observer2.disconnect();
        }
      }
      settingsMenu.style.display = "none";
      settingsMenu.remove();
      container.remove();
      embed.empty();
      embed.removeClass("no-resize");
      embed.removeAttribute("data-no-resize");
      embed.removeAttribute("contenteditable");
      embed.style.background = "";
      embed.style.padding = "";
      embed.style.margin = "";
      const link = embed.createEl("a", {
        cls: "internal-link",
        text: file.basename
      });
      link.setAttribute("href", file.path);
    });
    setBackgroundButton.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const modal = document.body.createDiv({ cls: "three-d-viewer-modal" });
      const modalContent = modal.createDiv({ cls: "three-d-viewer-modal-content" });
      modalContent.createEl("h3", { text: t("insertLink") });
      const input = modalContent.createEl("input", {
        cls: "background-link-input",
        type: "text",
        placeholder: t("linkPlaceholder")
      });
      input.value = fileSettings?.customBackground || "";
      const panoramaDiv = modalContent.createDiv({ cls: "panorama-setting" });
      panoramaDiv.createEl("span", { text: t("panorama") });
      const panoramaCheckbox = panoramaDiv.createEl("input", {
        type: "checkbox",
        cls: "panorama-checkbox"
      });
      panoramaCheckbox.checked = fileSettings?.isPanorama || false;
      const buttonsDiv = modalContent.createDiv({ cls: "modal-buttons" });
      const okButton = buttonsDiv.createEl("button", { text: t("ok"), cls: "modal-ok-button" });
      const cancelButton = buttonsDiv.createEl("button", { text: t("cancel"), cls: "modal-cancel-button" });
      const closeModal = () => {
        modal.remove();
      };
      cancelButton.addEventListener("click", closeModal);
      modal.addEventListener("click", (e2) => {
        if (e2.target === modal) {
          closeModal();
        }
      });
      okButton.addEventListener("click", async () => {
        const link = input.value.trim();
        const isPanorama = panoramaCheckbox.checked;
        if (!link) {
          if (!this.settings.perFileSettings[file.path]) {
            this.settings.perFileSettings[file.path] = {
              useLocal: false,
              windowFormat: "standard",
              customBackground: void 0,
              isPanorama: false
            };
          } else {
            delete this.settings.perFileSettings[file.path].customBackground;
            delete this.settings.perFileSettings[file.path].isPanorama;
          }
          await this.saveSettings();
          const canvas2 = container.querySelector("canvas");
          if (canvas2 && canvas2.__three_scene) {
            const scene = canvas2.__three_scene;
            const removeBackground = this.settings.perFileSettings[file.path]?.removeBackground;
            if (removeBackground) {
              scene.background = null;
            } else {
              scene.background = new THREE.Color(2763306);
            }
            scene.traverse((obj) => {
              if (obj.userData && obj.userData.isPanoramaSphere) {
                scene.remove(obj);
              }
            });
          }
          closeModal();
          return;
        }
        let filePath = link;
        const wikiLinkMatch = link.match(/\[\[(.+?)\]\]/);
        if (wikiLinkMatch) {
          filePath = wikiLinkMatch[1];
        }
        const files = this.app.vault.getFiles();
        let targetFile = null;
        for (const f of files) {
          if (f.path.includes(filePath) || f.basename === filePath || f.name === filePath) {
            targetFile = f;
            break;
          }
        }
        if (!targetFile && !link.startsWith("http")) {
          new import_obsidian.Notice(t("fileNotFound"));
          return;
        }
        const imageFormats = ["png", "jpg", "jpeg", "gif", "bmp", "webp", "svg"];
        let isValidFormat = false;
        if (targetFile) {
          isValidFormat = imageFormats.includes(targetFile.extension.toLowerCase());
        } else {
          isValidFormat = imageFormats.some((fmt) => link.toLowerCase().includes(`.${fmt}`));
        }
        if (!isValidFormat) {
          new import_obsidian.Notice(t("wrongFormat"));
          return;
        }
        if (!this.settings.perFileSettings[file.path]) {
          this.settings.perFileSettings[file.path] = {
            useLocal: false,
            windowFormat: "standard",
            customBackground: link,
            isPanorama
          };
        } else {
          this.settings.perFileSettings[file.path].customBackground = link;
          this.settings.perFileSettings[file.path].isPanorama = isPanorama;
        }
        await this.saveSettings();
        const canvas = container.querySelector("canvas");
        if (canvas && canvas.__three_scene) {
          const scene = canvas.__three_scene;
          try {
            let imageUrl;
            if (targetFile) {
              const arrayBuffer = await this.app.vault.readBinary(targetFile);
              const blob = new Blob([arrayBuffer]);
              imageUrl = URL.createObjectURL(blob);
            } else {
              imageUrl = link;
            }
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(imageUrl, (texture) => {
              texture.colorSpace = THREE.SRGBColorSpace;
              if (isPanorama) {
                scene.traverse((obj) => {
                  if (obj.userData && obj.userData.isPanoramaSphere) {
                    scene.remove(obj);
                  }
                });
                const geometry = new THREE.SphereGeometry(500, 60, 40);
                geometry.scale(-1, 1, 1);
                const material = new THREE.MeshBasicMaterial({ map: texture });
                const panoramaSphere = new THREE.Mesh(geometry, material);
                panoramaSphere.userData.isPanoramaSphere = true;
                scene.add(panoramaSphere);
                scene.background = null;
                this.log("Panorama background applied");
              } else {
                scene.traverse((obj) => {
                  if (obj.userData && obj.userData.isPanoramaSphere) {
                    scene.remove(obj);
                  }
                });
                scene.background = texture;
                this.log("Custom background applied");
              }
              if (targetFile) {
                URL.revokeObjectURL(imageUrl);
              }
            });
          } catch (error) {
            this.log("Error loading background:", error);
            new import_obsidian.Notice(t("backgroundLoadError"));
          }
        }
        closeModal();
      });
    });
    if (fileSettings.useLocal) {
      localDisplaySetting.addClass("is-visible");
      displaySetting.style.opacity = "0.5";
      displaySelect.disabled = true;
    } else {
      localDisplaySetting.removeClass("is-visible");
    }
    localCheckbox.addEventListener("change", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const useLocal = localCheckbox.checked;
      if (!this.settings.perFileSettings[file.path]) {
        this.settings.perFileSettings[file.path] = {
          useLocal,
          initialDisplay: useLocal ? this.settings.initialDisplay : void 0,
          windowFormat: "standard"
        };
      } else {
        this.settings.perFileSettings[file.path].useLocal = useLocal;
        if (useLocal && !this.settings.perFileSettings[file.path].initialDisplay) {
          this.settings.perFileSettings[file.path].initialDisplay = this.settings.initialDisplay;
        } else if (!useLocal) {
          delete this.settings.perFileSettings[file.path].initialDisplay;
        }
      }
      await this.saveSettings();
      this.log("Use local settings for", file.path, ":", useLocal);
      if (useLocal) {
        displaySetting.style.opacity = "0.5";
        displaySelect.disabled = true;
        localDisplaySetting.addClass("is-visible");
      } else {
        displaySetting.style.opacity = "1";
        displaySelect.disabled = false;
        localDisplaySetting.removeClass("is-visible");
      }
    });
    closeButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      this.log("Close button clicked - restoring original embed");
      const canvas = container.querySelector("canvas");
      if (canvas) {
        const cleanup = canvas.__three_cleanup;
        if (cleanup) {
          cleanup();
        }
        const observer2 = canvas.__three_observer;
        if (observer2) {
          observer2.disconnect();
        }
      }
      settingsMenu.style.display = "none";
      settingsMenu.remove();
      container.remove();
      embed.empty();
      embed.removeClass("no-resize");
      embed.removeAttribute("data-no-resize");
      embed.removeAttribute("contenteditable");
      embed.style.background = "";
      embed.style.padding = "";
      embed.style.margin = "";
      const link = embed.createEl("a", {
        cls: "internal-link",
        text: file.basename
      });
      link.setAttribute("href", file.path);
    });
    const positionMenu = () => {
      const containerRect = container.getBoundingClientRect();
      const menuPosition = this.settings.settingsMenuPosition;
      settingsMenu.removeClass("window-format-long");
      settingsMenu.removeClass("window-format-custom");
      if (container.hasClass("window-format-long")) {
        settingsMenu.addClass("window-format-long");
      }
      if (container.hasClass("window-format-custom")) {
        settingsMenu.addClass("window-format-custom");
        const customHeight2 = container.style.height;
        if (customHeight2) {
          const height = parseInt(customHeight2);
          settingsMenu.style.setProperty("--custom-menu-height", `${height}px`);
          settingsMenu.style.setProperty("--custom-menu-height-half", `${height / 2}px`);
        }
      }
      settingsMenu.removeClass("menu-position-left");
      settingsMenu.removeClass("menu-position-right");
      settingsMenu.removeClass("menu-position-top");
      settingsMenu.removeClass("menu-position-bottom");
      settingsMenu.style.top = "";
      settingsMenu.style.bottom = "";
      settingsMenu.style.left = "";
      settingsMenu.style.right = "";
      settingsMenu.style.width = "";
      settingsMenu.style.height = "";
      switch (menuPosition) {
        case "left":
          settingsMenu.addClass("menu-position-left");
          settingsMenu.style.top = `${containerRect.top}px`;
          settingsMenu.style.right = `${window.innerWidth - containerRect.right}px`;
          settingsMenu.style.height = `${containerRect.height}px`;
          break;
        case "right":
          settingsMenu.addClass("menu-position-right");
          settingsMenu.style.top = `${containerRect.top}px`;
          settingsMenu.style.left = `${containerRect.right}px`;
          settingsMenu.style.height = `${containerRect.height}px`;
          break;
        case "top":
          settingsMenu.addClass("menu-position-top");
          settingsMenu.style.bottom = `${window.innerHeight - containerRect.top}px`;
          settingsMenu.style.left = `${containerRect.left}px`;
          settingsMenu.style.width = `${containerRect.width}px`;
          settingsMenu.style.height = `${containerRect.height / 2}px`;
          break;
        case "bottom":
          settingsMenu.addClass("menu-position-bottom");
          settingsMenu.style.bottom = `${window.innerHeight - containerRect.bottom}px`;
          settingsMenu.style.left = `${containerRect.left}px`;
          settingsMenu.style.width = `${containerRect.width}px`;
          settingsMenu.style.height = `${containerRect.height / 2}px`;
          break;
      }
    };
    settingsButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      this.log("Settings button clicked!");
      if (settingsMenu.style.display === "none") {
        positionMenu();
        settingsMenu.style.display = "block";
        this.log("Settings menu opened");
        setTimeout(() => {
          const menuRect = settingsMenu.getBoundingClientRect();
          const contentRect = settingsContent.getBoundingClientRect();
          this.log("=== SCROLL DEBUG ===");
          this.log("Menu dimensions:", menuRect.width, "x", menuRect.height);
          this.log("Menu height:", settingsMenu.style.height);
          this.log("Content dimensions:", contentRect.width, "x", contentRect.height);
          this.log("Content scrollHeight:", settingsContent.scrollHeight);
          this.log("Content clientHeight:", settingsContent.clientHeight);
          this.log("Needs scroll:", settingsContent.scrollHeight > settingsContent.clientHeight);
          this.log("overflow-y:", window.getComputedStyle(settingsContent).overflowY);
        }, 100);
      } else {
        settingsMenu.style.display = "none";
        this.log("Settings menu closed");
      }
    });
    setTimeout(() => {
      this.registerDomEvent(document, "click", (e) => {
        const target = e.target;
        if (!settingsMenu.contains(target) && !settingsButton.contains(target) && settingsMenu.style.display === "block") {
          settingsMenu.style.display = "none";
          this.log("Settings menu closed by outside click");
        }
      });
    }, 100);
    this.register(() => {
      settingsMenu.remove();
    });
    const savedFileSettings = this.settings.perFileSettings[file.path];
    const windowFormat = savedFileSettings?.windowFormat || "standard";
    const isLongFormat = windowFormat === "long";
    const isCustomFormat = windowFormat === "custom";
    if (isLongFormat) {
      container.addClass("window-format-long");
      settingsMenu.addClass("window-format-long");
      this.log("Applied long window format for", file.path);
    } else if (isCustomFormat && savedFileSettings.customWidth && savedFileSettings.customHeight) {
      container.addClass("window-format-custom");
      container.style.width = `${savedFileSettings.customWidth}px`;
      container.style.height = `${savedFileSettings.customHeight}px`;
      container.style.aspectRatio = "unset";
      settingsMenu.addClass("window-format-custom");
      settingsMenu.style.setProperty("--custom-menu-height", `${savedFileSettings.customHeight}px`);
      settingsMenu.style.setProperty("--custom-menu-height-half", `${savedFileSettings.customHeight / 2}px`);
      this.log("Applied custom window format for", file.path, ":", savedFileSettings.customWidth, "x", savedFileSettings.customHeight);
    }
    const canvasContainer = container.createDiv({ cls: "three-d-viewer-canvas" });
    const customWidth = isCustomFormat ? savedFileSettings?.customWidth : void 0;
    const customHeight = isCustomFormat ? savedFileSettings?.customHeight : void 0;
    this.renderInline3DModel(canvasContainer, file, extension, isLongFormat, customWidth, customHeight);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.className && (node.className.includes("resize") || node.className.includes("handle") || node.className.includes("image-resize"))) {
              this.log("Removing foreign resize element:", node.className);
              node.remove();
            }
          }
        });
      });
    });
    observer.observe(embed, { childList: true, subtree: true });
    observer.observe(container, { childList: true, subtree: true });
    this.register(() => {
      observer.disconnect();
    });
  }
  async loadCustomBackgroundInline(link, isPanorama, scene, modelFile) {
    let filePath = link;
    const wikiLinkMatch = link.match(/\[\[(.+?)\]\]/);
    if (wikiLinkMatch) {
      filePath = wikiLinkMatch[1];
    }
    const files = this.app.vault.getFiles();
    let targetFile = null;
    for (const f of files) {
      if (f.path.includes(filePath) || f.basename === filePath || f.name === filePath) {
        targetFile = f;
        break;
      }
    }
    try {
      let imageUrl;
      if (targetFile) {
        const arrayBuffer = await this.app.vault.readBinary(targetFile);
        const blob = new Blob([arrayBuffer]);
        imageUrl = URL.createObjectURL(blob);
      } else {
        imageUrl = link;
      }
      const textureLoader = new THREE.TextureLoader();
      await new Promise((resolve, reject) => {
        textureLoader.load(
          imageUrl,
          (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            if (isPanorama) {
              scene.traverse((obj) => {
                if (obj.userData && obj.userData.isPanoramaSphere) {
                  scene.remove(obj);
                }
              });
              const geometry = new THREE.SphereGeometry(500, 60, 40);
              geometry.scale(-1, 1, 1);
              const material = new THREE.MeshBasicMaterial({ map: texture });
              const panoramaSphere = new THREE.Mesh(geometry, material);
              panoramaSphere.userData.isPanoramaSphere = true;
              scene.add(panoramaSphere);
              scene.background = null;
              this.log("Panorama background loaded (inline)");
            } else {
              scene.traverse((obj) => {
                if (obj.userData && obj.userData.isPanoramaSphere) {
                  scene.remove(obj);
                }
              });
              scene.background = texture;
              this.log("Custom background loaded (inline)");
            }
            if (targetFile) {
              URL.revokeObjectURL(imageUrl);
            }
            resolve();
          },
          void 0,
          (error) => {
            this.log("Error loading texture (inline):", error);
            reject(error);
          }
        );
      });
    } catch (error) {
      this.log("Error loading custom background (inline):", error);
    }
  }
  async saveLogsToFile() {
    try {
      const logContent = this.debugLogs.join("\n");
      const pluginDir = this.manifest.dir;
      const logFile = `${pluginDir}/debug.log`;
      await this.app.vault.adapter.write(logFile, logContent);
      this.log("Debug logs saved to:", logFile);
      new import_obsidian.Notice(`Debug logs saved to: ${pluginDir}/debug.log`);
    } catch (error) {
      this.log("Error saving debug logs:", error);
      new import_obsidian.Notice("Error saving debug logs!");
    }
  }
  async renderInline3DModel(container, file, extension, isLongFormat = false, customWidth, customHeight) {
    this.log("renderInline3DModel called for:", file.path, "Long format:", isLongFormat, "Custom:", customWidth, "x", customHeight);
    const fileSettings = this.settings.perFileSettings[file.path];
    const scene = new THREE.Scene();
    if (!fileSettings?.removeBackground && !fileSettings?.customBackground) {
      scene.background = new THREE.Color(2763306);
    }
    let width;
    let height;
    if (customWidth && customHeight) {
      width = customWidth;
      height = customHeight;
    } else {
      width = container.clientWidth || 800;
      height = isLongFormat ? Math.floor(width * 11 / 10) : Math.floor(width * 2 / 3);
    }
    this.log("Container size:", width, "x", height, "Format:", customWidth ? "custom" : isLongFormat ? "long" : "standard");
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1e3);
    camera.position.set(0, 1, 3);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    if (fileSettings?.removeBackground) {
      renderer.setClearAlpha(0);
      container.style.background = "transparent";
      container.addClass("transparent-background");
      this.log("[3D Viewer] Transparency enabled before loading (inline)");
    }
    container.appendChild(renderer.domElement);
    renderer.domElement.__three_renderer = renderer;
    renderer.domElement.__three_camera = camera;
    renderer.domElement.__three_scene = scene;
    const controls = new import_OrbitControls.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    renderer.domElement.__three_controls = controls;
    const lightingEnabled = fileSettings?.lightingEnabled !== false;
    const lightingType = fileSettings?.lightingType || "mixed";
    const lightIntensity = fileSettings?.lightIntensity || 1;
    if (lightingEnabled) {
      switch (lightingType) {
        case "ambient":
          const ambientLight = new THREE.AmbientLight(16777215, 1.5 * lightIntensity);
          ambientLight.userData.baseIntensity = 1.5;
          scene.add(ambientLight);
          break;
        case "directional":
          const dirLight = new THREE.DirectionalLight(16777215, 2 * lightIntensity);
          dirLight.position.set(5, 10, 7.5);
          dirLight.userData.baseIntensity = 2;
          scene.add(dirLight);
          const ambLight1 = new THREE.AmbientLight(16777215, 0.3 * lightIntensity);
          ambLight1.userData.baseIntensity = 0.3;
          scene.add(ambLight1);
          break;
        case "point":
          const pointLight1 = new THREE.PointLight(16777215, 2 * lightIntensity, 100);
          pointLight1.position.set(10, 10, 10);
          pointLight1.userData.baseIntensity = 2;
          scene.add(pointLight1);
          const pointLight2 = new THREE.PointLight(16777215, 1 * lightIntensity, 100);
          pointLight2.position.set(-10, -10, -10);
          pointLight2.userData.baseIntensity = 1;
          scene.add(pointLight2);
          const ambLight2 = new THREE.AmbientLight(16777215, 0.3 * lightIntensity);
          ambLight2.userData.baseIntensity = 0.3;
          scene.add(ambLight2);
          break;
        case "hemisphere":
          const hemiLight = new THREE.HemisphereLight(16777215, 4473924, 1.5 * lightIntensity);
          hemiLight.position.set(0, 20, 0);
          hemiLight.userData.baseIntensity = 1.5;
          scene.add(hemiLight);
          break;
        case "mixed":
        default:
          const mixedAmbient = new THREE.AmbientLight(16777215, 0.5 * lightIntensity);
          mixedAmbient.userData.baseIntensity = 0.5;
          scene.add(mixedAmbient);
          const mixedDir1 = new THREE.DirectionalLight(16777215, 1 * lightIntensity);
          mixedDir1.position.set(5, 10, 7.5);
          mixedDir1.userData.baseIntensity = 1;
          scene.add(mixedDir1);
          const mixedDir2 = new THREE.DirectionalLight(16777215, 0.5 * lightIntensity);
          mixedDir2.position.set(-5, -10, -7.5);
          mixedDir2.userData.baseIntensity = 0.5;
          scene.add(mixedDir2);
          break;
      }
    } else {
      const minAmbient = new THREE.AmbientLight(16777215, 0.3);
      minAmbient.userData.baseIntensity = 0.3;
      scene.add(minAmbient);
    }
    const gridHelper = new THREE.GridHelper(10, 10, 4473924, 2236962);
    scene.add(gridHelper);
    const showGrid = fileSettings?.showGrid !== void 0 ? fileSettings.showGrid : true;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = showGrid ? 1 : 0;
    this.log("Grid initial opacity:", showGrid ? 1 : 0);
    try {
      this.log("Reading file binary...");
      const arrayBuffer = await this.app.vault.readBinary(file);
      this.log("File read, size:", arrayBuffer.byteLength, "bytes");
      const blob = new Blob([arrayBuffer]);
      const url = URL.createObjectURL(blob);
      await this.loadInlineModel(url, extension, scene, camera);
      this.log("Model loaded successfully!");
      if (fileSettings?.cameraPosition && fileSettings?.cameraTarget) {
        camera.position.set(
          fileSettings.cameraPosition.x,
          fileSettings.cameraPosition.y,
          fileSettings.cameraPosition.z
        );
        controls.target.set(
          fileSettings.cameraTarget.x,
          fileSettings.cameraTarget.y,
          fileSettings.cameraTarget.z
        );
        controls.update();
        this.log("Applied saved camera position:", fileSettings.cameraPosition, fileSettings.cameraTarget);
      }
      if (fileSettings?.lockHorizontal) {
        const currentAzimuth = controls.getAzimuthalAngle();
        controls.minAzimuthAngle = currentAzimuth;
        controls.maxAzimuthAngle = currentAzimuth;
        this.log("Applied horizontal lock");
      }
      if (fileSettings?.lockVertical) {
        const currentPolar = controls.getPolarAngle();
        controls.minPolarAngle = currentPolar;
        controls.maxPolarAngle = currentPolar;
        this.log("Applied vertical lock");
      }
      if (fileSettings?.removeBackground) {
        scene.background = null;
        this.log("[3D Viewer] Scene background removed after loading (inline)");
      } else if (!fileSettings?.customBackground) {
        scene.background = new THREE.Color(2763306);
        renderer.setClearAlpha(1);
        this.log("[3D Viewer] Standard gray background restored (inline)");
      }
      if (fileSettings?.customBackground) {
        this.log("Loading custom background (inline):", fileSettings.customBackground);
        await this.loadCustomBackgroundInline(fileSettings.customBackground, fileSettings.isPanorama || false, scene, file);
        const forcedReloadPanorama = async () => {
          if (fileSettings?.customBackground && fileSettings?.isPanorama) {
            this.log("[3D Viewer] FORCED panorama reload attempt (inline)");
            await this.loadCustomBackgroundInline(fileSettings.customBackground, true, scene, file);
          }
        };
        setTimeout(() => forcedReloadPanorama(), 100);
        setTimeout(() => forcedReloadPanorama(), 300);
        setTimeout(() => forcedReloadPanorama(), 500);
      }
      let animationId = null;
      let isAnimating = true;
      const animate = () => {
        if (!isAnimating) return;
        animationId = requestAnimationFrame(animate);
        if (animationId) {
          renderer.domElement.__three_animationId = animationId;
        }
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
      renderer.domElement.__three_isAnimating = true;
      const cleanupResources = () => {
        this.log("Cleaning up 3D resources...");
        isAnimating = false;
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        if (controls) {
          controls.dispose();
        }
        if (scene) {
          scene.traverse((object) => {
            if (object.geometry) {
              object.geometry.dispose();
            }
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach((material) => {
                  if (material.map) material.map.dispose();
                  if (material.lightMap) material.lightMap.dispose();
                  if (material.bumpMap) material.bumpMap.dispose();
                  if (material.normalMap) material.normalMap.dispose();
                  if (material.specularMap) material.specularMap.dispose();
                  if (material.envMap) material.envMap.dispose();
                  material.dispose();
                });
              } else {
                if (object.material.map) object.material.map.dispose();
                if (object.material.lightMap) object.material.lightMap.dispose();
                if (object.material.bumpMap) object.material.bumpMap.dispose();
                if (object.material.normalMap) object.material.normalMap.dispose();
                if (object.material.specularMap) object.material.specularMap.dispose();
                if (object.material.envMap) object.material.envMap.dispose();
                object.material.dispose();
              }
            }
          });
          scene.clear();
        }
        if (renderer) {
          renderer.dispose();
          renderer.forceContextLoss();
        }
        this.log("3D resources cleaned up");
      };
      renderer.domElement.__three_cleanup = cleanupResources;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isAnimating && renderer.domElement.__three_isAnimating) {
              isAnimating = true;
              animate();
              this.log("Resumed rendering (model visible)");
            }
          } else {
            if (isAnimating) {
              isAnimating = false;
              if (animationId) {
                cancelAnimationFrame(animationId);
              }
              this.log("Paused rendering (model not visible)");
            }
          }
        });
      }, {
        threshold: 0.01
      });
      observer.observe(container);
      renderer.domElement.__three_observer = observer;
      this.register(() => {
        cleanupResources();
        observer.disconnect();
      });
      URL.revokeObjectURL(url);
      if (fileSettings?.removeBackground) {
        setTimeout(() => {
          this.log("[3D Viewer] Auto-applying removeBackground");
          scene.background = null;
          renderer.setClearAlpha(0);
          container.style.background = "transparent";
          container.addClass("transparent-background");
          this.log("[3D Viewer] removeBackground applied");
        }, 200);
      }
    } catch (error) {
      this.log("Error loading 3D model:", error);
      container.empty();
      const errorDiv = container.createDiv({ cls: "three-d-viewer-error" });
      errorDiv.textContent = t("errorLoading3DModel");
    }
  }
  loadInlineModel(url, extension, scene, camera) {
    this.log("loadInlineModel called for extension:", extension);
    return new Promise((resolve, reject) => {
      const onLoad = (object) => {
        this.log("Model loaded from loader");
        this.centerAndScaleModel(object, camera);
        scene.add(object);
        resolve();
      };
      const onError = (error) => {
        this.log("Error loading model:", error);
        reject(error);
      };
      switch (extension) {
        case "gltf":
        case "glb":
          new import_GLTFLoader.GLTFLoader().load(url, (gltf) => onLoad(gltf.scene), void 0, onError);
          break;
        case "fbx":
          new import_FBXLoader.FBXLoader().load(url, onLoad, void 0, onError);
          break;
        case "obj":
          new import_OBJLoader.OBJLoader().load(url, onLoad, void 0, onError);
          break;
        case "usdz":
          new import_USDZLoader.USDZLoader().load(url, onLoad, void 0, onError);
          break;
        default:
          reject(new Error(`Unsupported format: ${extension}`));
      }
    });
  }
  centerAndScaleModel(model, camera) {
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2 / maxDim;
    model.scale.multiplyScalar(scale);
    box.setFromObject(model);
    box.getCenter(center);
    model.position.sub(center);
  }
  async onunload() {
    this.log("=== Plugin unloaded ===");
  }
};
module.exports = ThreeDViewerPlugin;
