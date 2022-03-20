<template>
  <div class="marquee flex nowrap" :class="{'right': moveTo == 'right', 'left': moveTo == 'left'}" align="middle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      moveTo: {
        type: String
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .marquee {
    width: 200%;
    display: block;
    animation-fill-mode: forwards;

    &.right {
      // margin-right: -100%;
      transform: translate(-100%);
      animation: myMove-right 40s linear infinite;

    }

    &.left {
      // margin-left: -100%;
      transform: translate(-30%);
      animation: myMove-left 40s linear infinite;
    }
  }

  @keyframes myMove-left {
    0% {
      transform: translateX(-30%);
    }

    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes myMove-right {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(-30%);
    }
  }
</style>