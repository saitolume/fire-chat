<template>
  <div class="home">
    <h1>Home</h1>
    <img class="logo" src="../assets/firebase_logo.png" height="130px" alt="logo">
    <p class="msg">Fire Chat へようこそ</p>
    <v-btn v-if="!emailVerified && loginState" @click="sendEmail" color="info" outline>認証メールを送信</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';

@Component({})
export default class Home extends Vue {
  private get emailVerified(): boolean {
    return this.$store.getters.emailVerified;
  }

  private get loginState(): boolean {
    return this.$store.getters.loginState;
  }

  private sendEmail(): void {
    const user = firebase.auth().currentUser;
    if (user) {
      user.sendEmailVerification().then(() => {
        console.log('送信しました');
        alert(`
          認証確認メールを送信しました。
          リンクからアカウントを有効化してください。
        `);
      }).catch((error) => {
        alert(error.message);
      });
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 10px 0px 20px 0px;
}

.msg {
  margin: 20px;
}
</style>
