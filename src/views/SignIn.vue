<template>
  <div class="sign-in">
    <h1>Sign in</h1>
    <SignInForm />
    <div class="msg">
      <router-link to="/signup">アカウントを作成する</router-link>
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
export default class SignIn extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
}

.msg {
  margin-top: 60px;
  a {
    color: #42b983;
  }
}
</style>
