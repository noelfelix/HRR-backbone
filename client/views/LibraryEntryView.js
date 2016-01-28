// Defines a backbone view class for the entries that will appear within the library views. 
// These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function(){
    console.log(this.model);
    this.model.set('playCount', this.model.get('playCount') || 0);
  },

  tagName: 'tr',

  template: _.template('<td>Plays: <%= playCount %></td><td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play(false);
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

// Adds a table row of Artist and Title to LibraryView table.
// Listens for a click event to trigger play