<template>
  <grid3d :options="gridOption" class="por">
    <div class="por width100">
      <div class="container pt--120 zid_6">
        <sub-title title="WHO WE ARE" class="" />
        <a-row type="flex" class="who_we_are_text_container ais pt--40 pb--60">
          <a-col :md="24" :lg="16" class="pad_6 who_we_are_content">
            <p class="white">MadManga is an international team, with Silicon Valley venture capitalists as consultants
              and
              team members
              from copyrights, exhibition curation, e-sports, and tech backgrounds. The members have respectively worked
              closely with Disney, Warner Bros. Studio, Barbie, ONE PIECE, and NARUTO. In addition, tens of contemporary
              artists will join hands to work on this project.</p>
          </a-col>
          <a-col :md="24" :lg="8" class="pad_6 flex jcsa fdc who_we_are_logo">
            <h3 class="white marb_4">PARTNER</h3>
            <img src="/images/mad_mange/caller.png" style="max-width: 280px" class="" alt="">
          </a-col>
        </a-row>
      </div>
      <Marquee moveTo="left" class="poa egglist_marquee">
        <div class="flex jcfs aic nowrap">
          <div v-for="(item, ind) in eggList" :key="ind" class="flex jcc aic fdc text-center flex1">
            <h3 class="white mar_0 font-regular">{{ item.title }}</h3>
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
        // marquee_width: document.getElementsByClassName('egglist_marquee')[0].offsetWidth,
        gridOption: {
          top: false,
          bottom: true,
          color: 'white', // purple | blue | white
          fill: false,
          shootingStars: false,
          starsbackgroundcolor: 'red',
          meteor: true,
          stars: false
        },
        eggList: [{
            title: "DAVID",
            content: "Story",
            img: '/images/mad_mange/eggs/team/t-10.png'
          }, {
            title: "JEREMY",
            content: "Execution",
            img: '/images/mad_mange/eggs/team/t-02.png'
          }, {
            title: "METASTOKE",
            content: "Strategy",
            img: '/images/mad_mange/eggs/team/t-03.png'
          }, {
            title: "OCEAN",
            content: "Grand Scheme",
            img: '/images/mad_mange/eggs/team/t-04.png'
          }, {
            title: "SING",
            content: "Scripting",
            img: '/images/mad_mange/eggs/team/t-05.png'
          }, {
            title: "JC",
            content: "Marketing PR",
            img: '/images/mad_mange/eggs/team/t-06.png'
          }, {
            title: "ゴハン",
            content: "Animation",
            img: '/images/mad_mange/eggs/team/t-07.png'
          }, {
            title: "MOLY",
            content: "Development",
            img: '/images/mad_mange/eggs/team/t-08.png'
          }, {
            title: "ANDREA",
            content: "Social Media",
            img: '/images/mad_mange/eggs/team/t-09.png'
          }, {
            title: "UNEE",
            content: "Artist",
            img: '/images/mad_mange/eggs/team/t-01.png'
          }, {
            title: "DAVID",
            content: "Story",
            img: '/images/mad_mange/eggs/team/t-10.png'
          }, {
            title: "JEREMY",
            content: "Execution",
            img: '/images/mad_mange/eggs/team/t-02.png'
          }, {
            title: "METASTOKE",
            content: "Strategy",
            img: '/images/mad_mange/eggs/team/t-03.png'
          }, {
            title: "OCEAN",
            content: "Grand Scheme",
            img: '/images/mad_mange/eggs/team/t-04.png'
          }, {
            title: "SING",
            content: "Scripting",
            img: '/images/mad_mange/eggs/team/t-05.png'
          }, {
            title: "JC",
            content: "Marketing PR",
            img: '/images/mad_mange/eggs/team/t-06.png'
          }, {
            title: "ゴハン",
            content: "Animation",
            img: '/images/mad_mange/eggs/team/t-07.png'
          }, {
            title: "MOLY",
            content: "Development",
            img: '/images/mad_mange/eggs/team/t-08.png'
          }, {
            title: "ANDREA",
            content: "Social Media",
            img: '/images/mad_mange/eggs/team/t-09.png'
          }, {
            title: "UNEE",
            content: "Artist",
            img: '/images/mad_mange/eggs/team/t-01.png'
          },
          // {
          //   title: "DAVID",
          //   content: "Story",
          //   img: '/images/mad_mange/eggs/team/t-01.png'
          // }, {
          //   title: "JEREMY",
          //   content: "Execution",
          //   img: '/images/mad_mange/eggs/team/t-02.png'
          // }, {
          //   title: "METASTOKE",
          //   content: "Strategy",
          //   img: '/images/mad_mange/eggs/team/t-03.png'
          // }, {
          //   title: "OCEAN",
          //   content: "Grand Scheme",
          //   img: '/images/mad_mange/eggs/team/t-04.png'
          // }, {
          //   title: "SING",
          //   content: "Scripting",
          //   img: '/images/mad_mange/eggs/team/t-05.png'
          // }, {
          //   title: "JC",
          //   content: "Marketing PR",
          //   img: '/images/mad_mange/eggs/team/t-06.png'
          // }, {
          //   title: "ゴハン",
          //   content: "Animation",
          //   img: '/images/mad_mange/eggs/team/t-07.png'
          // }, {
          //   title: "MOLY",
          //   content: "Development",
          //   img: '/images/mad_mange/eggs/team/t-08.png'
          // }, {
          //   title: "ANDREA",
          //   content: "Social Media",
          //   img: '/images/mad_mange/eggs/team/t-09.png'
          // }, {
          //   title: "UNEE",
          //   content: "Artist",
          //   img: '/images/mad_mange/eggs/team/t-10.png'
          // }
        ]
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

  @media #{$md-layout} {
    .who_we_are_logo {
      flex-direction: initial;
      align-items: center;

      h3 {
        margin-bottom: 0 !important;
      }
    }
  }

  @media #{$sm-layout} {
    .container {
      padding: 0;
    }

    .who_we_are_content,
    .who_we_are_logo {
      padding: 0 !important;

      p {
        text-align: center;
      }
    }

    .who_we_are_logo {
      width: 100%;
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

  @media #{$large-mobile} {
    .who_we_are_logo {
      flex-direction: column;
      justify-content: center !important;

      h3 {
        margin-bottom: 2rem !important;
      }
    }

    .who_we_are_text_container {
      padding-bottom: 0 !important;
    }

  }
</style>