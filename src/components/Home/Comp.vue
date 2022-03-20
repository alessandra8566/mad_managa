<template>
  <div class="video_container">
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
  import videojs from 'video.js'
  export default {
    name: "videoPlayer",
    data() {
      return {
        player: null
      }
    },
    mounted() {
      this.player = videojs(this.$refs.videoPlayer, {
        preload: "auto",
        autoplay: true,
        // techOrder: ['flash'],
        controls: false,
        muted: true,
        outerWidth: "100%",
        sources: [{
          type: '',
          src: '/video/MAD_comp.mov'
        }]
      })
    }
  }
</script>

<style lang="scss">
  .video_container {
    width: 100%;
  }
</style>