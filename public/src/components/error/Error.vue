<template>
  <div class="form_error">
    <h1>Some thing went wrong!!!!!</h1>
    <h2>Page not found!!!</h2>
  </div>
</template>
<script>
export default {
  name: "Error",
  props: ["errors", "errorMessage"]
};
</script>
<style lang="scss" scoped></style>
