<template>
  <div class="page list-room">
    <table class="table-full-width">
      <tbody>
        <tr v-for="friend in listFriend" :key="friend.id">
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
              <span>{{ friend.user_name }}</span>
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
  props: ["message"],
  data: function() {
    return {
      users: [],
      errors: [],
      listFriend: [
        {
          id: 1,
          user_name: "name 1",
          user_icon: ""
        },
        {
          id: 2,
          user_name: "name 2",
          user_icon: ""
        },
        {
          id: 3,
          user_name: "name 3",
          user_icon: ""
        },
        {
          id: 4,
          user_name: "name 4",
          user_icon: ""
        }
      ]
    };
  },
  computed: {},
  methods: {
    chooseFriend(friend) {
      let roomConservation = friend.id;
      this.$emit("chooseFriend", roomConservation);
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
