ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("history-map", {
            center: [59.924648, 30.339125],
            zoom: 13,
            controls: ['zoomControl']
        });

        myPlacemark = new ymaps.Placemark([59.924648, 30.339125], {
            hintContent: 'Укажите место',
            balloonContent: 'Перетащите метку',

        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-circle.svg',
            iconImageSize: [65, 89],
            iconImageOffset: [-32.5, -89],
            draggable: true
        });

        var coordInput = document.querySelector('input[name=history-coordinates]')
        myPlacemark.events.add("dragend", function(event) {
            var target = event.get('target');
            coordInput.value = target.geometry.getCoordinates();
        })

        myMap.geoObjects.add(myPlacemark);
    }
