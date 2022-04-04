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
      },
      width: {
        type: Number,
        default: 0

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
    width: 2000px;
    display: block;
    animation-fill-mode: forwards;

    &.right {
      // margin-right: -100%;
      transform: translate(-100%);
      animation: myMove-right 50s linear infinite;

    }

    &.left {
      // margin-left: -100%;
      transform: translate(0%);
      animation: myMove-left 50s linear infinite;
    }
  }

  @keyframes myMove-left {
    0% {
      transform: translateX(0%);
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

  @media #{$sm-layout} {
    .marquee {
      width: 1500px;
    }
  }
</style>