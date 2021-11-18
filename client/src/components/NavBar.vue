<template>
  <nav class="navbar navbar-expand-lg row" style="background-color: #293b5f">
    <div class="d-flex justify-content-end">
      <a
        class="nav-link active text-white justify-content-start mx-6"
        aria-current="page"
        href="#"
        @click.prevent="goToHomePage"
        ><h5><strong>Home</strong></h5></a
      >
      <a
        class="nav-link active text-white"
        aria-current="page"
        href="#"
        v-if="isLogedIn"
        @click.prevent="goToMyTicketPage"
        ><h5><strong>My Ticket</strong></h5></a
      >
      <a
        href="#"
        class="nav-link active text-white"
        v-if="!isLogedIn"
        @click.prevent="goToLoginPage"
        >Login</a
      >
      <a
        href="#"
        class="nav-link active text-white"
        v-if="!isLogedIn"
        @click.prevent="goToRegisterPage"
        >Register</a
      >
      <a
        class="nav-link active text-white"
        aria-current="page"
        href="#"
        v-if="isLogedIn"
        @click.prevent="logout"
        >Logout</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    isLogedIn() {
      return this.$store.state.isLogedIn;
    },
  },
  methods: {
    goToHomePage() {
      this.$router.push("/");
    },
    goToLoginPage() {
      this.$router.push("/login");
    },
    goToRegisterPage() {
      this.$router.push("/register");
    },
    goToMyTicketPage() {
      this.$router.push("/my-ticket");
    },
    logout() {
      localStorage.clear();
      this.$store.commit("SET_IS_LOGED_IN", false);
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
