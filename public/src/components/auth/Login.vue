<template>
  <div>
    <div class="container login-container">
      <div class="col-md-5 login-form-1">
        <img alt="icon-user" src="../../assets/user.jpg" class="user-icon" />
        <form @submit.prevent="handleSubmit" class="form">
          <div class="form-group">
            <input
              type="text"
              name="username"
              class="form-control"
              placeholder="Enter your username"
              required
              v-model.trim="username"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Enter your password"
              pattern=".{5,15}"
              title="Password must be between 5 and 15 characters"
              v-model.trim="password"
              required
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btnSubmit">Sign In</button>
          </div>
          <div class="form-group">
            <span>Don't have an account? </span>
            <router-link :to="{ name: 'Register' }">Sign up</router-link>
            <span> here</span>
          </div>
        </form>
      </div>
    </div>
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
<style lang="scss" scoped>
.container {
  margin: auto;
}
.login-container {
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
}
.login-form-1 {
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
  margin: auto;
  margin-top: 5%;
}
.login-form-1 h3 {
  text-align: center;
  color: #333;
}
.login-container form {
  padding: 10%;
}
.btnSubmit {
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  border: none;
  cursor: pointer;
}
.login-form-1 .btnSubmit {
  font-weight: 600;
  color: #fff;
  background-color: #0062cc;
}
.login-form-1 .ForgetPwd {
  color: #0062cc;
  font-weight: 600;
  text-decoration: none;
}
.user-icon {
  max-width: 150px;
}
</style>
