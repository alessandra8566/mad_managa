export default {
  namespaced: true,
  state: {
    isLoginOpen: false,
    currentScrollTop: 0,
    currentWidth: window.innerWidth,
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
    updateCurrentWidth(context, status) {
      context.commit('currentWidth', status)
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
    currentWidth(state, status) {
      state.currentWidth = status
    },
    offsetTops(state, status) {
      state.offsetTops = status
    },
    fullpageElement(state, status) {
      state.fullpageElement = status
    }
  },
}
