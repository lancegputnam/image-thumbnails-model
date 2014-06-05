"use strict";

var Photo = Backbone.Model.extend ({
	idAttribute: "_id",

	// defaults: {
	// 	url: "http://www.sportsgrid.com/wp-content/uploads/2012/04/Shaq-Tweaking-Or-Bugs-628x351.jpg",
	// 	caption: "shaq attaq"
	// }
});

// put the collection 
var PhotoCollection = Backbone.Collection.extend ({
	model: Photo, 

	url: 'http://tiny-pizza-server.herokuapp.com/collections/shaq-photo'           // the model that we are refering to is Photo
})

// This is for the thumbnail view. Mason put this in a separate folder. 
var ThumbnailView = Backbone.View.extend({

	className: 'thumbnail',

	template: _.template($('.thumbnail-template').text),

	events: {
		"click" : "showDetailView"   // the selector defaults to el. showDetailView is a method
	},

	initialize: function(){
		$('.container').append(this.el);
		this.render()
	},

	render: function(){
		var renderedTemplate = this.template(this.model.attributes) //why attributes? b/c all the important instance stuff is stored in attributes
		this.$el.html(renderedTemplate)
	},

	showDetailView: function(){
		new DetailView({model:this.model}) //DetailView already has a model, so we write this.model 
	}
})

