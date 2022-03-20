<template>
  <div class="por">
    <header class="header-area header-style-two header--fixed color-black por">
      <div class="header-wrapper">
        <div class="header-left d-flex align-items-center">
          <div class="logo">
            <router-link to="/">
              <img src="/images/logo/header-logo.png" style="max-width: 40px" alt="Digital Agency" />
            </router-link>
          </div>
          <nav class="mainmenunav d-lg-block ml--50">
            <ul class="mainmenu">
              <li>
                <a href="#Home">HOME</a>
                <!-- <router-link to="/">HOME</router-link> -->
              </li>
              <li>
                <a href="#Story">STORY</a>
                <!-- <router-link to="/">STORY</router-link> -->
              </li>
              <li>
                <a href="#Thunder">FOMO STONE</a>
                <!-- <router-link to="/">FOMO STONE</router-link> -->
              </li>
              <li>
                <a href="#RoadMap">ROAD MAP</a>
                <!-- <router-link to="/">ROAD MAP</router-link> -->
              </li>
              <li>
                <a href="#QA">Q&A</a>
                <!-- <router-link to="/">Q&A</router-link> -->
              </li>
              <li>
                <a href="#WhoWeAre">TEAM</a>
                <!-- <router-link to="/">TEAM</router-link> -->
              </li>

              <!-- <li class="has-droupdown">
              <router-link to="/pages">Pages</router-link>
            </li> -->
              <!-- <li class="has-droupdown">
              <router-link to="/blocks">Blocks</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li> -->
            </ul>
          </nav>
        </div>
        <div class="header-right">
          <div class="social-share-inner">
            <ul class="social-share social-style--2 color-black d-flex justify-content-start liststyle">
              <!-- {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))} -->
              <li class="flex jcc aic marl_2 marr_2">
                <a><img class="white" src="/images/mad_mange/social/discord.svg" style="width: 90%"></a></li>
              <li class="flex jcc aic marl_2 marr_2">
                <a><img class="white" src="/images/mad_mange/social/instagram.svg" style="width: 80%"></a>
              </li>
              <li class="flex jcc aic marl_2 marr_2">
                <a><img class="white" src="/images/mad_mange/social/twitter.svg" style="width: 90%"></a>
              </li>
            </ul>
          </div>
          <!-- {/* Start Humberger Menu */} -->
          <div class="humberger-menu d-block d-lg-none pl--20">
            <span @click="menuTrigger" class="menutrigger text-white">
              <a-icon type="menu" style="color: #fff"></a-icon>
            </span>
          </div>
          <!-- {/* End Humberger Menu */} -->
          <div class="close-menu d-block d-lg-none">
            <span @click="CLoseMenuTrigger" class="closeTrigger">
              <a-icon type="menu"></a-icon>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
  import $ from "jquery";
  import {
    mapState
  } from 'vuex'
  export default {
    name: "Header",
    data() {
      return {
        currentScrollTop: 0,
      };
    },
    methods: {
      scroll() {
        window.onscroll = () =>
          (this.currentScrollTop = document.documentElement.scrollTop);
      },
      menuTrigger() {
        // document.querySelector('.header-wrapper').classList.toggle('menu-open')
        this.$store.dispatch('home/updateIsLoginOpen')
      },
      CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
      }
    },
    computed: {
      ...mapState('home', ['isLoginOpen'])
    },
    mounted() {
      this.scroll();
    },
    watch: {
      currentScrollTop(newVal) {
        this.currentScrollTop > 110 ?
          $(".header--fixed").addClass("sticky") :
          $(".header--fixed").removeClass("sticky");
        this.currentScrollTop = newVal
        this.$store.dispatch('home/updateCurrentScrollTop', newVal)
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/default/_variables.scss";

  .header-wrapper .mainmenunav ul.mainmenu>li a {
    position: relative;
    color: $white;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }

    &::after {
      position: absolute;
      content: "";
      left: 0;
      width: 0;
      height: 3px;
      background: $theme-color;
      transition: 0.3s;
      bottom: 0;
    }

    &.router-link-exact-active {
      color: $white;

      &::after {
        width: 100% !important;
        height: 0;
      }
    }
  }
</style>