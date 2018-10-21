<template>
  <div class="sign-in-form">
    <v-flex xs12 sm6 md3>
      <v-text-field placeholder="メールアドレス" v-model="email"></v-text-field>
      <v-text-field placeholder="パスワード" v-model="password" type="password"></v-text-field>
    </v-flex>
    <v-btn @click="signIn" outline>サインイン</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import firebase from 'firebase';

@Component({})
export default class SignInForm extends Vue {
  @Provide() private email: string = '';
  @Provide() private password: string = '';

  private signIn(): void {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert(`${this.email}でサインインしました。`);
        this.$router.push('/chat');
      })
      .catch((error) => {
        alert(error.message);
      });
  }
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

.v-input {
  width: 200px;
}

.v-btn {
  margin: 20px;
}
</style>
