"use strict";

var showThumbnails = new PhotoCollection();
var detailViewInstance;

	showThumbnails.fetch().done(function(){
		showThumbnails.each(function(url){

			new ThumbnailView({model:url})
		});

		detailViewInstance = new DetailView ({ model: showThumbnails.first() })
	});















