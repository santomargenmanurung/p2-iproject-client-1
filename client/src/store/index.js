import Vue from "vue";
import Vuex from "vuex";
import Swal from "sweetalert2";
import instanceAxios from "../../apis/instanceAxios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogedIn: false,
    events: [],
    filter: {
      page: 1,
      title: "",
    },
    tickets: [],
    ticket: {},
    myTickets: [],
    payment: {},
  },
  mutations: {
    FETCH_EVENTS(state, payload) {
      state.events = payload;
    },
    THIS_PAGE(state, payload) {
      state.pages = payload;
    },
    SET_FILTER_TITLE(state, payload) {
      state.filter.title = payload;
    },
    SET_IS_LOGED_IN(state, payload) {
      state.isLogedIn = payload;
    },
    FETCH_TICKETS(state, payload) {
      state.tickets = payload;
    },
    FETCH_DETAIL_TICKET(state, payload) {
      state.ticket = payload;
    },
    FETCH_MY_TICKET(state, payload) {
      state.myTickets = payload;
    },
    SET_PAYMENT(state, payload) {
      state.payment = payload;
    },
  },
  actions: {
    async fetchEvents({ commit, state }) {
      try {
        const response = await instanceAxios({
          method: "GET",
          url: "customer/events",
          params: state.filter,
        });
        const events = response.data.events;
        const totalPages = response.data.totalPages;
        commit("FETCH_EVENTS", events);
        commit("THIS_PAGE", totalPages);
        commit("SET_FILTER_TITLE");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },
    async fetchTickets({ commit }) {
      try {
        const response = await instanceAxios({
          method: "GET",
          url: "/customer/tickets",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const tickets = response.data;
        commit("FETCH_TICKETS", tickets);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },
    async handlerLogin(contex, payload) {
      try {
        const response = await instanceAxios({
          method: "POST",
          url: "/customer/login",
          data: payload,
        });
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("no_Identity", response.data.no_Identity);
        contex.commit("SET_IS_LOGED_IN", true);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },
    async handlerRegister(_, payload) {
      try {
        const response = await instanceAxios({
          method: "POST",
          url: "/customer/register",
          data: payload,
        });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `you'r account ${response.data.username} succces registered.Now you can login`,
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },
    async googleLogin(contex, payload) {
      try {
        const id_token = payload.getAuthResponse().id_token;
        const response = await instanceAxios({
          method: "POST",
          url: "/customer/google-login",
          data: { id_token: id_token },
        });
        localStorage.setItem("access_token", response.data.access_token);
        contex.commit("SET_ISLOGEDIN", true);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },
    async toDetail(contex, payload) {
      try {
        const response = await instanceAxios({
          method: "GET",
          url: `customer/myTicket/${payload}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const ticket = response.data;
        contex.commit("FETCH_DETAIL_TICKET", ticket);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },
    async fetchMyTciket({ commit }) {
      try {
        const response = await instanceAxios({
          method: "GET",
          url: "/customer/myTicket",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const myTicket = response.data;
        commit("FETCH_MY_TICKET", myTicket);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },
    async toBuyTicket(_, payload) {
      try {
        await instanceAxios({
          method: "POST",
          url: `customer/ticket/${payload}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },
    async payment(contex) {
      try {
        const response = await instanceAxios({
          method: "GET",
          url: "customer/payment",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const payment = response.data;
        contex.commit("SET_PAYMENT", payment);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },
  },
  modules: {},
});
