(function(){
	"use strict";

	var Module = function(){
		this.a = App;
		this.siteContainer = document.getElementById('websitesholder');

		this.buildSites(this.a._data.web_sites);
	}

	/**
	 * Build the DOM of the website thumbnails
	 * @param  {Json} sites Sites info
	 * @return {undefined}       No response
	 */	
	Module.prototype.buildSites = function(sites) {
		//The row will hold:
		// * 2 websites in large screens
		// * 2 websites in medium screens
		// * 1 website in small and extra small screens
		
		var aux = 0;
		for(var s in sites){
			if(sites.hasOwnProperty(s)){
				var lgCalc = aux % 2;
				var mdCalc = aux % 2;

				var siteNo = this.siteContainer.childNodes.length;

				var site = this.siteDOM(sites[s]);
				this.siteContainer.appendChild(site);
				site.id = 'site-'+siteNo;

				if(aux > 0){
					if(lgCalc === 0){
						var fixLg = document.createElement('div');
						fixLg.className = 'clearfix visible-lg';
						this.siteContainer.appendChild(fixLg);
					}

					if(lgCalc === 0){
						var fixMd = document.createElement('div');
						fixMd.className = 'clearfix visible-md hidden-lg';
						this.siteContainer.appendChild(fixMd);
					}
				}

				var thumb = document.querySelector('#site-'+siteNo+' .site-thumbnail');
				this.buildSiteGallery(sites[s], thumb);

				aux++;
			}
		}
	};

	/**
	 * Builds the DOM for each site
	 * @param  {Json} site Information of the site
	 * @return {Object}      Returns the object of the DOM
	 */
	Module.prototype.siteDOM = function(site) {
		var main = document.createElement('div');
		main.className = 'col-xs-10 col-sm-10 col-md-6 col-lg-6 site-div';

		var thumbnail = document.createElement('div');
		thumbnail.className = 'thumbnail';
		main.appendChild(thumbnail);

		var innerRow = document.createElement('div');
		innerRow.className = 'row';
		thumbnail.appendChild(innerRow);

		var thumbnail_container = document.createElement('div');
		thumbnail_container.className = 'col-xs-12 col-sm-12 col-md-6 col-lg-7 site-thumbnail';
		innerRow.appendChild(thumbnail_container);

		var info_container = document.createElement('div');
		info_container.className = 'col-xs-12 col-sm-12 col-md-6 col-lg-5 site-info';
		innerRow.appendChild(info_container);

		this.buildSiteTitle(site, info_container);
		this.buildSiteURL(site, info_container);
		this.buildSiteFeatures(site, info_container);
		this.buildSiteRelease(site, info_container);

		return main;
	};

	Module.prototype.buildSiteTitle = function(site, info_container) {
		var title = document.createElement('h2');
		var title_t = document.createTextNode(site.name);
		title.appendChild(title_t);
		info_container.appendChild(title);
	};

	Module.prototype.buildSiteURL = function(site, info_container) {
		var url = document.createElement('h4');
		var t_url = document.createTextNode(this.a.current.language.getText('url'));

		var span_t = document.createElement('span');
		span_t.setAttribute('data-ltag', 'url');
		span_t.appendChild(t_url);
		
		var i_url = document.createElement('span');
		i_url.className = 'glyphicon glyphicon-link';

		url.appendChild(i_url);
		url.appendChild(span_t);

		var p_url = document.createElement('p');
		//p_url.className = 'lead';
		
		var a_url = document.createElement('a');
		a_url.href = site.url;
		a_url.target = '_blank';
		
		var t_a_url = document.createTextNode(' '+site.url);
		
		a_url.appendChild(t_a_url);
		p_url.appendChild(a_url);

		info_container.appendChild(url);
		info_container.appendChild(p_url);
	};

	Module.prototype.buildSiteFeatures = function(site, info_container) {
		var features = document.createElement('h4');
		var t_features = document.createTextNode(this.a.current.language.getText('features'));
		var span_t = document.createElement('span');
		span_t.setAttribute('data-ltag', 'features');
		span_t.appendChild(t_features);

		var i_features = document.createElement('span');
		i_features.className = 'glyphicon glyphicon-dashboard';
		
		features.appendChild(i_features);
		features.appendChild(span_t);

		if(site.features !== undefined){
			var list = document.createElement('ul');

			for(var t in site.features){
				var elm = document.createElement('li');
				var elm_text = this.a.language.getText(site.features[t]);
				var elm_t = document.createTextNode(elm_text);

				elm.appendChild(elm_t);
				list.appendChild(elm);
			}
		}

		info_container.appendChild(features);
		info_container.appendChild(list);
	};

	Module.prototype.buildSiteRelease = function(site, info_container) {
		var date = document.createElement('h4');
		var t_date = document.createTextNode(this.a.current.language.getText('date'));

		var span_t = document.createElement('span');
		span_t.setAttribute('data-ltag', 'date');
		span_t.appendChild(t_date);

		var i_date = document.createElement('span');
		i_date.className = 'glyphicon glyphicon-calendar';

		date.appendChild(i_date);
		date.appendChild(span_t);

		var p_date = document.createElement('p');
		var d_date = site.release_date.match(/([0-9]+)/gi);
		d_date = new Date(d_date[0], d_date[1] - 1, d_date[2]);

		var month = this.a.language.getText('m-'+d_date.getMonth());
		var t_p_date = document.createTextNode(d_date.getFullYear()+' '+month+' '+d_date.getDate());
		p_date.appendChild(t_p_date);

		info_container.appendChild(date);
		info_container.appendChild(p_date);
	};

	Module.prototype.buildSiteGallery = function(site, container) {

		var jg = {
			images: site.images,
			domcontainer: container,
			thumbnails: false
		}

		var height = container.parentNode.parentNode.offsetHeight;
		container.style.height = height+'px';

		var gallery = new YGallery(jg);
	};

	var m = new Module();
})();