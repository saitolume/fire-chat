<template>
  <div class="header">
    <v-toolbar class="white" app>
      <v-toolbar-title>Fire Chat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/signin" flat>Sign in</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component({})
export default class Header extends Vue {
  private signOut(): void {
    firebase.auth().signOut()
      .then(() => {
        alert('サインアウトしました。');
        this.$router.push('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
</script>

<style scoped>
.v-toolbar__title {
  font-weight: bold;
}
</style>
