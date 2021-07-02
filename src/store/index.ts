export interface RootState {
  state: any;
  mutations: any;
  actions: any;
  modules: any;
  getters: any;
}

// export interface State {}

import { createStore } from "vuex";
import { counter } from "@/store/modules/counter";

export default createStore({
  modules: { counter },
  // state: {
  //   count: 0,
  // },
  // getters: {
  //   time2(state) {
  //     return state.count * 2;
  //   },
  // },
  // mutations: {
  //   increment(state) {
  //     state.count++;
  //   },
  // },
  // actions: {},
  // modules: {},
});
