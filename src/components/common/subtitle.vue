<template>
  <div class="subtitle flex jcc aic">
    <div class="font-regular text-center">
      <h1 class="font-regular" style="visibility: none; color: none">{{ title }}</h1>
      <h1 class="blue font-regular">{{ title }}</h1>
      <h1 class="pink font-regular ">{{ title }}</h1>
      <h1 class="white font-regular">{{ title }}</h1>
      <!-- <h1 class="glitch">{{ title }}</h1> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ""
      }
    },

  }
</script>

<style lang="scss">
  .subtitle {
    z-index: 2;
    position: relative;

    .blue {
      position: absolute;
      color: #00FFFF;
      left: 0;
      top: 0;
      width: 100%;
      transform: translate(-2px, -2px);
    }

    .pink {
      position: relative;
      color: #FF00FF;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      transform: translate(0px, 0px);

    }

    .white {
      color: white;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      transform: translate(2px, 2px);
    }
  }

  h1.glitch {
    color: white;
    font-family: sans-serif;
    font-weight: 800;
    position: relative;
    font-size: 100px;
    padding: 30px;

  }

  h1.glitch::before,
  h1.glitch::after {
    padding: 30px;
    color: white;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    overflow: hidden;
    top: 0;
  }

  h1.glitch::before {
    left: 3px;
    text-shadow: -2px 0 red;
    animation-name: glitch-animation-1;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: reverse-alternate;
  }

  h1.glitch::after {
    left: -3px;
    text-shadow: -2px 0 blue;
    animation-name: glitch-animation-2;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: reverse-alternate;
  }

  @keyframes glitch-animation-1 {
    $steps: 20;

    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(150)+px, 350px, random(150)+px, 30px)
      }
    }
  }

  @keyframes glitch-animation-2 {
    $steps: 20;

    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(150)+px, 350px, random(150)+px, 30px);
      }
    }
  }
</style>