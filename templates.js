var templates = {};
templates.movieDisplay = [
  "<img style='' src='<%= Poster %>'>",
  "<h3><%= Title %></h3>",
  "<h3><%= Year %></h3>",
  "<button class='btn btn-danger delete'>delete</button>",
  "<button class='btn btn-warning showEdit'>Edit</button>",
  "<div class='editSection'>",
    '<div class="form-group">',
  "<input class='form-control editTitle' type='text' value='<%= Title %>'>",
  "</div>",
    '<div class="form-group">',
  "<input class='form-control editPoster' type='text' value='<%= Poster %>'>",
    '<div class="form-group">',
  "<input class='form-control editYear' type='text' value='<%= Year %>'>",
  "</div>",
  "<button class='editMovie'>Edit Movie</button>",
  "</div>"

].join('');

templates.addMovie = [
  '<form class="">',
    '<div class="form-group">',
      '<label for="Title">Title</label>',
    '<input class="form-control" type="text" name="title" placeholder="Title" value="">',
    '<div class="form-group">',
      '<label for="poster">Poster</label>',
      '<input class="form-control" type="text" name="poster" placeholder="Poster Image URL" value="">',
    '</div>',
    '<div class="form-group">',
      '<label for="year">Year</label>',
      '<input class="form-control" type="text" name="year" placeholder="Year" value="">',
    '</div>',
      '<button class="btn btn-success" type="submit" name="Submit">Add Movie</button>',
  '</form>'
].join('');
