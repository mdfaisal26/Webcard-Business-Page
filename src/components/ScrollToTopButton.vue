<template>
  <div id="scrollToTopButton" @click="scrollToTop" v-show="showScrollButton">
    <i class="fas fa-arrow-up"></i>
    <!-- Replace with your Font Awesome arrow-up icon -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showScrollButton: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.showScrollButton = true;
      } else {
        this.showScrollButton = false;
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.showScrollButton = false;
    }
  }
};
</script>

<style>
/* Your button styles can be placed here */
#scrollToTopButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  margin-bottom: 20px;
  text-align: center;
}

#scrollToTopButton i {
  width: 16px;
}
</style>
