<template>
  <grid3d :options="gridOption">
    <div class="container evolation_container ptb--120 zid_4 por">
      <sub-title title="EVOLUTION" />
      <a-row class="flex jcc aic pt--40">
        <a-col :sm="24" :lg="16">
          <p class="white text-center"> MadManga project starts off with 4,200 unique combinations of FOMO Stone NFTs as
            its first
            chapter of the
            series bringing manga fans into the web3 world. The MadManga universe assembles many of the classic, modern
            and
            famous manga elements of all ages into its design. </p>
        </a-col>
      </a-row>
      <Marquee move-to="left" class="mart_6" style="opacity: .8;">
        <h1 class="font-regular marquee_font white marb_1">FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO
          STONE
          FOMO
          STONE FOMO STONE
          FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE
        </h1>
      </Marquee>
      <Marquee move-to="right" class="" style="opacity: .5;">
        <h1 class="font-regular marquee_font marb_1" style="color: #DAAAF9;">FOMO STONE FOMO STONE FOMO STONE FOMO STONE
          FOMO
          STONE FOMO STONE FOMO
          STONE FOMO STONE
          FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE
        </h1>
      </Marquee>
      <Marquee move-to="left" class="" style="opacity: .3;">
        <h1 class="font-regular marquee_font white marb_1" style="color: #2EA6DF">FOMO STONE FOMO STONE FOMO STONE FOMO
          STONE
          FOMO STONE FOMO STONE
          FOMO
          STONE FOMO STONE
          FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE FOMO STONE
        </h1>
      </Marquee>
      <div class="flex jcc" id="evolation">
        <div class="animation_1 zid_1 animate__animated">
          <img src="/images/mad_mange/eggs/evolution/e-01.png" class="width100 evolation_scale third left" alt="">
        </div>
        <div class="animation_2 zid_2 animate__animated">
          <img src="/images/mad_mange/eggs/evolution/e-02.png" class="width100 evolation_scale second left" alt="">
        </div>
        <div class="animation_3 zid_3 animate__animated">
          <img src="/images/mad_mange/eggs/evolution/e-03.png" class="width100 evolation_scale first" style="" alt="">
        </div>
        <div class="animation_4 zid_2 animate__animated">
          <img src="/images/mad_mange/eggs/evolution/e-04.png" class="width100 evolation_scale second right" alt="">
        </div>
        <div class="animation_5 zid_1 animate__animated">
          <img src="/images/mad_mange/eggs/evolution/e-05.png" class="width100 evolation_scale third right" alt="">
        </div>
      </div>
      <div class="circle"></div>
    </div>
  </grid3d>
</template>

<script>
  import SubTitle from '../common/subtitle.vue'
  import grid3d from '../../components/common/grid3d.vue'
  import Marquee from '@/components/common/marquee.vue'
  import $ from 'jquery'
  export default {
    components: {
      SubTitle,
      grid3d,
      Marquee,
    },
    data() {
      return {
        gridOption: {
          top: false,
          bottom: true,
          color: 'blue', // purple | blue | white
          fill: false
        },
        random: 0
      }
    },
    mounted() {
      const _this = this
      setInterval(() => {
        _this.random = (Math.floor(Math.random() * 1000) % 5) + 1
      }, 2000)
    },
    watch: {
      'random'(newVal, oldVal) {
        $(`.animate__animated`).removeClass('animate__shakeX');
        $(`.animation_${newVal}`).addClass('animate__shakeX')
      }
    }
  }
</script>

<style lang="scss">
  .marquee_font {
    white-space: nowrap;
  }

  .evolation_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #evolation {
    transform: translateY(-40%)
  }

  @media #{$sm-layout} {
    #evolation {
      transform: translateY(0%)
    }
  }

  @media #{$lg-layout} {
    #evolation {
      width: 120%;
    }
  }

  @media #{$sm-layout} {
    #evolation {
      width: 100%;
    }
  }

  .evolation_scale {
    &.first {
      transform: translate3d(0, 0, 0) scale(1.2);

      &.left {
        transform: translate3d(0, 0, 0) scale(1.2) translateX(50%);
      }

      &.right {
        transform: translate3d(0, 0, 0) scale(1.2) translateX(-50%);
      }
    }

    &.second {
      &.left {
        transform: translate3d(0, -20%, 0) scale(1.2) translateX(25%);
      }

      &.right {
        transform: translate3d(0, -20%, 0) scale(1.2) translateX(-25%);
      }

    }

    &.third {
      &.left {
        transform: translate3d(0, -30%, 0) scale(1.2) translateX(50%);
      }

      &.right {
        transform: translate3d(0, -30%, 0) scale(1.2) translateX(-50%);
      }
    }

    @media #{$md-layout} {
      &.first {
        transform: translate3d(0, 0, 0) scale(1.5);

        &.left {
          transform: translate3d(0, 0, 0) scale(1.5) translateX(50%);
        }

        &.right {
          transform: translate3d(0, 0, 0) scale(1.5) translateX(-50%);
        }
      }

      &.second {
        &.left {
          transform: translate3d(0, -10%, 0) scale(1.5) translateX(15%);
        }

        &.right {
          transform: translate3d(0, -10%, 0) scale(1.5) translateX(-15%);
        }

      }

      &.third {
        &.left {
          transform: translate3d(0, -20%, 0) scale(1.5) translateX(25%);
        }

        &.right {
          transform: translate3d(0, -20%, 0) scale(1.5) translateX(-25%);
        }
      }
    }

    @media #{$sm-layout} {
      &.first {
        transform: translate3d(0, 0, 0) scale(2);

        &.left {
          transform: translate3d(0, 0, 0) scale(2) translateX(50%);
        }

        &.right {
          transform: translate3d(0, 0, 0) scale(2) translateX(-50%);
        }
      }

      &.second {
        &.left {
          transform: translate3d(-50%, -10%, 0) scale(2) translateX(15%);
        }

        &.right {
          transform: translate3d(50%, -10%, 0) scale(2) translateX(-15%);
        }

      }

      &.third {
        &.left {
          transform: translate3d(100%, -100%, 0) scale(2) translateX(25%);
        }

        &.right {
          transform: translate3d(-100%, -100%, 0) scale(2) translateX(-25%);
        }
      }
    }

    @media #{$large-mobile} {
      &.first {
        transform: translate3d(0, 0, 0) scale(2.5);

        &.left {
          transform: translate3d(0, 0, 0) scale(2.5) translateX(50%);
        }

        &.right {
          transform: translate3d(0, 0, 0) scale(2.5) translateX(-50%);
        }
      }

      &.second {
        &.left {
          transform: translate3d(-70%, -10%, 0) scale(2.5) translateX(15%);
        }

        &.right {
          transform: translate3d(70%, -10%, 0) scale(2.5) translateX(-15%);
        }

      }

      &.third {
        &.left {
          transform: translate3d(60%, -100%, 0) scale(2.5) translateX(25%);
        }

        &.right {
          transform: translate3d(-60%, -100%, 0) scale(2.5) translateX(-25%);
        }
      }
    }
  }

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50vw;
    height: 50vw;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background: rgb(255, 14, 239);
    background: radial-gradient(circle, rgba(255, 14, 239, 0.3981967787114846) 0%, rgba(0, 0, 0, 0) 56%);
    z-index: -1;
  }


  @media #{$sm-layout} {
    .circle {
      width: 100vw;
      height: 100vw;
      top: 70%;
    }
  }
</style>