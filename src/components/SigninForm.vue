<template>
  <div class="sign-in-form">
    <h2>Sign in</h2>
    <input type="text" placeholder="メールアドレス" v-model="email">
    <input type="password" placeholder="パスワード" v-model="password">
    <button>サインイン</button>
    <div class="msg">
      まだアカウントがない方は
      <router-link to="/signup">こちら</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class SignInForm extends Vue {
  @Provide()
  private email: string = '';

  @Provide()
  private password: string = '';
}
</script>

<style scoped>
.sign-in-form {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}

input {
  margin-bottom: 10px;
  padding: 5px 5px;
}

.msg {
  margin: 20px;
  font-size: 13px;
}

a {
  color: #42b983;
}
</style>

