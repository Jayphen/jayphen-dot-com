//= require 'firebase/firebase-app'
//= require 'firebase/firebase-database'
//= require './_firebase_config'
//= require 'jsrender/jsrender.js'

(function(){
  var database = firebase.database();
  var tmpl = $.templates("#status");
  var $insertionPoint = $('#status-check');

  // Realtime updates when /status in the db changes
  firebase.database().ref('/status').on('value', function(snapshot) {
    var data = snapshot.val();

    // Fill the js template and insert it
    var html = tmpl.render(data); 
    $insertionPoint.html(html);
  });
})();