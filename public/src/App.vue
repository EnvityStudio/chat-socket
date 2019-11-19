<template>
  <div id="app">
      <h1>aaaa</h1>
      <div v-for="(room, index) in rooms" v-bind:key = index 
      >{{room}} </div>
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
      socket: null
    };
  },
  created(){
    this.socket = io('http://localhost:8081');
    this.socket.on('connect', () => {
      this.connect();
    });
  },
  mounted(){
    this.socket.on('updateRoomsList', (data) => {
      this.rooms = data;
    });
    this.socket.on('disconnect', () => {
      this.rooms = [];
    })
  },
  methods:  {
    connect(){
      // this.socket.emit
      // console.log("connectingggggggggggggggggggggg");
    },
    createRoom(){
      this.socket.emit('createRoom', {
        title: 'this is title'
      });
    }
  }
}
</script>
