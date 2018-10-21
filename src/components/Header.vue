<template>
  <div class="header">
    <v-toolbar class="white" app>
      <v-btn @click.stop="drawer = !drawer" v-if="loginState()" icon large flat>
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/signin" v-if="!loginState()" flat>Sign in</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer style="width:200px" v-model="drawer" absolute temporary>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>account_circle</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ email() }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-btn disabled large flat>Profiel</v-btn>
      </v-list>
      <v-list>
        <v-btn disabled large flat>Setting</v-btn>
      </v-list>
      <v-list>
        <v-btn @click="signOut" large flat>Sign out</v-btn>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';

@Component({})
export default class Header extends Vue {
  private drawer: boolean = false;

  private loginState(): boolean {
    return this.$store.getters.loginState;
  }

  private email(): string {
    return this.$store.getters.email;
  }

  private signOut(): void {
    firebase.auth().signOut()
      .then(() => {
        this.drawer = false;
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
</style>
