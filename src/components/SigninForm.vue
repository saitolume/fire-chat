<template>
  <div class="signin-form">
    <h2>Sign in</h2>
    <input type="text" placeholder="ユーザー名" v-model="username">
    <input type="password" placeholder="パスワード" v-model="password">
    <button>サインイン</button>
    <div class="msg">
      まだアカウントがない方は
      <router-link to="/signup">こちら</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SigninForm extends Vue {}
</script>

<style scoped>
.signin-form {
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

