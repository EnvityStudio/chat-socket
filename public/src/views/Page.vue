<template>
  <div>
    <div>
      <Navbar />
    </div>
	<div class="container-fluid">
    <div class="col-sm-3 sidenav no-padding"><LeftSide /></div>
    <div class="col-sm-9 sidenav no-padding"><RightSide/></div>
	</div>
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar";
import RightSide from "../components/layout/RightSide";
import LeftSide from "../components/layout/LeftSide";
export default {
  components: {
    Navbar,
    RightSide,
    LeftSide,
  },
};
</script>

<style>
@import "../assets/css/bower_components/bootstrap/dist/css/bootstrap.css";
@import "../assets/css/bower_components/font-awesome/css/font-awesome.css";
@import "../assets/css/bower_components/AlertifyJS/build/css/alertify.css";
@import "../assets/css/bower_components/font-awesome/css/font-awesome.css";
@import "../assets/css/bower_components/emojionearea/dist/emojionearea.min.css";
@import "../assets/css/bower_components/photoset-grid/css/colorbox.css";
@import "../assets/css/css/style.css";
</style>
