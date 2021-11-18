<template>
  <div class="mc-3 mt-3 ml-4 rounded-xl">
    <div class="container flex flex-col w-60">
      <div class="container">
        <img
          :src="ticket.Ticket.Event.posterUrl"
          class="object-cover rounded-t-xl"
        />
      </div>
      <div class="container p-5">
        <div class="container">
          <h3 class="text-2xl">Event: {{ ticket.Ticket.Event.title }}</h3>
        </div>
        <div class="container">
          <div class="mt-6 text-xs">
            <h5>
              Date: {{ ticket.Ticket.Event.date }} ,
              {{ ticket.Ticket.Event.held_In }}
            </h5>
          </div>
          <div class="mt-2 text-xs">
            <p></p>
          </div>
          <div class="container">
            <small>Description: {{ ticket.Ticket.Event.description }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTicket",
  computed: {
    ticket() {
      return this.$store.state.ticket;
    },
  },
  created() {
    this.$store.dispatch("toDetail");
  },
};
</script>

<style></style>
