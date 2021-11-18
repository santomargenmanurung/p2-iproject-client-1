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
        <h1 class="text-4xl text-light">Add New Event</h1>
        <form @submit.prevent="handlerRegister">
          <div class="input-group mb-3">
            <input
              id="form-register-title"
              type="text"
              class="form-control my-2"
              placeholder="Title"
            />
          </div>
          <div class="input-group mb-3">
            <input
              id="form-register-date"
              type="email"
              class="form-control my-2"
              placeholder="Date in (day/moth/year)"
            />)
          </div>
          <div class="input-group mb-3">
            <input
              id="form-register-poster"
              type="file"
              class="form-control my-2"
              placeholder="porter"
            />
          </div>
          <div class="input-group mb-3">
            <input
              id="form-register-capacity"
              type="number"
              class="form-control my-2"
              placeholder="Capacity"
            />
          </div>
          <div class="input-group mb-3">
            <input
              id="form-register-heldl-in"
              type="text"
              class="form-control my-2"
              placeholder="Held In"
            />
          </div>
          <div class="input-group mb-3">
            <input
              id="form-register-description"
              type="text"
              class="form-control my-2"
              placeholder="Description"
            />
          </div>
          <div class="d-grid gap-2">
            <button
              class="btn text-light my-4"
              type="submit"
              style="background-color: #222831"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddEvent",
};
</script>

<style></style>
