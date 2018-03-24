var widget;

var vm = new Vue({
  el: '#app',
  data: {
    aboutBox: false,
    contactBox: false,
    playing: false,
    firstStart: false,
    tracks: [
      {showDesc: false, track: 'grace', title: 'Grace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'},
      {showDesc: false, track: 'mind-song', title: 'Mind Song', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'},
      {showDesc: false, track: 'unused-tv-intro', title: 'Intro Music for Maintitle', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'},
      {showDesc: false, track: 'startup-promo', title: 'Promo Ambiance for TV Spot', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'},
      {showDesc: false, track: 'otto-motors-promo', title: 'Music for Conference Visuals', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'}
    ]
  },
  computed: {

  },
  methods: {
    showAbout: function() {
      this.hideContact();
      this.aboutBox = true;
    },
    hideAbout: function() {
      this.aboutBox = false;
    },
    showContact: function() {
      this.hideAbout();
      this.contactBox = true;
    },
    hideContact: function() {
      this.contactBox = false;
    },
    justPlay: function() {
      this.firstStart = true;
      document.querySelector('#custompause svg').classList.add('fa-pause');
      document.querySelector('#custompause svg').classList.remove('fa-play');
    },
    togglePlaying: function() {
      this.firstStart = true;
      widget.toggle();
      this.playing = !this.playing;
      document.querySelector('#custompause svg').classList.toggle('fa-pause');
      document.querySelector('#custompause svg').classList.toggle('fa-play');
    },
    loadTrack: function(track, index) {
      document.getElementById('custompause').classList.remove('hidden');
      widget.bind('SC.Widget.Event[PLAY]', this.justPlay());
      widget.load(track + this.tracks[index].track + "&color=%2363a088&auto_play=true");
    },
    toggleDescription: function(index, exc) {
      for (var i=0; i<this.tracks.length; i++) {
        if (index == i) {
          if (exc) {
              this.tracks[i].showDesc = true;
          } else {
              this.tracks[i].showDesc = !this.tracks[i].showDesc;
          }
        } else {
          this.tracks[i].showDesc = false;
        }
      }
    }
  },
  mounted: function() {
    document.getElementById('fadeIn')
    .velocity({opacity:0}, {duration: 1000})
    .velocity({display:'none'}, {duration: 0, complete:
      function() {
        document.getElementById("player").style.display = "block";
        widget = SC.Widget(document.getElementById('iframe'));
      }
    });
  }
});
