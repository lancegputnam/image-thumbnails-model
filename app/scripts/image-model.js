"use strict";

// The model determines the data
var Photo = Backbone.Model.extend({

	idAttribute: "_id",
	defaults: {
		caption: 'You are a 90s kid',
		url: 'http://thechive.files.wordpress.com/2014/05/tumblr_n4vu23pi8s1qelyl4o1_500.gif?w=500&h=375'
	},
});

var PhotoCollection = Backbone.Collection.extend({
	model: Photo,
	// this url links us to the server
	url: 'http://tiny-pizza-server.herokuapp.com/collections/photos-lance'
});