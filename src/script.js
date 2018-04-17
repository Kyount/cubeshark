var widget;
var mobileInterval;
var trackList = [
  {
    showDesc: false,
    track: 'grace',
    title: 'Grace',
    image: '/img/SevenYears.jpg',
    cat: 'Music',
    desc: 'Released in 2016. Part of the "Seven Years" album. I was inspired by the simple but powerful sound of the Roland 808 Bass and aimed to have it stand out as the driving force behind this song. Another source of inspiration being the Art Of Noise, an early 90\'s electronic band, specifically the song "Moments in Love".'
  },
  {
    showDesc: false,
    track: 'silence-thumping',
    title: 'Silence Thumping',
    image: '/img/SevenYears.jpg',
    cat: 'Music',
    desc: 'Released in 2016. Part of the "Seven Years Album". I wanted to express a victorious and positive mood in the guise of a evolving and surprising composition. Inspirations include IDM/experimental musicians such as The Flashbulb and Wisp (AKA Dwaallicht).'
  },
  {
    showDesc: false,
    track: 'the-journey',
    title: 'The Journey',
    image: '/img/SevenYears.jpg',
    cat: 'Music',
    desc: 'Released in 2018. Part of the "Seven Years Album". Started as my own take on the "Future Bass" genre. The voice sample was taken from a TTS program; it reads aloud Romans 12:2.'
  },
  {
    showDesc: false,
    track: 'the-seventh-year',
    title: 'The Seventh Year',
    image: '/img/SevenYears.jpg',
    cat: 'Music',
    desc: 'Released in 2018. Part of the "Seven Years Album". I wanted to express my optimism for the current year (2018) and provice a nice end to the album as a whole. The title (and the album name as well) is a reference to the number of years that passed since I released my first EP in 2010.'
  },
  {
    showDesc: false,
    track: 'mouthwash',
    title: 'Mouthwash',
    image: '/img/RoughDrafts.jpg',
    cat: 'Music',
    desc: 'Released in 2009. Part of the "Rough Drafts" EP. One of my first experiments with FM synthesis being used to create an evolving texture.'
  },
  {
    showDesc: false,
    track: 'chaos-control',
    title: 'Chaos Control',
    image: '/img/RoughDrafts.jpg',
    cat: 'Music',
    desc: 'Released in 2010. Part of the Rough Drafts EP. The bass line is actually a feedback loop tuned to the key of "A" and modulated with filters and delay.'
  },
  {
    showDesc: false,
    track: 'exterminator-final',
    title: 'Exterminator Project',
    image: null,
    cat: 'Video Game',
    desc: 'Created in 2012. A looping track I made for a friend\'s video game project. The original project included a beginning intro cap to start off the loop in-game.'
  },
  {
    showDesc: false,
    track: 'maintitle-intro',
    title: 'Dr. Max: Maintitle',
    image: null,
    cat: 'Soundtrack',
    desc: 'Created in 2018. I was asked by a client to pitch a song for a television main title intro. Referenced a video while composing to time the song elements in sync with the video.'
  },
  {
    showDesc: false,
    track: 'oceana-intro',
    title: 'Oceana: Studio Logo',
    image: null,
    cat: 'Soundtrack',
    desc: 'Created in 2018. I was asked by a client to pitch a composition for a short studio logo animation. Referenced a video while composing to time the composition in sync with the animation.'
  },
  {
    showDesc: false,
    track: 'startup-promo',
    title: 'Sony Crackle: Startup',
    image: null,
    cat: 'Soundtrack',
    desc: 'Created in 2017. Created for a promo/advertisement for a Sony Crackle original series, "Startup". Referenced a video while composing to time the composition elements in sync with the video.'
  },
  {
    showDesc: false,
    track: 'otto-motors-promo',
    title: 'Otto Motors',
    image: null,
    cat: 'Soundtrack',
    desc: 'Created in 2017. I was asked by a client with short notice to create a composition for a promotional video for a robotics company. I went for a retro vibe with heavy use of legacy instruments.'
  },
  {
    showDesc: false,
    track: 'creation-destruction',
    title: 'Creation Destruction',
    image: null,
    cat: 'Soundtrack',
    desc: 'Created in 2018 for a friend\'s student project. My friend described a rough idea of their video and were planning to edit around my composition, so I was given a lot of creative freedom.'
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
