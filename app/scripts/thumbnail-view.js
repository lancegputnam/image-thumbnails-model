"use strict";

var ThumbnailView = Backbone.View.extend({

  className: 'thumbnail',

  template: _.template($('.thumbnail-images').text()),

  events: {
    "click" : "showDetailView",
  },

  initialize: function() {

    this.listenTo(this.model, 'change', this.render);

    // this thumbnail container is from the HTML. 
    $('.thumbnail-container').append(this.el);
    this.render();
  },

  render: function() {
    var renderTemp = this.template(this.model.attributes);
    this.$el.html(renderTemp);
    return this;
  },

  showDetailView: function() {

    //detailPhoto is from the detailPhoto variable in main.js
    detailPhoto.remove();
    detailPhoto = new DetailView({model: this.model});
  },
});

// "use strict";

// // This is a constructor and the view is how we display our views in different ways
// var ThumbnailView = Backbone.View.extend({
//   // className designates a class
//   className: 'thumbnail',
//   // This script is linking to the script tag in html 
//   template: _.template($('.thumbnail-template').text()),
//   // we are binding the event here. click goes to showDetailView
//   events: {
//     // This event click is referencing a fuction. saying once clicked run the function 
//     // when you click this button we want it to show the detail view section
//     "click" : "showDetailView"
//   },
  
//   // This initialize is appending to the thumbnail-container. it is then being rendered. 
//   initialize: function(){
//     $('.thumbnail-container').append(this.el);
//     this.render()
//   },
 
//   // This is the render function. The renderedTemplate becomes a template
//   render: function(){
//     var renderedTemplate = this.template(this.model.attributes)
//     this.$el.html(renderedTemplate)
//   },
 
//   // this showDetailView is a constructor function existing within the ThumbnailView
//   showDetailView: function(){
//     console.log('should render a new DetailView')
//     detailViewInstance.remove();
//     detailViewInstance = new DetailView({model: this.model})
//   }
// })
