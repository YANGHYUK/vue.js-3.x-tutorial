<template>
  <div class="api-test"></div>
</template>

<script>
import { requestUser } from "@/api/index";
export default {
  name: "Api-test",
  methods: {
    async submitForm() {
      console.log("폼 제출");
      const userData = {
        username: this.username,
      };
      const { data } = await requestUser(userData);
    },
    initForm() {
      this.username = "";
    },
  },
};
</script>

<style></style>
