<template>
  <!-- Modern Hero Section -->
  <div class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title animate-fade-in">
        Your Story,<br class="mobile-break"> Beautifully Told
      </h1>
      <p class="hero-subtitle animate-fade-in-delay">
        Create stunning digital wedding invitations that your guests will cherish forever
      </p>
      <div class="hero-features animate-slide-up">
        <div class="feature-badge">
          <i class="fa-solid fa-qrcode"></i>
          <span>QR Code Ready</span>
        </div>
        <div class="feature-badge">
          <i class="fa-solid fa-clock"></i>
          <span>24-48 Hours</span>
        </div>
        <div class="feature-badge">
          <i class="fa-solid fa-palette"></i>
          <span>Fully Custom</span>
        </div>
        <div class="feature-badge">
          <i class="fa-solid fa-leaf"></i>
          <span>Eco-Friendly</span>
        </div>
      </div>
      <div class="hero-cta animate-slide-up-delay">
        <a @click="scrollToPortfolio" class="btn-primary-large pulse">
          <i class="fa-solid fa-images"></i> View Sample Invitation
        </a>
        <a href="https://wa.me/917411242726?text=Hi!%20I'm%20interested%20in%20creating%20a%20digital%20wedding%20invitation.%20Can%20you%20help%20me%20get%20started?" target="_blank" rel="noopener noreferrer" class="btn-secondary-large">
          <i class="fa-brands fa-whatsapp"></i> Get Started Now
        </a>
      </div>
      <p class="trust-line animate-fade-in-late">
        <i class="fa-solid fa-check-circle"></i> Trusted by 100+ happy couples across India
      </p>
    </div>
    <div class="scroll-indicator">
      <i class="fa-solid fa-chevron-down"></i>
    </div>
  </div>

  <section class="container content">
    <!-- Portfolio Section with Multiple Samples -->
    <div id="portfolio" class="portfolio-section">
      <h2 class="section-title">Our Stunning Designs</h2>
      <p class="section-subtitle">Every invitation tells a unique love story</p>

      <div :class="['portfolio-grid', { 'showAllSamples': showAllSamples }]">
        <div class="portfolio-card" v-for="(sample, index) in displayedSamples" :key="index">
          <div class="portfolio-image">
            <img :src="sample.thumbnail" :alt="sample.name" />
            <div class="portfolio-overlay">
              <div class="overlay-content">
                <h3>{{ sample.name }}</h3>
                <p>{{ sample.category }}</p>
                <a :href="sample.link" target="_blank" class="btn-view-sample">
                  <i class="fa-solid fa-external-link-alt"></i> View Live Demo
                </a>
              </div>
            </div>
          </div>
          <div class="portfolio-info">
            <h4>{{ sample.name }}</h4>
            <span class="category-tag">{{ sample.category }}</span>
          </div>
        </div>
      </div>

      <div class="view-more-section" v-if="portfolioSamples.length > 4">
        <button @click="showAllSamples = !showAllSamples" class="btn-view-more">
          <i :class="showAllSamples ? 'fa-solid fa-chevron-up' : 'fa-solid fa-images'"></i>
          {{ showAllSamples ? 'Show Less' : 'View More Samples' }}
        </button>
      </div>

      <div class="portfolio-cta">
        <div class="cta-content">
          <h2>
            <i class="fa-solid fa-rocket"></i>
            <span>Ready to Create Your Perfect Invitation?</span>
          </h2>
          <p>Join hundreds of happy couples who chose digital</p>
          <a @click="scrollToContact" class="btn-secondary">
            <i class="fa-solid fa-paper-plane"></i>
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <TestimonialsSection />

  <section class="container content">
    <!-- Why Choose Us Section -->
    <EasySteps />
    <WhyWedCard />
  </section>
</template>

<script>
import EasySteps from "./EasySteps.vue";
import WhyWedCard from "./WhyWedCard.vue";
import TestimonialsSection from "./TestimonialsSection.vue";

