<template>
  <div id="box" class="por">
    <div class="about-area bg_color--1">
      <div class="about-wrapper">
        <div class="container">
          <a-row type="flex" class="jcc aic fdc">
            <a-col :xs="12">
              <!-- JJ -->
              <div class="page">
                <div class="box_container">
                  <div class="shadow-wrapper">
                    <div class="shadow">
                      <div>&nbsp;</div>
                    </div>
                  </div>
                  <div class="box-wrapper">
                    <div class="box-faces">
                      <div class="box-face box-face--is-front">
                        <p>
                          <!-- <i class="icon-rocket icon-4x"></i> -->
                          <a-icon type="question" class="box_icon"></a-icon>
                        </p>
                      </div>
                      <div class="box-face box-face--is-back">
                        <p>
                          <!-- <i class="icon-rocket icon-4x"></i> -->
                          <a-icon type="question" class="box_icon"></a-icon>
                        </p>
                      </div>
                      <div class="box-face box-face--is-top">&nbsp;</div>
                      <div class="box-face box-face--is-bottom">&nbsp;</div>
                      <div class="box-face box-face--is-left">
                        <p>
                          <!-- <i class="icon-rocket icon-4x"></i> -->
                          <a-icon type="question" class="box_icon"></a-icon>
                        </p>
                      </div>
                      <div class="box-face box-face--is-right">
                        <p>
                          <!-- <i class="icon-rocket icon-4x"></i> -->
                          <a-icon type="question" class="box_icon"></a-icon>
                        </p>
                      </div>
                    </div><!-- end of .box -->
                  </div><!-- end of .box-wrapper -->
                </div><!-- /.container -->
              </div><!-- /.page -->
            </a-col>
            <a-col :xs="24" :md="18" class="flex jcc aic fdc" style="">
              <img src="/images/logo/logo_b.png" class="pb--60 pt--120 box_logo" style="max-width: 150px" alt="">
              <p class="text-center">Our mission is to build the largest manga community as well as the best
                manga story
                on the blockchain
                while providing the most comprehensive curation platform for creators, manga artists, storytellers, and
                fans alike that can rival many big-name manga series in existence with multitude of unique features.</p>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Tab from '@/components/common/tab'
  import Marquee from '@/components/common/marquee'
  export default {
    name: "About",
    components: {
      Tab,
      Marquee
    },
    data() {
      return {
        title: "About Me",
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,',
      };
    },
  };
</script>
<style lang="scss" scoped>
  $body--Background: #F0F1F1;
  $icon-rocket--Color: #4F5D75;

  body {
    background-color: $body--Background;
  }

  #box {
    height: 100vh;
    background-color: $white;
  }

  .page {
    color: #222;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 40vh;
    text-align: center;
  }

  .box_container {
    margin-top: 50px;
  }

  .box-wrapper {
    perspective: 800px;
    perspective-origin: 50% 100px;
  }

  .box-faces {
    position: relative;
    width: 150px;
    transform-style: preserve-3d;
  }

  .box-faces p {
    padding: 40px 0;
  }

  .box-face {
    outline: 1px solid rgba(#000, .6);
    position: absolute;
    width: 150px;
    height: 150px;
    opacity: 1;
    // box-shadow: inset 0px 0px 100px #555;
    background: rgb(154, 154, 154);
    background: radial-gradient(circle, rgba(154, 154, 154, 1) 0%, rgba(0, 0, 0, 0.9304096638655462) 100%);
  }

  .box-face--is-back {
    transform: translateZ(-75px) rotateY(180deg);
    background-color: #eee;
  }

  .box-face--is-right {
    transform: rotateY(-270deg) translateX(75px);
    transform-origin: top right;
    background-color: #ddd;
  }

  .box-face--is-left {
    transform: rotateY(270deg) translateX(-75px);
    transform-origin: center left;
    background-color: #ddd;
  }

  .box-face--is-top {
    transform: rotateX(-90deg) translateY(-75px);
    transform-origin: top center;
    background-color: #fafafa;
  }

  .box-face--is-bottom {
    transform: rotateX(90deg) translateY(75px);
    transform-origin: bottom center;
    background-color: #bbb;
  }

  .box-face--is-front {
    transform: translateZ(75px);
    background-color: #eee;
  }


  @keyframes spin {
    from {
      transform: rotateY(0);
    }

    to {
      transform: rotateY(360deg);
    }
  }

  .box-faces,
  .shadow {
    transform-origin: center;
    animation: spin 15s infinite linear;
  }

  .icon-rocket {
    color: $icon-rocket--Color;
  }

  .shadow-wrapper {
    perspective: 700px;
    perspective-origin: 50% 100px;
    /*  -webkit-perspective: 800px;
  -webkit-perspective-origin: 50% 100px;*/
  }

  .shadow {
    position: relative;
    width: 150px;
    transform-style: preserve-3d;
  }

  .shadow div {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 0px;
    opacity: 0.98;
    box-shadow: 0px 0px 150px rgb(190, 36, 182);
    transform: rotateX(90deg) translateY(75px);
    transform-origin: bottom center;
  }

  .box_icon {
    font-size: 72px;
    color: $white;
    font-weight: 800;
  }



  @media #{$md-layout} {
    .page {
      height: 30vh;
    }

    .box_logo {
      padding-bottom: 40px;
    }

    .box-wrapper {
      perspective: 800px;
      perspective-origin: 50% 50px;
    }

    .box-faces p {
      padding: 20px 0;
    }

    .box-faces {
      width: 100px;
    }

    .box-face {
      width: 100px;
      height: 100px;
    }

    .box-face--is-back {
      transform: translateZ(-50px) rotateY(180deg);
    }

    .box-face--is-right {
      transform: rotateY(-270deg) translateX(50px);
    }

    .box-face--is-left {
      transform: rotateY(270deg) translateX(-50px);
    }

    .box-face--is-top {
      transform: rotateX(-90deg) translateY(-50px);
    }

    .box-face--is-bottom {
      transform: rotateX(90deg) translateY(50px);
    }

    .box-face--is-front {
      transform: translateZ(50px);
    }

    .shadow-wrapper {
      perspective-origin: 50% 50px;
    }

    .shadow {
      width: 100px;
    }

    .shadow div {
      width: 100px;
      height: 100px;
      box-shadow: 0px 0px 100px rgb(190, 36, 182);
      transform: rotateX(90deg) translateY(50px);
    }

    .box_icon {
      font-size: 60px;
      font-weight: 800;
    }

  }
</style>