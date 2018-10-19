<template>
  <div class="sign-up">
    <h1>Sign up</h1>
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
h1 {
  margin: 10px 0px 20px 0px;
}
</style>
