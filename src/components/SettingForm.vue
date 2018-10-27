<template>
  <div class="setting-form">
    <v-form>
      <v-flex xs12 sm6>
        <v-text-field
          label="ユーザー名"
          v-model="name"
          :rules="[required]"
        ></v-text-field>
      </v-flex>
      <v-btn @click="saveProfile" color="#42b983" outline>保存</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';

@Component({})
export default class SettingForm extends Vue {
  private name: string = this.$store.getters.name;

  private required(value: string): string | boolean {
    return value ? true : '入力してください';
  }

  private saveProfile(): void {
    const user = firebase.auth().currentUser;
    if (user && this.name) {
      user.updateProfile({
        displayName: this.name,
        photoURL:    null,
      }).then(() => {
        this.$store.dispatch('updateName', user.displayName);
        alert('保存しました。');
      }).catch((error) => {
        alert(error.message);
      });
    } else if (!this.name) {
      alert('ユーザー名を入力してください');
    }
  }
}
</script>

<style scoped>
.setting-form {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
.v-input {
  width: 210px;
}

.v-btn {
  margin: 20px;
}
</style>
