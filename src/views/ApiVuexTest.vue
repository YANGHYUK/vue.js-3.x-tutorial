<template>
  <div class="api-vuex-test">
    <div v-if="loading">
      ...loading
    </div>
    <div v-else>
      <div>
        <button v-on:click="onAdd">{{ localState.count }}</button>
      </div>
      <ul :key="data.id" v-for="(data, index) in apiData">
        this is mounted data
        <li :key="index">
          <span>id: {{ data.id }}</span>
          <br />
          <span>url: {{ data.url }}</span>
          <br />
          <span>repository_url: {{ data.repository_url }}</span>
          <br />
          <span>html_url: {{ data.html_url }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Api-vuex-test",
  props: {},
  // data: () => {
  //   return {
  //     localCount: 0,
  //   };
  // },
  setup(props) {
    const localState = reactive({
      count: 0,
    });
    const { state, dispatch } = useStore();
    const apiData = computed(() => state.apiTest.data);
    const loading = computed(() => state.apiTest.loading);

    const onAdd = () => {
      localState.count++;
      dispatch("ON_ADD");
    };
    // const onRequestData = () => dispatch("REQUEST_DATA");
    // onMounted(() => onRequestData());

    return {
      localState,
      loading,
      onAdd,
      apiData,
    };
  },
  methods: {},
};
</script>

<style></style>
