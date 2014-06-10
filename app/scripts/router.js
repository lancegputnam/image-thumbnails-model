"use strict";
 
var AppRouter = Backbone.Router.extend({
 
  routes: {
    ""                              : "renderHome",
    "favorites"                     : "renderUserFavorites",
    // "users/:username"           : "renderUser",
    // "users/:username/favorites" : "renderUserFavorites"
  },
 
  initialize: function () {
    console.log('AppRouter was just created!')
 
    // instantiate the nav view
  },
 
  // this function is showing the number of items in the collection by putting showPhotos.length in the console
  renderHome: function () {
    var photo = showPhotos.get(id);
    console.log(showPhotos.length, ' is the number of photos in the collection')

    var detailPhoto = new DetailView({model: photo});  },
 

  renderUserFavorites: function () {
    $('.top-container').html('Here are my favorites!');
  },
 
})


