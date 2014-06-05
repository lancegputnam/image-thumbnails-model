"use strict";

var photos = new PhotoCollection();
var detailViewInstance;


photos.fetch().done(function(){
  photos.each(function(photo){

    new ThumbnailView({model: photo});

  })

  detailViewInstance = new DetailView({ model: photos.first() })
})














// "use strict";

// var photos = new PhotoCollection();

// photos.fetch().done(function(){ //we fetch it and loop over each of them and send to thumbnail
// 	photos.each(function(photo){
// 		new ThumbnailView({model: photo}); // you want to create an object literal telling that it is the model
// 	})

// 	new DetailView({ model:photos.first() }) //takes the first model instance out of collection and sets as model
// }) //we want to fetch the photos from PhotoCollection

// // var detailView = new DetailView({model: new Photo});


// var Photo = Backbone.Model.extend ({
// 	idAttribute: "_id",

// 	// defaults: {
// 	// 	url: "http://www.sportsgrid.com/wp-content/uploads/2012/04/Shaq-Tweaking-Or-Bugs-628x351.jpg",
// 	// 	caption: "shaq attaq"
// 	// }
// });

// // put the collection 
// var PhotoCollection = Backbone.Collection.extend ({
// 	model: Photo, 

// 	// url: 'http://tiny-pizza-server.herokuapp.com/collections/shaq-photo'           // the model that we are refering to is Photo
// })

// // This is for the thumbnail view. Mason put this in a separate folder. 
// var ThumbnailView = Backbone.View.extend({

// 	className: 'thumbnail',

// 	template: _.template($('.thumbnail-template').text),

// 	events: {
// 		"click" : "showDetailView"   // the selector defaults to el. showDetailView is a method
// 	},

// 	initialize: function(){

// 		this.listenTo(this.model, 'change', this.render); //this.render wants to return the function for you

// 		$('.thumbnail-container').append(this.el);
// 		this.render()
// 	},

// 	render: function(){
// 		//this .model is whatever the model instance is. Attributes is the instance specific data 
// 		// _template returns strings
// 		var renderedTemplate = this.template(this.model.attributes) //why attributes? b/c all the important instance stuff is stored in attributes
// 		this.$el.html(renderedTemplate)
// 	},

// 	showDetailView: function(){
// 		// this is saying.. i have a model and i am handing it over to you
// 		new DetailView({model:this.model}) //DetailView already has a model, so we write this.model 
// 	}
// })

// /// how do we send a model from one view to another 

// ///// This is the detail view example from June 5

// var DetailView = Backbone.View.extend {

// 	className = "DetailView"

// 	template: _.template($('.detail-view-template').text()),

// 	events: {
// 		"click .save-button": "updateModel"
// 	},

// 	initialize:function (){
// 		$('.detail-container').append(this.el)
// 		this.render();
// 	},

// 	render: function () {
// 		var renderedTemplate = this.template(this.model.attributes) //why attributes? b/c all the important instance stuff is stored in attributes
// 		this.$el.html(renderedTemplate)
// 		return this;
// 	},

// 	updateModel: function (){
// 		this.model.set ({
// 			url: 	 this.$el.find('.url-input').val(),
// 			caption: this.$el.find('.caption-input').val(),
// 		}).save().done(function(){
// 			this.$el.find('.status').html('Saved')
// 		})
// 	}
// })

















