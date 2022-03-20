<template>
  <Stars :shootingStars="options.shootingStars" :starsbackgroundcolor="options.starsbackgroundcolor"
    :meteor="options.meteor">
    <div class="grid3d flex jcc aic" :class="{'slide slider-paralax': options.fill}" ref="grid3d">
      <div class="grid_container_all grid_container_top"
        :class="{'purple': options.color == 'purple', 'blue': options.color == 'blue', 'white': options.color == 'white'}"
        v-if="options.top">
        <div class="grid_container">
          <div class="grid" v-html="cells"></div>
        </div>
      </div>
      <div class="grid_container_all grid_container_bottom"
        :class="{'purple': options.color == 'purple', 'blue': options.color == 'blue', 'white': options.color == 'white'}"
        v-if="options.bottom">
        <div class="line"></div>
        <div class="grid_container">
          <div class="grid" v-html="cells"></div>
        </div>
      </div>
      <slot></slot>
    </div>
  </Stars>
</template>

<script>
  import $ from 'jquery'
  import Stars from './stars.vue'
  export default {
    props: {
      options: {
        type: Object
      }
    },
    components: {
      Stars
    },
    data() {
      return {
        stars: "",
        cells: "",


      }
    },
    methods: {
      nJoin(n, fn) {
        return new Array(n)
          .join(' ')
          .split(' ')
          .map(typeof fn === 'function' ?
            fn : e => fn)
          .join('')
      },
      init() {
        const width = this.$refs["grid3d"].offsetWidth
        const height = this.$refs["grid3d"].offsetHeight
        this.stars = this.nJoin(200, e => {
          var style = `
            top: ${Math.random() * height}px;
            left: ${Math.random() * width}px;
          `
          return `<span style="${style}"></span>`
        })
        this.cells = this.nJoin(1000, '<div></div>')
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style lang="scss">
  @media #{$large-mobile} {
    .slider-paralax {
      padding-top: 100px;
    }
  }
</style>