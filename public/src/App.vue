<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import io from "socket.io-client";
export default {
  name: "App",
  data() {
    return {
      rooms: [],
      nameroom: "",
      socket: null,
      dataTest: ""
    };
  },
  created() {
    this.dataTest = process.env.BASE_URL;

    // this.socket = io("http://172.16.110.138:3000");
    // this.socket.on("connect", () => {
    //   this.connect();
    // });
  },
  mounted() {
    // console.log("aaa"),
    //   this.socket.on("updateRoomsList", data => {
    //     this.rooms.push(data);
    //   });
    // this.socket.on("disconnect", () => {
    //   this.rooms = [];
    // });
  },
  methods: {
    connect() {
      // this.socket.emit
      console.log("connectingggggggggggggggggggggg");
    },
    createRoom() {
      // console.log("=======createRoom=====");
      this.socket.emit("createRoom", {
        name: this.nameroom,
        idRoom: "123"
      });
      this.nameroom = "";
    },
    addRoom() {
      this.rooms.push("aaaaaaaa");
    }
  }
};
</script>
<style lang="scss"></style>
