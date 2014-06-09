"use strict";

var Photo = Backbone.Model.extend({

	idAttribute: "_id",


	defaults: {
		caption: ""
	},

	initialize: function() {
	    this.on('change', function(){
	      // here is the future
	    });
	},

});

var PhotoCollection = Backbone.Collection.extend({

	model: Photo,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/photos'

});

// 'use script';

// // The model determines the dats
// var Photo = Backbone.Model.extend({
//   idAttribute: "_id"
// });

 
// // This defines the backbone collection server. 
// // the collection is multiple instances of the above model constructor
// var PhotoCollection = Backbone.Collection.extend({
//   // The photo is linking back to the model here
//   model: Photo,
//   // this url links us to the server 
//   url: 'http://tiny-pizza-server.herokuapp.com/collections/photos'
// })