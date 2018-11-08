<template>
  <div class="chat">
    <div class="message-list">
      <div class="message" v-for="item in messages" :key="item.timestamp">
        {{ item.name }} : {{ item.text }}
      </div>
    </div>
    <v-text-field
      class="message-input"
      v-model="messageText"
      placeholder="メッセージを入力"
      solo
    ></v-text-field>
    <!-- HACK: ログアウト状態でもchatを開ける問題を暫定的に対処 -->
    <v-btn @click="sendMessage" :disabled="!loginState" color="success" small>送信</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';
import Message from '@/types/message';

const db = firebase.firestore();

@Component({})
export default class Chat extends Vue {
  private messages: Message[] = [/* { name: string text: string timestamp: number uid: string } */];
  private messageText: string = '';

  private get loginState(): string {
    return this.$store.getters.loginState;
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
    } else if (!this.messageText) {
      alert('文字を入力してください。');
    }
    this.messageText = '';
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

  private refreshMessage(): void {
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
    this.refreshMessage();
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

.message-list {
  margin: 0px 0px 130px 40px;
}

.message-input {
  width: 77%;
  margin-bottom: 28px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  .v-input {
    margin: 0px;
    padding: 0px;
  }
}

.v-btn {
  position: fixed;
  right: 0px;
  bottom: 56px;
  margin: 0px;
  width: 23%;
  height: 48px;
}
</style>
