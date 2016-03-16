var ListView = Backbone.View.extend({
  collection: null,
  el: '.main',
  initialize: function () {
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll)
  },
  addAll: function () {
    $('.main').html('');
    _.each(this.collection.models, this.addOne, this)
  },
  addOne: function (el) {
    var modelView = new MovieView({model: el});
    console.log("THIS", this);
    console.log("EL", el);
    this.$el.append(modelView.render().el);
  }
});

var MovieView = Backbone.View.extend({
  model: null,
  tagName: 'article',
  template: _.template(templates.movieDisplay),
  events: {
    'click .delete': 'removeMovie',
    'click .showEdit': 'toggleEdit',
    'click .editMovie': 'editMovie'
  },
  initialize: function () {
    this.listenTo(this.model, 'change', this.render)
  },
  removeMovie: function () {
    this.model.destroy();
  },
  toggleEdit: function () {
    this.$el.find('.editSection').toggleClass('editing')
  },
  editMovie: function(event) {
    console.log("EDIT MOVIE CLICK");
    event.preventDefault();
    this.model.set({
      Title: this.$el.find('.editTitle').val(),
      Poster: this.$el.find('.editPoster').val(),
      Year: this.$el.find('.editYear').val()
    });
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});

var FormView = Backbone.View.extend({
  collection: null,
  model: null,
  template: _.template(templates.addMovie),
  events: {
    'submit form': 'addMovie'
  },
  initialize: function () {
    if(!this.model) {
      this.model = new MovieModel({})
    }
  },
  addMovie: function (event) {
    event.preventDefault();
    this.model.set({
      Title: this.$el.find('input[name="title"]').val(),
      Poster: this.$el.find('input[name="poster"]').val(),
      Year: this.$el.find('input[name="year"]').val()
    });
    this.$el.find('input').val('');
    this.collection.add(this.model);
    this.model = new MovieModel({})

  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup)
    return this;
  }
})
