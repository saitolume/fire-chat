<template>
  <div class="setting">
    <h1>Setting</h1>
    <v-text-field label="ユーザー名" v-model="name" required></v-text-field>
    <v-btn @click="save">保存</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import firebase from 'firebase/app';

@Component({})
export default class Setting extends Vue {
  private name:  string = this.$store.getters.name;

  private save(): void {
    const user = firebase.auth().currentUser;
    if (user) {
      user.updateProfile({
        displayName: this.name,
        photoURL: null,
      }).then(() => {
        this.$store.dispatch('updateName', user.displayName);
        alert('保存しました。');
      }).catch((error) => {
        alert(error.message);
      });
    }
  }
}
</script>

<style scoped>
.setting {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}

h1 {
  margin: 10px 0px 20px 0px;
}

.v-input {
  width: 200px;
}

.v-btn {
  margin: 20px;
}
</style>
