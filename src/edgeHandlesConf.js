export default {
  preview: true, // показывать ли предварительный просмотр добавленных ребер перед освобождением выделения
  hoverDelay: 150, // время, затраченное на наведение на целевой узел, прежде чем он будет считаться выбранным
  handleNodes: "node", // функция селектора / фильтра для определения возможности создания ребер из данного узла
  snap: false, // когда включено, край можно нарисовать, просто подойдя близко к целевому узлу
  snapThreshold: 50, // целевой узел должен быть меньше или равен этому числу пикселей от курсора / пальца
  snapFrequency: 15, // количество раз в секунду (Гц), когда выполняются проверки привязки (чем ниже, тем дешевле)
  noEdgeEventsInDraw: false, // устанавливаем события: нет краям во время рисования, предотвращает наведение мыши на соединения
  disableBrowserGestures: true, // во время жеста рисования края отключите жесты браузера, такие как пролистывание трекпада двумя пальцами и масштабирование
  handlePosition: function(node) {
    return "middle top"; //  устанавливает положение дескриптора в формате "X-AXIS Y-AXIS" например "left top", "middle top"
  },
  handleInDrawMode: false, // показывать ли маркер в режиме рисования
  edgeType: function(sourceNode, targetNode) {
    // can return 'flat' for flat edges between nodes or 'node' for intermediate node between them
    // returning null/undefined means an edge can't be added between the two nodes
    return "flat";
  },
  loopAllowed: function(node) {
    // разрешены ли ребра от себя к себе
    return false;
  },
  nodeLoopOffset: -50, // смещение для ребер edgeType: 'node'
  nodeParams: function(sourceNode, targetNode) {
    // для ребер между указанным источником и целью
    // возвращаем объект элемента для передачи в cy.add () для промежуточного узла
    return {};
  },
  edgeParams: function(sourceNode, targetNode, i) {
    // для ребер между указанным источником и целью
    // возвращаем объект элемента для передачи в cy.add () для края
    // NB: i указывает индекс края в случае edgeType: 'node'
    return {
      // data: { label: ""}
    };
  },
  ghostEdgeParams: function() {
    // возвращаем объект элемента для передачи в cy.add () для призрачного края
    // (классы по умолчанию всегда добавляются для вас)
    return {};
  },
  show: function(sourceNode) {
    // срабатывает, когда отображается дескриптор
  },
  hide: function(sourceNode) {
    // срабатывает, когда ручка скрыта
  },
  start: function(sourceNode) {
    // запускается, когда начинается взаимодействие с дескрипторами (перетаскиваем на дескриптор)
  },
  complete: function(sourceNode, targetNode, addedEles) {
    // console.log(11, addedEles.data());
    // срабатывает, когда готово ребро и добавлены элементы
  },
  stop: function(sourceNode) {
    // срабатывает при остановке взаимодействия с ребрами (либо с добавленными ребрами, либо с неполным)
  },
  cancel: function(sourceNode, cancelledTargets) {
    // срабатывает, когда ребра отменяются (неполный жест)
  },
  hoverover: function(sourceNode, targetNode) {
    // срабатывает при наведении цели
  },
  hoverout: function(sourceNode, targetNode) {
    // срабатывает, когда цель больше не находится в фокусе
  },
  previewon: function (sourceNode, targetNode, previewEles) {
    // срабатывает при предварительном просмотре
  },
  previewoff: function (sourceNode, targetNode, previewEles) {

    // срабатывает, когда предварительный просмотр скрыт
  },
  drawon: function() {
    // срабатывает при включенном режиме рисования
  },
  drawoff: function() {
    // срабатывает при отключенном режиме рисования
  }
};
