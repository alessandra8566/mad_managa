<template>
  <div class="video_container flex jcc hidden por">
    <!-- <video-bg :sources="['/video/madmanga.mp4']" :muted="false" /> -->
    <div class="height100 por">
      <video ref="videoPlayer" class="video-js vjs-default-skin po_center" x5-video-player-fullscreen="true"
        x5-playsinline playsinline webkit-playsinline></video>
    </div>
    <div class="fullscreen-btn flex jcfn aic width100 cp" @click="fullscreen()">
      <h3 class="font-regular white mar_0" style="font-size: 24px">Watch The Full Video</h3>
      <img src="/images/mad_mange/play.svg" class="pad_1" style="max-width: 50px" alt="">
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
      console.log(this.player)
    },
    methods: {
      fullscreen() {
        var elem = document.getElementsByTagName('video')[0];
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        } else if (elem.webkitEnterFullscreen) {
          elem.webkitEnterFullscreen()
        } else if (elem.enterFullscreen) {
          elem.enterFullscreen()
        } else {
          alert("Full screen not supported");
          return;
        }
        // elem.play();
      }
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

  .fullscreen-btn {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>