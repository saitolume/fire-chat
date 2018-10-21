<template>
  <div class="home">
    <h1>Home</h1>
    <img class="logo" src="../assets/firebase_logo.png" height="130px" alt="logo">
    <p class="msg">Fire Chat へようこそ</p>
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
  margin: 20px;
}
</style>
