<template>
  <div class="header">
    <v-toolbar class="white" app>
      <v-toolbar-title>
        <router-link to="/">Fire Chat</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="signOut" flat>Sign out</v-btn>
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
.v-toolbar__title a {
  color: #2c3e50;
  text-decoration: none;
}
</style>
