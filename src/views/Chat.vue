<template>
  <div class="chat">
    <div v-for="item in messages" :key="item.timestamp">
      <p class="message">{{ item.name }} : {{ item.text }}</p>
    </div>
    <v-text-field
      class="message-field"
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

@Component({})
export default class Chat extends Vue {
  private messages: Message[] = [/* { name: string text: string timestamp: number uid: string } */];
  private messageText: string = '';

  private get name(): string {
    return this.$store.getters.name;
  }

  private get loginState(): string {
    return this.$store.getters.loginState;
  }

  private get uid(): string {
    const user = firebase.auth().currentUser;
    return user ? user.uid : '';
  }

  private sendMessage(): void {
    if (this.messageText) {
      firebase.firestore().collection('messages').add({
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
    firebase.firestore().collection('messages').get().then((snapshot) => {
      // 型指定した配列に直接Firestoreのドキュメントを入れることはできない
      const messages: any[] = [];
      snapshot.docs.forEach((doc) => {
        messages.push(doc.data());
      });
      this.messages = messages.sort((a, b) => a.timestamp - b.timestamp);
    });
  }

  private scrollBottom() {
    this.$nextTick(() => {
      window.scrollTo(0, document.body.clientHeight);
    });
  }

  private created(): void {
    this.fetchMessages();
  }

  private updated(): void {
    this.scrollBottom();
  }
}
</script>

<style lang="scss" scoped>
.message {
  margin: 0px 0px 50px 40px;
  text-align: left;
}

.message-field {
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
