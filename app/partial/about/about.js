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

    $scope.technical_skills = [
        {
            title: 'skill_mysql',
            subtitle: 'skill_mysql_subtitle',
            messages: ['skill_mysql_message'],
            features: [],
            image: 'img/screens/mysql.jpg'
        },
        {
            title: 'skill_backend',
            subtitle: 'skill_backend_subtitle',
            messages: ['skill_backend_message'],
            features: ['restful', 'websockets', 'laravel', 'skill_backend_oauth2', 'mean', 'loopback'],
            image: 'img/screens/php-sublime.jpg'
        },
        {
            title: 'skill_frontend',
            subtitle: 'skill_frontend_subtitle',
            messages: ['skill_frontend_message'],
            features: ['angularjs', 'gulp', 'grunt', 'html5'],
            image: 'img/screens/js-sublime.jpg'
        },
        {
            title: 'skill_github',
            subtitle: 'skill_github_subtitle',
            messages: ['skill_github_message'],
            features: [],
            links: [
                {
                    url: 'http://hithub.com/victorhqc',
                    message: 'my_repositories'
                }
            ],
            image: 'img/icons/Octocats/Octocat/Octocat_600.jpg'
        },
        {
            title: 'skill_linux',
            subtitle: 'skill_linux_subtitle',
            messages: ['skill_linux_message'],
            features: [],
            image: 'img/screens/linux.jpg'
        },
        {
            title: 'skill_noskill',
            subtitle: 'skill_noskill_subtitle',
            messages: ['skill_noskill_message'],
            features: [],
            image: 'img/screens/gastos.jpg'
        }
    ];

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
