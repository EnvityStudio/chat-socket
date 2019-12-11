<template>
    <div id="app">
        <router-view :socket="this.socket"/>
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
                socket: null
            };
        },
        created() {
            this.socket = io("http://172.16.110.138:3000");
            this.socket.on("connect", () => {
            this.connect();
            });
        },
        mounted() {
            //   this.socket.on("updateRoomsList", data => {
            //     this.rooms.push(data);
            //   });
            // this.socket.on("disconnect", () => {
            //   this.rooms = [];
            // });
            document.body.style.overflowY = "hidden";
        },
        methods: {
            connect() {
                
            }
            // createRoom() {
            //     // console.log("=======createRoom=====");
            //     this.socket.emit("createRoom", {
            //         name: this.nameroom,
            //         idRoom: "123"
            //     });
            //     this.nameroom = "";
            // },
            // addRoom() {
            //     this.rooms.push("aaaaaaaa");
            // }
        }
    };
</script>
<style lang="scss">
    .body {
        overflow-y: hidden;
    }
</style>