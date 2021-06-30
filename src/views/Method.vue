<template>
  <div class="method">
    <div id="event-handling">
      <div class="category">
        <span>on click: </span>
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>
      </div>

      <div class="category">
        <span>bind title: </span>
        <span v-bind:title="message2">
          여기에 마우스를 올려두고 잠시 기다리면 제목이 동적으로 바뀝니다!
        </span>
      </div>
      <div class="category">
        <div>props ["message"]:</div>
        <div>{{ message3 }}</div>
        <div>
          <input v-model="message3" />
        </div>
      </div>

      <div class="category">
        <span>if문: </span>
        <span v-if="seen">이제 나를 볼수 있어요</span>
      </div>

      <div class="category">
        <span>for문: </span>
        <span>
          <ol>
            <li v-for="todo in todos" v-bind:key="todo.id">
              {{ todo.text }}
            </li>
          </ol>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "event-handling",
  data: () => {
    return {
      message: "on click event를 확인해봅시다.",
      message2:
        "이 페이지를 다음 시간에 열었습니다. " + new Date().toLocaleString(),
      message3: "이 바보야 진짜 아니야~~!",

      seen: true,

      todos: [
        { id: 1, text: "Learn JavaScript" },
        { id: 2, text: "Learn Vue" },
        { id: 3, text: "Build something awesome" },
      ],
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
  },
};
</script>

<style>
.method {
  text-align: left;
  margin: 0 2rem;
}
.method .category {
  margin: 1rem 0;
  border: solid 1px #ededed;
  padding: 1rem;
}
</style>
