<template>
    <div class="page list-room">
        <table class="table-full-width">
            <tbody>
            <tr v-for="room in listRoom" :key="room.id">
                <td>
                    <button type="button"
                            class="btn btn-light btn-block btn-room-in-list"
                            @click="chooseRoom(room)">
                        <img src="../../assets/icon_group.png"
                             alt="icon-room"
                             class="icon-room-in-list"/>
                        <span>{{ room.room_name }}</span>
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
        props: ["message"],
        data: function () {
            return {
                rooms: [],
                errors: [],
                listRoom: [
                    {
                        id: 1,
                        room_name: "room 1",
                        icon: ""
                    },
                    {
                        id: 2,
                        room_name: "room 2",
                        icon: ""
                    },
                    {
                        id: 3,
                        room_name: "room 3",
                        icon: ""
                    },
                    {
                        id: 4,
                        room_name: "room 4",
                        icon: ""
                    }
                ]
            };
        },
        computed: {},
        methods: {
            chooseRoom(room) {
                let roomConservation = room.id;
                this.$emit("chooseRoom", roomConservation);
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
