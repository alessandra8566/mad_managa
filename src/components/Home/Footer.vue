<template>
  <div class="ptb--5 my_footer" data-black-overlay="6">
    <p class="white text-center">Copyright MadManga all rights reserved 2022</p>
  </div>
</template>
<style lang="scss" scoped>
  @import "~@/assets/scss/default/_variables.scss";

  [data-black-overlay]:before {
    background-color: #48009F;
    opacity: 1;
  }

  .my_footer {
    margin-top: -20px;

    p {
      font-size: .8rem !important;
      font-weight: normal;
    }
  }

  @media #{$sm-layout} {
    .my_footer {
      p {
        font-size: .5rem !important;
        font-weight: normal;
      }
    }
  }
</style>