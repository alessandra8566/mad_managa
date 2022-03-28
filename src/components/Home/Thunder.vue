<template>
  <div>
    <thunder-bg style="overflow-x: hidden">
      <div class="thunder_container zid_5">
        <div class="container pt--120">
          <div class="barrage_container flex jcc aic fdc">
            <div class="p_img_container white por">
              <div class="white_circle zid_5"></div>
              <img src="/images/mad_mange/p.png" class="p_img por zid_6" alt="">
              <div class="p_container zid_5">
                <div class="p_container_left flex jcc aic fdc">
                  <p class="font-regular p_1">ITEM-NAME</p>
                  <p class="font-regular p_2">CONTENT</p>
                  <p class="font-regular p_3">ITEM-NAME</p>
                  <p class="font-regular p_4">CONTENT</p>
                  <p class="font-regular p_5">FAKE-TEXT</p>
                </div>
                <div class="p_container_right flex jcc aic fdc">
                  <p class="font-regular p_6">ITEM-NAME</p>
                  <p class="font-regular p_7">CONTENT</p>
                  <p class="font-regular p_8">FAKE-TEXT</p>
                  <p class="font-regular p_9">ITEM-NAME</p>
                  <p class="font-regular p_10">FAKE-TEXT</p>
                </div>
              </div>
            </div>
            <h3 class="white text-center zid_1 width100 font-regular ptb--20 mar_0"
              style="font-size: 32px !important; line-height: 40px">
              Which FOMO Stone
              combinations will
              you get
            </h3>

          </div>
        </div>
      </div>
    </thunder-bg>
    <div class="my_parallax" id="Parallax">
      <thunder-bg :style="`overflow-x: hidden; --sticky-height: 100vh`" class="parallax-sticky-start">
        <div class="flex jcc aic por width100 pt--20 zid_5 think_container">
          <div class="think flex jcc aic fdc">
            <span class="block"></span>
            <span class="block"></span>
            <span class="block"></span>
            <span class="block"></span>
            <span class="block"></span>
          </div>
        </div>
        <div class="thunder_container zid_5" style="">
          <div class="container">
            <div class="fomo_hiro_img_container por width100 flex jcc aic">
              <img src="/images/mad_mange/fomo-hiro-cut.png" class="zid_2 por fomo_hiro_img" alt="">
              <div class="fomo_hiro_marquee" style="width: 200%;">
                <Marquee move-to="left" class="zid_1">
                  <h1 class="white font-regular marquee_font">
                    What’s It Gonna Be?! What’s It Gonna Be?! What’s It Gonna
                    Be?!
                    What’s It Gonna Be?!
                    What’s It Gonna Be?!What’s It Gonna Be?! What’s It Gonna Be?! What’s It Gonna Be?! What’s It Gonna
                    Be?!
                    What’s It Gonna Be?!
                    What’s It Gonna Be?!What’s It Gonna Be?! What’s It Gonna Be?! What’s It Gonna Be?! What’s It Gonna
                    Be?!
                    What’s It Gonna Be?!
                    What’s It Gonna Be?!What’s It Gonna Be?!</h1>
                </Marquee>
              </div>
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </thunder-bg>
      <Box class="parallax-sticky" />
    </div>
  </div>
</template>

<script>
  import Marquee from '../common/marquee.vue'
  import ThunderBg from '../common/thunderBg.vue'
  import Box from "../Home/Box.vue"
  import {
    mapState
  } from 'vuex'
  export default {
    components: {
      Marquee,
      ThunderBg,
      Box
    },
    data() {
      return {
        fomo_img_height: 0
      }
    },
    computed: {
      ...mapState('home', ['currentScrollTop', 'offsetTops'])
    },
    methods: {},
    mounted() {
      console.log(document.getElementsByClassName("fomo_hiro_img")[0].height)
      this.fomo_img_height = document.getElementsByClassName("fomo_hiro_img")[0].offsetHeight
    },
    watch: {
      currentScrollTop(newVal) {}
    }
  }
</script>

<style lang="scss">
  $OpacityStart: 80;
  $animate: move-right,
  move-left;
  $animateDuration: 8s;
  $animateDelay: 800;
  $fontSizeMax: 48; // px
  $fontSizeMin: 14; // px


  @keyframes move-right {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(300px);
      opacity: 0;
    }
  }

  @keyframes move-left {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-300px);
      opacity: 0;
    }
  }


  @mixin p-move($myAnimate) {
    color: $white;
    white-space: nowrap;
    font-size: #{$fontSizeMin + floor(random(($fontSizeMax - $fontSizeMin) + 1))}px !important;
    opacity: random($OpacityStart) / 100;
    animation: $myAnimate $animateDuration linear #{(random($animateDelay) / 100) + s} infinite;
  }


  .fomo_hiro_img_container {

    img {
      max-width: 350px;
    }

    .circle {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80vw;
      height: 80vw;
      max-width: 600px;
      max-height: 600px;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      background: rgb(113, 199, 213);
      background: radial-gradient(circle, rgba(113, 199, 213, 0.3981967787114846) 0%, rgba(0, 0, 0, 0) 56%);
      z-index: 1;
    }

  }

  .fomo_hiro_marquee {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .think {
    span {
      width: 40px;
      height: 40px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 100%;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(255, 255, 255, 0.3981967787114846) 0%, rgba(0, 0, 0, 0) 56%);
      }

      &:nth-child(1) {
        &::before {
          width: 50px;
          height: 50px;
          transform: translate(10px, -50%);
        }
      }

      &:nth-child(2) {
        &::before {
          width: 30px;
          height: 30px;
          transform: translate(-40px, -100%);
        }
      }

      &:nth-child(3) {
        &::before {
          width: 40px;
          height: 40px;
        }
      }

      &:nth-child(4) {
        &::before {
          width: 30px;
          height: 30px;
          transform: translate(-5px, -50%);
        }
      }

      &:nth-child(5) {
        &::before {
          width: 10px;
          height: 10px;
        }
      }
    }
  }

  .p_img_container {
    max-width: 300px;
    position: relative;

    .p_container {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;

      .p_container_left {
        @for $i from 1 to 6 {
          p:nth-child(#{$i}) {
            @include p-move(move-left)
          }
        }
      }

      .p_container_right {
        @for $i from 1 to 6 {
          p:nth-child(#{$i}) {
            @include p-move(move-right)
          }
        }
      }
    }

    .p_img {
      max-width: 250px;
    }

    .white_circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120%;
      height: 120%;
      background: rgb(255, 255, 255);
      background: radial-gradient(circle, rgba(255, 255, 255, 0.5382528011204482) 0%, rgba(0, 0, 0, 0) 56%);
      z-index: 0;
    }

  }

  @media #{$large-mobile} {
    .p_img_container {
      .p_img {
        max-width: 200px;
      }
    }

    .fomo_hiro_img_container {
      img {
        max-width: 250px;
      }

      .circle {
        width: 80vw;
        height: 80vw;
      }
    }

    .think_container {
      padding: 0;
    }
  }

  @media #{$md-layout} {
    .fomo_hiro_img_container {
      .circle {
        width: 60vw;
        height: 60vw;
      }
    }
  }
</style>