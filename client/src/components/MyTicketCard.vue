<template>
  <div class="card-bookmark col-3">
    <div class="card mx-auto my-3">
      <img
        :src="myTicket.Ticket.Event.posterUrl"
        class="card-img-top"
        height="250px"
      />
      <div class="card-body card-body text-black">
        <h6 class="card-title">Title: {{ myTicket.Ticket.Event.title }}</h6>
        <p class="card-text">Date: {{ myTicket.Ticket.Event.date }}</p>
      </div>
      <a
        href="#"
        class="btn btn-danger text-center text-light mx-3 my-2"
        @click="payment(myTicket.id)"
        >Payment</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTicketCard",
  props: ["myTicket"],
  methods: {
    payment() {
      this.$store.dispatch("payment", this.myTicket.id);
    },
  },
};
</script>

<style></style>
