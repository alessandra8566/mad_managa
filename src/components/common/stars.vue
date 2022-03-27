<template>
  <div class="sky_container" :class="{'blue': starsbackgroundcolor == 'blue', 'red': starsbackgroundcolor == 'red'}">
    <div class="sky">
      <div class="stars" v-if="stars"></div>
      <div class="stars1" v-if="stars"></div>
      <div class="stars2" v-if="stars"></div>
      <div class="shooting-stars" v-if="shootingStars"></div>
      <canvas class="meteor" width="100%" height="100%" v-if="meteor" ref="meteor" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import {
    Meteor
  } from '../../assets/js/meteor'
  export default {
    name: "stars",
    props: {
      shootingStars: {
        type: Boolean,
        default: true
      },
      stars: {
        type: Boolean,
        default: true
      },
      starsbackgroundcolor: {
        type: String,
        default: 'blue'
      },
      meteor: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      if (this.meteor) new Meteor(this.$refs.meteor)
    }
  }
</script>

<style lang="scss" scoped>
  $starFieldWidth: 2560;
  $starFieldHeight: 2560;
  $starStartOffset: 600px;
  $starOneScrollDuration: 100s;
  $starTwoScrollDuration: 125s;
  $starThreeScrollDuration: 175s;
  $numStarOneStars: 600;
  $numStarTwoStars: 300;
  $numStarThreeStars: 100;
  $numShootingStars: 10;
  $width: 100%;

  .sky_container {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 50vh;

    &.blue {
      background: linear-gradient(to bottom, #020107 0%, #201b46 100%);
    }

    &.red {
      background-color: #130505;
    }

    .sky {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;

      .meteor {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
      }
    }
  }

  @function create-stars($n) {
    $stars: "#{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF";

    @for $i from 2 through $n {
      $stars: "#{$stars} , #{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF";
    }

    @return unquote($stars);
  }


  @mixin star-template($numStars, $starSize, $scrollSpeed) {
    z-index: 10;
    width: $starSize;
    height: $starSize;
    border-radius: 50%;
    background: transparent;
    box-shadow: create-stars($numStars);
    animation: animStar $scrollSpeed linear infinite;

    &:after {
      content: " ";
      top: -$starStartOffset;
      width: $starSize;
      height: $starSize;
      border-radius: 50%;
      position: absolute;
      background: transparent;
      box-shadow: create-stars($numStars);
    }
  }


  @mixin shooting-star-template($numStars, $starSize, $speed) {
    z-index: 10;
    width: $starSize;
    height: $starSize+80px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    animation: animShootingStar $speed linear infinite
  }

  .stars {
    @include star-template($numStarOneStars, 1px, $starOneScrollDuration)
  }

  .stars1 {
    @include star-template($numStarTwoStars, 2px, $starTwoScrollDuration)
  }

  .stars2 {
    @include star-template($numStarThreeStars, 3px, $starThreeScrollDuration)
  }

  .shooting-stars {
    @include shooting-star-template($numShootingStars, 5px, 10s)
  }

  @keyframes animStar {
    from {
      transform: translateY(0px)
    }

    to {
      transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px)
    }
  }

  @keyframes animShootingStar {
    from {
      transform: translateY(0px) translateX(0px) rotate(-45deg);
      opacity: 1;
      height: 5px;
    }

    to {
      transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px) rotate(-45deg);
      opacity: 1;
      height: 800px;
    }
  }
</style>