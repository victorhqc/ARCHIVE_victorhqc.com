angular.module('victorhqc').controller('AboutCtrl',function($scope, supportsSVG, $timeout){

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

    /**
    * Detect SVG support
    * Code thanks to @todd way to go!
    * http://toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script/
    */
    function detect_svg_support() {
        if (supportsSVG.check()) {
            document.documentElement.className += ' svg';
        } else {
            document.documentElement.className += ' no-svg';
            var imgs = document.getElementsByTagName('img');
            var dotSVG = /.*\.svg$/;
            for (var i = 0; i !== imgs.length; ++i) {
                if(imgs[i].src.match(dotSVG)) {
                    imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
                }
            }
        }
    }

    function onScroll(evt) {
        if(!$scope.ticking){
            $scope.ticking = true;
            window.requestAnimFrame(updateElements());
            $scope.lastScrollY = window.scrollY;
        }
    }

    function visibleImgs() {
        var visibles = [];
        var invisibles = [];

        var totalHeight = $scope.height - $scope.headerHeight;

        var winscroll = $(window).scrollTop();
        var relativeTop = winscroll + $scope.headerHeight;

        var containers = document.getElementsByClassName('img-parallax');
        for(var i = 0, len = containers.length; i < len; i++){
            var container = containers[i];
            var parent = container.parentNode.parentNode;

            var upper = relativeTop - $(parent).offset().top + totalHeight ; // <----- Upper bound of image
            var lower = upper - container.offsetHeight; // <----- Lower bound of image

            var visible = false;
            if(upper > 0 && lower < totalHeight){
                visible = true;
            }

            container._upper = upper;
            container._lower = lower;

            if(visible === false){
                invisibles.push(container);
            }else{
                visibles.push(container);
            }
        }

        return {visibles:visibles, invisibles:invisibles};
    }

    window.requestAnimFrame = function(){
        return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
    };

    function updateElements() {
        var imgs = visibleImgs();

        for(var i = 0, len = imgs.invisibles.length; i < len; i++){
            var aux = imgs.invisibles[i];
            var img = aux.getElementsByTagName('img')[0];
            img.style.visibility = 'hidden';
            prefix(img.style, 'Transform', '');
        }

        for(var j = 0, len2 = imgs.visibles.length; j < len2; j++){
            var aux2 = imgs.visibles[j];
            var img2 = aux2.getElementsByTagName('img')[0];

            img2.style.visibility =  'visible';

            var relScroll = aux2._lower;

            var imgH = aux2.offsetHeight;
            var op2 = -100 + Math.round( -1 * relScroll * 0.15 - (imgH * 0.05));

            prefix(img2.style, "Transform", "translate3d(0," + op2 + "px, 0)");
        }

        $scope.ticking = false;

    }

    function prefix(obj, prop, value) {
        var prefs = ['webkit', 'Moz', 'o', 'ms'];
        for (var pref in prefs) {
            obj[prefs[pref] + prop] = value;
        }
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
        $scope.height = $(window).height();
        $scope.headerHeight = document.getElementById('header').clientHeight;

        window.addEventListener('scroll', onScroll, false);

        updateElements();
        render_profile_picture();
    }, 0);

});
