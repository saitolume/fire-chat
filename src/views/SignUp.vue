<template>
  <div class="sign-up">
    <h1>Sign up</h1>
    <img class="logo" src="../assets/firebase_logo.png" height="200px" alt="firebase logo">
    <SignUpForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import firebase from 'firebase';
import SignUpForm from '@/components/SignUpForm.vue';

@Component({
  components: {
    SignUpForm,
  },
})
export default class SignUp extends Vue {}
</script>

<style scoped>
.sign-up {
  margin-top: 30px;
}
</style>
