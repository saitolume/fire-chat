<template>
  <div class="sign-up-form">
    <v-flex xs12 sm6 md3>
      <v-text-field placeholder="メールアドレス" v-model="email"></v-text-field>
      <v-text-field placeholder="パスワード" v-model="password"></v-text-field>
      <v-text-field placeholder="パスワード（再入力）" v-model="password"></v-text-field>
    </v-flex>
    <v-btn @click="signUp" outline>サインアップ</v-btn>
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

.v-input {
  width: 200px;
}

.v-btn {
  margin: 20px;
}
</style>
