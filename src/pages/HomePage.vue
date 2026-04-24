<template>
  <div id="mainPage">
    <HeaderBar />
    <router-view></router-view>
    <ScrollToTopButton />
    <WhatsAppButton />
    <FooterPage />
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import FooterPage from "../components/FooterPage.vue";
import { RouterView } from "vue-router";
import ScrollToTopButton from "../components/ScrollToTopButton.vue";
import WhatsAppButton from "../components/WhatsAppButton.vue";

export default {
  name: "HomePage",
  components: {
    HeaderBar,
    FooterPage,
    RouterView,
    ScrollToTopButton,
    WhatsAppButton
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
  --primary-color: #8b4789;
  --primary-light: #a876aa;
  --accent-gold: #d4af37;
  --accent-gold-light: #f4d03f;
  --text-dark: #2c2c2c;
  --text-light: #666;
  --bg-light: #f9f9f9;
  --white: #ffffff;

  /* Fast, smooth animations */
  --transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  /* Legacy support */
  --accent-color: #a876aa;
  --main-transition: all 0.2s ease-in-out;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

body {
  font-family: "Montserrat", sans-serif;
  color: var(--text-dark);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

/* Smooth scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: var(--bg-light);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--primary-color), var(--accent-gold));
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, var(--accent-gold), var(--primary-color));
}

/* Selection color */
::selection {
  background: var(--primary-color);
  color: var(--white);
}

::-moz-selection {
  background: var(--primary-color);
  color: var(--white);
}

/* Page transitions */
@keyframes fadeInPage {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#mainPage {
  animation: fadeInPage 0.5s ease-in;
}
</style>
