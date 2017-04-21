//= require 'jquery/dist/jquery.js'
//= require './_dumb_counter'
//= require './_get_location'
//= require './_get_status'

//= require 'instafeed.js/instafeed.js'

var feed = new Instafeed({
  get: 'user',
  userId: '308943',
  limit: 7,
  // resolution: 'low_resolution',
  accessToken: '308943.a96bcb0.71fcf01f0899437caa734c55b4fedeb9',
  template: '<a href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();