var vm = new Vue({
  el: '#app',
  data: {
    aboutBox: false,
    contactBox: false
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
    }

  },
  mounted: function() {

    document.getElementById('fadeIn').velocity({opacity:0}, 1000).velocity({display:'none'},0);
  }
});
