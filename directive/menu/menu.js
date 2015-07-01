angular.module('victorhqc').directive('menu', function($route, $translate, $timeout, $location) {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'directive/menu/menu.html',
        link: function(scope, element, attrs, fn) {
            var routeChange = function(){
                scope.category = $route.current.$$route.originalPath.split('/')[1];
            };

            scope.$on('$locationChangeSuccess', function(next, current) {
                routeChange();
            });

            scope.categories = [
                {name: 'home'},
                {name: 'about'}
            ];

            routeChange();
        }
    };
});
