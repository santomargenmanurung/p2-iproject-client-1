<template>
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
      <TicketCard
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
      ></TicketCard>
    </div>
  </div>
</template>

<script>
import TicketCard from "../components/TicketCard.vue";
export default {
  name: "Ticket",
  components: {
    TicketCard,
  },
  computed: {
    tickets() {
      return this.$store.state.tickets;
    },
  },
  created() {
    this.$store.dispatch("fetchTickets");
  },
};
</script>

<style></style>
