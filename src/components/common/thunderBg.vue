<template>
  <div class="thunder-bg">
    <!-- <canvas id="canvas1"></canvas>
    <canvas id="canvas2"></canvas>
    <canvas id="canvas3"></canvas> -->
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'thunder',
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .thunder-bg {
    min-height: 300px;
    position: relative;
    background-attachment: fixed;

    &:before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      animation: thunder-bg 6s infinite;
    }

    canvas {
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;

      #canvas3 {
        z-index: 1;
      }

      #canvas2 {
        z-index: 2;
      }

      #canvas1 {
        z-index: 3;
      }
    }
  }


  $color1: rgba(0, 0, 0, 1);
  $color2: rgba(0, 0, 0, .8);

  @keyframes thunder-bg {
    0% {
      background-color: $color1;
    }

    9% {
      background-color: $color1;
    }

    10% {
      background-color: $color2;
    }

    10.5% {
      background-color: $color1;
    }

    80% {
      background-color: $color1;
    }

    82% {
      background-color: $color2;
    }

    83% {
      background-color: $color1;
    }

    83.5% {
      background-color: $color2;
    }

    100% {
      background-color: $color1;
    }
  }
</style>