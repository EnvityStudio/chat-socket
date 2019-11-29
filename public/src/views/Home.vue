<template>
    <div class="container-fluid">
        <div class="row content">
            <div class="col-sm-3 sidenav list-room-and-user">
                <div class="content-user">
                    <img src="../assets/icon_user.png" alt="icon-user" class="icon-user">
                    <span>USER NAME</span>
                </div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="search rooms or friends">
                    <span class="input-group-btn">
                      <button class="btn btn-default p-0" type="button">
                        <img src="../assets/icon_search.png" alt="icon-search" class="navbar-toggler-icon">
                      </button>
                    </span>
                </div>
                <hr>
                <div class="list-tab">
                    <button v-for="tab in tabs" :key="tab" @click="selected = tab" :class="['tab-btn', { active: selected === tab }]">
                        {{ tab }}
                    </button>

                    <component :is="selected"></component>
                </div>
            </div>

            <div class="col-sm-9">
                <div class="content-group">
                    <img src="../assets/icon_group.png" alt="icon-group" class="icon-group">
                    <span>ROOM NAME</span>
                </div>
                <hr>
                <div class="content-conversation">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ListRoom from '../components/room/ListRoom';
import ListFriend from '../components/room/ListFriend';
export default {
    name: 'Home',
    components: {
        ListRoom,
        ListFriend
    },
    data() {
        return{
            tabs: ["ListFriend", "ListRoom"],
            selected: "ListFriend"
        }
    }
}
</script>
<style lang="scss" scoped>
    /* Set height of the grid so .sidenav can be 100% (adjust if needed) */
    .row.content {height: 1500px}
    /* Set gray background color and 100% height */
    .sidenav {
        background-color: #f1f1f1;
        height: 100%;
    }
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
        .sidenav {
            height: auto;
            padding: 15px;
        }
        .row.content {height: auto;}
    }
    .list-room-and-user{
        min-width: 300px;
    }
    .navbar-toggler-icon{
        width: 35px;
        height: 35px;
        margin-left: 5px;
    }
    .icon-group{
        margin: 10px 10px 0px 10px;
        width: 50px;
        height: 50px;
    }
    .icon-user{
        margin: 10px;
        width: 50px;
        height: 50px;
    }
    .tab-btn {
        padding: 6px 10px;
        background: #f1f1f1;
        cursor: pointer;
        border: 2px solid #cccccc;
        outline: none;
    }
    .active {
        border-bottom: 3px solid #f8f9fa;
        background: #fcfcfc;
    }
    .tab {
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>