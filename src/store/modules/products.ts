// import shop from "../../api/shop";

// initial state
const state = () => ({
  all: [],
});

// getters
const getters = {};

// actions
const actions = {
  getAllProducts({ commit }: any): any {
    shop.getProducts((products: any) => {
      commit("setProducts", products);
    });
  },
};

// mutations
const mutations = {
  setProducts(state: any, products: any) {
    state.all = products;
  },
  decrementProductInventory(state: any, { id }: any) {
    const product = state.all.find((product: any) => product.id === id);
    product.inventory--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
