<template>
  <div class="home">
    <h1>Home</h1>
    <img class="logo" src="../assets/firebase_logo.png" height="130px" alt="logo">
    <div class="msg">Welcome to Fire Chat!</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {}
</script>

<style scoped>
h1 {
  margin: 10px 0px 20px 0px;
}

.msg {
  font-size: 20px;
  margin: 20px;
}
</style>
