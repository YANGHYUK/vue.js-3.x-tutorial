export const counter = {
  state: () => ({ value: 10 }),
  mutations: {
    setCounter(state: any, value: any) {
      state.value = value;
    },
  },
  actions: {
    test() {
      console.log(4);
    },
  },
  getters: {
    time2(state: any) {
      return state.value * 2;
    },
  },
};
