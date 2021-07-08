<template>
  <div v-if="localState?.loading">
    ...loading
  </div>
  <div v-else>
    <div>
      <button v-on:click="onAdd">{{ localState?.count }}</button>
    </div>
    <ul :key="data.id" v-for="(data, index) in localState.data">
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
</template>

<script>
import { requestApiData } from "@/api/index";
import { reactive, onMounted, watch } from "vue";

export default {
  name: "Api-test",
  props: {},
  data: () => {
    return {
      count: 0,
    };
  },
  setup(props) {
    const localState = reactive({
      loading: false,
      data: [],
      greeting: "",
      count: 0,
    });
    const getRquestedData = async () => {
      localState.loading = true;
      try {
        const data = await requestApiData();
        localState.data = data;
      } catch {
        alert("에러");
      }
      localState.loading = false;
    };

    onMounted(getRquestedData);
    const onAdd = () => {
      localState.count++;
    };
    // watch(onAdd);

    return {
      localState,
      onAdd,
      getRquestedData,
    };
  },
  // methods: {
  //   onAdd() {
  //     console.log("hihih");
  //     console.log(this.count, "989089080");
  //     this.count++;
  //   },
  // },
  // methods: {
  //   async submitForm() {
  //     console.log("폼 제출");
  //     const userData = {
  //       username: this.username,
  //     };
  //     const { data } = await requestIssue();
  //     console.log({ data });
  //   },
  //   initForm() {
  //     this.username = "";
  //   },
  // },
};
</script>

<style></style>
