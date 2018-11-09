<template>
  <div class="setting-form">
    <v-form>
      <v-flex xs12 sm6>
        <v-text-field
          label="ユーザー名"
          v-model="name"
          :disabled="loading"
          :loading="loading"
          :rules="[required]"
          :success-messages="saved ? '保存しました' : ''"
          @focus="resetFormLook"
        ></v-text-field>
      </v-flex>
      <v-btn
        color="#42b983"
        :disabled="!name || loading"
        @click="saveProfile"
        outline
      >保存</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';

@Component({})
export default class SettingForm extends Vue {
  private name:    string  = this.$store.getters.name; // ページを更新すると空になる
  private loading: boolean = false;
  private saved:   boolean = false;

  private required(value: string): string | boolean {
    return value ? true : '入力してください';
  }

  private saveProfile(): void {
    this.loading = true;
    this.saved   = false; // 連続タップで表示が崩れないように
    const user = firebase.auth().currentUser;
    if (user) {
      user.updateProfile({
        displayName: this.name,
        photoURL:    null,
      }).then(() => {
        this.$store.dispatch('updateName', this.name);
        // 保存後のフォームの見た目を調整（0.8s読み込み→1.5sメッセージ表示）
        setTimeout(() => {
          this.loading = false;
          this.saved   = true;
          setTimeout(this.resetFormLook, 1500);
        }, 800);
      });
    }
  }

  private resetFormLook(): void {
    this.loading = false;
    this.saved   = false;
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
