<template>
  <div id="app">
    <Navbar :go="go" :isCurrentPage="isCurrentPage" :menu="menu"/>
    <router-view :go="go" :isCurrentPage="isCurrentPage"/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    menu: [
      { to: "/", page: "Home", icon: "fas fa-portrait" },
      { to: "/about", page: "About", icon: "fas fa-portrait" },
      // { to: "/work", page: "Work", icon: "fas fa-code" },
      { to: "/contact", page: "Contact", icon: "fas fa-address-card" }
    ],
    currentPage: ""
  }),
  methods: {
    go(to, page) {
      this.$router.push(to);
      this.currentPage = page;
      // this.drawer = false;
    },

    isCurrentPage(page) {
      if (page === this.currentPage) {
        return "active";
      }
      return "";
    }
  }
};
</script>


<style>
*,
html {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

.tc {
  text-align: center;
}

/* Button Ripple Effect */
.ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.5s, opacity 1s;
}

.ripple:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}
</style>

