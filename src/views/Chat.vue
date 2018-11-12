<template>
  <div class="chat">
    <div class="message-list">
      <div class="message" v-for="item in messages" :key="item.timestamp">
        {{ item.name }} : {{ item.text }}
      </div>
    </div>
    <ChatForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase/app';
import ChatForm from '@/components/ChatForm.vue';
import Message from '@/types/message';

const db = firebase.firestore();

@Component({
  components: {
    ChatForm,
  },
})
export default class Chat extends Vue {
  // Message型 { name: string text: string timestamp: number uid: string }
  private messages: Message[] = [];

  // 自分のチャットを識別するのに使う
  private get uid(): string {
    const user = firebase.auth().currentUser;
    return user ? user.uid : '';
  }

  private scrollBottom() {
    window.scrollTo(0, document.body.clientHeight);
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

.message-list {
  margin: 0px 0px 130px 40px;
}
</style>
