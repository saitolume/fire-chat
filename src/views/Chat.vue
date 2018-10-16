<template>
  <div class="chat">
    <button @click="signOut">サインアウト</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component({})
export default class Chat extends Vue {
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

</style>

