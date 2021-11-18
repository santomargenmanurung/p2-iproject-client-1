<template>
  <div class="card-bookmark col-3">
    <div class="card mx-auto my-3">
      <img :src="ticket.Event.posterUrl" class="card-img-top" height="250px" />
      <div class="card-body card-body text-black">
        <h6 class="card-title">Title: {{ ticket.Event.title }}</h6>
        <p class="card-text">Date: {{ ticket.Event.date }}</p>
        <p class="card-text">Held In: {{ ticket.Event.held_In }}</p>
        <p class="card-text">Held In: {{ ticket.Event.held_In }}</p>
        <p class="card-text">Capacity: {{ ticket.Event.capacity }}</p>
        <p class="card-text">Ticket: {{ ticket.status }}</p>
      </div>
    </div>
    <div>
      <a
        href="#"
        class="btn btn-primary text-center text-light mx-3 my-2"
        @click.prevent="toBuyTicket(ticket.id)"
        >Buy</a
      >
      <a
        href="#"
        class="btn btn-info text-center text-light mx-3 my-2"
        @click.prevent="toDetail(ticket.id)"
        >Detail</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketCard",
  props: ["ticket"],
  methods: {
    async toBuyTicket() {
      await this.$store.dispatch("toBuyTicket", this.ticket.id);
      this.$router.push({ name: "MyTicket" });
    },
    async toDetail() {
      await this.$store.dispatch("toDetail", this.ticket.id);
      this.$router.push("/detail-ticket");
    },
  },
};
</script>

<style></style>
