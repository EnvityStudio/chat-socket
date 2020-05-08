<template>
  <div class="left">
    <div class="top form-group"></div>
    <ul class="people no-padding-start">
      <a class="room-chat">
        <li class="person">
          <Person />
        </li>
      </a>
      <a class="room-chat">
        <li class="person">
          <Person />
        </li>
      </a>
      <a class="room-chat">
        <li class="person">
          <Person />
        </li>
      </a>
      <a class="room-chat">
        <li class="person">
          <Person />
        </li>
      </a>
    </ul>
  </div>
</template>
<script>
import Person from "./Person";
export default {
  name: "LeftSide",
  components: {
    Person,
  },
};
</script>
<style></style>
