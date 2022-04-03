<template>
  <grid3d :options="gridOption">
    <div class="container ptb--120 zid_1">
      <sub-title title="ROADMAP" />
      <a-row type="flex" class="jcc aic fdc pt--40" :class="{'pb--40': currentWidth > 991}">
        <a-col :sm="24" :md="18">
          <p class="white text-center">FOMO Stone is just the beginning - once you have FOMO Stone(s), you will embark
            on
            an exciting
            adventure.
            MadManga is a manga-focused universe that consists of all fans and creators that share a love for manga.
            Join
            our adventure and let's start the MADNESS!</p>
        </a-col>
      </a-row>
      <a-row type="flex" class="jcc ais tab_container" style="box-sizing: border-box;">
        <a-col :sm="24" :md="24" :lg="8" class="flex aifn"
          :class="{'pr--40': currentWidth > 991, 'width100': currentWidth <= 991}">
          <!-- <a-col class="tab flex1 flex aic width100" :class="{'active': tabActive == 1}" @click="tabActive = 1">
            <h4 :class="{'font-outline': tabActive == 1}">Spring 2022: Are You Ready!?</h4>
          </a-col>
          <a-col class="tab flex1 flex aic width100" :class="{'active': tabActive == 2}" @click="tabActive = 2">
            <h4 :class="{'font-outline': tabActive == 2}">Look Forward to Everything We Are Bringing to MM </h4>
          </a-col>
          <a-col class="tab flex1 flex aic width100" :class="{'active': tabActive == 3}" @click="tabActive = 3">
            <h4 :class="{'font-outline': tabActive == 3}">Summer: Grand and Adventurous Journey Begins</h4>
          </a-col>
          <a-col class="tab flex1 flex aic width100" :class="{'active': tabActive == 4}" @click="tabActive = 4">
            <h4 :class="{'font-outline': tabActive == 4}">Fall-Spring: Not Just a Typical Metaverse</h4>
          </a-col> -->
          <a-timeline :mode="'right'" style="height: 340px" class="flex fdc jcc width100">
            <a-timeline-item :class="{'active': tabActive == 1}" @click="tabActive = 1">
              <h2 class="font-regular white" style="transform: translateY(-35%)">Spring</h2>
            </a-timeline-item>
            <a-timeline-item :class="{'active': tabActive == 2}" @click="tabActive = 2" class="summer-timeline">
              <h2 class="font-regular white" style="transform: translateY(-35%)">Summer</h2>
            </a-timeline-item>
            <a-timeline-item :class="{'active': tabActive == 3}" @click="tabActive = 3" class="fall-spring-timeline">
              <h2 class="font-regular white" style="transform: translateY(-35%)">Fall-Spring</h2>
            </a-timeline-item>
            <a-timeline-item class="last_timeline">
            </a-timeline-item>
          </a-timeline>
        </a-col>
        <a-col :sm="24" :md="24" :lg="16" class="tab_content">
          <div v-if="tabActive == 1">
            <h3>Spring 2022: Are You Ready!?</h3>
            <p>
              No matter how you found out about us, we’re sure that you love manga and are excited for what’s to come
              for MadManga. This is the time that you and your friends should join our community.
            </p>
            <p>Different FOMO Stones represent your unique identity and a brand new MadManga Heros will be hatched
              through different catalysts, allowing you to explore future chapters in the MadManga series.</p>
            <p>This will be the start of an epic story, taking you on a journey through incubation, growth, and wild
              adventure through stories from various artists/creators.</p>
            <p>Don’t forget, FOMO Stones are limited! If you miss out, YOU WILL REGRET IT!</p>

            <h3>Look Forward to Everything We Are Bringing to MM</h3>
            <p>
              Being the largest manga creation community, we are combining everything that fans love, because we have
              collaborated and worked with well-known intellectual property owners such as ONE PIECE, Disney, and Naruto
              - just to name a few. We know the drill.
            </p>
            <p>By holding MadManga NFTs, what you will receive IRL will be anything but common. One of our team’s fortes
              is the wealth of resources and relationships with vendors that produce products only of exquisite design,
              fashion, and quality - things that you are not able to find anywhere else.</p>
            <p>
              For more about the value of FOMO Stones only MadManga holders will receive, please continue to follow our
              social media channels and Discord server. Remember, getting yourself FOMO Stone(s) is crucial, and it will
              be just the beginning to everything.
            </p>
          </div>
          <div v-if="tabActive == 2">
            <h3>Summer: Grand and Adventurous Journey Begins</h3>
            <p>MadManga team are all hardcore manga and anime fans, therefore we truly understand the devotion fans put
              into a manga they love, and the assiduous effort creators submit to paint their wildness dreams onto their
              manga paper. We plan to bringing you closer to all the actions you’ve never experienced before - where
              creators don’t just see sales number but MadManga’s strong community, where fans participate in ways
              they’ve never thought of before.</p>
            <p>
              Every single FOMO stone NFT holder will hold an important role in our journey where you will be able to
              directly participate in major events and/or determine major paths to the story. You own a piece of the
              decision making which can allow MadManga series to have UNLIMITED possibilities.
            </p>
            <p>Your love and enthusiasm are the motivation that powers MadManga team and creators, which are the pillars
              to becoming the biggest manga creation community where we grow together with everyone who shares a same
              passion for manga.</p>
          </div>
          <div v-if="tabActive == 3">
            <h3>Fall-Spring</h3>
            <p>There is no winter in the MadManga community. With our strong team and wealth of resources, we will be
              the largest web3 manga community in the world and it won’t just be a slogan. You will be part of this
              journey with us in making the world’s first epic-scale manga series in the web3 world by holding MadManga
              NFTs.</p>
            <p>We are combining all of our resources and connections both online as well as offline - to bring you
              utilities that you could want at a much deeper, wider, and grander scale.</p>
            <p>We care about every single experience and technology as they are the root of MadManga team, and we want
              to maximize these resources in making more magics happen for our community. It will but no surprise to see
              our collaborations with anime figures, exhibitions online or IRL, AR/VR/XR experiences, anime/animations,
              games, prints... and the list goes on. THIS WILL BE THE MANGA METAVERSE you cannot miss.</p>
          </div>
        </a-col>
      </a-row>
      <a-row type="flex" class="jcc aic ptb--60">
        <a-col>
          <p class="white text-center">
            Big ambition always fights against time, and we are no different. What differentiates us are our team’s
            dedication, passion, relationships and our established involvements in the space. We will always produce
            with
            steady pace without shortcuts. A great community doesn’t build fast, but takes time to grow and foster. We
            sincerely thank you for joining and trusting in us no matter at what stages of the game. Every single FOMO
            stone NFT holders in this community counts toward making MadManga the biggest manga creation universe. We
            will
            stick together and LFG to the moon... or to some other crazy planets in some other parallel universe! WAGMI
          </p>
          <p class="white text-center">
            Join our Discord server and follow our social media pages, where we continue to reveal more information of
            updates, collaborations and announcements in phases. Let’s join the MadManga ride and bring on the MADNESS!
            MadManga team looks forward to the reveal (then birth) of your FOMO stone(s). You definitely don’t want to
            miss out on this incredibly wild journey!
          </p>
        </a-col>
      </a-row>

    </div>
  </grid3d>
