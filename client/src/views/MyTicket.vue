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
      <h1 class="text-dark"><Strong>My ticket</Strong></h1>

      <MyTicketCard
        v-for="myTicket in myTickets"
        :key="myTicket.id"
        :myTicket="myTicket"
      ></MyTicketCard>
    </div>
  </div>
</template>

<script>
import MyTicketCard from "../components/MyTicketCard.vue";
export default {
  name: "MyTicket",
  components: {
    MyTicketCard,
  },
  computed: {
    myTickets() {
      return this.$store.state.myTickets;
    },
  },
  created() {
    this.$store.dispatch("fetchMyTciket");
  },
};
</script>

<style></style>
