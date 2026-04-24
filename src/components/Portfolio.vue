<template>
  <div id="portfolioContainer">
    <section class="portfolio-hero">
      <div class="portfolio-hero-content">
        <h1 class="animate-fade-in">Our Work Gallery</h1>
        <p class="animate-fade-in-delay">Beautiful invitations crafted with love for celebrations across India</p>
      </div>
    </section>

    <section class="container portfolio-content">
      <div class="filter-section">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="['filter-btn', { active: selectedCategory === category }]"
        >
          {{ category }}
        </button>
      </div>

      <div class="portfolio-grid-full">
        <div class="portfolio-card-full" v-for="(sample, index) in filteredSamples" :key="index">
          <div class="portfolio-image-full">
            <img :src="sample.thumbnail" :alt="sample.name" />
            <div class="portfolio-overlay-full">
              <div class="overlay-content-full">
                <h3>{{ sample.name }}</h3>
                <p>{{ sample.category }}</p>
                <a :href="sample.link" target="_blank" class="btn-view-live">
                  <i class="fa-solid fa-eye"></i> View Live Demo
                </a>
              </div>
            </div>
          </div>
          <div class="portfolio-info-full">
            <h4>{{ sample.name }}</h4>
            <span class="category-tag-full">{{ sample.category }}</span>
          </div>
        </div>
      </div>

      <div class="view-more-portfolio" v-if="portfolioSamples.length > 6">
        <button @click="showAllSamples = !showAllSamples" class="btn-view-more-portfolio">
          <i :class="showAllSamples ? 'fa-solid fa-chevron-up' : 'fa-solid fa-images'"></i>
          {{ showAllSamples ? 'Show Less' : 'View More Samples' }}
        </button>
      </div>

      <div class="cta-section-portfolio">
        <div class="cta-content-portfolio">
          <h2>
            <i class="fa-solid fa-heart"></i>
            <span>Love What You See?</span>
          </h2>
          <p>Let's create something beautiful for your special day</p>
          <a href="https://wa.me/917411242726?text=Hi!%20I%20loved%20your%20portfolio%20designs.%20I'd%20like%20to%20discuss%20creating%20a%20custom%20invitation%20for%20my%20event." target="_blank" rel="noopener noreferrer" class="btn-contact-portfolio">
            <i class="fa-brands fa-whatsapp"></i> Get In Touch
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
  data() {
    return {
      showAllSamples: false,
      selectedCategory: "All",
      categories: ["All", "Wedding", "Engagement", "Anniversary"],
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
    filteredSamples() {
      let filtered = this.portfolioSamples;
      if (this.selectedCategory !== "All") {
        filtered = this.portfolioSamples.filter(sample => sample.category === this.selectedCategory);
      }
      return this.showAllSamples ? filtered : filtered.slice(0, 6);
    }
  },
  methods: {
    scrollToContact() {
      setTimeout(() => {
        const footer = document.getElementById("footerContainer");
        if (footer) {
          const topOffset = footer.offsetTop - 130;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      }, 100);
    }
  }
};
</script>

<style scoped>
/* Portfolio Hero Section */
.portfolio-hero {
  background: linear-gradient(135deg, #8b4789 0%, #a876aa 50%, #d4af37 100%);
  padding: 100px 20px 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.portfolio-hero::before {
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

.portfolio-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.portfolio-hero h1 {
  font-size: 48px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.portfolio-hero p {
  font-size: 22px;
  color: #fff;
  opacity: 0.95;
  font-weight: 300;
}

/* Portfolio Content Section */
.portfolio-content {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Filter Section */
.filter-section {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 12px 28px;
  background: transparent;
  color: #8b4789;
  border: 2px solid #8b4789;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: "Montserrat", sans-serif;
}

.filter-btn:hover {
  background: rgba(139, 71, 137, 0.1);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #8b4789 0%, #a876aa 100%);
  color: #fff;
  border-color: #8b4789;
}

/* Portfolio Grid */
.portfolio-grid-full {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
  margin-bottom: 55px;
}

.portfolio-card-full {
  border-radius: 15px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.portfolio-card-full:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 45px rgba(139, 71, 137, 0.25);
}

.portfolio-image-full {
  position: relative;
  overflow: hidden;
  height: 400px;
}

.portfolio-image-full img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-card-full:hover .portfolio-image-full img {
  transform: scale(1.1);
}

.portfolio-overlay-full {
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

.portfolio-card-full:hover .portfolio-overlay-full {
  opacity: 1;
}

.overlay-content-full {
  text-align: center;
  color: #fff;
  padding: 25px;
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.portfolio-card-full:hover .overlay-content-full {
  transform: translateY(0);
}

.overlay-content-full h3 {
  font-size: 28px;
  margin-bottom: 12px;
  font-weight: 600;
}

.overlay-content-full p {
  font-size: 16px;
  margin-bottom: 22px;
  opacity: 0.95;
}

.btn-view-live {
  display: inline-block;
  padding: 13px 32px;
  background: #fff;
  color: #8b4789;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.2s ease;
}

.btn-view-live:hover {
  background: #d4af37;
  color: #fff;
  transform: scale(1.05);
}

.btn-view-live i {
  margin-right: 8px;
}

.portfolio-info-full {
  padding: 22px;
}

.portfolio-info-full h4 {
  font-size: 20px;
  color: #2c2c2c;
  margin-bottom: 10px;
  font-weight: 600;
}

.category-tag-full {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, #8b4789, #a876aa);
  color: #fff;
  font-size: 12px;
  border-radius: 20px;
  font-weight: 500;
}

/* View More Section */
.view-more-portfolio {
  text-align: center;
  margin: 50px 0;
}

.btn-view-more-portfolio {
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
  transition: all 0.2s ease;
  font-family: "Montserrat", sans-serif;
}

.btn-view-more-portfolio:hover {
  background: #8b4789;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 71, 137, 0.3);
}

.btn-view-more-portfolio i {
  font-size: 18px;
  margin: 0;
}

/* CTA Section */
.cta-section-portfolio {
  text-align: center;
  padding: 50px 35px;
  background: linear-gradient(135deg, rgba(139, 71, 137, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%);
  border-radius: 20px;
}

.cta-content-portfolio h2 {
  font-size: 32px;
  color: #2c2c2c;
  margin-bottom: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.cta-content-portfolio h2 i {
  color: #8b4789;
  font-size: 32px;
  margin: 0;
}

.cta-content-portfolio p {
  font-size: 18px;
  color: #666;
  margin-bottom: 28px;
  font-weight: 400;
}

.btn-contact-portfolio {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 40px;
  background: linear-gradient(135deg, #25d366 0%, #20c75a 100%);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 17px;
  transition: all 0.2s ease;
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.3);
}

.btn-contact-portfolio:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 35px rgba(37, 211, 102, 0.5);
}

.btn-contact-portfolio i {
  font-size: 18px;
  margin: 0;
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.6s ease-out 0.2s backwards;
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

/* Responsive */
@media only screen and (max-width: 768px) {
  .portfolio-hero {
    padding: 80px 20px 60px;
  }

  .portfolio-hero h1 {
    font-size: 32px;
  }

  .portfolio-hero p {
    font-size: 18px;
  }

  .portfolio-content {
    padding: 60px 15px;
  }

  .filter-section {
    gap: 8px;
    margin-bottom: 40px;
    padding: 0 10px;
  }

  .filter-btn {
    padding: 10px 18px;
    font-size: 13px;
    flex: 1;
    white-space: nowrap;
  }

  .portfolio-grid-full {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  .view-more-portfolio {
    margin: 40px 0;
  }

  .portfolio-image-full {
    height: 300px;
  }

  .overlay-content-full h3 {
    font-size: 24px;
  }

  .overlay-content-full p {
    font-size: 15px;
  }

  .portfolio-info-full {
    padding: 18px;
  }

  .portfolio-info-full h4 {
    font-size: 18px;
  }

  .cta-section-portfolio {
    padding: 35px 20px;
  }

  .cta-content-portfolio h2 {
    font-size: 24px;
  }

  .cta-content-portfolio h2 i {
    font-size: 24px;
  }

  .cta-content-portfolio p {
    font-size: 16px;
  }

  .btn-contact-portfolio {
    width: 90%;
    max-width: 320px;
  }

  .btn-view-more-portfolio {
    width: 90%;
    max-width: 320px;
    justify-content: center;
    font-size: 14px;
    padding: 12px 25px;
  }
}
</style>
