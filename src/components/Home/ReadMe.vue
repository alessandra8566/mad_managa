<template>
  <div id="service" className="fix">
    <div class="service-area creative-service-wrapper ptb--120 bg_color--5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center service-style--3 mb--30">
              <h2 class="title">{{ title }}</h2>
              <p>{{ describle }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-12">
                <a-collapse class="width100" accordion expand-icon-position="right">
                  <template #expandIcon="props">
                    <a-icon type="minus" v-if="props.isActive" />
                    <a-icon type="plus" v-else />
                  </template>
                  <a-collapse-panel v-for="(item, ind) in 8" :key="ind"
                    header="This is panel header with no arrow icon">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque commodi cupiditate delectus
                      doloremque eos magni veritatis recusandae ipsum tempora. </p>
                  </a-collapse-panel>
                </a-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Brand",
    data() {
      return {
        title: "Q&A",
        describle: "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration.",
        BrandList: [{
            icon: "alert",
            title: "Business Stratagy",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
          },
          {
            icon: "appstore",
            title: "Website Development",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
          },
          {
            icon: "audio",
            title: "Marketing & Reporting",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
          },
          {
            icon: "container",
            title: "Mobile App Development",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
          },
          {
            icon: "idcard",
            title: "Marketing & Reporting",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
          },
          {
            icon: "reconciliation",
            title: "Mobile App Development",
            description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
          },
        ],
      };
    },
    methods: {},
  };
</script>
<style lang="scss" scoped>
  .service.service__style--2 {
    background: url("/images/home/400x400.jpg") !important;
    background-size: cover;
    background-position: 50% 50% !important;
    overflow: hidden;

    .icon {
      color: #1f1f25;
    }

    &:hover {
      .icon {
        color: #fff;
      }

      &::before {
        background-image: none !important;
        background-size: 120%;
      }
    }

    &::before {
      background-image: none !important;
    }
  }

  .icon {
    color: #1f1f25;
  }
</style>