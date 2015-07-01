angular.module('victorhqc').controller('HomeCtrl',function($scope, supportsSVG, $timeout){
    /**
    * Detect SVG support
    * Code thanks to @todd way to go!
    * http://toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script/
    */
    $scope.detect_svg_support = function() {
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
    };

    /**
    * The size of the image will depend of the size of the screen.
    */
    $scope.setSizes = function() {
        $scope.height = $(window).height();

        var features = document.getElementsByClassName('feature')[0];
        var margin = $(features).css('margin-top');

        $('.fake-img').css({'height': margin, 'top': '-'+margin});

        $scope.headerHeight = document.getElementById('header').clientHeight;
    };

    /**
    * Makes a random selection of pictures, just to keep fresh the site when someone visits :)
    * @param  {Json} Jimg Json containing pictures to scramble
    * @return {Json} newObj Json containing new "order" of the img obj
    */
    $scope.scrambleImages = function(Jimg) {
        var len = Object.keys(Jimg).length;
        var newObj = {};
        var added = {};

        var aux = true;
        var i = 0;
        while(aux === true){
            var random = Math.floor((Math.random()*len)+1);
            if(added[random] === undefined){
                added[random] = Jimg[random];
                newObj[i] = Jimg[random];
                i++;
            }

            var lenAux = Object.keys(newObj).length;

            if(len === lenAux){
                aux = false;
            }
        }

        return newObj;
    };

    /**
    * Build the "fixed images" based on a json
    * @param  {Json} Jimg Json containig pictures to build (src only)
    * @return {[type]}      [description]
    */
    $scope.buildImages = function(Jimg) {
        Jimg = $scope.scrambleImages(Jimg);
        var len = Object.keys(Jimg).length;
        var aux = 0;

        var fakeImages = document.getElementsByClassName('fake-img');
        $scope.fakeImages = fakeImages;

        var amount = fakeImages.length;
        for(var k in Jimg){
            if(Jimg.hasOwnProperty(k)){
                if(fakeImages[aux]){
                    fakeImages[aux].id = 'fake-img-' + k;
                    fakeImages[aux].setAttribute('data-img', k);

                    var div = document.createElement('div');
                    div.className = 'fixed-img';
                    div.id = 'fixed-img-' + k;
                    $(div).css('z-index', amount);

                    var img = document.createElement('img');
                    img.src = Jimg[k].src;
                    div.appendChild(img);

                    $scope.imgContainer.appendChild(div);
                    $scope.imgs = img;

                    aux ++;
                    amount --;
                }else{
                    break;
                }
            }
        }
    };

    $scope.onScroll = function(evt) {
        if(!$scope.ticking){
            $scope.ticking = true;
            window.requestAnimFrame($scope.updateElements());
            $scope.lastScrollY = window.scrollY;
        }
    };

    $scope.visibleImgs = function() {
        var visibles = [];
        var invisibles = [];

        var totalHeight = this.height - this.headerHeight;

        var winscroll = $(window).scrollTop();
        var relativeTop = winscroll + this.headerHeight;
        for(var i = 0, len = this.fakeImages.length; i < len; i++){

            var fake = this.fakeImages[i];
            var parent = fake.parentNode;
            var fakeheight = $(fake).outerHeight();

            var eTop = $(parent).offset().top;
            var lower = eTop - relativeTop; // <----- Lower bound of image
            var upper = lower -  fakeheight; // <----- Upper bound of image

            fake._scroll = upper - $(parent).outerHeight();

            var visible = false;
            if(lower > 0 && upper < totalHeight){
                visible = true;

                visibles.push(fake);
            }else{
                invisibles.push(fake);
            }

        }



        return {visibles:visibles, invisibles:invisibles};
    };

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

    $scope.updateElements = function() {
        var imgs = $scope.visibleImgs();

        for(var j = 0, len2 = imgs.invisibles.length; j < len2; j++){
            var aux2 = imgs.invisibles[j];
            var data2 = aux2.getAttribute('data-img');
            var div2 = document.getElementById('fixed-img-'+data2);
            div2.style.visibility = 'hidden';
        }

        for(var i = 0, len = imgs.visibles.length; i < len; i++){
            var aux = imgs.visibles[i];
            var data = aux.getAttribute('data-img');

            var div = document.getElementById('fixed-img-'+data);
            var img = div.childNodes[0];

            div.style.visibility =  'visible';
            prefix(div.style, "Transform", "translate3d(0 ," + aux._scroll + 'px, 0)');

            var relScroll = $scope.lastScrollY;
            var gen = aux._scroll;

            var imgH = img.offsetHeight;
            var op = Math.round(-1 * gen * 0.8 - (imgH * 0.05));
            var op2 = Math.round( -1 * gen * 0.7 - (imgH * 0.05));

            prefix(img.style, "Transform", "translate3d(0," + op2 + "px, 0)");
        }

        $scope.ticking = false;

    };

    function prefix(obj, prop, value) {
        var prefs = ['webkit', 'Moz', 'o', 'ms'];
        for (var pref in prefs) {
            obj[prefs[pref] + prop] = value;
        }
    }

    $scope.detect_svg_support();

    $scope.imgContainer = document.getElementById('fix-image-container');
    $scope.imgs = [];

    $scope.images = {
        "1": {
            "src":"img/main/1.jpg",
            "title":"title1",
            "subtitle":"sub1"
        },
        "2": {
            "src":"img/main/2.jpg",
            "title":"title2",
            "subtitle":"sub2"
        },
        "3": {
            "src":"img/main/3.jpg",
            "title":"title3",
            "subtitle":"sub3"
        },
        "4": {
            "src":"img/main/4.jpg",
            "title":"title4",
            "subtitle":"sub4"
        },
        "5": {
            "src":"img/main/5.jpg",
            "title":"title5",
            "subtitle":"sub5"
        },
        "6": {
            "src": "img/flickr/9436144812_070bd6cee2_o.jpg",
            "author": "Mike Krüger",
            "url": "http://www.flickr.com/photos/memoryleakx/"
        },
        "7": {
            "src": "img/flickr/9223220544_f3be78b7a5_o.jpg",
            "author": "Dennis van Zuijlekom",
            "url": "http://www.flickr.com/photos/dvanzuijlekom/"
        },
        "8": {
            "src": "img/flickr/6081377157_14562fca7a_o.jpg",
            "author": "Tomás Vasconcelo",
            "url": "http://www.flickr.com/photos/unmoment/"
        },
        "9": {
            "src": "img/flickr/6902260636_14b12901ab_o.jpg",
            "author": "Vagelis Giannadakis",
            "url": "http://www.flickr.com/photos/vagelis_giannadakis"
        },
        "10": {
            "src": "img/flickr/7898404806_fb5f3498e3_o.jpg",
            "author": "Marion Quiroz Castro",
            "url": "http://www.flickr.com/photos/marionqc"
        },
        "11": {
            "src": "img/flickr/7898420436_b9a376f2bd_o.jpg",
            "author": "Marion Quiroz Castro",
            "url": "http://www.flickr.com/photos/marionqc"
        }
    };

    $timeout(function(){
        $scope.buildImages($scope.images);
        $scope.setSizes();

        window.addEventListener('scroll', $scope.onScroll, false);

        $scope.updateElements();
    }, 0);
});
