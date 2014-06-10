"use strict";

// The model determines the data
var Photo = Backbone.Model.extend({

	idAttribute: "_id",
	defaults: {
		caption: 'You are a 90s kid',
	},
});

var PhotoCollection = Backbone.Collection.extend({
	model: Photo,
	// this url links us to the server
	url: 'http://tiny-pizza-server.herokuapp.com/collections/photos-lance'
});