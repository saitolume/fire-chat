<template>
  <div class="home">
    <h1>Sign in</h1>
    <img class="logo" src="../assets/firebase_logo.png" height="130px" alt="logo">
    <SignInForm />
    <div class="msg">
      まだアカウントがない方は
      <router-link to="/signup">こちら</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SignInForm from '@/components/SignInForm.vue';

@Component({
  components: {
    SignInForm,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 30px;
}

h1 {
  margin: 10px 0px 20px 0px;
}

.msg {
  margin: 20px;
  font-size: 14px;
  a {
  color: #42b983;
  text-decoration: none;
  }
}
</style>
