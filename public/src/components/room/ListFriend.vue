<template>
  <div class="page list-room">
    <table class="table-full-width">
      <tbody>
        <tr v-for="(friend, index) in listFriend" :key="index">
          <td>
            <button
              type="button"
              class="btn btn-light btn-block btn-friend-in-list"
              @click="toggleSelectFriend(friend)"
            >
              <div style = "width: 100%">
                <div style="float: left">
                  <img
                    src="../../assets/icon_user.png"
                    alt="icon-room"
                    class="icon-friend-in-list"
                  />
                  <span>{{ friend.username }}</span>
                </div>
                <div style="float: left">
                  <img
                    src="../../assets/isOffline.png"
                    alt="icon-room"
                    class="icon-friend-online-offline"
                  />
                </div>
              </div>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListFriend",
  props: ["message", "listFriend"],
  data: function() {
    return {
      users: [],
      errors: []
    };
  },
  mounted() {
    // this.getListFriend();
  },
  methods: {
    toggleSelectFriend(friend) {
      //call API to get content
      this.$emit("toggleSelectFriend", friend);
    }
  }
};
</script>
<style lang="scss" scoped>
.table-full-width {
  width: 100%;
}

.icon-friend-in-list {
  width: 50px;
  height: 50px;
  margin-right: 5%;
}
.icon-friend-online-offline {
  width: 10px;
  height: 10px;
  margin-left: 5%;
}
.btn-friend-in-list {
  text-align: left;
}
</style>
