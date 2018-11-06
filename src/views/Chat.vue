<template>
  <div class="chat">
    <div v-for="item in messages" :key="item.timestamp">
      <p class="message">{{ item.name }} : {{ item.content }}</p>
    </div>
    <div class="message-form">
      <v-text-field
        v-model="messageText"
        placeholder="メッセージを入力"
        solo
      ></v-text-field>
    </div>
    <v-btn @click="sendMessage" color="success" small>送信</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component({})
export default class Chat extends Vue {
  private messages: any[] = [
    // { uid: 0, name: 'saito,', text: 'hogehoge', timestamp: 201811112359 },
  ];
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
    if (this.loginState && this.messageText) {
      firebase.firestore().collection('messages').add({
        uid:       this.uid,
        name:      this.name,
        content:   this.messageText,
        timestamp: Date.now(),
      });
    } else if (!this.loginState) {
      alert('サインインしてください。');
      this.$router.push('/');
    } else if (!this.messageText) {
      alert('文字を入力してください。');
    } else {
      alert('送信に失敗しました。');
    }
    this.messageText = '';
  }

  private loadMessage(): void {
    firebase.firestore().collection('messages').get().then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        this.messages.push(doc.data());
      });
    });
  }

  private created() {
    this.loadMessage();
  }
}
</script>

<style lang="scss" scoped>
.message {
  margin: 0px 0px 5px 40px;
  text-align: left;
}

.message-form {
  width: 77%;
  margin-bottom: 28px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  .v-input {
    margin: 0px;
    padding: 0px;
  }
}

.v-btn {
  position: absolute;
  right: 0px;
  bottom: 56px;
  margin: 0px;
  width: 23%;
  height: 48px;
}
</style>
