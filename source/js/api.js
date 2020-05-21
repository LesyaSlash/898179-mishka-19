var map = document.querySelector(".contacts-map__api");

ymaps.ready(init);

  function init() {
    myMap = new ymaps.Map("map", {
      center: [59.938690, 30.323118],
      zoom: 17
    },
      {
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
