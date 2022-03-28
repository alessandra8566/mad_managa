<template>
  <div class="video_container flex jcc hidden">
    <!-- <video-bg :sources="['/video/madmanga.mp4']" :muted="false" /> -->
    <div class="height100 por">
      <video ref="videoPlayer" class="video-js vjs-default-skin po_center" x5-video-player-fullscreen="true"
        x5-playsinline playsinline webkit-playsinline></video>
    </div>
  </div>
</template>

<script>
  import VideoBg from 'vue-videobg'
  import videojs from 'video.js'

  export default {
    name: "videoPlayer",
    components: {
      VideoBg
    },
    props: {
      start: false
    },
    data() {
      return {
        player: null,
        ismobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      }
    },
    mounted() {
      this.player = videojs(this.$refs.videoPlayer, {
        preload: "auto",
        autoplay: this.ismobile ? true : false,
        // techOrder: ['flash'],
        controls: false,
        muted: true,
        loop: true,
        // outerWidth: "100%",
        sources: [{
          type: '',
          src: '/video/madmanga.mp4'
        }]
      })
    },
    beforeDestroy() {
      this.player.dispose()
    },
    watch: {
      start() {
        if (this.start) this.player.play()
      }
    }
  }
</script>

<style lang="scss">
  .video_container {
    width: 100%;
    overflow: hidden;
    position: relative;
    // height: 100vh;
    z-index: 0;
    background-color: #000;
    height: 100vh;
  }
</style>