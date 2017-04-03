ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("index-map", {
        center: [59.939873, 30.303690],
        zoom: 13,
        controls: []
    });

    var coord = [{
        icon: 'img/map/tooltip-home.svg',
        coord: [59.934096, 30.324385],
        hint: 'Русский музей'
    }, {
        icon: 'img/map/tooltip-home.svg',
        coord: [59.938732, 30.332286],
        hint: 'Казанский собор'
    }, {
        icon: 'img/map/tooltip-home.svg',
        coord: [59.941023, 30.313271],
        hint: 'Эрмитаж'
    }, {
        icon: 'img/map/tooltip-home.svg',
        coord: [59.949503, 30.316570],
        hint: 'Петрвопавловская крепость'
    }, {
        icon: 'img/map/tooltip-home.svg',
        coord: [59.925506, 30.295589],
        hint: 'Мариинский театр'
    }, {
        icon: 'img/map/tooltip-map.svg',
        coord: [59.927527, 30.348057],
        hint: ''
    }, {
        icon: 'img/map/tooltip-pointer.svg',
        coord: [59.934804, 30.348229],
        hint: 'Литейный проспект'
    }, {
        icon: 'img/map/tooltip-man.svg',
        coord: [59.941253, 30.357885],
        hint: ''
    }, {
        icon: 'img/map/tooltip-note.svg',
        coord: [59.938497, 30.272140],
        hint: ''
    }, {
        icon: 'img/map/tooltip-pointer.svg',
        coord: [59.936964, 30.303008],
        hint: ''
    }, {
        icon: 'img/map/tooltip-home.svg',
        coord: [59.934204, 30.306703],
        hint: 'Исаакиевский собор'
    }];
    var myCollection = new ymaps.GeoObjectCollection();
    for (var i = 0; i < coord.length; i++) {
        myCollection.add(new ymaps.Placemark(coord[i].coord, {
            hintContent: coord[i].hint,
        }, {
            iconLayout: 'default#image',
            iconImageHref: coord[i].icon,
            iconImageSize: [93, 75],
            iconImageOffset: [-93, -75]
        }));
    }

    myMap.geoObjects.add(myCollection);

}
