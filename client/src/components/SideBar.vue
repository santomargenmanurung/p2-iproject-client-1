<template>
  <!-- sideBar -->
  <div>
    <nav
      id="sidebar"
      class="col-md-3 col-lg-2 d-md-block collaps"
      style="background-color: #293b5f; padding-top: 0"
    >
      <h2 class="nav-link active my-4 text-white">Dashboard</h2>
      <div class="position-sticky">
        <ul class="nav flex-column mt-4">
          <li class="nav-item">
            <a
              href=""
              class="nav-link text-white"
              @click.prevent="goToEventPage"
            >
              <h5>Event List</h5></a
            >
          </li>
          <li class="nav-item">
            <a
              href=""
              class="nav-link text-white"
              @click.prevent="goToTicketPage"
              v-if="isLogedIn"
            >
              <h5>TicketList List</h5></a
            >
          </li>
        </ul>
        <div>
          <div class="input-group my-5">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search title"
              aria-label="Search"
              aria-describedby="search-addon"
              v-model="title"
            />
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="fetchEvents"
            >
              search
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      title: "",
    };
  },
  computed: {
    isLogedIn() {
      return this.$store.state.isLogedIn;
    },
  },
  methods: {
    goToEventPage() {
      this.$router.push({ name: "Home" });
    },
    goToTicketPage() {
      this.$router.push("/ticket");
    },
    fetchEvents() {
      this.$store.commit("SET_FILTER_TITLE", this.title);
      this.$store.dispatch("fetchEvents");
    },
  },
};
</script>

<style></style>
