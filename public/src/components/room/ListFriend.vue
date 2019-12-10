<template>
  <div class="page list-room">
    <table class="table-full-width">
      <tbody>
        <tr v-for="(friend, index) in listFriend" :key="index">
          <td>
            <button
              type="button"
              class="btn btn-light btn-block btn-friend-in-list"
              @click="chooseFriend(friend)"
            >
              <img
                src="../../assets/icon_user.png"
                alt="icon-room"
                class="icon-friend-in-list"
              />
              <span>{{ friend.username }}</span>
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
  name: "ListFriend",
  props: ["message"],
  data: function() {
    return {
      users: [],
      errors: [],
      listFriend: []
    };
  },
  mounted() {
    this.getListFriend();
  },
  methods: {
    chooseFriend(friend) {
      //call API to get content
      this.$emit("chooseFriend", {
        type: 1,
        conversation: {
          icon: friend.social.image,
          name: friend.username,
          content: []
        }
      });
    },
    async getListFriend(currentUser) {
      return await api
        .getAllUsers(currentUser)
        .then(async res => {
          if (res.status === 200) {
            this.listFriend = res.data.users;
          }
        })
        .catch(error => {
          console.log(error);
          console.log("GET listFriend Fail!");
        });
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

.btn-friend-in-list {
  text-align: left;
}
</style>
