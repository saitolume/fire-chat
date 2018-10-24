<template>
  <div class="sign-up-form">
    <v-flex xs12 sm6 md3>
      <v-text-field v-model="email" placeholder="メールアドレス"></v-text-field>
      <v-text-field v-model="password" type="password" placeholder="パスワード"></v-text-field>
    </v-flex>
    <v-btn @click="signUp" outline>サインアップ</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import firebase from 'firebase/app';

@Component({})
export default class SignUpForm extends Vue {
  private email:    string = '';
  private password: string = '';

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

.v-input {
  width: 200px;
}

.v-btn {
  margin: 20px;
}
</style>
