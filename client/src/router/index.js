import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddEvent from "../views/AddEvent.vue";
import Login from "../views/Login.vue";
import MyTicket from "../views/MyTicket.vue";
import Register from "../views/Register.vue";
import Ticket from "../views/Ticket.vue";
import DetailTicket from "../views/DetailTicket.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-event",
    name: "AddEvent",
    component: AddEvent,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/my-ticket",
    name: "MyTicket",
    component: MyTicket,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/ticket",
    name: "Ticket",
    component: Ticket,
  },
  {
    path: "/detail-ticket",
    name: "DetailTicket",
    component: DetailTicket,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
