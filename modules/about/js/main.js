(function(){
    "use strict";

    var Module = function(){
        this.a = App;

        this.height = $(window).height();
        this.headerHeight = document.getElementById('header').clientHeight;

        this.featuresContainer = document.getElementById('about-features');
        this.buildGrid(this.a._data.about_feaures);

        window.addEventListener('scroll', this.onScroll, false);

        this.updateElements();
        this.render_profile_picture();
    };

    Module.prototype.render_profile_picture = function() {
        var src = Webpage.getGravatarImg('victorhqc@gmail.com', 350);
        var img = document.getElementById('profile_pic');
        img.src = src;
    };

    /**
    * Build the DOM of the features thumbnails
    * @param  {Json} features Sites info
    * @return {undefined}       No response
    */
    Module.prototype.buildGrid = function(features) {
        //The row will hold:
        // * 4 websites in large screens
        // * 3 websites in medium screens
        // * 1 website in small and extra small screens

        var aux = 1;
        for(var s in features){
            if(features.hasOwnProperty(s)){
                var lgCalc = aux % 4;
                var mdCalc = aux % 3;
                var smCalc = aux % 2;

                var featureNo = this.featuresContainer.childNodes.length;

                var feature = this.featureDOM(features[s]);
                this.featuresContainer.appendChild(feature);
                feature.id = 'feature-'+featureNo;

                if(aux > 1){
                    if(lgCalc === 0){
                        var fixLg = document.createElement('div');
                        fixLg.className = 'clearfix visible-lg';
                        this.featuresContainer.appendChild(fixLg);
                    }

                    if(mdCalc === 0){
                        var fixMd = document.createElement('div');
                        fixMd.className = 'clearfix visible-md';
                        this.featuresContainer.appendChild(fixMd);
                    }

                    if(smCalc === 0){
                        var fixSm = document.createElement('div');
                        fixSm.className = 'clearfix visible-sm';
                        this.featuresContainer.appendChild(fixSm);
                    }
                }

                aux++;
            }
        }

        this.detect_svg_support();
    };

    Module.prototype.featureDOM = function(feature) {
        var main = document.createElement('div');
        main.className = 'feature-about col-sm-6 col-md-4 col-lg-3';

        var row = document.createElement('div');
        row.className = 'row';
        main.appendChild(row);

        var icon_c = document.createElement('div');
        icon_c.className = 'col-sm-3';
        row.appendChild(icon_c);

        var icon = document.createElement('div');
        icon.className = 'feature-icon';
        icon.style.backgroundImage = 'url(img/icons/'+feature.icon+')';
        icon_c.appendChild(icon);

        var info = document.createElement('div');
        info.className = 'col-sm-9';
        row.appendChild(info);

        var title = document.createElement('h4');
        title.setAttribute('data-ltag', feature.title);
        var textTitle = this.a.current.getText(feature.title);
        title.appendChild(document.createTextNode(textTitle));
        info.appendChild(title);

        var message = document.createElement('p');
        message.setAttribute('data-ltag', feature.message);
        var textTitle2 = this.a.current.getText(feature.message);
        message.appendChild(document.createTextNode(textTitle2));
        info.appendChild(message);

        return main;
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

    Module.prototype.updateElements = function() {
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

    var m = new Module();
})();
