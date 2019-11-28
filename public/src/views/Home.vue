<template>
  <div class="home">
    <h1>Home</h1>
    <div>
      <router-link :to="{ name: 'Register' }">Register</router-link>
      <br/>
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home"
};
</script>
