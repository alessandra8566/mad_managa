<template>
  <div>
    <a-layout v-if="!loading">
      <Login />
      <Header />
      <router-view :key="$route.path" />
      <Footer />
    </a-layout>
    <a-layout v-else>
      <Loading />
    </a-layout>
  </div>
</template>

<script>
  import Login from '../components/common/login.vue'
  import Header from '../components/header.vue'
  import Footer from '../components/Home/Footer.vue'
  import Loading from '../components/common/loading.vue'
  import mixins from '../mixin'
  export default {
    mixins: [mixins.global],
    components: {
      Login,
      Header,
      Footer,
      Loading
    },
  }
</script>

<style lang="scss" scoped>

</style>