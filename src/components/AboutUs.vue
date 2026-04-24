<template>
  <div id="aboutUsContainer">
    <section class="about-hero">
      <div class="about-hero-content">
        <h1 class="animate-fade-in">Meet the Team Behind Web Card</h1>
        <p class="animate-fade-in-delay">Passionate creators bringing your celebrations to life digitally</p>
      </div>
    </section>

    <section class="container about-section">
      <div class="team-grid">
        <div class="team-card animate-slide-in-left">
          <div class="team-image-wrapper">
            <div class="team-image">
              <img src="../assets/Faisal img.jpeg" alt="Faisal - Co-founder & CEO" />
            </div>
          </div>
          <div class="team-content">
            <h2>Mohammed Faisal</h2>
            <p class="role">Co-founder & CEO</p>
            <p class="bio">Weekday coder, weekend entrepreneur. Passionate about building digital solutions that make celebrations memorable. Leading Web Card with a vision to transform how India celebrates special moments.</p>
            <div class="social-links">
              <a href="https://instagram.com/md_faisal_26?igshid=NzZlODBkYWE4Ng==" target="_blank" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="http://wa.me/917411242726" target="_blank" aria-label="WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://www.linkedin.com/in/mohammedfaisal26/" target="_blank" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="team-card animate-slide-in-right">
          <div class="team-image-wrapper">
            <div class="team-image">
              <img src="../assets/Hassan img.jpeg" alt="Hassan - Co-founder & CTO" />
            </div>
          </div>
          <div class="team-content">
            <h2>Hassan Mohammed Nabeel</h2>
            <p class="role">Co-founder & CTO</p>
            <p class="bio">Tech enthusiast and food lover (Zomato's best customer!). Architecting the technical excellence behind Web Card's beautiful invitations. Ensuring every invitation is pixel-perfect and lightning-fast.</p>
            <div class="social-links">
              <a href="https://instagram.com/hassan.hmn?igshid=NzZlODBkYWE4Ng==" target="_blank" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="http://wa.me/917795077266" target="_blank" aria-label="WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://www.linkedin.com/in/hassan-mohammed-nabeel/" target="_blank" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="our-story">
        <h2>Our Story</h2>
        <p>Web Card was born from a simple idea: make beautiful, eco-friendly invitations accessible to everyone. We believe every celebration deserves a unique, memorable invitation that guests will cherish. Combining traditional values with modern technology, we've created a platform that honors your traditions while embracing the future.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  methods: {
    openUrlInNewTab(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style scoped>
/* About Hero Section */
.about-hero {
  background: linear-gradient(135deg, #8b4789 0%, #a876aa 50%, #d4af37 100%);
  padding: 100px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.about-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../assets/Wed-bg.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.1;
}

.about-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.about-hero h1 {
  font-size: 48px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.about-hero p {
  font-size: 22px;
  color: #fff;
  opacity: 0.95;
  font-weight: 300;
}

/* About Section */
.about-section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.team-grid {
  display: grid;
  gap: 45px;
  margin-bottom: 60px;
}

.team-card {
  display: flex;
  gap: 35px;
  align-items: center;
  background: linear-gradient(135deg, #f9f9f9 0%, #fff 100%);
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s ease;
}

.team-card:hover {
  box-shadow: 0 10px 40px rgba(139, 71, 137, 0.15);
}

.team-image-wrapper {
  flex-shrink: 0;
}

.team-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid transparent;
  background: linear-gradient(135deg, #8b4789, #d4af37);
  padding: 5px;
  box-shadow: 0 8px 25px rgba(139, 71, 137, 0.3);
}

.team-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.team-content {
  flex: 1;
}

.team-content h2 {
  font-size: 28px;
  color: #2c2c2c;
  margin-bottom: 8px;
  font-weight: 700;
}

.role {
  font-size: 17px;
  color: #8b4789;
  font-weight: 600;
  margin-bottom: 14px;
}

.bio {
  font-size: 15px;
  color: #666;
  line-height: 1.7;
  margin-bottom: 18px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b4789, #a876aa);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(139, 71, 137, 0.2);
}

.social-links a:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(139, 71, 137, 0.4);
  background: linear-gradient(135deg, #d4af37, #f4d03f);
}

.social-links i {
  font-size: 20px;
  margin: 0;
}

/* Our Story Section */
.our-story {
  text-align: center;
  padding: 45px 35px;
  background: linear-gradient(135deg, rgba(139, 71, 137, 0.05), rgba(212, 175, 55, 0.05));
  border-radius: 20px;
  margin-top: 15px;
}

.our-story h2 {
  font-size: 32px;
  color: #2c2c2c;
  margin-bottom: 20px;
  font-weight: 700;
}

.our-story p {
  font-size: 17px;
  color: #666;
  line-height: 1.7;
  max-width: 900px;
  margin: 0 auto;
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.6s ease-out 0.2s backwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out;
}

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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media only screen and (max-width: 768px) {
  .about-hero {
    padding: 80px 20px 60px;
  }

  .about-hero h1 {
    font-size: 32px;
  }

  .about-hero p {
    font-size: 18px;
  }

  .about-section {
    padding: 60px 15px;
  }

  .team-grid {
    gap: 30px;
    margin-bottom: 40px;
  }

  .team-card {
    flex-direction: column;
    text-align: center;
    padding: 28px 20px;
    gap: 20px;
  }

  .team-image {
    width: 140px;
    height: 140px;
  }

  .team-content h2 {
    font-size: 24px;
  }

  .role {
    font-size: 15px;
  }

  .bio {
    font-size: 14px;
  }

  .social-links {
    justify-content: center;
    gap: 12px;
  }

  .social-links a {
    width: 38px;
    height: 38px;
  }

  .social-links i {
    font-size: 18px;
  }

  .our-story {
    padding: 32px 22px;
    margin-top: 10px;
  }

  .our-story h2 {
    font-size: 26px;
    margin-bottom: 16px;
  }

  .our-story p {
    font-size: 15px;
  }
}
</style>
