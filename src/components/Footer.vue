<template>
  <div class="footer">
    <v-bottom-nav :value="true" app>
      <v-btn color="#2c3e50" to="/" flat>
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn color="#2c3e50" to="/chat" v-if="loginState && emailVerified" flat>
        <span>Chat</span>
        <v-icon>textsms</v-icon>
      </v-btn>

      <v-btn color="#2c3e50" to="/chat" v-else disabled flat>
        <span>Chat</span>
        <v-icon>textsms</v-icon>
      </v-btn>

      <v-btn color="#2c3e50" to="/about" flat>
        <span>About</span>
        <v-icon>info</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Footer extends Vue {
  private get emailVerified(): boolean {
    return this.$store.getters.emailVerified;
  }

  private get loginState(): boolean {
    return this.$store.getters.loginState;
  }
}
</script>
