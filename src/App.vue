<template>
  <v-app>
    <Header />
    <div class="content-area">
      <router-view />
    </div>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {
  private loginState: boolean = false;

  private created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('changeLoginStateTrue');
        console.log(this.$store.getters.loginState);
      } else {
        this.$store.commit('changeLoginStateFalse');
        console.log(this.$store.getters.loginState);
      }
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

.content-area {
  margin-top: 60px;
  padding-top: 30px;
}

a {
    color: #2c3e50;
    text-decoration: none;
}
</style>
