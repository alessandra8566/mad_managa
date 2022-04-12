import $ from 'jquery'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    getTop() {
      const offsetTops = {
        Home: $('#Home').offset().top,
        // Counter: $('#Counter').offset().top,
        Madmanga: $('#Madmanga').offset().top,
        Story: $('#Story').offset().top,
        Parallax: $('#Parallax').offset().top,
        Evolution: $('#Evolution').offset().top,
        Thunder: $('#Thunder').offset().top,
        RoadMap: $('#RoadMap').offset().top,
        QA: $('#QA').offset().top,
        WhoWeAre: $('#WhoWeAre').offset().top,
      }
      return offsetTops
    },
    isScrollToFinished(currentScrollTop, targetScrollTop) {
      const checkIfScrollToIsFinished = setInterval(() => {
          if (currentScrollTop === targetScrollTop) {
              // do something
              clearInterval(checkIfScrollToIsFinished);
          }
      }, 25);
    }
  },
  computed: {
    ...mapState('home', ['currentScrollTop', 'offsetTops'])
  },
  mounted() {
    // setTimeout(() => this.loading = false, 3000)
  },
  watch: {
    '$route.path'(){
      // this.loading = true
      // setTimeout(() => this.loading = false, 3000)
    }
  }
}