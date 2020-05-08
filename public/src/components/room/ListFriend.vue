<template>
  <div class="page list-room">
    <table class="table-full-width">
      <tbody>
        <tr
          v-for="(friend, index) in listFriend"
          :key="index"
          :class="[friend.class]"
        >
          <td>
            <button
              type="button"
              class="btn btn-light btn-block btn-friend-in-list button-container"
              @click="toggleSelectFriend(friend, index)"
            >
			<div>{{friend.class.active }}</div>
              <div class="div-img-content">
                  <div class="d-flex justify-content-center ada">
                    <div class="image_outer_container">
                      <div v-bind:class="[(friend.class.active === true) ? 'green_icon' : 'gray_icon']"></div>
                      <div class="image_inner_container">
                        <img
                            src="../../assets/icon_user.png"
                            alt="icon-room"
                            class="icon-friend-in-list"
                        />
                      </div>
                    </div>
                  </div>
              </div>
              <div class="div-span-content">
                <span>{{ friend.username }}</span>
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
    toggleSelectFriend(friend, index) {
      //call API to get content
      this.$emit("toggleSelectFriend", { friend: friend, index: index });
	},
	updateListFriend(listFriend){
		console.log("upateeeeeeeeeeeeeeeeeee");
		this.listFriend = listFriend
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
.image_outer_container{
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 50%;
  position: relative;
}

.image_inner_container{
  border-radius: 50%;
  background: #833ab4;
  background: -webkit-linear-gradient(to bottom, #fcb045, #fd1d1d, #833ab4);
  background: linear-gradient(to bottom, #fcb045, #fd1d1d, #833ab4);
}
.image_inner_container img{
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 2px solid white;
}

.image_outer_container .green_icon{
  background-color: #4cd137;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 20px;
  width: 20px;
  border:1px solid white;
  border-radius: 50%;
}

.image_outer_container .gray_icon{
  background-color: #818182;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 20px;
  width: 20px;
  border:1px solid white;
  border-radius: 50%;
}

.button-container{
  clear: both;
}

.div-img-content{
  float: left;
  margin-right: 10px;
}

.div-span-content{
  float: left;
  margin-top: 15px;
}
</style>
