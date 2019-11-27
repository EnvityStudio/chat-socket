<template>
  <div class="page login">
    <section>
      <div>Register Here</div>
      <div class="section-content">
        <p>We hope will you enjoy our application!</p>
      </div>
      <div>
        <form @submit.prevent="handleSubmit" class="form">
          <span>We always welcome new Envity</span>
          <br />
          <div class="form-input-group">
            <input
              type="text"
              name="username"
              class=""
              placeholder="Enter your username"
              required
            />
            <label for="username">Username</label>
          </div>
          <div class="form-input-group">
            <input
              type="password"
              name="password"
              class=""
              placeholder="Enter your password"
              required
            />
            <label for="password">Password</label>
          </div>
          <div class="form-input-group">
            <span>Already have an account?</span>
            <br />
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </div>
          <button type="submit" class="form-submit">Register</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: function() {
    return {
		username: '',
		password: '',
		email: '',
		errors: []
	};
  },
  
};
</script>
