<template>
  <div id="headerContainer">
    <div style="height: 67px" class="bg-dark"></div>
    <div class="nav bg-dark">
      <div class="container">
        <h1 class="logo">
          <a href="/">Web Card &nbsp;<i class="fa-solid fa-heart"></i></a>
        </h1>
        <ul>
          <li><a v-on:click="scrollTo('mainPage')">Home</a></li>
          <li><a v-on:click="scrollTo('sampleProjects')">Sample Projects</a></li>
          <li><router-link v-on:click="scrollTo('aboutUsContainer')" to="/about">About Us</router-link></li>
          <li><a v-on:click="scrollTo('footerContainer')">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  methods: {
    scrollTo(scrollid) {
      const scrollTop = ["aboutUsContainer", "mainPage"];
      if (scrollTop.includes(scrollid)) {
        if (scrollid == "mainPage") {
          this.$router.push("/");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        this.$router.push("/").then(() => {
          const scrollPage = document.getElementById(scrollid);
          const topOffset = scrollPage.offsetTop - 150; // Adjusted for 80px margin
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        });
      }
    }
  }
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: var(--main-transition);
  text-transform: uppercase;
  background-color: transparent;
  z-index: 1;
}

.nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  transition: var(--main-transition);
}

.nav ul {
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  margin: unset;
}

.nav a {
  position: relative;
  color: #fff;
  text-decoration: none;
  padding: 7px 15px;
  font-weight: 300;
  transition: var(--main-transition);
  display: flex;
  text-align: center;
  font-size: 12px;
}

.nav.active a:hover {
  color: var(--accent-color);
}

.nav * {
  font-size: 16px;
  letter-spacing: 0.1rem;
}

.nav a.current,
.nav a:hover {
  color: var(--accent-color);
  cursor: pointer;
}

.nav a.current {
  font-weight: 600;
}

.nav a.current::before {
  content: "";
  width: 50%;
  height: 2px;
  background-color: var(--accent-color);
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  transition: var(--main-transition);
}

.nav.active {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.nav.active a {
  color: #000;
}

.nav.active a.current::before {
  opacity: 0;
}

.nav.active .container {
  padding: 20px 0;
}

h1 {
  margin: unset;
}

@media (max-width: 700px) {
  .hero h1 {
    font-size: 30px;
  }
  ol,
  ul {
    padding: unset;
  }
  .nav .container {
    display: flex;
    flex-direction: column;
  }

  .nav .logo {
    /* display: none; */
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: center;
    width: 60%;
  }
}
</style>
