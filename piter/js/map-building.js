ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("building-map", {
            center: [59.936985, 30.314880],
            zoom: 13,
            controls: []
        });

        myPlacemark = new ymaps.Placemark([59.936985, 30.314880], {
            hintContent: 'Сан-Галли',
            balloonContent: 'Изобретатель русской батареи',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-home.svg',
            iconImageSize: [93, 75],
            iconImageOffset: [-93, -75]
        });

        myMap.geoObjects.add(myPlacemark);
    }
