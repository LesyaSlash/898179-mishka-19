//яндекс-карта

setTimeout(function () {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = '//api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-RU&onload=getYaMap';
  document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);

function getYaMap() {
  var myMap = new ymaps.Map("map", {
    center: [59.938690, 30.323118],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  });

  var myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/icon-map-pin.svg",
    iconImageSize: [67, 100],
    iconImageOffset: [-25, -100]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("drag");
}
