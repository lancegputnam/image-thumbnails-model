"use strict";

var detailPhoto;

var newCaption = new PhotoCollection();

var getPhotos = new PhotoCollection();

getPhotos.fetch().done(function() {
	getPhotos.each(function(photos) {
		new ThumbnailView({model: photos});
	});
	detailPhoto = new DetailView({model: getPhotos.first() });
});


// "use strict";

// var showThumbnails = new PhotoCollection();
// var detailViewInstance;

// 	showThumbnails.fetch().done(function(){
// 		showThumbnails.each(function(url){

// 			new ThumbnailView({model:url})
// 		});

// 		detailViewInstance = new DetailView ({ model: showThumbnails.first() })
// 	});