export default {
  name: "ContentPage",
  components: {
    EasySteps,
    WhyWedCard,
    TestimonialsSection
  },
  data() {
    return {
      showAllSamples: false,
      portfolioSamples: [
        {
          name: "Royal Elegance",
          category: "Wedding",
          thumbnail: require("../assets/CarousalPics/1.jpg"),
          link: "https://webcard-2.netlify.app/"
        },
        {
          name: "Modern Romance",
          category: "Wedding",
          thumbnail: require("../assets/CarousalPics/2.jpg"),
          link: "https://meenaz-weds-nabeela.netlify.app/"
        },
        {
          name: "Traditional Charm",
          category: "Wedding",
          thumbnail: require("../assets/CarousalPics/3.jpg"),
          link: "https://webcard-2.netlify.app/"
        },
        {
          name: "Floral Dreams",
          category: "Wedding",
          thumbnail: require("../assets/CarousalPics/4.jpg"),
          link: "https://meenaz-weds-nabeela.netlify.app/"
        },
        {
          name: "Golden Celebration",
          category: "Engagement",
          thumbnail: require("../assets/CarousalPics/5.jpg"),
          link: "https://webcard-2.netlify.app/"
        },
        {
          name: "Vintage Love",
          category: "Anniversary",
          thumbnail: require("../assets/CarousalPics/6.webp"),
          link: "https://meenaz-weds-nabeela.netlify.app/"
        },
        {
          name: "Eternal Bond",
          category: "Wedding",
          thumbnail: require("../assets/CarousalPics/7.webp"),
          link: "https://webcard-2.netlify.app/"
        },
        {
          name: "Blissful Union",
          category: "Wedding",
          thumbnail: require("../assets/CarousalPics/8.webp"),
          link: "https://meenaz-weds-nabeela.netlify.app/"
        }
      ]
    };
  },
  computed: {
    displayedSamples() {
      if (this.showAllSamples) {
        return this.portfolioSamples;
      }
      // Show 4 on mobile, 6 on desktop - controlled by CSS grid
      return this.portfolioSamples.slice(0, 6);
    }
  },
  methods: {
    scrollToContact() {
      const footer = document.getElementById("footerContainer");
      if (footer) {
        const topOffset = footer.offsetTop - 130;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    },
    scrollToPortfolio() {
      const portfolio = document.getElementById("portfolio");
      if (portfolio) {
        const topOffset = portfolio.offsetTop - 100;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    }
  }
};
</script>

<style scoped>
/* ========== Modern Hero Section ========== */
.hero {
  position: relative;
  background-image: url("../assets/Wed-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(168, 118, 170, 0.5) 0%,
    rgba(139, 71, 137, 0.54) 50%,
    rgba(212, 175, 55, 0.44) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  padding: 0 40px 100px;
}

.hero-title {
  font-size: 72px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 28px;
  line-height: 1.1;
  text-shadow:
    0 5px 25px rgba(0, 0, 0, 0.6),
    0 3px 12px rgba(0, 0, 0, 0.5),
    0 1px 5px rgba(0, 0, 0, 0.4);
  letter-spacing: -1px;
  white-space: nowrap;
}

.mobile-break {
  display: none;
}

.hero-subtitle {
  font-size: 23px;
  color: #fff;
  margin-bottom: 50px;
  font-weight: 500;
  line-height: 1.55;
  opacity: 1;
  text-shadow:
    0 4px 16px rgba(0, 0, 0, 0.6),
    0 2px 10px rgba(0, 0, 0, 0.5),
    0 1px 4px rgba(0, 0, 0, 0.4);
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2));
  padding: 12px 28px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: inline-block;
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 800px;
  margin: 0 auto 55px;
}

.feature-badge {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.35));
  backdrop-filter: blur(16px);
  border: 1.5px solid rgba(255, 255, 255, 0.65);
  padding: 14px 18px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.25),
    0 2px 6px rgba(0, 0, 0, 0.18),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;
}

.feature-badge::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  transition: all 0.6s ease;
}

.feature-badge:hover::before {
  left: 100%;
}

.feature-badge:hover {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.5));
  transform: translateY(-5px) scale(1.02);
  box-shadow:
    0 12px 35px rgba(0, 0, 0, 0.4),
    0 5px 12px rgba(0, 0, 0, 0.3),
    inset 0 2px 6px rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.9);
}

