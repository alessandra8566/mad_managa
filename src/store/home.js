export default {
  namespaced: true,
  state: {
    isLoginOpen: false,
    currentScrollTop: 0
  },
  actions: {
    updateIsLoginOpen(context, status) {
      context.commit('isLoginOpen', status)
    },
    updateCurrentScrollTop(context, status) {
      context.commit('currentScrollTop', status)
    }
  },
  mutations: {
    isLoginOpen(state, status) {
      state.isLoginOpen = status
    },
    currentScrollTop(state, status) {
      state.currentScrollTop = status
    }
  },
}
