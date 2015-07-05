angular.module('victorhqc').controller('ProjectsCtrl',function($scope){
    $scope.projects = [
        {
            title: 'Capvital',
            subtitle: 'capvital_subtitle',
            message: 'capvital_message',
            url: 'http://capvital.mx'
        },
        {
            title: 'Pilot',
            subtitle: 'pilot_subtitle',
            message: 'pilot_message',
            url: 'http://pilot.industries'
        },
        {
            title: 'Pippal',
            subtitle: 'pippal_subtitle',
            message: 'pippal_message',
            url: 'http://pippal.education'
        }
    ];

});
