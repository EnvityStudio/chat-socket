<template>
  <div class="write" data-chat="">
    <input type="text" class="write-chat" data-chat="17071995" />
    <div class="icons">
      <a href="#" class="icon-chat" data-chat=""
        ><i class="fa fa-smile-o"></i
      ></a>
      <label for="image-chat">
        <input
          type="file"
          id="image-chat"
          name="my-image-chat"
          class="image-chat"
          data-chat=""
        />
        <i class="fa fa-photo"></i>
      </label>
      <label for="attach-chat">
        <input
          type="file"
          id="attach-chat"
          name="my-attach-chat"
          class="attach-chat"
          data-chat=""
        />
        <i class="fa fa-paperclip"></i>
      </label>
      <a
        href="#streamModal"
        id="video-chat"
        class="video-chat"
        data-chat=""
        data-toggle="modal"
      >
        <i class="fa fa-video-camera"></i>
      </a>
      <input type="hidden" id="peer-id" value="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatBox",
};
</script>
