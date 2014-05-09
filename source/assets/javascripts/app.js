//= require 'jquery/dist/jquery.js'

var counter = 0,
    counterEl = $('.js-counter');
setInterval(function(){
  ++counter;
  if (counter < 300) {
    counterEl.text(" " + counter + " ");
  } else {
    counterEl.text(" dickity 3 score ");
  };
}, 1000)
