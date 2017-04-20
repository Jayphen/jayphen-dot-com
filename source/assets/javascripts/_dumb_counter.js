// A second counter for… some reason
var counter = 0,
    counterEl = $('.js-counter');

setInterval(function(){
  ++counter;
  counterEl.text(counter < 300 ? " " + counter + " " : " dickity 3 score ");
}, 1000);