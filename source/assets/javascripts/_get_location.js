//= require 'moment/moment.js'
//= require 'firebase/firebase-app'
//= require 'firebase/firebase-database'
//= require './_firebase_config'
//= require 'jsrender/jsrender.js'

(function(){
  var database = firebase.database();
  var tmpl = $.templates("#spotted");
  var $insertionPoint = $('#location');

  // Realtime updates when /location in the db changes
  firebase.database().ref('/location').on('value', function(snapshot) {
    var data = snapshot.val();

    // Replace unix timestamp with time ago
    $.map(data, function(val, i){
      if (i === 'updated_at') {
        data[i] = moment.unix(val).fromNow();
      }
    });

    // Fill the js template and insert it
    var html = tmpl.render(data); 
    $insertionPoint.html(html);
  });

})();