"use strict";

// DetailView works like the thumbnailview 
//// This is a constructor and the view is how we display our views in different ways
var DetailView = Backbone.View.extend({
  // className designates a class
  className: 'detail-view',
  // This script is linking to the script tag in html 
  template: _.template($('.detail-view-template').text()),
  // This event click is referencing a fuction. saying once clicked run the function 
  // click the save button and it updates the model
  // click to the new button and it adds the photo to the gallery
  events: {
    "click .save-button": "updateModel",
    "click .new-button": "createPhoto"
  },

  // This initialize is appending to the detail-container. it is then being rendered. 
  initialize: function(){
    this.listenTo(photos, 'add', function(photo){
      new ThumbnailView({model: photo})
    })
    // .listenTo is binded to models and collections
    this.listenTo(this.model, 'change', this.render);

    $('.detail-container').append(this.el);
    this.render();
  },

  // This is the render function. The renderedTemplate becomes a template
  render: function(){

    var renderedTemplate = this.template(this.model.attributes);
    this.$el.html(renderedTemplate)
    return this;
  },

  //This will update the model when the save-button is clicked
  updateModel: function(){

    var that = this;

    this.model.set({
      url:      this.$el.find('.url-input').val(),
      caption:  this.$el.find('.caption-input').val()
    });

    photos.add(this.model)

    this.model.save().done(function(){
      that.$el.find('.status').html('Saved!')
    })
  },

  // this will create photo with the new button
  createPhoto: function(){

    var photoInstance = new Photo();

    this.model = photoInstance

    this.$el.find('input').val('');
    this.$el.find('img').attr('src',' http://placehold.it/350x400');

  }
})