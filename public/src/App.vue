<template>
  <div id="app">
    <router-view :socket="this.socket" />
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: "App",
  data() {
    return {
      rooms: [],
      nameroom: "",
      socket: null,
      url_socket: process.env.VUE_APP_URL_SOCKET,
    };
  },
  created() {
    this.socket = io(this.url_socket);
    this.socket.on("connect", () => {
      this.connect();
    });
  },
  mounted() {
    document.body.style.overflowY = "hidden";
  },
  methods: {
    connect() {},
  },
};
</script>
<style lang="scss">
.body {
  overflow-y: hidden;
}
</style>
