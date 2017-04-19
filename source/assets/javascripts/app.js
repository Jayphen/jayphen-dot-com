//= require 'jquery/dist/jquery.js'
//= require 'jsrender/jsrender.min.js'

var counter = 0,
    counterEl = $('.js-counter');
setInterval(function(){
  ++counter;
  counterEl.text(counter < 300 ? " " + counter + " " : " dickity 3 score ");
}, 1000);

var config = {
    apiKey: "AIzaSyBudjiXVSYk5xbCOcBHiPRte6qhFt9C64w",
    databaseURL: "https://personal-site-2b705.firebaseio.com",
};

var $flag = $('.logoish img');

firebase.initializeApp(config);
var database = firebase.database();
firebase.database().ref('/location').on('value', function(snapshot) {
  var tmpl = $.templates("#myTmpl");
  var data = snapshot.val();
  var html = tmpl.render(data); 
  $("#location").html(html);
});