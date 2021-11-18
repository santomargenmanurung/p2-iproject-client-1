<template>
  <div
    id="register"
    class="container d-flex justify-content-center align-items-center"
    style="height: 90vh"
  >
    <div
      class="card w-50"
      style="background-color: #293b5f; border-radius: 10px"
    >
      <div class="row justify-content-center align-items-center mx-5 my-5">
        <form @submit.prevent="handlerRegister">
          <h2 class="mb-4 text-light">Register</h2>
          <div class="input-group mb-3">
            <input
              v-model="name"
              id="form-register-name"
              type="text"
              class="form-control my-2"
              placeholder="Name"
            />
          </div>
          <div class="input-group mb-3">
            <input
              v-model="username"
              id="form-register-username"
              type="text"
              class="form-control my-2"
              placeholder="Username"
            />
          </div>
          <div class="input-group mb-3">
            <input
              v-model="email"
              id="form-register-email"
              type="email"
              class="form-control my-2"
              placeholder="Email"
            />
          </div>
          <div class="input-group mb-3">
            <input
              v-model="password"
              id="form-register-password"
              type="password"
              class="form-control my-2"
              placeholder="Password"
            />
          </div>
          <div class="input-group mb-3">
            <input
              v-model="no_Identity"
              id="form-register-no-identity"
              type="text"
              class="form-control my-2"
              placeholder="No-Identity"
            />
          </div>

          <div class="d-grid gap-2">
            <button
              class="btn text-light my-4"
              type="submit"
              style="background-color: #222831"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      no_Identity: "",
    };
  },
  methods: {
    async handlerRegister() {
      const payload = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        no_Identity: this.no_Identity,
      };
      await this.$store.dispatch("handlerRegister", payload);
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
