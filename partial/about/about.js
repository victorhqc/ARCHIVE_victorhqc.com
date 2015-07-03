angular.module('victorhqc').controller('AboutCtrl',function($scope, $timeout, pararallaxImages){

    function getGravatarImg(email, size) {
        var hash = md5(email);
        var url = 'http://www.gravatar.com/avatar/' + hash;
        url += '?s=' + size;
        return url;
    }

    function render_profile_picture(){
        var src = getGravatarImg('victorhqc@gmail.com', 350);
        var img = document.getElementById('profile_pic');
        img.src = src;
    }

    $scope.features = [
        {
            "title":"feature_1",
            "message":"featurem_1",
            "icon":"ultrabook.png"
        },
        {
            "title":"feature_2",
            "message":"featurem_2",
            "icon":"type.png"
        },
        {
            "title":"feature_3",
            "message":"featurem_3",
            "icon":"news.png"
        },
        {
            "title":"feature_4",
            "message":"featurem_4",
            "icon":"mug.png"
        },
        {
            "title":"feature_5",
            "message":"featurem_5",
            "icon":"gameboy.png"
        }
    ];

    $timeout(function() {
        render_profile_picture();
        pararallaxImages.boot();
    }, 0);

});
