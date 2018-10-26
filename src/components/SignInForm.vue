<template>
  <div class="sign-in-form">
    <v-form>
      <v-flex xs12 sm6 md3>
        <v-text-field v-model="email" label="メールアドレス"></v-text-field>

        <v-text-field
          v-model="password"
          label="パスワード"
          :append-icon="show ? 'visibility_off' : 'visibility'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        ></v-text-field>
      </v-flex>
      <v-btn @click="signIn" color="#42b983" outline>サインイン</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import firebase from 'firebase/app';

@Component({})
export default class SignInForm extends Vue {
  private show:     boolean = false;
  private email:    string  = '';
  private password: string  = '';

  private signIn(): void {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
      alert(`${this.email}でサインインしました。`);
      this.$router.push('/');
    }).catch((error) => {
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
  width: 210px;
}

.v-btn {
  margin: 20px;
}
</style>
