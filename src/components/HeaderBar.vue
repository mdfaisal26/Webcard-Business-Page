<template>
  <div id="headerContainer">
    <div style="height: 67px;" class="bg-dark"></div>
    <div class="nav bg-dark">
      <div class="container">
        <h1 class="logo"><a href="/"><i class="fa-solid fa-moon"></i> Web Card</a></h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><router-link to="/about">About Us</router-link></li>
          <!-- <li><a href="/">Services</a></li> -->
          <li><a v-on:click="scrollToFooter">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderBar',
  methods: {

    scrollToFooter(event) {
      // Check if the clicked link is the "Contact" link
      if (event.target.innerText.toLowerCase() === 'contact') {
        // Get the footer element by ID
        const footer = document.getElementById('footerContainer');

        // Scroll to the footer using smooth behavior
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

}
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



@media (max-width: 700px) {
  .hero h1 {
    font-size: 30px;
  }

  .nav .container {
    display: flex;
    flex-direction: column;
  }

  .nav .logo {
    display: none;
  }
}
</style>
