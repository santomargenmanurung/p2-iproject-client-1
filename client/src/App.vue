<template>
  <div id="app">
    <NavBar></NavBar>
    <SideBar></SideBar>
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_IS_LOGED_IN", true);
    }
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#sidebar {
  background-color: #73a1cf;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 90px 0 0;
  z-index: 99;
}
</style>
