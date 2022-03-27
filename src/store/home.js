export default {
  namespaced: true,
  state: {
    isLoginOpen: false,
    currentScrollTop: 0,
    offsetTops: {},
    fullpageElement: null
  },
  actions: {
    updateIsLoginOpen(context, status) {
      context.commit('isLoginOpen', status)
    },
    updateCurrentScrollTop(context, status) {
      context.commit('currentScrollTop', status)
    },
    updateOffsetTops(context, status) {
      context.commit('offsetTops', status)
    },
    updateFullpageElement(context, status) {
      context.commit('fullpageElement', status)
    }
  },
  mutations: {
    isLoginOpen(state, status) {
      state.isLoginOpen = status
    },
    currentScrollTop(state, status) {
      state.currentScrollTop = status
    },
    offsetTops(state, status) {
      state.offsetTops = status
    },
    fullpageElement(state, status) {
      state.fullpageElement = status
    }
  },
}
