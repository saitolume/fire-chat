<template>
  <div class="home">
    <h1 class="msg" >Fire Chat</h1>
    <img class="vue-logo" src="../assets/vue_logo.png" alt="Vue logo">
    <span class="plus">+</span>
    <img class="firebase-logo" src="../assets/firebase_logo.png" height="200px" alt="firebase logo">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/LoginForm.vue';

@Component({
  components: {
    LoginForm,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  text-align: center;
}

.msg {
  margin-top: 70px;
}

.vue-logo {
  padding-top: 0px;
  padding-right: 190px;
}

.plus {
  font-size: 70px;
  font-weight: bold;
  padding: 0px 30px 0px 10px;
  position: absolute;
  top: 165px;
  left: 900px;
}
</style>

