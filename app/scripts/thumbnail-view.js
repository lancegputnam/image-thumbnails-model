"use strict";

// This is a constructor and the view is how we display our views in different ways
var ThumbnailView = Backbone.View.extend({
  // className designates a class
  className: 'thumbnail',
  // This script is linking to the script tag in html
  template: _.template($('.thumbnail-images').text()),

  // we are binding the event here. click goes to showDetailView
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
    // This is the render function. The renderedTemplate becomes a template
    var renderTemp = this.template(this.model.attributes);
    this.$el.html(renderTemp);
    return this;
  },

  showDetailView: function() {
    //detailPhoto is from the detailPhoto variable in main.js
    // this showDetailView is a constructor function existing within the ThumbnailView
    detailPhoto.remove();
    detailPhoto = new DetailView({model: this.model});
  },
});
