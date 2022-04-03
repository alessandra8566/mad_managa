<template>
  <div class="counter_container width100 flex jcc aic">
    <div class="counter">
      <h2 class="font-regular white text-center" style="letter-spacing: 2px">0.08 ETH</h2>
      <div class="flex jcsa pt--20">
        <div class="icon_box cp" @click="countFn(-1)">
          <a-icon type="minus" style="font-size: 20px" />
        </div>
        <div class="count">
          <h2 class="white font-regular">{{ count }}</h2>
        </div>
        <div class="icon_box cp" @click="countFn(1)">
          <a-icon type="plus" style="font-size: 20px" />
        </div>
      </div>
      <div class="wid100 flex jcc aic pt--20">
        <a-button class="counter-btn white" shape="round" size="large">MINT</a-button>
      </div>
      <p class="white text-center pt--20">Presale: 2 maximum mint pre wallet</p>
      <div class="flex jcc aic">
        <h3 class="white font-regular mar_0" style="font-size: 24px">2,875/4,200 Minted</h3>
        <img src="/images/mad_mange/counter/refresh.svg" style="max-width: 40px" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 2
      }
    },
    methods: {
      countFn(action) {
        if (this.count == 2 && action == 1) return
        if (this.count == 0 && action == -1) return
        this.count = this.count + action
      }
    }
  }
</script>

<style lang="scss">
  .counter_container {
    height: 100vh;
    // background-color: #fff;
    background-image: url('/images/mad_mange/counter/mint-bg.jpg');
    background-size: cover;
    background-position: 50% 50%;
  }

  .counter {
    width: 95vw;
    max-width: 600px;
    height: 95vw;
    max-height: 600px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 40px;

    .icon_box {
      background-color: $white;
      border-radius: 5px;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg path {
        stroke: #000;
        stroke-width: 100px !important;
      }
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background-color: blueviolet;
      opacity: .5;
      z-index: -1;
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      opacity: .1;
      z-index: -1;
      background-image: url('/images/mad_mange/counter/mint-egg.png');
      background-size: cover;
    }
  }

  .counter-btn {
    background-color: transparent;
    min-width: 10rem;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.4rem;

    &.ant-btn-round.ant-btn-lg {
      padding: 10px 20px !important;
      height: auto;

      &:hover {
        background-color: $white !important;
        color: black !important;
        border: 1px solid $white;
      }
    }
  }

  @media #{$laptop-device} {
    .counter {
      max-width: 500px;
      max-height: 500px;
    }
  }

  @media #{$lg-layout} {
    .counter {
      max-width: 400px;
      max-height: 400px;
    }
  }
</style>