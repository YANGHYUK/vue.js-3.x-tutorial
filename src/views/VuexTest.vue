<template>
  <div>
    <h1>This is an about page</h1>
    {{ counter }}
    {{ times2 }}
    <button v-on:click="increase">increase</button>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const counter = computed(() => store.state.counter.value);
    const test = computed(() => store.getters.time2);
    const increase = () =>
      store.commit("setCounter", store.state.counter.value + 1);

    return { counter, increase, test };
  },
};
</script>
