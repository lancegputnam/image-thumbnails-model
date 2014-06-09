"use strict";

var detailPhoto;

var newCaption = new PhotoCollection();

var showPhotos = new PhotoCollection();

showPhotos.fetch().done(function() {
	showPhotos.each(function(photos) {
		new ThumbnailView({model: photos});
	});

	//detailPhoto is from the variable above. DetailView is from detail-view.js
	detailPhoto = new DetailView({model: showPhotos.first() });
});















