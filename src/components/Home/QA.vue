<template>
  <div className="por">
    <Stars>
      <div class="ptb--120">
        <div class="container por pad_0" ref="qa_container" id="qa_container" data-stellar-ratio="2">
          <sub-title title="Q&A" class="pb--60" />
          <a-row type="flex" class="jcc">
            <a-col :sm="24" :lg="17">
              <a-collapse class="" expand-icon-position="right">
                <template #expandIcon="props">
                  <a-icon type="minus" v-if="props.isActive" />
                  <a-icon type="plus" v-else />
                </template>
                <a-collapse-panel v-for="(item, ind) in collapesData" :key="ind"
                  :header="`${item.title.toUpperCase()}`">
                  <p>{{ item.content }}</p>
                </a-collapse-panel>
              </a-collapse>
            </a-col>
          </a-row>
        </div>
      </div>
    </Stars>
  </div>
</template>
<script>
  import {
    mapState
  } from 'vuex';
  import Stars from '../common/stars.vue'
  import SubTitle from '../common/subtitle.vue'
  // import {
  //   TweenMax,
  //   TimelineMax
  // } from 'gsap'
  // import ScrollMagic from 'scrollmagic'
  // import {
  //   ScrollMagicPluginGsap
  // } from 'scrollmagic-plugin-gsap'
  import $ from 'jquery'
  // ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
  export default {
    name: "Brand",
    components: {
      Stars,
      SubTitle
    },
    data() {
      return {
        ismobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        collapesData: [{
          title: "General information?",
          content: "MadManga Chapter FOMO Stone will have unique, randomly generated PFP on the etherum blockchain as ERC-721 NFTs and hosted on IPFS"
        }, {
          title: "When is the launch and reveal?",
          content: "2022 Spring - Please follow our discord channel for more details"
        }, {
          title: "Road Map?",
          content: "Our mission is to build the largest manga community as well as the best manga story on the blockchain while providing the most comprehensive curation platform for creators, manga artists, storytellers, and fans alike that can rival many big-name manga series in existence with multitude of unique features"
        }, {
          title: "FOMO Stone?",
          content: "FOMO Stones will continue to evolve through variety of catalysts, each with their own unique utilities and features at different stages of the series for users to decide and experience. All decisions matter to the future chapters of the MadManga universe and holder’s NFTs. Therefore, it is crucial for you to own FOMO Stone(s) to be able to continue the journey in MadManga metaverse and its related projects."
        }, {
          title: "How to get on whitelist?",
          content: "You are still early in this project! Please follow our discord channel for detailed information as these spots are extremely limited!"
        }, {
          title: "How much and how many to mint?",
          content: "Please follow our discord channel for more details in the near future"
        }, {
          title: "What do I own after minting MadManga NFTs?",
          content: "You, the NFT owner owns the commercial rights of the NFT within reasonable and ethical conditions. Make it fun, make it big and MAKE IT MAD!"
        }, {
          title: "Royalties? ",
          content: "7.5% royalties will be collected in the secondary market to keep MadManga team employed, project’s longevity healthy. We will be re-investing big portions for utilities, pools, sweeps, incentives, marketing and future chapters"
        }, {
          title: "What does the future look like for MadManga?",
          content: "We hope that this community will be the biggest in the blockchain filled with passion, just like the existing Marvel and manga community - attracting all fans and creators who share a love for manga. We would not miss out on an opportunity to create amazing works. The future of MadManga is dependent on MadManga DAO and all of you will be a participant of all future releases."
        }, ],
        scrollPositionY: 0
      };
    },
    methods: {

    },
    computed: {
      ...mapState('home', ['currentScrollTop'])
    },
    mounted() {

      // var ctrl = new ScrollMagic.Controller()
      // // create a scene
      // new ScrollMagic.Scene({
      //     duration: 0, // the scne should last for a scroll distance of 100px
      //     offset: 100 // start this scene after scrolling for 50px
      //   })
      //   .setPin("#qa_container") // pins the element for the the scene's duration
      //   .addTo(ctrl); // assign the scene to the controller
    },
    watch: {
      currentScrollTop(newVal) {
        if (this.ismobile) return
        const elementOffset = $('#qa_container').offset();
        this.$refs.qa_container.style.transform = `translateY(${(elementOffset.top - newVal) / 20}px)`
      }
    }
  };
</script>
<style lang="scss">
  .ant-collapse {
    background-color: transparent;
    border: 1px solid $white;
    margin-right: 40px;

    .ant-collapse-header {
      color: $white !important;
      font-size: 20px;

      .ant-collapse-arrow {
        transform: translate(45px, -50%) !important;

        svg path {
          stroke: white;
          stroke-width: 100px;
        }

      }
    }

    .ant-collapse-content {
      color: $white !important;
      background-color: transparent;
      // padding: 0px 0px;

      p {
        font-size: 1rem;
      }
    }
  }

  @media #{$large-mobile} {
    .ant-collapse {
      margin-right: initial;

      .ant-collapse-header {
        color: $white !important;
        font-size: 20px;

        .ant-collapse-arrow {
          transform: translate(0px, -50%) !important;

          svg path {
            stroke: white;
            stroke-width: 100px;
          }

        }
      }

    }
  }
</style>