.feature-badge i {
  font-size: 26px;
  margin: 0;
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.35));
  animation: icon-float 3s ease-in-out infinite;
}

.feature-badge:hover i {
  transform: scale(1.08);
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.45));
}

@keyframes icon-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 38px;
}

.btn-primary-large,
.btn-secondary-large {
  padding: 21px 48px;
  font-size: 17px;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 11px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  font-family: "Montserrat", sans-serif;
  white-space: nowrap;
  letter-spacing: 0.4px;
}

.btn-primary-large {
  background: linear-gradient(135deg, #b888ba 0%, #a876aa 50%, #8b4789 100%);
  color: #fff;
  box-shadow:
    0 14px 45px rgba(168, 118, 170, 0.6),
    0 5px 16px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-primary-large:hover {
  transform: translateY(-4px);
  box-shadow:
    0 18px 60px rgba(168, 118, 170, 0.75),
    0 7px 22px rgba(0, 0, 0, 0.35),
    inset 0 1px 3px rgba(255, 255, 255, 0.2);
  background: linear-gradient(135deg, #c898ca 0%, #b888ba 50%, #9b5799 100%);
}

.btn-primary-large i {
  font-size: 18px;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

.btn-secondary-large i {
  font-size: 19px;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
}

.btn-secondary-large {
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(14px);
  color: #fff;
  border: 2.5px solid rgba(255, 255, 255, 0.65);
  box-shadow:
    0 8px 28px rgba(0, 0, 0, 0.2),
    0 3px 10px rgba(0, 0, 0, 0.15);
}

.btn-secondary-large:hover {
  background: rgba(255, 255, 255, 1);
  color: #8b4789;
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 1);
  box-shadow:
    0 12px 40px rgba(255, 255, 255, 0.5),
    0 5px 15px rgba(0, 0, 0, 0.2);
}

.trust-line {
  color: #fff;
  font-size: 16px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-shadow:
    0 3px 10px rgba(0, 0, 0, 0.5),
    0 2px 6px rgba(0, 0, 0, 0.4);
  font-weight: 600;
  letter-spacing: 0.3px;
  background: rgba(0, 0, 0, 0.15);
  padding: 10px 24px;
  border-radius: 30px;
  display: inline-flex;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.trust-line i {
  color: #f4d03f;
  margin: 0;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
  font-size: 20px;
  animation: pulse-subtle 2s ease-in-out infinite;
}

@keyframes pulse-subtle {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s infinite;
  background: rgba(255, 255, 255, 0.12);
  padding: 12px 18px;
  border-radius: 50px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.scroll-indicator i {
  color: #fff;
  font-size: 28px;
  opacity: 0.9;
  margin: 0;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
}

/* ========== Animations ========== */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-15px);
  }
  60% {
    transform: translateX(-50%) translateY(-10px);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 14px 45px rgba(168, 118, 170, 0.6);
  }
  50% {
    box-shadow: 0 18px 60px rgba(168, 118, 170, 0.8);
  }
  100% {
    box-shadow: 0 14px 45px rgba(168, 118, 170, 0.6);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 0.6s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out 0.4s forwards;
  opacity: 0;
}

.animate-slide-up-delay {
  animation: slideUp 0.6s ease-out 0.6s forwards;
  opacity: 0;
}

.animate-fade-in-late {
  animation: fadeIn 0.6s ease-out 0.8s forwards;
  opacity: 0;
}

.pulse {
  animation: pulse 2s infinite;
}

/* ========== Portfolio Section ========== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.portfolio-section {
  padding: 80px 0;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  color: #2c2c2c;
  position: relative;
}

.section-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #8b4789, #d4af37);
  margin: 20px auto 0;
  border-radius: 2px;
}

.section-subtitle {
  text-align: center;
  font-size: 17px;
  color: #666;
  margin-bottom: 55px;
  font-weight: 300;
  line-height: 1.5;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-bottom: 55px;
}

.portfolio-card {
  border-radius: 15px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(139, 71, 137, 0.2);
}

.portfolio-image {
  position: relative;
  overflow: hidden;
  height: 350px;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-card:hover .portfolio-image img {
  transform: scale(1.1);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(139, 71, 137, 0.95) 0%,
    rgba(212, 175, 55, 0.9) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: #fff;
  padding: 20px;
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.portfolio-card:hover .overlay-content {
  transform: translateY(0);
}

.overlay-content h3 {
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 600;
}

.overlay-content p {
  font-size: 16px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.btn-view-sample {
  display: inline-block;
  padding: 12px 30px;
  background: #fff;
  color: #8b4789;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}

.btn-view-sample:hover {
  background: #d4af37;
  color: #fff;
  transform: scale(1.05);
}

.portfolio-info {
  padding: 20px;
}

.portfolio-info h4 {
  font-size: 20px;
  color: #2c2c2c;
  margin-bottom: 8px;
  font-weight: 600;
}

.category-tag {
  display: inline-block;
  padding: 6px 15px;
  background: linear-gradient(135deg, #8b4789, #a876aa);
  color: #fff;
  font-size: 12px;
  border-radius: 20px;
  font-weight: 500;
}

.view-more-section {
  text-align: center;
  margin: 40px 0;
}

.btn-view-more {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 35px;
  background: transparent;
  color: #8b4789;
  border: 2px solid #8b4789;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Montserrat", sans-serif;
}

.btn-view-more:hover {
  background: #8b4789;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 71, 137, 0.3);
}

.btn-view-more i {
  font-size: 18px;
  margin: 0;
}

.portfolio-cta {
  text-align: center;
  padding: 50px 35px;
  background: linear-gradient(135deg, rgba(139, 71, 137, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%);
  border-radius: 20px;
  margin-top: 40px;
}

.cta-content h2 {
  font-size: 28px;
  color: #2c2c2c;
  margin-bottom: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.cta-content h2 i {
  color: #8b4789;
  font-size: 28px;
  margin: 0;
}

.cta-content p {
  font-size: 18px;
  color: #666;
  margin-bottom: 28px;
  font-weight: 400;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 40px;
  background: linear-gradient(135deg, #8b4789 0%, #a876aa 100%);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 17px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(139, 71, 137, 0.4);
}

.btn-secondary i {
  font-size: 18px;
  margin: 0;
}

/* ========== Responsive Design ========== */
@media only screen and (max-width: 768px) {
  .hero {
    min-height: 100vh;
    height: auto;
    background-attachment: scroll;
    background-position: center 35%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(139, 71, 137, 0.2) 25%,
      rgba(139, 71, 137, 0.35) 50%,
      rgba(139, 71, 137, 0.45) 75%,
      rgba(139, 71, 137, 0.55) 100%
    );
  }

  .hero-content {
    padding: 35px 26px 90px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    font-size: 48px;
    margin-bottom: 50px;
    line-height: 1.15;
    white-space: normal;
    word-wrap: break-word;
    text-shadow:
      0 4px 20px rgba(0, 0, 0, 0.6),
      0 2px 10px rgba(0, 0, 0, 0.45);
    font-weight: 900;
    letter-spacing: -0.5px;
  }

  .mobile-break {
    display: inline;
  }

  .hero-subtitle {
    font-size: 17px;
    margin-bottom: 0;
    line-height: 1.55;
    max-width: 310px;
    margin-left: auto;
    margin-right: auto;
    text-shadow:
      0 4px 16px rgba(0, 0, 0, 0.7),
      0 2px 8px rgba(0, 0, 0, 0.5),
      0 1px 3px rgba(0, 0, 0, 0.4);
    font-weight: 500;
    opacity: 1;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.15));
    padding: 8px 16px;
    border-radius: 8px;
    backdrop-filter: blur(4px);
  }

  .hero-features {
    display: none;
  }

  .hero-cta {
    flex-direction: column;
    gap: 13px;
    align-items: center;
    width: 100%;
    margin-top: 38px;
    margin-bottom: 24px;
  }

  .btn-primary-large {
    width: 100%;
    max-width: 290px;
    padding: 18px 28px;
    font-size: 14px;
    font-weight: 700;
    justify-content: center;
    text-align: center;
    background: linear-gradient(135deg, #b888ba 0%, #a876aa 50%, #8b4789 100%) !important;
    color: #fff !important;
    box-shadow:
      0 10px 35px rgba(168, 118, 170, 0.55),
      0 4px 14px rgba(0, 0, 0, 0.3);
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    white-space: nowrap;
  }

  .btn-primary-large:hover {
    background: linear-gradient(135deg, #c898ca 0%, #b888ba 50%, #9b5799 100%) !important;
    box-shadow:
      0 14px 45px rgba(168, 118, 170, 0.65),
      0 6px 16px rgba(0, 0, 0, 0.35);
  }

  .btn-primary-large i {
    font-size: 14px;
  }

  .btn-secondary-large {
    width: 100%;
    max-width: 290px;
    padding: 16px 38px;
    font-size: 15px;
    font-weight: 600;
    justify-content: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.14) !important;
    backdrop-filter: blur(10px);
    color: #fff !important;
    border: 2px solid rgba(255, 255, 255, 0.55) !important;
    white-space: nowrap;
  }

  .btn-secondary-large:hover {
    background: rgba(255, 255, 255, 0.95) !important;
    color: #8b4789 !important;
    border-color: rgba(255, 255, 255, 0.95) !important;
  }

  .btn-secondary-large i {
    font-size: 15px;
  }

  .trust-line {
    font-size: 12px;
    margin-top: 0;
    padding: 8px 18px;
    opacity: 0.92;
    text-shadow:
      0 2px 10px rgba(0, 0, 0, 0.5),
      0 1px 4px rgba(0, 0, 0, 0.4);
    font-weight: 500;
    white-space: nowrap;
    background: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(8px);
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: inline-flex;
  }

  .trust-line i {
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
    font-size: 16px;
  }

  .scroll-indicator {
    display: block;
    bottom: 25px;
    background: rgba(255, 255, 255, 0.12);
    padding: 10px 16px;
    border-radius: 50px;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .scroll-indicator i {
    font-size: 24px;
    opacity: 0.85;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
  }

  .section-title {
    font-size: 28px;
  }

  .section-subtitle {
    font-size: 15px;
    margin-bottom: 40px;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  .portfolio-card:nth-child(n+5) {
    display: none;
  }

  .showAllSamples .portfolio-card:nth-child(n+5) {
    display: block;
  }

  .portfolio-image {
    height: 280px;
  }

  .portfolio-cta {
    padding: 32px 20px;
    margin-top: 30px;
  }

  .cta-content h2 {
    font-size: 21px;
    line-height: 1.4;
    margin-bottom: 12px;
    text-align: center;
  }

  .cta-content h2 i {
    font-size: 21px;
  }

  .cta-content p {
    font-size: 16px;
    margin-bottom: 22px;
  }

  .btn-secondary {
    width: 90%;
    max-width: 320px;
    font-size: 16px;
    padding: 15px 30px;
  }

  .btn-view-more {
    width: 90%;
    max-width: 320px;
    justify-content: center;
    font-size: 14px;
    padding: 12px 25px;
  }
}

@media only screen and (max-width: 480px) {
  .hero-content {
    padding: 30px 24px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    font-size: 44px;
    margin-bottom: 50px;
    line-height: 1.15;
  }

  .mobile-break {
    display: inline;
  }

  .hero-subtitle {
    font-size: 16px;
    margin-bottom: 0;
    max-width: 280px;
    padding: 7px 14px;
  }

  .hero-cta {
    margin-top: 35px;
  }

  .btn-primary-large {
    width: 100%;
    max-width: 275px;
    padding: 17px 24px;
    font-size: 13px;
    font-weight: 700;
  }

  .btn-secondary-large {
    width: 100%;
    max-width: 275px;
    padding: 15px 34px;
    font-size: 14px;
  }

  .trust-line {
    padding: 7px 16px;
    font-size: 11px;
    gap: 8px;
  }

  .trust-line i {
    font-size: 14px;
  }

  .scroll-indicator {
    bottom: 20px;
    padding: 9px 14px;
  }

  .scroll-indicator i {
    font-size: 22px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .hero-title {
    font-size: 52px;
  }

  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
