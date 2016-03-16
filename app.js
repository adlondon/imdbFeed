
$(document).ready(function () {
  var movieCollection = new MovieCollection(movieData);
  new ListView({collection: movieCollection});
  var formMarkup = new FormView({collection: movieCollection});
  $('.create').html(formMarkup.render().el);
});
