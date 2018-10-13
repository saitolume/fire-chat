<template>
  <div class="home">
    <h1 class="msg" >Fire Chat</h1>
    <img class="vue-logo" alt="Vue logo" src="../assets/logo.png">
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
  margin-top: 0px;
}
</style>

