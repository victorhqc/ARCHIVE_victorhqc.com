var App;
(function(window){
	"use strict";

	window.dhtmlHistory.create({
		toJSON: function(o) {
			return JSON.stringify(o);
		}
		, fromJSON: function(s) {
			return JSON.parse(s);
		}
	});

	var Main = function(){
		this.getConfig(function(r, t){
			var modules = Object.keys(r.modules)
			t.buildMenu(modules);

			t.start(r);
		});
	}

	/**
	 * Gets the main site configuration
	 * @return {json} Configuration
	 */
	Main.prototype.getConfig = function(callback) {
		var t = this;
		new Vi({url:'config.json', 'respuesta': 'objeto'}).server(function(r){
			if(typeof callback === 'function'){
				callback(r, t);
			}
		});
	};

	Main.prototype.start = function(r) {
		var lang = this.browserLanguage();
		var modules = {};

		for(var k in r.modules){
			if(r.modules.hasOwnProperty(k)){
				modules[k] = {nombre: k, url:r.url};
			}
		}

		var j = {name: 'victorhqc', modules:modules, div:'#container', currentLang: lang};
		this.a = new AppSystem(j);
		App = this.a;

		this.a._data = r;
		var t = this;

		dhtmlHistory.initialize();
		dhtmlHistory.addListener(t.handleHistory);

		this.getRepos(function(repos){
			t.a.init(function(){
				var initialModule = dhtmlHistory.getCurrentLocation();
				if(initialModule == '/' || initialModule == ''){
					t.loadCategory('home');
				}else{
					var c = initialModule.substr(1);
					t.loadCategory(c);
				}
			});
		});
	};

	Main.prototype.handleHistory = function(newLocation, historyData) {
		var category = newLocation.substr(1);
		Webpage._cat = category;
		if(typeof Webpage.a.current === 'object'){
			Webpage.loadCategory(category);
		}
	};

	Main.prototype.buildMenu = function(modules) {
		this.menu = document.getElementById('main-menu');
		for(var i = 0, len = modules.length; i < len; i++){
			var m = modules[i];
			var li = document.createElement('li');
			li.id = 'm-'+m;

			var a = document.createElement('a');
			a.setAttribute('data-ltag', m);
			a.setAttribute('data-module', m);

			li.appendChild(a);
			this.menu.appendChild(li);

			a._t = this;
			a.addEventListener('click', function(){
				var category = this.getAttribute('data-module');
				this._t.loadCategory(category);
			});
		}
	};

	Main.prototype.cleanMenuCategory = function() {
		var lis = document.querySelectorAll('#main-menu>li');
		for(var i = 0, len = lis.length; i < len; i++){
			var li = lis[i];
			li.className = '';
		}
	};

	Main.prototype.activeMenuCategory = function(category) {
		var el = document.getElementById('m-'+category);
		this.cleanMenuCategory();
		el.className = 'active';
	};

	Main.prototype.loadCategory = function(category) {
		dhtmlHistory.add('/'+category, {message: "Module " +category});
		this.activeMenuCategory(category);

		this.a.getModule(category);
		this.a.current.start();
	};

	Main.prototype.browserLanguage = function() {
		var lang = navigator.language || navigator.userLanguage;
		lang = lang.match(/([a-z]+)/gi);
		if(lang !== null){
			lang = lang[0];
		}

		var l = '';
		switch(lang){
			case 'es':
				l = lang;
			break;
			default:
			case 'en':
				l = lang;
			break;
		}

		return l;
	};

	/**
	 * Gets the github public repositories
	 * @return {object} See more info at: http://developer.github.com/v3/
	 */
	Main.prototype.getRepos = function(callback) {
		callback = (typeof callback === 'function') ? callback : function(){};
		var j = {
			url: 'https://api.github.com/users/victorhqc/repos',
			response: 'text',
			cache: true,
			headers: [
				
			]
		}

		new Vi(j).server(function(r){
			console.log('r', r);
			callback();
		});
	};

	Main.prototype.setRepos = function(repos) {
		
	};

	Main.prototype.getGravatarImg = function(email, size) {
		var email = email;
		var hash = md5(email);

		var url = 'http://www.gravatar.com/avatar/' + hash;

		url += '?s=' + size;

		return url;
	};

	window.Webpage = new Main();
})(window);

/**
 * Detect SVG support
 * Code thanks to @todd way to go!
 * http://toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script/
 */
function supportsSVG() {
	return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;  
}