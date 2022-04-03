<template>
  <div>
    <!-- <full-page :options="fullpageOption" id="fullpage" ref="fullpage"> -->
    <div class="por">
      <Home id="Home" class="parallax-sticky-start" :style="`--sticky-height: 100vh`" />
      <!-- <Counter id="Counter" class="parallax-sticky-start" :style="`--sticky-height: 100vh`" /> -->
      <Madmanga id="Madmanga" :start="videostatus" />
    </div>
    <Story id="Story" class="" />
    <!-- </full-page> -->
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
  import Counter from '@/components/Home/Counter'
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
      WhoWeAre,
      Counter
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
          if (!_this.videostatus) _this.videostatus = offsetTop >= _this.offsetTops.Madmanga ? true : false
        };
      },
      resize() {
        const _this = this
        window.onresize = () => {
          _this.$store.dispatch('home/updateCurrentWidth', window.innerWidth)
        }
      }
    },
    computed: {
      ...mapState('home', ['currentScrollTop', 'offsetTops', 'fullpageElement'])
    },
    mounted() {
      this.scroll()
      this.resize()
      this.$store.dispatch('home/updateOffsetTops', this.getTop())
    }
  }
</script>