</template>

<script>
  import SubTitle from '../common/subtitle.vue'
  import grid3d from '../common/grid3d.vue'
  import {
    mapState
  } from 'vuex'
  export default {
    components: {
      SubTitle,
      grid3d
    },
    data() {
      return {
        gridOption: {
          top: false,
          bottom: true,
          color: 'purple', // purple | blue
          stars: true, // gray | purple
          fill: false
        },
        tabActive: 1,
      }
    },
    computed: {
      ...mapState('home', ['currentWidth'])
    },
    mounted() {}
  }
</script>

<style lang="scss">
  .tab_container {
    .tab {
      cursor: pointer;

      h4 {
        color: $white;
        padding: 15px;
        margin: 0;

        &:hover {
          color: #00FFFF;

        }
      }

      &.active {
        border: 1px solid #00FFFF;
        border-top: none;
        border-right: none;
        box-sizing: border-box;

        h4 {
          color: #00FFFF;
        }
      }


    }

    .tab_content {
      padding: 20px;
      border: 1px solid #00FFFF;
      color: #00FFFF;
      position: relative;
      height: 400px;
      overflow-y: scroll;
      background-color: rgba(#00FFFF, .1);

      h3 {
        color: #00FFFF;
        font-weight: bold;
        line-height: 32px;
        margin-bottom: 30px;
      }

      // &::before {
      //   content: "";
      //   position: absolute;
      //   width: 100%;
      //   height: 100%;
      //   top: 0;
      //   left: 0;
      //   background-color: #00FFFF;
      //   opacity: .1;
      // }

    }
  }

  .ant-timeline {
    .ant-timeline-item {
      cursor: pointer;

      .ant-timeline-item-head {
        width: 20px;
        height: 20px;
        border: 2px solid $white;
        background-color: #000;
        left: auto !important;
        right: 0;
        transform: translateX(25%);

      }

      &.active {
        .ant-timeline-item-head {
          background-color: #00FFFF;
          border: 2px solid #00FFFF;
        }

        .ant-timeline-item-content {
          h2 {
            color: #00FFFF !important;
          }
        }


      }

      &.last_timeline {
        .ant-timeline-item-head {
          display: none !important;
        }
      }

      .ant-timeline-item-content {
        // width: calc(100% - 30px) !important;
        width: auto !important;

        h2 {
          padding-right: 2rem;
        }
      }
    }
  }

  @media #{$md-layout} {
    .tab_container {
      .tab {
        border-right: 1px solid #00FFFF;

        &.active {
          border-top: 1px solid #00FFFF;
          border-right: none;
          border-left: none;
          border-bottom: 1px solid #00FFFF;
        }
      }
    }

    .ant-timeline {
      width: 50%;
      transform: translateY(20%);

      .ant-timeline-item {
        padding: 0;
      }


      .fall-spring-timeline {
        .ant-timeline-item-tail {
          height: 78px !important;
        }
      }

      .summer-timeline {
        .ant-timeline-item-content h2 {
          transform: translate(100%, -35%) !important;
          padding: 0;
          padding-left: 1.5rem;
          text-align: left !important;
        }
      }
    }

  }

  @media #{$sm-layout} {
    .ant-timeline {
      transform: translateY(22%);
    }
  }

  @media #{$small-mobile} {
    .ant-timeline {
      height: 240px !important;

      .ant-timeline-item-content h2 {
        font-size: 2rem !important;
        line-height: 2.5rem !important;
        transform: translateY(-20%) !important;
      }

      .summer-timeline {
        .ant-timeline-item-content h2 {
          transform: translate(100%, -20%) !important;
        }
      }

      .fall-spring-timeline {
        .ant-timeline-item-tail {
          height: 55px !important;
        }
      }
    }
  }
</style>