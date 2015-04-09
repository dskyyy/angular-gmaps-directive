'use strict';

App.directive('map', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function (scope, element, attrs) {
            var myOptions = {
                zoom: 16,
                center: new google.maps.LatLng(lat, lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: []
            };

            var map = new google.maps.Map(document.getElementById(attrs.id), myOptions);

            var contentString = '<img src="image.png"/>';

            var compiled = $compile(contentString)(scope);

            var infoWindow = new google.maps.InfoWindow({
                content: compiled[0]
            });

            var place = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                title: ''
            });

            infoWindow.open(map, place);
        }
    };
});
