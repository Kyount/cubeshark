var widget;
var mobileInterval;
var trackList = [
  {
    showDesc: false,
    track: 'grace',
    title: 'Grace',
    image: '/img/SevenYears.jpg',
    cat: 'Music',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  },
  {
    showDesc: false,
    track: 'silence-thumping',
    title: 'Silence Thumping',
    image: '/img/SevenYears.jpg',
    cat: 'Music',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  },
  {
    showDesc: false,
    track: 'the-journey',
    title: 'The Journey',
    image: '/img/SevenYears.jpg',
    cat: 'Music',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  },
  {
    showDesc: false,
    track: 'the-seventh-year',
    title: 'The Seventh Year',
    image: '/img/SevenYears.jpg',
    cat: 'Music',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  },
  {
    showDesc: false,
    track: 'mouthwash',
    title: 'Mouthwash',
    image: '/img/RoughDrafts.jpg',
    cat: 'Music',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  },
  {
    showDesc: false,
    track: 'chaos-control',
    title: 'Chaos Control',
    image: '/img/RoughDrafts.jpg',
    cat: 'Music',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  },
  {
    showDesc: false,
    track: 'exterminator-final',
    title: 'Exterminator Project',
    image: null,
    cat: 'Video Game',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  },
  {
    showDesc: false,
    track: 'maintitle-intro',
    title: 'Dr. Max: Maintitle',
    image: null,
    cat: 'Soundtrack',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  },
  {
    showDesc: false,
    track: 'oceana-intro',
    title: 'Oceana: Studio Logo',
    image: null,
    cat: 'Soundtrack',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  },
  {
    showDesc: false,
    track: 'startup-promo',
    title: 'Sony Crackle: Startup',
    image: null,
    cat: 'Soundtrack',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  },
  {
    showDesc: false,
    track: 'otto-motors-promo',
    title: 'Otto Motors',
    image: null,
    cat: 'Soundtrack',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  },
  {
    showDesc: false,
    track: 'creation-destruction',
    title: 'Creation Destruction',
    image: null,
    cat: 'Soundtrack',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac malesuada ipsum, eget ullamcorper ex. Quisque scelerisque, dolor vel scelerisque molestie, enim eros finibus nunc, quis porta lorem ipsum sit amet turpis. Morbi aliquam sem a pharetra convallis. Sed commodo varius blandit. Aenean maximus libero ut lacus ultricies bibendum. In fermentum porttitor mattis.'
  }
];

var vm = new Vue({
  el: '#app',
  data: {
    aboutBox: false,
    contactBox: false,
    playing: false,
    firstStart: false,
    tracks: trackList
  },
  computed: {
    isMobileDevice: function() {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }
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
      if (!widget.isPaused() || this.isMobileDevice) {
          widget.play();
      }
      this.firstStart = true;
      document.querySelector('#custompause svg').classList.add('fa-pause');
      document.querySelector('#custompause svg').classList.remove('fa-play');
    },
    togglePlaying: function() {
      clearInterval(mobileInterval);
      this.firstStart = true;
      widget.toggle();
      this.playing = !this.playing;
      document.querySelector('#custompause svg').classList.toggle('fa-pause');
      document.querySelector('#custompause svg').classList.toggle('fa-play');
    },
    loadTrack: function(track, index) {
      document.getElementById('custompause').classList.remove('hidden');
      //Soundcloud doesn't allow autoplay on mobile... time for desperate measures
      if (this.isMobileDevice) {
        console.log('detected mobile');
        clearInterval(mobileInterval);
        mobileInterval = setInterval(function() {
          vm.justPlay();
        }, 500);
      } else {
        widget.bind('SC.Widget.Events["PLAY"]', this.justPlay());
      }
      widget.load(track + this.tracks[index].track + "&color=%238acd94&auto_play=true&inverse=false");
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
