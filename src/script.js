var widget;

var vm = new Vue({
  el: '#app',
  data: {
    aboutBox: false,
    contactBox: false,
    playing: false,
    firstStart: false,
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
    loadTrack: function(track) {
      document.getElementById('custompause').classList.remove('hidden');
      widget.bind('SC.Widget.Event[PLAY]', this.justPlay());
      widget.load(track + "&color=%238ACD94&auto_play=true&inverse=true");
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
