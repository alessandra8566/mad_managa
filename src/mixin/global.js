export default {
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
    // setTimeout(() => this.loading = false, 3000)
  },
  watch: {
    '$route.path'(){
      // this.loading = true
      // setTimeout(() => this.loading = false, 3000)
    }
  }
}