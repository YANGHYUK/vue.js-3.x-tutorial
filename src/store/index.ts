export interface RootState {
  state: any;
  mutations: any;
  actions: any;
  modules: any;
  getters: any;
}
// export interface State {}

import { createStore } from 'vuex'

export default createStore({
  state: {
    a:0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
