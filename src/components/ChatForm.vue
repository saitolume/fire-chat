<template>
  <div class="chat-form">
      <v-text-field
        class="message-input"
        v-model="messageText"
        placeholder="メッセージを入力"
        solo flat
      ></v-text-field>
      <!-- HACK: ログアウト状態でもchatを開ける問題を暫定的に対処 -->
      <v-btn
        @click="sendMessage"
        :disabled="!emailVerified || !name"
        color="success"
        small
      >送信</v-btn>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';
import Message from '@/types/message';

@Component({})
export default class ChatForm extends Vue {
  private messageText: string = '';

  private get emailVerified(): string {
    return this.$store.getters.emailVerified;
  }

  private get name(): string {
    return this.$store.getters.name;
  }

  private get uid(): string {
    return this.$store.getters.uid;
  }

  private sendMessage(): void {
    if (this.messageText) {
      firebase.firestore().collection('messages').add({
        name:      this.name,
        text:      this.messageText,
        timestamp: Date.now(),
        uid:       this.uid,
      });
      this.messageText = '';
    } else if (!this.messageText) {
      alert('文字を入力してください。');
    }
  }
}
</script>

<style scoped>
.chat-form {
  background-color: #c8c7c7;
  width: 100%;
  height: 59px;
  position: fixed;
  bottom: 56px;
  box-shadow: 0 0 7px gray;
}

.message-input {
  margin-bottom: 28px;
  position: fixed;
  left: 8px;
  bottom: 6px;
  width: calc(100% - 113px);
}

.v-btn {
  position: fixed;
  right: 0px;
  bottom: 56px;
  height: 48px;
}

button {
  width: 90px;
}
</style>
