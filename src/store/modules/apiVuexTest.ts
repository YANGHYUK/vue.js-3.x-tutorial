import { requestApiData } from "@/api/index";

export const apiTest = {
  state: { data: [], request: false, loading: false },
  actions: {
    ON_ADD: async ({ dispatch, commit, getters, state }: any) => {
      commit("INIT_DATA");
      state.loading = true;
      dispatch("REQUEST_DATA");
    },
    REQUEST_DATA: async (
      { dispatch, commit, getters }: any,
      payload: any
    ): Promise<any> => {
      console.log("payload:", { payload });
      try {
        const data = await requestApiData();
        commit("SET_DATA", data);
        dispatch("REQUEST_DATA_SUCCESS");
      } catch {
        dispatch("REQUEST_DATA_FAILURE");
      }
    },
    REQUEST_DATA_SUCCESS: (props: any): any => {
      alert("성공");
    },
    REQUEST_DATA_FAILURE: (): any => {
      alert("실패");
    },
  },
  mutations: {
    SET_DATA: (state: any, payload: any): any => {
      console.log("set data payload:", payload);
      state.data = payload.data;
      state.loading = false;
    },
    INIT_DATA: (state: any) => {
      state.data = [];
    },
  },
  getters: {
    GET_DATA: (state: any): any => state.data,
  },
};
