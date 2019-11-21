<template>
  <div id="app">
      <h1>aaaa</h1>
      <div v-for="(room, index) in rooms" v-bind:key = index 
      >{{room.name}} </div>
      <input v-model="nameroom" placeholder="type your name">
      <button v-on:click="this.createRoom">Click</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import io from 'socket.io-client';

export default {
  name: 'app',
  
  data(){
    return {
      rooms:[],
      nameroom: "",
      socket: null
    };
  },
  created(){
    this.socket = io('http://172.16.110.138:3000');
    this.socket.on('connect', () => {
      this.connect();
    });
  },
  mounted(){
    console.log("aaa"),
    this.socket.on('updateRoomsList', (data) => {
      this.rooms.push(data);
    });
    this.socket.on('disconnect', () => {
      this.rooms = [];
    })
  },
  methods:  {
    connect(){
      // this.socket.emit
      console.log("connectingggggggggggggggggggggg");
    }, 
    createRoom(){
      // console.log("=======createRoom=====");
      this.socket.emit('createRoom', {
        name: this.nameroom,
        idRoom: '123'
      });
      this.nameroom = "";
    },
    addRoom(){
      this.rooms.push("aaaaaaaa");
    }
  }
}
</script>
