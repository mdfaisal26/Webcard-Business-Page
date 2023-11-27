<template>
  <div class="hero">
    <div>An invitation to unforgettable moments</div>
  </div>

  <section class="container content d-flex flex-column align-items-center">
    <h2>Make your day memoriable with us</h2>
    <p>We will make you the best invitaiton which people can't decline whom you love.</p>
    <CarouselOne />
    <div class="projects" id="sampleProjects">
      <a href="https://webcard-2.netlify.app/" role="button" target="_blank">
        <h2>Sample Projects</h2>
      </a>
    </div>
  </section>
</template>
<script>
import CarouselOne from "./CarouselOne.vue";

export default {
  name: "ContentPage",
  components: {
    CarouselOne
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

i {
  margin: 0 10px;
}

.hero {
  background-image: url("https://interactive.cntraveller.in/destination-wedding-guide/assets/img/ShangriLa2-1920x1080.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 90vh;
  /* color: #fff; */
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  z-index: -1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
}

.hero div {
  margin-bottom: 2em;
  font-weight: 500;
  background-color: #222222b8;
  color: white;
  /* mix-blend-mode: color-dodge; */
  font-size: 40px;
  padding: 5px 10px;
}

.hero p {
  font-size: 16px;
  letter-spacing: 0.2rem;
  font-weight: 200;
}

.content h2 {
  font-size: 150%;
  margin: 20px 0;
  text-transform: uppercase;
}

.content p {
  color: #555;
  line-height: 30px;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
}

.projects a {
  text-decoration: none;
}

.projects a h2 {
  padding: 8px;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  color: #222;
  border-radius: 5px;
  border: 1px solid black;
}

.projects a h2:hover {
  color: #fff;
  background-color: #555;
}

@media only screen and (max-width: 767px) {
  .hero {
    height: 40vh;
  }

  .hero div {
    font-weight: 500;
    background-color: #222222b8;
    color: white;
    /* mix-blend-mode: color-dodge; */
    font-size: 24px;
    padding: 5px 10px;
  }
}
</style>
