<template>
  <section>
    <h3 class="header">Why choose Web Card for your wedding</h3>
    <div class="list-container">
      <div>
        <i class="fa-solid fa-circle-check"></i>
        <p>Pose for your pre-wedding glee, Let us display it for all to see!</p>
      </div>
      <div>
        <i class="fa-solid fa-circle-check"></i>
        <p>Show case your event's best photos of reception, haldi, mehendi on the big day!</p>
      </div>
      <div>
        <i class="fa-solid fa-circle-check"></i>
        <p>Digitalize your wedding card with your QR code! No multiple URLs to share! Everything happens within your
          personalised website.</p>
      </div>
    </div>
    <div class="faq-bt">
      <div class="btn btn-secondary">
        <router-link v-on:click="scrollTo('FAQ')" to="/FAQ">FAQ's</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyWedCard",
  methods: {
    scrollTo(scrollid) {
      const scrollTop = ["aboutUsContainer", "mainPage", "FAQ"];
      if (scrollTop.includes(scrollid)) {
        if (scrollid == "mainPage") {
          this.$router.push("/");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        this.$router.push("/").then(() => {
          const scrollPage = document.getElementById(scrollid);
          const topOffset = scrollPage.offsetTop - 130; // Adjusted for 130px margin
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        });
      }
    }
  }
};
</script>

<style scoped>
.header {
  text-align: center;
  margin: 15px 0;
}

.list-container div {
  display: flex;
  align-items: flex-start;
  margin: 5px 20px;
}

.list-container i {
  margin: 8px 10px 0 0;
}

.list-container p {
  color: #555;
  line-height: 30px;
  letter-spacing: 1.2px;
}

a:hover {
  color: white;
}

.faq-bt {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.faq-bt div {
  border-radius: 25px;
}

.faq-bt a {
  text-decoration: none;
}
</style>
