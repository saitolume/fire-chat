<template>
  <div class="home">
    <h1>Home</h1>
    <img class="logo" src="../assets/firebase_logo.png" height="130px" alt="logo">
    <p class="msg">Fire Chat へようこそ</p>
    <div class="warm" v-if="!emailVerified || !name">
      <v-alert v-if="!emailVerified" :value="true" color="error" outline>
        <p>アカウントが認証されていません</p>
        <v-btn color="error" @click="sendEmail">認証メールを送信する</v-btn>
      </v-alert>

      <v-alert v-if="!name" :value="true" color="error" outline>
        <p>ユーザー名が設定されていません</p>
        <v-btn color="error" to="/setting">設定する</v-btn>
      </v-alert>
    </div>
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

  private get name(): boolean {
    return this.$store.getters.name;
  }

  private sendEmail(): void {
    const actionCodeSettings = {
      url: `https://${window.location.host}`,
    };
    const user = firebase.auth().currentUser;
    if (user) {
      user.sendEmailVerification(actionCodeSettings).then(() => {
        alert('認証メールを送信しました');
      }).catch((error) => {
        alert(error.message);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
}

.msg {
  margin: 20px;
}

.warm {
  max-width: 300px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  p {
    margin: 0px;
  }
  margin-bottom: 70px;
}

.v-alert {
  margin: 20px 10px;
}
</style>
