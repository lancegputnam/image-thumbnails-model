"use strict";
 
var AppRouter = Backbone.Router.extend({
 
  routes: {
    ""                          : "renderHome",
    // "users"                     : "renderUsers",
    "users/:username/favorites" : "renderUserFavorites",
  },
 
  initialize: function () {
    $('.image-input').val('');
    $('.caption-input').val('');
  },
 
  renderHome: function () {
    $('.image-input').val('Insert URL');
    $('.caption-input').val('Add Caption Here');
  },

 
  renderUserFavorites: function (username) {
    $('.url-image').attr('src', 'http://thechive.files.wordpress.com/2014/05/tumblr_n4vu23pi8s1qelyl4o1_500.gif?w=500&h=375)');
  }
 
});


// "use strict";
 
// var AppRouter = Backbone.Router.extend({
 
//   routes: {
//     ""                          : "renderHome",
//     "users"                     : "renderUsers",
//     "users/:username"           : "renderUser",
//     "users/:username/favorites" : "renderUserFavorites"
//   },
 
//   initialize: function () {
//     console.log('AppRouter was just created!')
 
//     // instantiate the nav view
//   },
 
//   renderHome: function () {
//     $('.container').html('Boring home page.');
//   },
 
//   renderUsers: function () {
//     $('.container').html('USERS LIST WOW');
//   },
 
//   renderUser: function (username) {
//     console.log('profile route for', username)
//     $('.container').html('Check out '+ username + '\'s cool profile ');
//     $('.container').append('<a href="/#users/'+username + '/favorites">'+ username +  '\'s favorites </a>');
//   },
 
//   renderUserFavorites: function (username) {
//     console.log('favorites route for', username)
//     $('.container').html('Check out '+ username + '\'s favorites');
//   }
 
// })