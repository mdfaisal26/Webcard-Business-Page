<template>
  <section class="why-webcard-section">
    <div class="container">
      <h2 class="section-title">Why Choose Web Card?</h2>
      <p class="section-subtitle">Blending tradition with technology for your perfect celebration</p>

      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">
            <i class="fa-solid fa-images"></i>
          </div>
          <h3>Beautiful Photo Galleries</h3>
          <p>Showcase your pre-wedding shoots, haldi, mehendi, and reception photos in stunning galleries that guests will love to explore</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <i class="fa-solid fa-qrcode"></i>
          </div>
          <h3>Hybrid Experience</h3>
          <p>Best of both worlds! Get a QR code to print on your traditional cards, seamlessly connecting paper with digital magic</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <i class="fa-solid fa-leaf"></i>
          </div>
          <h3>Eco-Friendly Choice</h3>
          <p>Save trees and reduce paper waste while creating a lasting digital memory that guests can cherish forever</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <h3>Lightning Fast Delivery</h3>
          <p>Receive your beautifully crafted invitation in just 24-48 hours. Last-minute plans? We've got you covered!</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <i class="fa-solid fa-indian-rupee-sign"></i>
          </div>
          <h3>Pocket-Friendly</h3>
          <p>Premium quality doesn't mean premium prices. Get stunning invitations that fit your budget perfectly</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <h3>RSVP & Analytics</h3>
          <p>Track RSVPs in real-time, manage guest lists effortlessly, and see who viewed your invitation with detailed analytics</p>
        </div>
      </div>

      <div class="highlight-section">
        <div class="highlight-content">
          <h3><i class="fa-solid fa-calendar-check"></i> Perfect for Every Celebration</h3>
          <p>Whether it's a <strong>Wedding</strong>, <strong>Engagement</strong>, <strong>Birthday</strong>, <strong>Anniversary</strong>, <strong>Baby Shower</strong>, or any special event - we create stunning digital invitations for all occasions! Honor your traditions with physical cards while embracing digital convenience. Print our QR code on your traditional cards - guests scan and instantly access your beautiful invitation with all the details!</p>
        </div>
      </div>

      <div class="faq-cta">
        <p>Have questions? We have answers!</p>
        <router-link @click="scrollToTop" to="/FAQ" class="btn-faq">
          <i class="fa-solid fa-circle-question"></i> View FAQ
        </router-link>
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
          const topOffset = scrollPage.offsetTop - 130;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        });
      }
    },
    scrollToTop() {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }
};
</script>

<style scoped>
.why-webcard-section {
  padding: 80px 0;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  color: #2c2c2c;
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

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 55px;
}

.benefit-card {
  background: linear-gradient(135deg, #f9f9f9 0%, #fff 100%);
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid #8b4789;
  transition: all 0.2s ease;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
}

.benefit-card:hover {
  transform: translateX(10px);
  box-shadow: 0 8px 30px rgba(139, 71, 137, 0.15);
  border-left-color: #d4af37;
}

.benefit-icon {
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, #8b4789 0%, #a876aa 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  box-shadow: 0 4px 15px rgba(139, 71, 137, 0.2);
}

.benefit-icon i {
  font-size: 23px;
  color: #fff;
  margin: 0;
}

.benefit-card h3 {
  font-size: 18px;
  color: #2c2c2c;
  margin-bottom: 10px;
  font-weight: 600;
}

.benefit-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.7;
  margin: 0;
}

.highlight-section {
  background: linear-gradient(135deg, #8b4789 0%, #a876aa 50%, #d4af37 100%);
  padding: 40px 32px;
  border-radius: 18px;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
}

.highlight-section::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  transform: translate(50%, -50%);
}

.highlight-content {
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
}

.highlight-content h3 {
  font-size: 26px;
  margin-bottom: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.highlight-content h3 i {
  color: #d4af37;
  font-size: 26px;
  margin: 0;
}

.highlight-content p {
  font-size: 16px;
  line-height: 1.7;
  opacity: 0.95;
  max-width: 900px;
  margin: 0 auto;
}

.highlight-content p strong {
  color: #d4af37;
  font-weight: 700;
}

.faq-cta {
  text-align: center;
  padding: 38px 20px;
  background: linear-gradient(135deg, rgba(139, 71, 137, 0.03) 0%, rgba(212, 175, 55, 0.03) 100%);
  border-radius: 15px;
}

.faq-cta p {
  font-size: 22px;
  color: #2c2c2c;
  margin-bottom: 18px;
  font-weight: 500;
}

.btn-faq {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: transparent;
  color: #8b4789;
  border: 2px solid #8b4789;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s ease;
}

.btn-faq:hover {
  background: #8b4789;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 71, 137, 0.3);
}

.btn-faq:hover,
a:hover {
  color: #fff;
}

.btn-faq i {
  font-size: 18px;
  margin: 0;
}

@media only screen and (max-width: 768px) {
  .why-webcard-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 32px;
  }

  .section-subtitle {
    font-size: 15px;
    margin-bottom: 40px;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  .benefit-card {
    padding: 20px;
  }

  .benefit-card:hover {
    transform: translateY(-5px);
  }

  .benefit-icon {
    width: 48px;
    height: 48px;
  }

  .benefit-icon i {
    font-size: 21px;
  }

  .benefit-card h3 {
    font-size: 17px;
  }

  .benefit-card p {
    font-size: 13px;
  }

  .highlight-section {
    padding: 28px 18px;
  }

  .highlight-content h3 {
    font-size: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }

  .highlight-content h3 i {
    font-size: 20px;
  }

  .highlight-content p {
    font-size: 14px;
    line-height: 1.6;
  }

  .faq-cta {
    padding: 32px 18px;
  }

  .faq-cta p {
    font-size: 19px;
  }

  .btn-faq {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
