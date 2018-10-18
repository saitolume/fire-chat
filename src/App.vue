<template>
  <v-app>
    <Header />
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 35px;
}

.title-text {
  margin-top: 50px;
  a {
    color: #2c3e50;
    text-decoration: none;
  }
}
</style>
