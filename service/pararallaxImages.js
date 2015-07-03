angular.module('victorhqc').factory('pararallaxImages',function(supportsSVG) {

    var PararallaxImages = function(){};

    /**
    * Detect SVG support
    * Code thanks to @todd way to go!
    * http://toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script/
    */
    PararallaxImages.prototype.detect_svg_support = function() {
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

    PararallaxImages.prototype.onScroll = function(evt, t) {
        if(!t.ticking){
            t.ticking = true;
            window.requestAnimFrame(t.updateElements());
            t.lastScrollY = window.scrollY;
        }
    };

    PararallaxImages.prototype.visibleImgs = function() {
        var visibles = [];
        var invisibles = [];

        var totalHeight = this.height - this.headerHeight;

        var winscroll = $(window).scrollTop();
        var relativeTop = winscroll + this.headerHeight;

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

    PararallaxImages.prototype.updateElements = function() {
        var imgs = this.visibleImgs();

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

        this.ticking = false;

    };

    function prefix(obj, prop, value) {
        var prefs = ['webkit', 'Moz', 'o', 'ms'];
        for (var pref in prefs) {
            obj[prefs[pref] + prop] = value;
        }
    }

    PararallaxImages.prototype.boot = function()
    {
        this.height = $(window).height();
        this.headerHeight = document.getElementById('header').clientHeight;

        var t = this;
        window.addEventListener('scroll', function(evt){
            t.onScroll(evt, t);
        }, false);

        this.updateElements();
    };

    return new PararallaxImages();
});
