<template>
  <grid3d :options="gridOption">
    <div class="container" style="overflow: initial">
      <a-row style="z-index: 10;" type="flex" class="ais jcc">
        <a-col :lg="12" :md="24" class="">
          <div class="width100 flex jcc aic">
            <img src="/images/logo/LOGO.svg" class="width100 logo_img">
          </div>
          <div class="text-center home_text_container">
            <h3 class="white mar_0">The Largest</h3>
            <h2 class="white mar_0 font-regular neon-blue zid_1">MANGA-CREATIONS</h2>
            <h1 class="white mar_0 font-regular neon-red zid_0">METAVERSE</h1>
            <h4 class="white mar_0" :style="`letter-spacing: ${ismobile ? 0 : 1}px`">Let Your Imagination Roam Free.
            </h4>
          </div>
        </a-col>
        <a-col :lg="12" :md="24" class="flex jcfs aic eggs_container_pd">
          <div class="eggs_container flex jcfs">
            <div class="eggs egg_zoro">
              <img src="/images/mad_mange/eggs/home/h-01.png" class="eggs" alt="">
            </div>
            <div class="eggs egg_blackbread">
              <img src="/images/mad_mange/eggs/home/h-02.png" class="eggs" alt="">
            </div>
            <div class="eggs egg_andrea">
              <img src="/images/mad_mange/eggs/home/h-03.png" class="eggs" alt="">
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </grid3d>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  import grid3d from '../../components/common/grid3d.vue'
  import mixins from '../../mixin'
  export default {
    name: "Home",
    mixins: [mixins.global],
    components: {
      grid3d
    },
    data() {
      return {
        gridOption: {
          top: false,
          bottom: false,
          bgImg: true,
          bottomAnimation: false,
          color: 'deepblue', // purple | blue | deepblue | white
          fill: true,
          stars: false,
          shootingStars: false
        },
        isScrolling: false,
        ismobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      };
    },
    methods: {

    },
    computed: {
      ...mapState('home', ['currentScrollTop', 'offsetTops'])
    },
    mounted() {},
    watch: {}
  };
</script>

<style lang="scss" scoped>
  // #Home {
  //   min-height: 100vh;
  // }


  .eggs_container_pd {
    // padding: 210px 0;
    position: relative;

    .eggs_container {
      // position: absolute;
      // bottom: 10%;
    }
  }

  .logo_img {
    padding-left: 25px;
    max-width: 450px;
  }

  .home_text_container {
    h2 {
      letter-spacing: 2px;
    }

    h4 {
      font-weight: 900;
      letter-spacing: 1px;
    }
  }

  .eggs {
    transform: scale(1.6);

    &.egg_zoro {
      transform: translateX(0px);
      animation: swing-up-down-zoro 3s linear infinite;

    }

    &.egg_blackbread {
      transform: translateX(-20px);
      animation: swing-up-down-blackbread 5s linear infinite;

    }

    &.egg_andrea {
      transform: translateX(-40px);
      animation: swing-up-down-andrea 4s linear infinite;

    }
  }

  @keyframes swing-up-down-zoro {
    0% {
      transform: translate(0px, 0);
    }

    25% {
      transform: translate(0px, 10px);
    }

    50% {
      transform: translate(0px, 0px);
    }

    75% {
      transform: translate(0px, -10px);
    }

    100% {
      transform: translate(0px, 0px);
    }
  }

  @keyframes swing-up-down-blackbread {
    0% {
      transform: translate(-20px, 0);
    }

    25% {
      transform: translate(-20px, 10px);
    }

    50% {
      transform: translate(-20px, 0px);
    }

    75% {
      transform: translate(-20px, -10px);
    }

    100% {
      transform: translate(-20px, 0px);
    }
  }

  @keyframes swing-up-down-andrea {
    0% {
      transform: translate(-40px, 0);
    }

    25% {
      transform: translate(-40px, 10px);
    }

    50% {
      transform: translate(-40px, 0px);
    }

    75% {
      transform: translate(-40px, -10px);
    }

    100% {
      transform: translate(-40px, 0px);
    }
  }

  @keyframes swing-up-down-zoro-md {
    0% {
      transform: translate(40%, 10px) rotate(-25deg);
    }

    25% {
      transform: translate(40%, 20px) rotate(-25deg);
    }

    50% {
      transform: translate(40%, 10px) rotate(-25deg);
    }

    75% {
      transform: translate(40%, 0px) rotate(-25deg);
    }

    100% {
      transform: translate(40%, 10px) rotate(-25deg);
    }
  }

  @keyframes swing-up-down-blackbread-md {
    0% {
      transform: translate(0%, -50px);
    }

    25% {
      transform: translate(0%, -60px);
    }

    50% {
      transform: translate(0%, -50px);
    }

    75% {
      transform: translate(0%, -40px);
    }

    100% {
      transform: translate(0%, -50px);
    }
  }

  @keyframes swing-up-down-andrea-md {
    0% {
      transform: translate(-40%, 0) rotate(25deg);
    }

    25% {
      transform: translate(-40%, 10px) rotate(25deg);
    }

    50% {
      transform: translate(-40%, 0px) rotate(25deg);
    }

    75% {
      transform: translate(-40%, -10px) rotate(25deg);
    }

    100% {
      transform: translate(-40%, 0px) rotate(25deg);
    }
  }

  @media #{$lg-layout} {}

  @media #{$md-layout} {
    .eggs_container_pd {
      padding: 60px 0 40px;

      .eggs_container {
        bottom: 0;
      }
    }

    .eggs {
      transform: scale(1.3);

      &.egg_zoro {
        transform: translateX(40%);
        animation: swing-up-down-zoro-md 3s linear infinite;

      }

      &.egg_blackbread {
        transform: translateX(0%);
        animation: swing-up-down-blackbread-md 5s linear infinite;
        z-index: 2;

      }

      &.egg_andrea {
        transform: translateX(-40%);
        animation: swing-up-down-andrea-md 4s linear infinite;

      }
    }

    .home_text_container {
      h2 {
        letter-spacing: 0px !important;
        font-weight: 400 !important;
      }

      h3 {
        font-size: 20px !important;
      }

      h4 {
        font-weight: 900 !important;
        font-size: 15px !important;
      }
    }

    .logo_img {
      padding-left: 0;
      max-width: 330px;
    }
  }

  @media #{$sm-layout} {
    .eggs_container_pd {
      // padding: 105px 0;
      padding: 60px 0 40px;

    }

    .home_text_container {
      h1 {
        letter-spacing: 5px;
      }
    }


    .logo_img {
      max-width: 300px;
    }
  }

  @media #{$large-mobile} {
    .eggs_container_pd {
      padding: 60px 0;

      .eggs {
        transform: scale(1.3);

      }

    }

    .logo_img {
      max-width: 280px;
    }
  }

  @media #{$small-mobile} {
    .eggs_container_pd {
      padding: 80px 0 60px;

      .eggs {
        &:nth-child(1) img {
          transform: translateX(-30px) scale(1.8) !important;
        }

        &:nth-child(2) img {
          transform: translateX(0px) scale(1.8) !important;
        }

        &:nth-child(3) img {
          transform: translateX(30px) scale(1.8) !important;
        }
      }
    }

  }
</style>