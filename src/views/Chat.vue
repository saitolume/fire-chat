<template>
  <div class="chat">
    <div class="message-list">
      <div class="message" v-for="item in messages" :key="item.timestamp">
        {{ item.name }} : {{ item.text }}
      </div>
    </div>
    <div class="message-form">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';
import Message from '@/types/message';

const db = firebase.firestore();

@Component({})
export default class Chat extends Vue {
  // Message型 { name: string text: string timestamp: number uid: string }
  private messages: Message[] = [];
  private messageText: string = '';

  private get emailVerified(): string {
    return this.$store.getters.emailVerified;
  }

  private get name(): string {
    return this.$store.getters.name;
  }

  private get uid(): string {
    const user = firebase.auth().currentUser;
    return user ? user.uid : '';
  }

  private scrollBottom() {
    window.scrollTo(0, document.body.clientHeight);
  }

  private sendMessage(): void {
    if (this.messageText) {
      db.collection('messages').add({
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

  private fetchMessages(): void {
    db.collection('messages').get().then((snapshot) => {
      // 型指定した配列に直接Firestoreのドキュメントを入れることはできない
      const messages: any[] = [];
      snapshot.docs.forEach((doc) => {
        messages.push(doc.data());
      });
      this.messages = messages.sort((a, b) => a.timestamp - b.timestamp);
    });
  }

  // TODO: 追加されたmessageだけを取得するように改善する
  private refreshMessages(): void {
    db.collection('messages').onSnapshot((snapshot) => {
      const messages: any[] = [];
      snapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      this.messages = messages.sort((a, b) => a.timestamp - b.timestamp);
    });
  }

  private created(): void {
    this.fetchMessages();
    this.refreshMessages();
  }

  private updated(): void {
    this.scrollBottom();
  }
}
</script>

<style lang="scss" scoped>
.message {
  margin-bottom: 20px;
  text-align: left;
}

.message-form {
  background-color: #cecece;
  width: 100%;
  height: 59px;
  position: fixed;
  bottom: 56px;
  box-shadow: 0 0 7px gray;
}

.message-list {
  margin: 0px 0px 130px 40px;
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
