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
import api from "../../api/service.api";
export default {
  name: "ListRoom",
  props: ["message"],
  data: function() {
    return {
      rooms: [],
      errors: [],
      listRoom: []
    };
  },
  computed: {},
  mounted() {
    this.getListRoom();
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
    },
    async getListRoom(currentUser) {
      return await api
        .getAllRooms(currentUser)
        .then(async res => {
          if (res.status === 200) {
            this.listRoom = res.data.rooms;
            console.log(res);
          }
        })
        .catch(error => {
          console.log(error);
          console.log("GET listRoom Fail!");
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
