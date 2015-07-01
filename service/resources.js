angular.module('victorhqc').factory('resources',function() {

    var resources = {};

    return resources;
}).factory('supportsSVG', function() {
    return {
        check: function() {
            return !! document.createElementNS && !!   document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;
        }
    };
});
