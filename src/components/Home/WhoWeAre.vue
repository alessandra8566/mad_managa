<template>
  <grid3d :options="gridOption" class="por">
    <div class="container pt--120 zid_6">
      <sub-title title="WHO WE ARE" class="pb--40" />>
      <a-row type="flex" class="ais">
        <a-col :md="12" class="pad_6 who_we_are_content">
          <p class="white">MadManga is an international team, with Silicon Valley venture capitalists as consultants and
            team members
            from copyrights, exhibition curation, e-sports, and tech backgrounds. The members have respectively worked
            closely with Disney, Warner Bros. Studio, Barbie, ONE PIECE, and NARUTO. In addition, tens of contemporary
            artists will join hands to work on this project.</p>
        </a-col>
        <a-col :md="12" class="pad_6 flex jcsa fdc who_we_are_logo">
          <h3 class="white marb_4">PARTNER</h3>
          <img src="/images/mad_mange/caller.png" style="max-width: 280px" class="" alt="">
        </a-col>
      </a-row>
      <Marquee moveTo="left" class="poa egglist_marquee">
        <div class="flex jcc aic nowrap">
          <div v-for="(item, ind) in eggList" :key="ind" class="flex jcc aic fdc text-center flex1">
            <h3 class="white mar_0">{{ item.title }}</h3>
            <p class="white"> {{ item.content }}</p>
            <img :src="item.img">
          </div>
        </div>
      </Marquee>
    </div>
  </grid3d>

</template>

<script>
  import grid3d from '../common/grid3d.vue'
  import SubTitle from '../common/subtitle.vue'
  import Marquee from '../common/marquee.vue'
  export default {
    components: {
      SubTitle,
      grid3d,
      Marquee
    },
    data() {
      return {
        gridOption: {
          top: false,
          bottom: true,
          color: 'white', // purple | blue | white
          fill: false,
          shootingStars: false,
          starsbackgroundcolor: 'red',
          meteor: true
        },
        eggList: [{
          title: "DAVID",
          content: "Story",
          img: '/images/mad_mange/eggs/david.png'
        }, {
          title: "JEREMY",
          content: "Execution",
          img: '/images/mad_mange/eggs/jeremy.png'
        }, {
          title: "METASTOKE",
          content: "Strategy",
          img: '/images/mad_mange/eggs/metastoke.png'
        }, {
          title: "OCEAN",
          content: "Grand Scheme",
          img: '/images/mad_mange/eggs/Blackbeard.png'
        }, {
          title: "SING",
          content: "Scripting",
          img: '/images/mad_mange/eggs/sing.png'
        }, {
          title: "JC",
          content: "Marketing PR",
          img: '/images/mad_mange/eggs/jc.png'
        }, {
          title: "ゴハン",
          content: "Animation",
          img: '/images/mad_mange/eggs/animation.png'
        }, {
          title: "MOLY",
          content: "Development",
          img: '/images/mad_mange/eggs/Luffy_Chopper.png'
        }, {
          title: "ANDREA",
          content: "Social Media",
          img: '/images/mad_mange/eggs/Andrea.png'
        }, {
          title: "UNEE",
          content: "Artist",
          img: '/images/mad_mange/eggs/unee.png'
        }, {
          title: "DAVID",
          content: "Story",
          img: '/images/mad_mange/eggs/david.png'
        }, {
          title: "JEREMY",
          content: "Execution",
          img: '/images/mad_mange/eggs/jeremy.png'
        }, {
          title: "METASTOKE",
          content: "Strategy",
          img: '/images/mad_mange/eggs/metastoke.png'
        }, {
          title: "OCEAN",
          content: "Grand Scheme",
          img: '/images/mad_mange/eggs/Blackbeard.png'
        }, {
          title: "SING",
          content: "Scripting",
          img: '/images/mad_mange/eggs/sing.png'
        }, {
          title: "JC",
          content: "Marketing PR",
          img: '/images/mad_mange/eggs/jc.png'
        }, {
          title: "ゴハン",
          content: "Animation",
          img: '/images/mad_mange/eggs/animation.png'
        }, {
          title: "MOLY",
          content: "Development",
          img: '/images/mad_mange/eggs/Luffy_Chopper.png'
        }, {
          title: "ANDREA",
          content: "Social Media",
          img: '/images/mad_mange/eggs/Andrea.png'
        }, {
          title: "UNEE",
          content: "Artist",
          img: '/images/mad_mange/eggs/unee.png'
        }, {
          title: "DAVID",
          content: "Story",
          img: '/images/mad_mange/eggs/david.png'
        }, {
          title: "JEREMY",
          content: "Execution",
          img: '/images/mad_mange/eggs/jeremy.png'
        }, {
          title: "METASTOKE",
          content: "Strategy",
          img: '/images/mad_mange/eggs/metastoke.png'
        }, {
          title: "OCEAN",
          content: "Grand Scheme",
          img: '/images/mad_mange/eggs/Blackbeard.png'
        }, {
          title: "SING",
          content: "Scripting",
          img: '/images/mad_mange/eggs/sing.png'
        }, {
          title: "JC",
          content: "Marketing PR",
          img: '/images/mad_mange/eggs/jc.png'
        }, {
          title: "ゴハン",
          content: "Animation",
          img: '/images/mad_mange/eggs/animation.png'
        }, {
          title: "MOLY",
          content: "Development",
          img: '/images/mad_mange/eggs/Luffy_Chopper.png'
        }, {
          title: "ANDREA",
          content: "Social Media",
          img: '/images/mad_mange/eggs/Andrea.png'
        }, {
          title: "UNEE",
          content: "Artist",
          img: '/images/mad_mange/eggs/unee.png'
        }]
      }
    }
  }
</script>

<style lang="scss">
  .egglist_marquee {
    left: 0;
    bottom: 0;

    img {
      max-width: 200px;
      transform: scale(1.2);
    }
  }

  @media #{$lg-layout} {

    .who_we_are_content,
    .who_we_are_logo {
      padding: 15px !important;
    }
  }


  @media #{$sm-layout} {
    .container {
      padding: 0;
    }

    .who_we_are_content,
    .who_we_are_logo {
      padding: 0 !important;
    }

    .who_we_are_logo {
      width: 100%;
      justify-content: center !important;
      align-items: center !important;
      margin: 3rem 0;

    }

    .egglist_marquee {
      img {
        max-width: 150px;
        transform: scale(1.2);
      }
    }
  }
</style>