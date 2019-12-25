<template>
  <div class="component-conversation">
    <div
      v-for="(mess, index) in listMessage"
      :key="index"
      class="div-content-message"
      :class="[mess.user === 'user 0' ? 'div-content-message-right' : '']"
    >
      <img
        src="../../assets/icon_user.png"
        alt="icon-user-conversation"
        class="navbar-toggler-icon img-icon-user-conversation"
        :class="[
          mess.created_by === idCurrentUser
            ? 'img-icon-user-conversation-right'
            : ''
        ]"
      />
      <span
        class="span-content-message"
        :class="[
          mess.created_by === idCurrentUser ? 'span-content-message-right' : ''
        ]"
        >{{ mess.message }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Conversation",
  props: {
    socket: { required: true }
  },
  data() {
    return {
      listMessage: [],
      idCurrentUser: localStorage.getItem("userID")
    };
  },
  methods: {
    addMessage(newPost) {
      this.listMessage.push(newPost);
      console.log("addMessage");
      console.log(this.listMessage);
    },
    updateConversation(listMessage) {
      this.listMessage = listMessage;
    }
  }
};
</script>

<style scoped lang="scss">
.img-icon-user-conversation {
  margin-right: 5px;
  margin-top: 0px;
}

.div-content-message {
  margin-top: 17.5px;
  margin-bottom: 17.5px;
  width: 100%;
  clear: both;
}

.span-content-message {
  border: 1px solid #cccccc;
  border-radius: 0px 20px 20px 0px;
  border-left: none;
  padding: 9.5px;
  text-align: center;
  background: #f1f1f1;
  white-space: pre-line;
  text-align: left;
}

.img-icon-user-conversation-right {
  float: right;
}

.span-content-message-right {
  float: right;
  border-radius: 20px 0px 0px 20px;
  border-right: none;
  background: #f1f1f1;
  padding: 8px;
  margin-top: 1px;
}

.div-content-message-right {
}
</style>
