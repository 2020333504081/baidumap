import Vue from 'vue'
import Vuex from 'vuex'
import collect from './modules/collect'
import classify from './modules/classify'

Vue.use(Vuex)
export default new Vuex.Store({

  modules:{
    collect,
    classify
  }
})
