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

<style scoped>
#scrollToTopButton {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: linear-gradient(135deg, #8b4789 0%, #a876aa 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 5px 20px rgba(139, 71, 137, 0.4);
  z-index: 999;
  transition: all 0.2s ease;
  opacity: 0.95;
}

#scrollToTopButton:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 30px rgba(139, 71, 137, 0.6);
  opacity: 1;
}

#scrollToTopButton i {
  font-size: 20px;
  margin: 0;
}

@media only screen and (max-width: 768px) {
  #scrollToTopButton {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }

  #scrollToTopButton i {
    font-size: 18px;
  }
}
</style>
