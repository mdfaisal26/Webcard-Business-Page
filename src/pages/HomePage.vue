<template>
  <div id="mainPage">
    <HeaderBar />
    <router-view></router-view>
    <ScrollToTopButton />
    <FooterPage />
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import FooterPage from "../components/FooterPage.vue";
import { RouterView } from "vue-router";
import ScrollToTopButton from "../components/ScrollToTopButton.vue";

export default {
  name: "HomePage",
  components: {
    HeaderBar,
    FooterPage,
    RouterView,
    ScrollToTopButton
  },
  mounted() {
    const nav = document.querySelector(".nav");
    window.addEventListener("scroll", fixNav);

    function fixNav() {
      if (window.scrollY > nav.offsetHeight - 10) {
        nav.classList.add("active");
        nav.classList.remove("bg-dark");
      } else {
        nav.classList.remove("active");
        nav.classList.add("bg-dark");
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

:root {
  --accent-color: #a876aa;
  --main-transition: all 0.3s ease-in-out;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Montserrat", sans-serif;
  color: #222;
}

p {
  margin-bottom: 2px;
}

a {
  color: unset;
}

#mainPage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
