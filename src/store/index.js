import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'

Vue.use(Vuex)

const stores = new Vuex.Store({
  modules: {
    home
  }
})

export default stores