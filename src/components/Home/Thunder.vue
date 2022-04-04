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
                  <p class="font-regular p_1">mojo</p>
                  <p class="font-regular p_2">mojo</p>
                  <p class="font-regular p_3" style="font-size: 16px !important;opacity: .4 !important;">catalyst</p>
                  <p class="font-regular p_4">mojo</p>
                  <p class="font-regular p_5">mojo</p>
                </div>
                <div class="p_container_right flex jcc aic fdc">
                  <p class="font-regular p_6">mojo</p>
                  <p class="font-regular p_7">mojo</p>
                  <p class="font-regular p_8">mojo</p>
                  <p class="font-regular p_9" style="font-size: 16px !important;opacity: .4 !important;">catalyst</p>
                  <p class="font-regular p_10">mojo</p>
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
          <!-- <div class="think flex jcc aic fdc">
            <span class="block"></span>
            <span class="block"></span>
            <span class="block"></span>
            <span class="block"></span>
            <span class="block"></span>
          </div> -->
          <div class="bubbles">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b2" />
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b5" />
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble" />
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b6" />
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b3" />
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b7" />
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b4" />
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b8" />
          </div>
        </div>
        <div class="thunder_container zid_5 por" style="">
          <div class="container">
            <div class="fomo_hiro_img_container por width100 flex jcc aic">
              <img src="/images/mad_mange/fomo-hiro-cut.png" class="zid_2 por fomo_hiro_img" alt="">

              <div class="circle"></div>
            </div>
          </div>
          <div class="fomo_hiro_marquee" style="width: 200%;">
            <Marquee move-to="left" class="zid_1">
              <h1 class="white font-regular marquee_font">FOMO HERO FOMO HERO FOMO HERO FOMO HERO FOMO HERO FOMO
                HERO FOMO HERO FOMO HERO FOMO HERO FOMO HERO FOMO HERO FOMO
                HERO FOMO HERO FOMO HERO FOMO HERO FOMO HERO FOMO HERO FOMO
                HERO FOMO HERO FOMO HERO FOMO HERO FOMO HERO FOMO HERO FOMO
                HERO </h1>
            </Marquee>
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
  $colors: #fff,
  #DAAAF9,
  #2EA6DF;

  @mixin p-move($myAnimate) {
    color: nth($colors, random(length($colors)));
    white-space: nowrap;
    font-size: #{$fontSizeMin + floor(random(($fontSizeMax - $fontSizeMin) + 1))}px !important;
    opacity: random($OpacityStart) / 100;
    animation: $myAnimate $animateDuration linear #{(random($animateDelay) / 100) + s} infinite;
    visibility: hidden;
  }

  @keyframes move-right {
    from {
      visibility: inherit;
      transform: translateX(0);
    }

    to {
      visibility: inherit;
      transform: translateX(300px);
      opacity: 0;
    }
  }

  @keyframes move-left {
    from {
      visibility: inherit;
      transform: translateX(0);
    }

    to {
      visibility: inherit;
      transform: translateX(-300px);
      opacity: 0;
    }
  }



  @keyframes medium-bubble {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 0;
    }

    5% {
      transform: translate3d(4px, -20px, 0);
      opacity: 1;
    }

    10% {
      transform: translate3d(2px, -40px, 0) rotate(10deg);
    }

    20% {
      transform: translate3d(7px, -80px, 0) rotate(14deg) scale(0.7);
    }

    30% {
      transform: translate3d(5px, -120px, 0) rotate(15deg);
    }

    40% {
      transform: translate3d(1px, -160px, 0) rotate(20deg);
    }

    50% {
      transform: translate3d(2px, -200px, 0) rotate(18deg) scale(1.1);
    }

    60% {
      transform: translate3d(-3px, -240px, 0) rotate(22deg);
      opacity: 0.4;
    }

    100% {
      transform: translate3d(0, -400px, 0);
      opacity: 0;
    }
  }

  @keyframes short-bubble {
    0% {
      transform: translate3d(5px, 0, 0);
      opacity: 0;
    }

    13% {
      transform: translate3d(2px, -20px, 0);
      opacity: 1;
    }

    20% {
      transform: translate3d(5px, -40px, 0) scale(1.2);
    }

    30% {
      transform: translate3d(0px, -60px, 0);
    }

    40% {
      transform: translate3d(8px, -80px, 0);
    }

    50% {
      transform: translate3d(3px, -100px, 0);
    }

    60% {
      transform: translate3d(8px, -120px, 0);
    }

    70% {
      opacity: 0.4;
    }

    80%,
    100% {
      transform: translate3d(0, -200px, 0);
      opacity: 0;
    }
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


  .think_container {
    position: relative;
    height: 200px;
  }

  .bubbles {
    width: 80px;
    // position: relative;
    // height: 200px;
    padding-left: 20px;
    position: absolute;
    bottom: 0;
    // margin-left: -90px;
    left: 50%;
    transform: translate(-50%, 50%);
    // transform: translateY(50%);
    display: inline-block;
  }

  .bubble {
    -webkit-animation: short-bubble 1500ms linear infinite;
    animation: short-bubble 1500ms linear infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    height: 20px;
    width: 20px;
    border: 1px solid rgba(240, 240, 240, 0.5);
    border-radius: 50%;
  }

  .b2 {
    -webkit-animation: medium-bubble 5000ms linear infinite;
    animation: medium-bubble 5000ms linear infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    margin-left: -7px;
    margin-top: 25px;
    height: 13px;
    width: 12px;
  }

  .b3 {
    -webkit-animation-duration: 3500ms;
    animation-duration: 3500ms;
    margin-left: -5px;
    margin-bottom: 10px;
  }

  .b4 {
    -webkit-animation-duration: 2000ms;
    animation-duration: 2000ms;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    margin: 0 0 40px -9px;
    height: 7px;
    width: 6px;
  }

  .b5 {
    -webkit-animation: medium-bubble 3000ms linear infinite;
    animation: medium-bubble 3000ms linear infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    margin-left: -1px;
    margin-top: 100px;
    height: 5px;
    width: 4px;
  }

  .b6 {
    -webkit-animation-duration: 3000ms;
    animation-duration: 3000ms;
    margin-left: -8px;
    margin-bottom: 50px;
  }

  .b7 {
    -webkit-animation-duration: 6000ms;
    animation-duration: 6000ms;
    margin-left: -3px;
    margin-bottom: 50px;
    height: 7px;
    width: 6px;
  }

  .b8 {
    -webkit-animation: medium-bubble 2000ms linear infinite;
    -webkit-animation-fill-mode: forwards;
    animation: medium-bubble 2000ms linear infinite;
    animation-fill-mode: forwards;
    margin-left: -13px;
    margin-bottom: 30px;
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