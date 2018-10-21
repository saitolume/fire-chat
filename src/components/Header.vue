<template>
  <div class="header">
    <v-toolbar class="white" app>
      <v-btn @click.stop="drawer = !drawer" icon large flat>
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-toolbar-title>Fire Chat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="loginState = true">
        <v-btn to="/signin" flat>Sign in</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer style="width:200px" v-model="drawer" absolute temporary>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Name</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-btn large flat>Profiel</v-btn>
      </v-list>
      <v-list>
        <v-btn large flat>Setting</v-btn>
      </v-list>
      <v-list>
        <v-btn @click="signOut" large flat>Sign out</v-btn>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component({})
export default class Header extends Vue {
  private drawer: boolean = false;
  private loginState: boolean = false;

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

  private getLoginState(): void {
    this.loginState = this.$store.getters.loginState;
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  font-weight: bold;
}

.v-toolbar__title:not(:first-child) {
  margin-left: 0px;
}
</style>
