<template>
  <div id="app">
    <h1 class="title-text">
      <router-link to="/">Fire Chat</router-link>
    </h1>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

.title-text {
  margin-top: 50px;
}

a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
