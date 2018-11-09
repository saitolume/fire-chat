<template>
  <div class="setting-form">
    <v-form>
      <v-flex xs12 sm6>
        <!-- TODO: フォームの表示切り替えをもっとキレイにする -->
        <!-- 通常 -->
        <v-text-field
          label="ユーザー名"
          v-if="!loading && !saved"
          v-model="name"
          :rules="[required]"
        ></v-text-field>
        <!-- ローディング中 -->
        <v-text-field
          label="ユーザー名"
          v-else-if="loading"
          v-model="name"
          loading
        ></v-text-field>
        <!-- 保存成功後 -->
        <v-text-field
          label="ユーザー名"
          v-else-if="!loading && saved"
          v-model="name"
          @focus="saved = false"
          success-messages="保存しました"
        ></v-text-field>
      </v-flex>
      <v-btn @click="saveProfile" color="#42b983" :disabled="!name" outline>保存</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';

@Component({})
export default class SettingForm extends Vue {
  private name:    string  = this.$store.getters.name;
  private loading: boolean = false;
  private saved:   boolean = false;

  private required(value: string): string | boolean {
    return value ? true : '入力してください';
  }

  private saveProfile(): void {
    this.loading = true;
    const user = firebase.auth().currentUser;
    if (user) {
      user.updateProfile({
        displayName: this.name,
        photoURL:    null,
      }).then(() => {
        this.$store.dispatch('updateName', this.name);
        this.loading = false;
        this.saved = true;
      });
    }
  }

  private changeSavedFalse(): void {
    this.saved = false;
  }

  private updated(): void {
    // プロフィール保存後の表示を2秒で終わらせる
    if (this.saved) {
      setTimeout(this.changeSavedFalse, 2000);
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
