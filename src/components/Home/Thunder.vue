<template>
  <thunder-bg>
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
          <div class="flex jcc aic por width100 ptb--40 zid_5 think_container">
            <div class="think flex jcc aic fdc">
              <span class="block"></span>
              <span class="block"></span>
              <span class="block"></span>
              <span class="block"></span>
              <span class="block"></span>
            </div>
            <p class="white text-center po_center width100" style="write-space: nowrap;">
              Which FOMO Stone
              combinations will
              you get
            </p>
          </div>
          <div class="fomo_hiro_img_container por">
            <img src="/images/mad_mange/fomo-hiro-cut.png" class="zid_2 por" alt="">
            <div class="fomo_hiro_marquee" style="width: 200%">
              <Marquee move-to="left" style="opacity: .8;" class="zid_1">
                <h1 class="white font-regular marquee_font">
                  what’s It Gonna Be?! what’s It Gonna Be?! what’s It Gonna
                  Be?!
                  what’s It Gonna Be?!
                  what’s It Gonna Be?!what’s It Gonna Be?!</h1>
              </Marquee>
            </div>
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
  </thunder-bg>
</template>

<script>
  import Marquee from '../common/marquee.vue'
  import ThunderBg from '../common/thunderBg.vue'
  import {
    mapState
  } from 'vuex'
  export default {
    components: {
      Marquee,
      ThunderBg
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('home', ['currentScrollTop'])
    },
    methods: {
      keyframe_setup() {

      }
    },
    watch: {
      // currentScrollTop(newVal) {
      //   const elementOffset = $('#Thunder').offset();
      //   if (newVal > elementOffset.top) $('#Thunder').addClass('my_sticky')
      //   else $('#Thunder').removeClass('my_sticky')
      // }
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
    font-size: #{$fontSizeMin + floor(random(($fontSizeMax - $fontSizeMin) + 1))}px;
    opacity: random($OpacityStart) / 100;
    animation: $myAnimate $animateDuration linear #{(random($animateDelay) / 100) + s} infinite;
  }

  .thunder_container {
    // background-color: rgba(#000, .8);
  }

  .fomo_hiro_img_container {

    img {
      max-width: 400px;
    }

    .circle {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50vw;
      height: 50vw;
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
      width: 50px;
      height: 50px;
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
          transform: translate(-30px, -100%);
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

  @media #{$sm-layout} {
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
        width: 100vw;
        height: 100vw;
      }
    }

    .think_container {
      padding: 0;
    }
  }
</style>