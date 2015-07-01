angular.module('victorhqc', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'translations']);

angular.module('victorhqc').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl: 'partial/home/home.html'});
    $routeProvider.when('/about',{templateUrl: 'partial/about/about.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('victorhqc').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
