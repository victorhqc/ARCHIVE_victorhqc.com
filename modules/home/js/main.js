(function(){
    "use strict";

    var Module = function(){
        this.a = App;

        this.translateHelper();
        this.detect_svg_support();

        this.imgContainer = document.getElementById('fix-image-container');
        this.imgs = [];

        this.buildImages(this.a._data.main_images);
        this.setSizes();

        window.addEventListener('scroll', this.onScroll, false);

        this.updateElements();
    };

    /**
    * Detect SVG support
    * Code thanks to @todd way to go!
    * http://toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script/
    */
    Module.prototype.detect_svg_support = function() {
        if (supportsSVG()) {
            document.documentElement.className += ' svg';
        } else {
            document.documentElement.className += ' no-svg';
            var imgs = document.getElementsByTagName('img');
            var dotSVG = /.*\.svg$/;
            for (var i = 0; i != imgs.length; ++i) {
                if(imgs[i].src.match(dotSVG)) {
                    imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
                }
            }
        }
    };

    Module.prototype.translateHelper = function() {
        var phone = this.a.current.getText('phone');
        var phonedom = document.getElementById('phone');
        phonedom.title = phone;
    };

    /**
    * The size of the image will depend of the size of the screen.
    */
    Module.prototype.setSizes = function() {
        this.height = $(window).height();

        var features = document.getElementsByClassName('feature')[0];
        var margin = $(features).css('margin-top');

        $('.fake-img').css({'height': margin, 'top': '-'+margin});

        this.headerHeight = document.getElementById('header').clientHeight;
    };

    /**
    * Makes a random selection of pictures, just to keep fresh the site when someone visits :)
    * @param  {Json} Jimg Json containing pictures to scramble
    * @return {Json} newObj Json containing new "order" of the img obj
    */
    Module.prototype.scrambleImages = function(Jimg) {
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
    Module.prototype.buildImages = function(Jimg) {
        Jimg = this.scrambleImages(Jimg);
        var len = Object.keys(Jimg).length;
        var aux = 0;

        var fakeImages = document.getElementsByClassName('fake-img');
        this.fakeImages = fakeImages;

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

                    this.imgContainer.appendChild(div);
                    this.imgs = img;

                    aux ++;
                    amount --;
                }else{
                    break;
                }
            }
        }
    };

    Module.prototype.onScroll = function(evt) {
        if(!m.ticking){
            m.ticking = true;
            requestAnimFrame(m.updateElements());
            m.lastScrollY = window.scrollY;
        }
    };

    Module.prototype.visibleImgs = function() {
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

    Module.prototype.updateElements = function() {
        var imgs = this.visibleImgs();

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

            var relScroll = this.lastScrollY;
            var gen = aux._scroll;

            var imgH = img.offsetHeight;
            var op = Math.round(-1 * gen * 0.8 - (imgH * 0.05));
            var op2 = Math.round( -1 * gen * 0.7 - (imgH * 0.05));

            prefix(img.style, "Transform", "translate3d(0," + op2 + "px, 0)");
        }

        this.ticking = false;

    };

    function prefix(obj, prop, value) {
        var prefs = ['webkit', 'Moz', 'o', 'ms'];
        for (var pref in prefs) {
            obj[prefs[pref] + prop] = value;
        }
    }

    var m = new Module();
})();
