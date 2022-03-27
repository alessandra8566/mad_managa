<template>
  <div class="video_container">
    <video-bg :sources="['/video/meteorite.mp4']" v-if="!ismobile">
      <div class="container ptb--120 flex jcc aic fdc height100">
        <sub-title title="Story" />
        <a-row type="flex" class="pt--40 flex jcc aic story">
          <a-col :sm="24" :lg="16" class="white">
            <p>A massive black hole of unknown origin suddenly appeared at the edge of the solar system and seemed to
              attract only and all manga-related energy available on Earth.
            </p>
            <p>Unbearable anxiety arose as familiar manga characters and stories were transformed into splendid aurora
              rays
              devoured by the black hole.
            </p>
            <p>Wait. What...is...THAT?! </p>
            <p>The energy, on its way to the black hole, was captured by a flaming planet, followed by FOMO stones
              emerging
              from the surface of the star one after another.
            </p>
            <p>Is it the birth of an evil conspiracy? Or a new adventure about to unfold?</p>
          </a-col>
        </a-row>
      </div>
    </video-bg>
    <div v-else class="story_bg height100 width100">
      <div class="container ptb--120 flex jcc aic fdc height100">
        <sub-title title="Story" />
        <a-row type="flex" class="pt--40 flex jcc aic story">
          <a-col :sm="24" :lg="16" class="white">
            <p>A massive black hole of unknown origin suddenly appeared at the edge of the solar system and seemed to
              attract only and all manga-related energy available on Earth.
            </p>
            <p>Unbearable anxiety arose as familiar manga characters and stories were transformed into splendid aurora
              rays
              devoured by the black hole.
            </p>
            <p>Wait. What...is...THAT?! </p>
            <p>The energy, on its way to the black hole, was captured by a flaming planet, followed by FOMO stones
              emerging
              from the surface of the star one after another.
            </p>
            <p>Is it the birth of an evil conspiracy? Or a new adventure about to unfold?</p>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
  import videojs from 'video.js'
  import VideoBg from 'vue-videobg'
  import SubTitle from '../common/subtitle.vue'
  import {
    mapState
  } from 'vuex'
  export default {
    name: "videoPlayer",
    components: {
      SubTitle,
      VideoBg
    },
    data() {
      return {
        player: null,
        ismobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      }
    },
    computed: {
      ...mapState('home', ['currentScrollTop'])

    },
    mounted() {

    },
    watch: {
      currentScrollTop(newVal) {
        const elementOffset = $('#Story').offset();
        if (newVal > (elementOffset.top - 500)) $('.story').addClass('story_show')
        else $('.story').removeClass('story_show')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .video_container {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 100vh;
    z-index: 0;


    &:before {
      content: "";
      width: 100%;
      height: 120px;
      position: absolute;
      background: linear-gradient(180deg, rgba(0, 0, 0, 1)0%, rgba(0, 0, 0, 0)100%);
      background: -moz-linear-gradient(180deg, rgba(0, 0, 0, 1)0%, rgba(0, 0, 0, 0)100%);
      background: -webkit-linear-gradient(180deg, rgba(0, 0, 0, 1)0%, rgba(0, 0, 0, 0)100%);
      background: -o-linear-gradient(180deg, rgba(0, 0, 0, 1)0%, rgba(0, 0, 0, 0)100%);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &::after {
      content: "";
      width: 100%;
      height: 120px;
      position: absolute;
      background: linear-gradient(0deg, rgba(0, 0, 0, 1)0%, rgba(0, 0, 0, 0)100%);
      background: -moz-linear-gradient(0deg, rgba(0, 0, 0, 1)0%, rgba(0, 0, 0, 0)100%);
      background: -webkit-linear-gradient(0deg, rgba(0, 0, 0, 1)0%, rgba(0, 0, 0, 0)100%);
      background: -o-linear-gradient(0deg, rgba(0, 0, 0, 1)0%, rgba(0, 0, 0, 0)100%);
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

  }

  .story {
    opacity: 0;
  }

  .story_bg {
    background-image: url("/images/mad_mange/02story_background_pad.jpg");
  }

  .story_show {
    animation: story-p 2s linear forwards;

  }

  @media #{$sm-layout} {
    .story {
      opacity: 1;
    }
  }

  @media #{$large-mobile} {
    .story {
      text-align: center;
    }
  }


  @keyframes story-p {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>