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
              class=""
              placeholder="Enter your username"
              required
              v-model.trim="username"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="password"
              class=""
              placeholder="Enter your password"
              pattern=".{5,15}"
              title="Password must be between 5 and 15 characters"
              v-model.trim="password"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="password"
              class=""
              placeholder="Confirm password"
              pattern=".{5,15}"
              title="Password must be between 5 and 15 characters"
              required
            />
          </div>
          <button type="submit" class="btnSubmit">Sign Up</button>
        </form>
        <div class="form-input-group">
          <span>Already have an account? </span>
          <router-link :to="{ name: 'Login' }">Sign in</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../api/service.api";
import setAuthToken from "../../utils/authToken";

export default {
  name: "Register",
  props: ["socket"],
  data: function() {
    return {
      username: "",
      password: "",
      email: "",
      errors: []
    };
  },
  created() {
  },
  computed: {},
  methods: {
    async handleSubmit() {
      this.errors = [];
      if (this.username && this.password) {
        await api
          .registerUser({ username: this.username, password: this.password })
          .then(async res => {
            console.log(res.status);
            if (res.status === 200) {
              localStorage.setItem("authToken", res.data.token);
              setAuthToken(res.data.token);
              this.$router.push({
                name: "Home"
              });
            }
          })
          .catch(error => {
            console.log(error);
            console.log("register failure!!!");
          });
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
  margin-top: 2%;
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
