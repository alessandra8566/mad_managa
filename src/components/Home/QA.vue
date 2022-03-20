<template>
  <div className="por">
    <Stars>
      <div class="ptb--120">
        <div class="container por pad_0" ref="qa_container" id="qa_container" data-stellar-ratio="2">
          <sub-title title="Q&A" class="pb--60" />
          <a-collapse class="" accordion expand-icon-position="right">
            <template #expandIcon="props">
              <a-icon type="minus" v-if="props.isActive" />
              <a-icon type="plus" v-else />
            </template>
            <a-collapse-panel v-for="(item, ind) in collapesData" :key="ind" :header="`${item.title.toUpperCase()}`">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque commodi cupiditate delectus
                doloremque eos magni veritatis recusandae ipsum tempora. </p>
            </a-collapse-panel>
          </a-collapse>
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
        collapesData: [{
          title: "General information?",
          content: "MadManga Chapter FOMO Stone will have unique, randomly generated PFP on the etherum blockchain as ERC-721 NFTs and hosted on IPFS."
        }, {
          title: "When is the launch and reveal?",
          content: "MadManga Chapter FOMO Stone will have unique, randomly generated PFP on the etherum blockchain as ERC-721 NFTs and hosted on IPFS."
        }, {
          title: "Road Map?",
          content: "MadManga Chapter FOMO Stone will have unique, randomly generated PFP on the etherum blockchain as ERC-721 NFTs and hosted on IPFS."
        }, {
          title: "FOMO Stone?",
          content: "MadManga Chapter FOMO Stone will have unique, randomly generated PFP on the etherum blockchain as ERC-721 NFTs and hosted on IPFS."
        }, {
          title: "How to get on whitelist?",
          content: "MadManga Chapter FOMO Stone will have unique, randomly generated PFP on the etherum blockchain as ERC-721 NFTs and hosted on IPFS."
        }, {
          title: "How much and how many to mint?",
          content: "MadManga Chapter FOMO Stone will have unique, randomly generated PFP on the etherum blockchain as ERC-721 NFTs and hosted on IPFS."
        }, {
          title: "What do I own after minting MadManga NFTs?",
          content: "MadManga Chapter FOMO Stone will have unique, randomly generated PFP on the etherum blockchain as ERC-721 NFTs and hosted on IPFS."
        }, {
          title: "Royalties? ",
          content: "MadManga Chapter FOMO Stone will have unique, randomly generated PFP on the etherum blockchain as ERC-721 NFTs and hosted on IPFS."
        }, {
          title: "What does the future look like for MadManga?",
          content: "MadManga Chapter FOMO Stone will have unique, randomly generated PFP on the etherum blockchain as ERC-721 NFTs and hosted on IPFS."
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
      font-size: 1rem;

      .ant-collapse-arrow {
        transform: translate(45px, -50%) !important;
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
</style>