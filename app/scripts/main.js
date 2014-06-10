"use strict";

var showPhotos = new PhotoCollection();
var detailPhoto;

showPhotos.fetch().done(function() {
	showPhotos.each(function(photos) {

		new ThumbnailView({model: photos});
	});

	//detailPhoto is from the variable above. DetailView is from detail-view.js
	detailPhoto = new DetailView({model: showPhotos.first() });
});

var app = new AppRouter ();
Backbone.history.start();















