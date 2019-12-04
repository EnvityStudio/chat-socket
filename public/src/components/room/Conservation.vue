<template>
  <div class="component-conversation">
    <div
      v-for="mess in listMessage"
      :key="mess.id"
      class="div-content-message"
      :class="[mess.user === 'user 0' ? 'div-content-message-right' : '']"
    >
      <img
        src="../../assets/icon_user.png"
        alt="icon-user-conversation"
        class="navbar-toggler-icon img-icon-user-conversation"
        :class="[
          mess.user === 'user 0' ? 'img-icon-user-conversation-right' : ''
        ]"
      />
      <span
        class="span-content-message"
        :class="[mess.user === 'user 0' ? 'span-content-message-right' : '']"
        >{{ mess.content }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Conservation",
  data() {
    return {
      listMessage: [
        { id: 1, content: "aaaaaa", date: "2019-29-11", user: "user 1" },
        {
          id: 2,
          content: "aaaaadadadadadaa",
          date: "2019-29-11",
          user: "user 1"
        },
        { id: 3, content: "aaaafaafafaaa", date: "2019-29-11", user: "user 1" },
        {
          id: 4,
          content: "aaaddddddddddddaaa",
          date: "2019-29-11",
          user: "user 0"
        },
        { id: 5, content: "aaaaaa", date: "2019-29-11", user: "user 1" },
        { id: 6, content: "aaaaaa", date: "2019-29-11", user: "user 1" },
        {
          id: 7,
          content: "aafafafafafaaa",
          date: "2019-29-11",
          user: "user 1"
        },
        { id: 8, content: "aaaafafaa", date: "2019-29-11", user: "user 1" },
        { id: 9, content: "afaf", date: "2019-29-11", user: "user 0" },
        { id: 10, content: "aaaafafaaaa", date: "2019-29-11", user: "user 0" },
        { id: 11, content: "aaaaaaaa", date: "2019-29-11", user: "user 1" },
        { id: 12, content: "fa", date: "2019-29-11", user: "user 1" },
        { id: 13, content: ".", date: "2019-29-11", user: "user 1" },
        { id: 14, content: "aaaafafaaa", date: "2019-29-11", user: "user 1" },
        { id: 16, content: "aaafafaaa", date: "2019-29-11", user: "user 1" },
        { id: 17, content: "aaafaaaa", date: "2019-29-11", user: "user 1" },
        { id: 18, content: "aaaaafaaa", date: "2019-29-11", user: "user 0" },
        { id: 19, content: "aaaaaadada a", date: "2019-29-11", user: "user 0" },
        { id: 20, content: "aaaaaa", date: "2019-29-11", user: "user 0" },
        { id: 21, content: "aaaaadadaaa", date: "2019-29-11", user: "user 1" },
        { id: 22, content: "aaaadadadaa", date: "2019-29-11", user: "user 1" },
        { id: 23, content: "aaaaadadaa", date: "2019-29-11", user: "user 1" },
        {
          id: 24,
          content: "aaadadadadaaaa",
          date: "2019-29-11",
          user: "user 1"
        },
        {
          id: 25,
          content: "aaaadadadadadadadaaa",
          date: "2019-29-11",
          user: "user 0"
        },
        { id: 26, content: "aaaaaa", date: "2019-29-11", user: "user 1" },
        {
          id: 27,
          content: "aaaaadadadaaa",
          date: "2019-29-11",
          user: "user 1"
        },
        {
          id: 28,
          content: "aaadadadadaaaa",
          date: "2019-29-11",
          user: "user 0"
        },
        { id: 29, content: "aaaaadadaa", date: "2019-29-11", user: "user 1" },
        { id: 30, content: "aaadadadaaaa", date: "2019-29-11", user: "user 0" },
        { id: 31, content: "aaaaaa", date: "2019-29-11", user: "user 1" },
        {
          id: 32,
          content: "aaaadadadadadaaaa",
          date: "2019-29-11",
          user: "user 0"
        },
        {
          id: 33,
          content: "aaaadadadaaaa",
          date: "2019-29-11",
          user: "user 1"
        },
        { id: 34, content: "aaaaaa", date: "2019-29-11", user: "user 0" },
        {
          id: 35,
          content: "aaaadadadadadaaa",
          date: "2019-29-11",
          user: "user 0"
        },
        {
          id: 36,
          content: "aaaaaadadadadadadadadaa",
          date: "2019-29-11",
          user: "user 0"
        }
      ]
    };
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
  padding: 10px;
  text-align: center;
  background: #f1f1f1;
}
.img-icon-user-conversation-right {
  float: right;
}
.span-content-message-right {
  float: right;
  border-radius: 20px 0px 0px 20px;
  border-right: none;
  background: #fffce1;
}
.div-content-message-right {
}
</style>
