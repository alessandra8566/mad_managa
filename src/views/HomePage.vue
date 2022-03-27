<template>
  <div>
    <full-page :options="fullpageOption" id="fullpage" ref="fullpage">
      <Home id="Home" class="section" />
      <Madmanga id="Madmanga" class="section" :start="videostatus" />
      <Story id="Story" class="section" />
    </full-page>
    <Evolution id="Evolution" />
    <Thunder id="Thunder" />
    <!-- <Box /> -->
    <RoadMap id="RoadMap" />
    <QA id="QA" />
    <WhoWeAre id="WhoWeAre" />
  </div>
</template>

<script>
  import Home from '@/components/Home/Home';
  import Story from "@/components/Home/Story"
  import Evolution from "@/components/Home/Evolution"
  import About from "@/components/Home/About";
  import Brand from '@/components/Home/Brand';
  import QA from '@/components/Home/QA';
  import Box from '@/components/Home/Box'
  import Thunder from '@/components/Home/Thunder';
  import Madmanga from '@/components/Home/Madmanga'
  import RoadMap from '@/components/Home/RoadMap'
  import WhoWeAre from '@/components/Home/WhoWeAre'


  import mixins from '../mixin'
  import $ from 'jquery'
  import {
    mapState
  } from 'vuex';
  export default {
    name: 'HomePage',
    mixins: [mixins.global],
    components: {
      Home,
      Story,
      Evolution,
      Thunder,
      About,
      Brand,
      QA,
      Box,
      Madmanga,
      RoadMap,
      WhoWeAre
    },
    data() {
      return {
        videostatus: false,
        fullpageOption: {
          licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
          autoScrolling: true,
          fitToSection: false,
          css3: true,
          scrollBar: true,
          // scrollOverflow: true,
          // onLeave: (oldVal, newVal, direction) => {
          //   // console.log(index, nextIndex, direction)
          //   if (oldVal.index == 2 && direction == 'up') {
          //     this.fullpageElement.api.setAutoScrolling(true)
          //   }
          // },
          afterLoad: (oldVal, newVal) => {
            const _this = this;
            _this.videostatus = newVal.index == 1 ? true : false
            if (newVal.index == 2) this.fullpageElement.api.setAutoScrolling(false)
          }
        },
      }
    },
    methods: {
      scroll() {
        const _this = this
        window.onscroll = () => {
          const offsetTop = document.documentElement.scrollTop
          _this.$store.dispatch('home/updateCurrentScrollTop', offsetTop)
          // _this.$store.dispatch('home/updateOffsetTops', this.getTop())
          if (offsetTop == 0) this.fullpageElement.api.setAutoScrolling(true)

          // const element = $("#Story").offset()
          // console.log(offsetTop)
          // if ((element.top - offsetTop) > 0) {
          //   _this.$refs.fullpage.api.setAutoScrolling(true)
          // }
        };
      },
    },
    computed: {
      ...mapState('home', ['currentScrollTop', 'offsetTops', 'fullpageElement'])
    },
    mounted() {
      this.scroll()
      this.$store.dispatch('home/updateOffsetTops', this.getTop())
      this.$store.dispatch('home/updateFullpageElement', this.$refs.fullpage)
      // console.log(this.$refs.fullpage)
      // console.log(this.$refs.fullpage.options.autoScrolling)
    }
  }
</script>