"use strict";

//detailView is working like the thumbnailView
// This is a constructor and the view is how we display our views in different ways
var DetailView = Backbone.View.extend({
  //className designates the class "detail-box"
  className: "detail-box",
  //this template is linking to the second script tag in index.html
  detailTemplate: _.template($('.detail-images').text()),
  // This event click is referencing a function. saying once clicked run the function 
  // click the save button and it updates the model
  // click to the new button and it adds the photo to the gallery
  //.new-image and .new-caption are being referenced from the scripts in index.html
  events: {
    "click .new-image" : "addImage",
    "click .new-caption" : "addCaption",
  },

  // This initialize is appending to the main-container. it is then being rendered. 
  initialize: function() {
  // .listenTo is binded to models and collections
  this.listenTo(getPhotos, 'add', function(photo){
      new ThumbnailView({model: photo});
    });

    this.listenTo(this.model, 'change', this.render);

  // this main-container is being pulled from the HTML 
  $('.main-container').prepend(this.el);
  this.render();

  },

  // This is the render function. The renderedTemplate becomes a template
  render: function() {
    var renderTemp = this.detailTemplate(this.model.attributes);
    this.$el.html(renderTemp);
    return this;
  },

  //This will update the model when the button is clicked
  addCaption: function() {
    this.model.set({
      caption: this.$el.find('.caption-input').val(),
    });

    getPhotos.add(this.model);

    this.model.save().done(function() {
      this.$el.find('.status').html('Saved!');
    });

  },

  //This will update the model when the button is clicked
  addPhoto: function() {

    this.model.set({
      url: this.$el.find('.image-input').val(),

    });

    getPhotos.add(this.model);

    this.model.save().done(function() {
      this.$el.find('.status').html('Saved!');
    });
  },
});