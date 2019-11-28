<template>
  <div>
    <section>
      <div>
        <span>Sign In</span>
      </div>
      <div>
        <form @submit.prevent="handleSubmit" class="form">
          <span>
            <ion-icon name="rocket" class="icon"></ion-icon>We are excited to
            see you again!
          </span>
          <br />
          <div class="form-input">
            <input
              type="text"
              name="username"
              class="form-control"
              placeholder="Enter your username"
              required
              v-model.trim="username"
            />
            <label for="username">Username</label>
          </div>

          <div class="form-input">
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Enter your password"
              pattern=".{5,15}"
              title="Password must be between 5 and 15 characters"
              required
              v-model.trim="password"
            />
            <label for="password">Password</label>
          </div>
          <div class="form-input">
            <span>Do you have an account?</span>
            <br />
            <router-link :to="{ name: 'Register' }">Register</router-link>
          </div>
          <button type="submit" class="form-submit">Login</button>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import api from "../../api/service.api";
// import setAuthToken from "../../utils/authToken";

export default {
  name: "Login",
  props: { message: String },
  components: {},
  data: function() {
    return {
      username: "",
      password: "",
      errorMessage: this.message,
      errors: []
    };
  },
  mounted() {
    if (this.errorMessage) {
      setTimeout(() => {
        this.errorMessage = "";
      }, 5000);
    }
  },
  methods: {
    async handleSubmit() {
      this.errors = [];
      if (this.username && this.password) {
        await api.loginUser({ username: this.username });
      }
    }
  }
};
</script>
