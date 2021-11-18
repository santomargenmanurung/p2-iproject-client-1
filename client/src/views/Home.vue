<template>
  <div class="home">
    <div class="container ml-4">
      <div
        class="
          row
          d-flex
          justify-content-center
          align-items-center
          p-3
          text-light
        "
      >
        <CardEvent
          v-for="event in events"
          :key="event.id"
          :event="event"
        ></CardEvent>

        <div class="d-flex justify-content-center my-5">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" @click.prevent="gotoPage('prev')"
                  >Previous</a
                >
              </li>
              <li class="page-item">
                <a class="page-link" href="#" @click.prevent="gotoPage(1)">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" @click.prevent="gotoPage(2)">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" @click.prevent="gotoPage(3)">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" @click.prevent="gotoPage(4)">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" @click.prevent="gotoPage('next')"
                  >Next</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardEvent from "../components/EventCard.vue";

export default {
  name: "Home",
  components: { CardEvent },
  computed: {
    events() {
      return this.$store.state.events;
    },
  },
  methods: {
    gotoPage(page) {
      switch (page) {
        case "next":
          this.$store.commit("INCREMENT_PAGE");
          break;
        case "prev":
          this.$store.commit("DECREMENT_PAGE");
          break;
        default:
          this.$store.commit("SET_PAGE", page);
          break;
      }
      this.$store.dispatch("fetchEvents");
    },
  },
  created() {
    this.$store.dispatch("fetchEvents");
  },
};
</script>
