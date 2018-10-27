<template>
  <div class="about">
    <h1>About</h1>
    <p>Fire Chat は Vue.js と Firebase で作られた</p>
    <p>PWA 対応チャットアプリです</p>
    <div class="footer">created by 
      <a href="https://twitter.com/saitho_eku3">@saitho_eku3</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  margin: 10px 0px 20px 0px;
}

.footer {
  position: absolute;
  bottom: 110px;
  left: 0;
  right: 0;
  margin: auto;
  a {
    color: #42b983;
  }
}
</style>
