// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // Extends Songs, sets model to SongModel

  initialize: function(){
    // Listening for only one song in songQueue to trigger autoplay
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    // Listen for 'dequeue' on any song in songQueue, and dequeue from songQueue
    this.on('ended', function(song){
      this.shift();
      if(this.length){
        this.playFirst();
      }
    }, this);

     this.on('dequeue', function(song){
      this.shift();
      if(this.length){
        this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    if(this.length){
      this.at(0).play();
    }
  }

});