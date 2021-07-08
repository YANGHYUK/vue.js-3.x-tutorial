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
import { apiTest } from "@/store/modules/apiVuexTest";

export default createStore({
  modules: { counter, apiTest },
});
