<template>
  <div class="right">
    <TopMenuRight />
    <ChatText />
	<ChatBox/>
  </div>
</template>
<script>
import ChatText from "./ChatText";
import TopMenuRight from "./TopMenuRight";
import ChatBox from "./ChatBox";
export default {
  name: "RightSide",
  components: {
    ChatText,
    TopMenuRight,
    ChatBox,
  },
};
</script>
<style></style>
