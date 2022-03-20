<template>
  <div class="video_container">
    <video-bg :sources="['/video/madmanga.mp4']" :muted="false" />
  </div>
</template>

<script>
  import VideoBg from 'vue-videobg'
  export default {
    name: "videoPlayer",
    components: {
      VideoBg
    },
    data() {
      return {
        player: null
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .video_container {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 100vh;
    z-index: 0;
    background-color: #000;
  }
</style>