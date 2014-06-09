"use strict";

var DetailView = Backbone.View.extend({

  className: "detail-view",

  detailTemplate: _.template($('.detail-images').text()),

  events: {
    "click .new-image" : "addImage",
    "click .new-caption" : "addCaption",
  },


  initialize: function() {

  this.listenTo(getPhotos, 'add', function(photo){
      new ThumbnailView({model: photo});
    });

    this.listenTo(this.model, 'change', this.render);

  // this main-container is being pulled from the HTML 
  $('.main-container').prepend(this.el);
  this.render();

  },

  render: function() {
    var renderTemp = this.detailTemplate(this.model.attributes);
    this.$el.html(renderTemp);
    return this;
  },

  addCaption: function() {
    this.model.set({
      caption: this.$el.find('.caption-input').val(),
    });

    getPhotos.add(this.model);

    this.model.save().done(function() {
      this.$el.find('.status').html('Saved!');
    });

  },

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

// "use strict";

// var ThumbnailView = Backbone.View.extend({

//   className: 'thumbnail',

//   template: _.template($('.thumbnail-image').text()),

//   events: {
//     "click" : "showDetailView",
//   },

//   initialize: function() {

//     this.listenTo(this.model, 'change', this.render);


//     $('.container').append(this.el);
//     this.render();
//   },

//   render: function() {
//     var renderTemp = this.template(this.model.attributes)
//     this.$el.html(renderTemp);
//     return this;
//   },

//   showDetailView: function() {

//     detailPic.remove();
//     detailPic = new DetailView({model: this.model})
//   },

// })

// "use strict";

// // DetailView works like the thumbnailview 
// //// This is a constructor and the view is how we display our views in different ways
// var DetailView = Backbone.View.extend({
//   // className designates a class
//   className: 'detail-view',
//   // This script is linking to the script tag in html 
//   template: _.template($('.detail-view-template').text()),
//   // This event click is referencing a fuction. saying once clicked run the function 
//   // click the save button and it updates the model
//   // click to the new button and it adds the photo to the gallery
//   events: {
//     "click .save-button": "updateModel",
//     "click .new-button": "createPhoto"
//   },

//   // This initialize is appending to the detail-container. it is then being rendered. 
//   initialize: function(){
//     this.listenTo(photo, 'add', function(photo){
//       new ThumbnailView({model: photo})
//     })
//     // .listenTo is binded to models and collections
//     this.listenTo(this.model, 'change', this.render);

//     $('.detail-container').append(this.el);
//     this.render();
//   },

//   // This is the render function. The renderedTemplate becomes a template
//   render: function(){

//     var renderedTemplate = this.template(this.model.attributes);
//     this.$el.html(renderedTemplate)
//     return this;
//   },

//   //This will update the model when the save-button is clicked
//   updateModel: function(){

//     var that = this;

//     this.model.set({
//       url:      this.$el.find('.url-input').val(),
//       caption:  this.$el.find('.caption-input').val()
//     });

//     photos.add(this.model)

//     this.model.save().done(function(){
//       that.$el.find('.status').html('Saved!')
//     })
//   },

//   // this will create photo with the new button
//   createPhoto: function(){

//     var photoInstance = new Photo();

//     this.model = photoInstance

//     this.$el.find('input').val('');
//     this.$el.find('img').attr('src',' http://placehold.it/350x400');

//   }
// })