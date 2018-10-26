<template>
  <div class="sign-up-form">
    <v-form>
      <v-flex xs12 sm6 md3>
        <v-text-field v-model="email" label="メールアドレス"></v-text-field>

        <v-text-field
          v-model="password"
          label="パスワード"
          hint="6文字以上"
          :append-icon="show ? 'visibility_off' : 'visibility'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        ></v-text-field>

        <v-text-field
          v-model="passwordAgain"
          label="パスワード（再入力）"
          hint="6文字以上"
          :append-icon="show ? 'visibility_off' : 'visibility'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        ></v-text-field>
      </v-flex>
      <v-btn @click="signUp" color="#42b983" outline>サインアップ</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import firebase from 'firebase/app';

@Component({})
export default class SignUpForm extends Vue {
  private show:           boolean = false;
  private email:          string  = '';
  private password:       string  = '';
  private passwordAgain:  string  = '';

  private signUp(): void {
    if (this.password === this.passwordAgain) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
        alert(`${this.email}のアカウントを作成しました。`);
        this.$router.push('/');
      }).catch((error) => {
        alert(error.message);
      });
    } else {
      this.password = '';
      this.passwordAgain = '';
      alert('パスワードが一致しません。');
    }
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
  width: 210px;
}

.v-btn {
  margin-top: 35px;
}
</style>
