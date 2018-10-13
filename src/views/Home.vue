<template>
  <div class="home">
    <img class="logo" src="../assets/vue_logo.png" alt="Vue logo">
    <img class="logo" src="../assets/firebase_logo.png" height="200px" alt="firebase logo">
    <SigninForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SigninForm from '@/components/SigninForm.vue';

@Component({
  components: {
    SigninForm,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  margin-top: 30px;
}

.logo {
  margin: 30px 40px 0px 40px;
}
</style>

