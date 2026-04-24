<template>
  <section class="testimonials-section">
    <div class="container">
      <h2 class="section-title">Loved by Couples Across India</h2>
      <p class="section-subtitle">Don't just take our word for it - hear from our happy clients</p>

      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="(testimonial, index) in displayedTestimonials" :key="index">
          <div class="quote-icon">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <div class="stars">
            <i class="fa-solid fa-star" v-for="n in 5" :key="n"></i>
          </div>
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-author">
            <div class="author-info">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.location }} • {{ testimonial.event }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="view-more-testimonials" v-if="testimonials.length > 4">
        <button @click="showAllTestimonials = !showAllTestimonials" class="btn-view-more-testimonials">
          <i :class="showAllTestimonials ? 'fa-solid fa-chevron-up' : 'fa-solid fa-comments'"></i>
          {{ showAllTestimonials ? 'Show Less' : 'View More Testimonials' }}
        </button>
      </div>

      <div class="stats-section">
        <div class="stat-item">
          <div class="stat-icon">
            <i class="fa-solid fa-heart"></i>
          </div>
          <h3>100+</h3>
          <p>Happy Couples</p>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <i class="fa-solid fa-paper-plane"></i>
          </div>
          <h3>500+</h3>
          <p>Invitations Sent</p>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <i class="fa-solid fa-star"></i>
          </div>
          <h3>4.9/5</h3>
          <p>Average Rating</p>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <h3>24-48hrs</h3>
          <p>Delivery Time</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialsSection",
  data() {
    return {
      showAllTestimonials: false,
      testimonials: [
        {
          name: "Sneha & Karthik",
          location: "Bangalore",
          event: "Engagement",
          text: "The team understood our vision perfectly. They created a beautiful invitation that perfectly blended traditional Indian elements with modern design. Our families were impressed!"
        },
        {
          name: "Priya & Rohan",
          location: "Mysore",
          event: "Wedding",
          text: "We wanted something unique for our big day, and Web Card delivered beyond our expectations! The QR code feature made it so easy for our guests to RSVP. Absolutely loved the design and quick turnaround!"
        },
        {
          name: "Ananya & Vikram",
          location: "Mumbai",
          event: "Wedding",
          text: "Going digital was the best decision! Not only did we save money, but we also got a stunning invitation that our guests could keep forever. The eco-friendly aspect was a bonus. Highly recommend!"
        },
        {
          name: "Meera & Arjun",
          location: "Hyderabad",
          event: "Wedding",
          text: "From the initial consultation to the final product, everything was seamless. The customization options were endless, and we got exactly what we wanted. Thank you for making our special day even more special!"
        }
      ]
    };
  },
  computed: {
    displayedTestimonials() {
      return this.showAllTestimonials ? this.testimonials : this.testimonials.slice(0, 4);
    }
  }
};
</script>

<style scoped>
.testimonials-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f9f4f0 0%, #fff 50%, #f0f4f9 100%);
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-bottom: 55px;
}

.testimonial-card {
  background: #fff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: all 0.2s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(139, 71, 137, 0.15);
}

.quote-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 40px;
  color: rgba(139, 71, 137, 0.1);
}

.quote-icon i {
  margin: 0;
}

.stars {
  margin-bottom: 20px;
}

.stars i {
  color: #d4af37;
  font-size: 16px;
  margin-right: 3px;
}

.testimonial-text {
  font-size: 14px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 22px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-info h4 {
  font-size: 18px;
  color: #2c2c2c;
  margin-bottom: 5px;
  font-weight: 600;
}

.author-info p {
  font-size: 14px;
  color: #888;
  margin: 0;
}

/* View More Testimonials Button */
.view-more-testimonials {
  text-align: center;
  margin: 40px 0;
}

.btn-view-more-testimonials {
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

.btn-view-more-testimonials:hover {
  background: #8b4789;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 71, 137, 0.3);
}

.btn-view-more-testimonials i {
  font-size: 18px;
  margin: 0;
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 50px 35px;
  background: linear-gradient(135deg, #8b4789 0%, #a876aa 100%);
  border-radius: 20px;
  text-align: center;
}

.stat-item {
  color: #fff;
  transition: transform 0.2s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.stat-item:hover .stat-icon {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.stat-icon i {
  font-size: 28px;
  color: #d4af37;
  margin: 0;
}

.stat-item h3 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #d4af37;
}

.stat-item p {
  font-size: 15px;
  font-weight: 400;
  margin: 0;
  opacity: 0.95;
}

/* Responsive */
@media only screen and (max-width: 1200px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 768px) {
  .testimonials-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 32px;
  }

  .section-subtitle {
    font-size: 15px;
    margin-bottom: 40px;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 18px;
    margin-bottom: 40px;
  }

  .testimonial-card {
    padding: 22px;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 35px 20px;
  }

  .stat-icon {
    width: 50px;
    height: 50px;
  }

  .stat-icon i {
    font-size: 24px;
  }

  .stat-item h3 {
    font-size: 32px;
  }

  .stat-item p {
    font-size: 13px;
  }

  .btn-view-more-testimonials {
    width: 90%;
    max-width: 320px;
    justify-content: center;
    font-size: 14px;
    padding: 12px 25px;
  }
}
</style>
