<template>
  <div class="card-bookmark col-3">
    <div class="card mx-auto my-3">
      <img :src="event.posterUrl" class="card-img-top" height="250px" />
      <div class="card-body card-body text-black">
        <h6 class="card-title">Title: {{ event.title }}</h6>
        <p class="card-text">Date: {{ event.date }}</p>
        <p class="card-text">Held In: {{ event.held_iIn }}</p>
      </div>
      <a href="#" class="btn btn-info text-center text-light mx-3 my-2"
        >Detail</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: ["event"],
};
</script>

<style></style>
