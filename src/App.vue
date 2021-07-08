<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/method">Method</router-link> |
    <router-link to="/api-test">API test</router-link> |
    <router-link to="/vuex-test">Vuex test</router-link> |
    <router-link to="/api-vuex-test">API Vuex test</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
