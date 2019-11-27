<template>
  <div class="page list-room">
    <section class="section">
      <div>
        <span class="section_title">Room List</span>
      </div>
      <div class="rooms" v-if="rooms" v-show="rooms.length !== 0">
        <div class="rooms_detail item">
          Total Rooms: <span> {{ rooms.length }}</span>
        </div>
		<div class="list-room">
			<ul>
				<li v-for="room in rooms" :key="room.id">{{room.name}}</li>
			</ul>
		</div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ListRoom",
  props: ["message"],
  data: function() {
    return {
      rooms: [],
      errors: []
    };
  },
  computed: {},
  methods: {}
};
</script>
