<template>
  <div class="sign-up-form">
    <input type="text" placeholder="メールアドレス" v-model="email">
    <input type="password" placeholder="パスワード" v-model="password">
    <button @click="signUp">サインアップ</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import firebase from 'firebase';

@Component({})
export default class SignUpForm extends Vue {
  @Provide() private email: string = '';
  @Provide() private password: string = '';

  private signUp(): void {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert(`${this.email}のアカウントを作成しました。`);
        this.$router.push('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
</script>

<style scoped>
.sign-up-form {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}

input {
  margin-bottom: 20px;
  padding: 8px 10px;
  width: 200px;
}
</style>

