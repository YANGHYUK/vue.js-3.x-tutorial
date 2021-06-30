<template>
  <div class="api-test">{{ data }}</div>
</template>

<script>
import { requestReposRedcarpet } from "@/api/index";
import { ref, onMounted, watch, toRefs } from "vue";
export default {
  name: "Api-test",
  props: {
    // list: null,
  },
  setup(props) {
    // const { list } = toRefs(props);
    let data = ref([]);
    const getReposRedcarpet = async () => {
      data.value = await requestReposRedcarpet();
    };

    // return { data, getReposRedcarpet };
    onMounted(getReposRedcarpet);
    watch(getReposRedcarpet);
    return {
      data,
      getReposRedcarpet,
    };
    // onMounted(async () => {
    //   const check = await getReposRedcarpet();
    //   console.log({ check });
    // });
  },
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
