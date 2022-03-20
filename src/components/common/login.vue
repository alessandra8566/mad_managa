<template>
  <div class="login-page" :class="{'open': isLoginOpen}">
    <div class="expend_login" :class="{'expend_login_open': isLoginOpen, 'onTop': currentScrollTop == 0}"
      @click.stop="TriggerLoginWrapper(true)">
      <div class="login-circle flex jcc aic">
        <span v-if="!isLoginOpen" class="wallet">WALLET</span>
        <a-icon v-else type="cross" @click.stop="TriggerLoginWrapper(false)" style="font-size: 24px"></a-icon>
      </div>
    </div>
    <div class="login_contain flex jcc aic" v-if="isLoginOpen">
      <div class="login_connect animate__animated animate__fadeIn animate__delay-1s flex jcc aic fdc">
        <h1 class=" text-center white font-regular mar_0">CONNECT</h1>
        <img src="/images/mad_mange/metamask.png" class="width100 login_dog" alt="">
        <div class="wid100 flex jcc aic mart_2">
          <a-button class="login-btn white" shape="round" size="large">LOGIN</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import $ from 'jquery'
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState('home', ['isLoginOpen', 'currentScrollTop'])
    },
    methods: {
      TriggerLoginWrapper(status) {
        this.$store.dispatch('home/updateIsLoginOpen', status)
      },

    }
  }
</script>

<style lang="scss">
  .login-page {
    top: 0;
    right: 0;
    width: 10rem;
    height: 10rem;
    position: fixed;
    z-index: 10000;
    overflow: hidden;

    // pointer-events: none;
    /* background-color: #333; */
    &.open {
      width: 100%;
      height: 100%;
    }
  }

  @media #{$md-layout} {
    .login_dog {
      text-align: center;
      max-width: 15rem;
    }

    .login-page {
      width: 5rem;
      height: 5rem;
    }



  }
</style>