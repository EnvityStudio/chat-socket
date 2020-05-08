<template>
<div class="content-chat">
	<div class="chat">
		<div class="bubble you">
			Hello, Thuan Envity
		</div>
		<div class="bubble me">Hello world</div>
		<div class="bubble me bubble-image-file" ></div>
		<div class="bubble me bubble-image-file" ></div>
		<div class="bubble you bubble-image-file" ></div>
		<div class="bubble you bubble-image-file" ></div>
	</div>
</div>
</template>
<style lang="scss">
.chat {
  height: 100%;
  overflow: auto;
  position: relative;
  padding: 0 35px 10px;
  border-width: 1px 1px 1px 0;
  border-style: solid;
  border-color: #e6e6e6;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

 .bubble {
  max-width: 46%;
  word-wrap: break-word;
  font-size: 16px;
  position: relative;
  display: inline-block;
  clear: both;
  margin-top: 4px;
  margin-bottom: 4px;
  padding: 13px 14px;
  vertical-align: top;
  border-radius: 5px;
}
 .bubble:before {
  position: absolute;
  top: 19px;
  display: block;
  width: 8px;
  height: 6px;
  content: '\00a0';
  -webkit-transform: rotate(29deg) skew(-35deg);
  transform: rotate(29deg) skew(-35deg);
}
.me {
  float: right;
  color: #1a1a1a;
  background-color: #eceff1;
  -ms-flex-item-align: end;
  align-self: flex-end;
  -webkit-animation-name: slideFromRight;
  animation-name: slideFromRight;
}
.you {
  float: left;
  color: #fff;
  background-color: #2ECC71;
  -ms-flex-item-align: start;
  align-self: flex-start;
  -webkit-animation-name: slideFromLeft;
  animation-name: slideFromLeft;
}

.bubble-image-file {
  background-color: #FFF !important;
}

.bubble-image-file:before {
   background-color: #FFF !important;
}

</style>