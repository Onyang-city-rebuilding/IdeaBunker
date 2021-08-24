var mapOptions = {
    center: new naver.maps.LatLng(36.784910, 126.999676),
    zoom: 17
};

var map = new naver.maps.Map('map', mapOptions);

var locationBtnHtml = '<a href="#" class="btn_mylct"><span class="spr_trff spr_ico_mylct">온양원도심</span></a>';
// var map = new naver.maps.Map('map', {zoom: 13});

naver.maps.Event.once(map, 'init_stylemap', function() {
    //customControl 객체 이용하기
    var customControl = new naver.maps.CustomControl(locationBtnHtml, {
        position: naver.maps.Position.TOP_LEFT
    });

    customControl.setMap(map);

    naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function() {
        map.setCenter(new naver.maps.Map('map', mapOptions));
    });

    //Map 객체의 controls 활용하기
    var $locationBtn = $(locationBtnHtml),
        locationBtnEl = $locationBtn[0];

    map.controls[naver.maps.Position.LEFT_CENTER].push(locationBtnEl);

    naver.maps.Event.addDOMListener(locationBtnEl, 'click', function() {
        map.setCenter(new naver.maps.LatLng(37.3595953, 127.1553971));
    });
});