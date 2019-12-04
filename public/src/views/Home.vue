<template>
  <div class="container-fluid">
    <div class="row content">
      <div class="col-sm-3 sidenav list-room-and-user position-fixed">
        <div class="content-user">
          <img
            src="../assets/icon_user.png"
            alt="icon-user"
            class="icon-user"
          />
          <span>USER NAME</span>
        </div>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="search rooms or friends"
          />
          <span class="input-group-btn">
            <button class="btn btn-default p-0" type="button">
              <img
                src="../assets/icon_search.png"
                alt="icon-search"
                class="navbar-toggler-icon"
              />
            </button>
          </span>
        </div>
        <hr />
        <div class="list-tab">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="selected = tab"
            :class="['tab-btn', { active: selected === tab }]"
          >
            {{ tab }}
          </button>
          <div id="scrollbar-list-room" class="scrollbar scrollbar-dusty-grass">
            <component :is="selected"></component>
          </div>
        </div>
      </div>

      <div class="col-sm-9 position-absolute conversation">
        <div id="content-group" class="content-group position-fixed">
          <img
            src="../assets/icon_group.png"
            alt="icon-group"
            class="icon-group"
          />
          <span>ROOM NAME</span>
          <hr />
        </div>
        <div
          id="scrollbar-list-conversation"
          class="content-conversation scrollbar scrollbar-near-moon"
        >
          <Conservation ref="conversation"></Conservation>
        </div>
        <div id="input-message" class="input-message position-fixed">
          <div class="input-group">
            <textarea
              class="form-control custom-control textarea-send-message"
              rows="2"
              style="resize:none"
              v-model="post.content"
            ></textarea>
            <span class="btn-send-message">
              <button class="btn btn-default p-0" type="button" @click="sendPost">
                <img
                  src="../assets/icon_send.png"
                  alt="icon-send-message"
                  class="navbar-toggler-icon icon-send-message"
                />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListRoom from "../components/room/ListRoom";
import ListFriend from "../components/room/ListFriend";
import Conservation from "../components/room/Conservation";
import $ from "jquery";
export default {
  name: "Home",
  components: {
    ListRoom,
    ListFriend,
    Conservation
  },
  mounted() {
    this.setScrollHeight(window.innerHeight);
  },
  data() {
    return {
      tabs: ["ListFriend", "ListRoom"],
      selected: "ListFriend",
      post: {
        content: '',
        user: 'user 0',
        date: '2019-29-11',
        roomId: '1'
      },
    };
  },
  methods: {
    setScrollHeight(screenHeight) {
      let [heightScrollbarListConversation, heightScrollbarListRoom] = [
            screenHeight - $("#content-group").height() - $("#input-message").height() - 20,
            screenHeight - $("#scrollbar-list-room").offset().top - 20
          ];
      $("#scrollbar-list-room").css("height", heightScrollbarListRoom + "px");
      $("#scrollbar-list-conversation").css("height", heightScrollbarListConversation + "px");
    },
    sendPost(){
      if(this.$refs.conversation.updateConversation(this.post)){
        this.post.content = '';
        setTimeout(function () {
          $("#scrollbar-list-conversation").scrollTop(10000);
        }, 100);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.row.content {
  height: 1500px;
}
.sidenav {
  background-color: #f1f1f1;
  height: 100%;
}
@media screen and (max-width: 767px) {
  .sidenav {
    height: auto;
    padding: 15px;
  }
  .row.content {
    height: auto;
  }
}
.list-room-and-user {
  min-width: 300px;
}
.navbar-toggler-icon {
  width: 35px;
  height: 35px;
  margin-left: 5px;
}
.icon-group {
  margin: 10px 10px 0px 10px;
  width: 50px;
  height: 50px;
}
.icon-user {
  margin: 10px;
  width: 50px;
  height: 50px;
}
.tab-btn {
  padding: 6px 10px;
  background: #f1f1f1;
  cursor: pointer;
  border: 2px solid #cccccc;
  outline: none;
}
.active {
  border-bottom: 3px solid #f8f9fa;
  background: #fcfcfc;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
.conversation {
  right: 10px;
}
.content-conversation {
  position: relative;
  margin-top: 80px;
  height: 100%;
  display: block;
}
.content-group {
  width: 90%;
}
.input-message {
  bottom: 2%;
  width: 74%;
}
.icon-send-message {
  width: 100%;
  height: 100%;
}
.btn-send-message {
  width: 70px;
  height: 70px;
}
.scrollbar-near-moon::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}
.scrollbar-near-moon::-webkit-scrollbar-thumb {
  border-radius: 0px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#5ee7df),
    to(#b490ca)
  );
  background-image: -webkit-linear-gradient(bottom, #5ee7df 0%, #b490ca 100%);
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
}
.scrollbar-dusty-grass::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  border-radius: 10px;
}
.scrollbar-dusty-grass::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}
.scrollbar-dusty-grass::-webkit-scrollbar-thumb {
  border-radius: 0px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-image: -webkit-linear-gradient(330deg, #f093fb 0%, #f5576c 100%);
  background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
}
.scrollbar {
  overflow-y: scroll;
}
.textarea-send-message {
  background: #f1f1f1;
}
</style>
