<template>
  <div class="page list-room">
    <table class="table-full-width">
      <tbody>
        <tr v-for="(room, index) in listRoom" :key="index">
          <td>
            <button
              type="button"
              class="btn btn-light btn-block btn-room-in-list"
              @click="chooseRoom(room)"
            >
              <img
                src="../../assets/icon_group.png"
                alt="icon-room"
                class="icon-room-in-list"
              />
              <span>{{ room.name }}</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  name: "ListRoom",
  props: ["message", "listRoom"],
  data: function() {
    return {
      rooms: [],
      errors: []
    };
  },
  computed: {},
  mounted() {
    // this.getListRoom();
  },
  methods: {
    chooseRoom(room) {
      //call API to get content
      this.$emit("chooseRoom", {
        type: 2,
        conversation: {
          icon: room.room_icon,
          name: room.room_name,
          content: []
        }
      });
	}
  }
};
</script>
<style lang="scss" scoped>
.table-full-width {
  width: 100%;
}

.icon-room-in-list {
  width: 50px;
  height: 50px;
  margin-right: 5%;
}

.btn-room-in-list {
  text-align: left;
}
</style>
