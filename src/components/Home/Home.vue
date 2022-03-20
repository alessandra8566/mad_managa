<template>
  <grid3d :options="gridOption">
    <div class="container">
      <a-row style="z-index: 10;" class="">
        <a-col :lg="12" :md="24" class="">
          <div class="width100 flex jcc aic">
            <img src="/images/logo/LOGO.svg" class="width100 logo_img">
          </div>
          <div class="text-center">
            <h3 class="white mar_0">THE LARGEST</h3>
            <h2 class="white mar_0 font-regular neon-blue zid_1">MANAGA-CREATIONS</h2>
            <h1 class="white mar_0 font-regular neon-red zid_0">METAVERSE</h1>
            <h4 class="white mar_0">Let your imageination roam free.</h4>
          </div>
        </a-col>
        <a-col :lg="12" :md="24" class="height100 flex jcfs eggs_container_pd">
          <div class="eggs_container flex jcfs">
            <div class="eggs egg_zoro">
              <img src="/images/mad_mange/eggs/Zoro.png" class="eggs" alt="">
            </div>
            <div class="eggs egg_blackbread">
              <img src="/images/mad_mange/eggs/Blackbeard.png" class="eggs" alt="">
            </div>
            <div class="eggs egg_andrea">
              <img src="/images/mad_mange/eggs/Andrea.png" class="eggs" alt="">
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </grid3d>
</template>

<script>
  import grid3d from '../../components/common/grid3d.vue'
  export default {
    name: "Home",
    components: {
      grid3d
    },
    data() {
      return {
        gridOption: {
          top: true,
          bottom: true,
          color: 'purple', // purple | blue | white
          fill: true
        }
      };
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  .eggs_container_pd {
    padding: 210px 0;
    position: relative;

    .eggs_container {
      position: absolute;
      bottom: 10%;
    }
  }

  .logo_img {
    max-width: 360px;
  }



  .eggs {
    transform: scale(1.3);

    &.egg_zoro {
      // transform: translateX(20px)
      animation: swing-up-down-zoro 3s linear infinite;

    }

    &.egg_blackbread {
      // transform: translateX(-20px)
      animation: swing-up-down-blackbread 5s linear infinite;

    }

    &.egg_andrea {
      // transform: translateX(-60px)
      animation: swing-up-down-andrea 4s linear infinite;

    }
  }

  @keyframes swing-up-down-zoro {
    0% {
      transform: translate(20px, 0);
    }

    25% {
      transform: translate(20px, 10px);
    }

    50% {
      transform: translate(20px, 0px);
    }

    75% {
      transform: translate(20px, -10px);
    }

    100% {
      transform: translate(20px, 0px);
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
      transform: translate(-60px, 0);
    }

    25% {
      transform: translate(-60px, 10px);
    }

    50% {
      transform: translate(-60px, 0px);
    }

    75% {
      transform: translate(-60px, -10px);
    }

    100% {
      transform: translate(-60px, 0px);
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
      padding: 140px 0;

      .eggs_container {
        bottom: 0;
      }
    }

    .eggs {
      transform: scale(1);

      &.egg_zoro {
        // transform: translateX(20px)
        animation: swing-up-down-zoro-md 3s linear infinite;

      }

      &.egg_blackbread {
        // transform: translateX(-20px)
        animation: swing-up-down-blackbread-md 5s linear infinite;
        z-index: 2;

      }

      &.egg_andrea {
        // transform: translateX(-60px)
        animation: swing-up-down-andrea-md 4s linear infinite;

      }
    }
  }

  @media #{$sm-layout} {
    .eggs_container_pd {
      padding: 105px 0;
    }

    .logo_img {
      max-width: 300px;
    }
  }

  @media #{$large-mobile} {
    .eggs_container_pd {
      padding: 105px 0;

      .eggs {
        transform: scale(1.3);

      }

    }
  }

  @media #{$large-mobile} {
    .eggs_container_pd {
      padding: 110px 0;

      .eggs {
        transform: scale(1.3);

      }
    }

  }

  @media #{$small-mobile} {
    .eggs_container_pd {
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