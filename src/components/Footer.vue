<template>
  <div class="footer">
    <v-bottom-nav :value="true" color="transparent" app>
      <v-btn color="#2c3e50" to="/" flat>
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn color="#2c3e50" to="/chat" flat>
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
export default class Footer extends Vue {}
</script>

<style scoped>
</style>
