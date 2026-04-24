<template>
  <div id="FAQ">
    <section class="faq-hero">
      <div class="faq-hero-content">
        <h1 class="animate-fade-in">Frequently Asked Questions</h1>
        <p class="animate-fade-in-delay">Everything you need to know about Web Card</p>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        <div class="faq-grid">
          <div class="faq-card" v-for="(item, index) in faqItems" :key="index">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ item.question }}</h3>
              <i :class="activeFaq === index ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"></i>
            </div>
            <transition name="slide-fade">
              <div v-if="activeFaq === index" class="faq-answer">
                <p>{{ item.answer }}</p>
              </div>
            </transition>
          </div>
        </div>

        <div class="faq-cta">
          <h2>Still have questions?</h2>
          <p>We're here to help! Reach out to us anytime.</p>
          <a href="https://wa.me/917411242726?text=Hi!%20I%20have%20a%20question%20about%20Web%20Card" target="_blank" class="btn-contact">
            <i class="fa-brands fa-whatsapp"></i> Chat with Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      activeFaq: 0,
      faqItems: [
        {
          question: "What kind of invites can I create at WedCard?",
          answer: "We offer digital invitations for wedding, anniversary, engagement, birthday, housewarming, and baby shower, as well as baby birth announcements."
        },
        {
          question: "Can I change the default pictures on the theme?",
          answer: "Absolutely! It's your website, so you can put as many photos on it as you want."
        },
        {
          question: "Can I customize my invite?",
          answer: "Yes. If you are creating an e-invitation, you can choose from one of our many templates and customize it by adding your details and information."
        },
        {
          question: "How can I share my e-invitation with my friends?",
          answer: "Once you have created your invite, you will get an option of sharing it with your friends and family via a QR code, which will redirect to your wedding card website. You can also use this option to share the invite on WhatsApp."
        },
        {
          question: "Is this service charged?",
          answer: "Yes, our service does have a charge, but we make sure it's pocket-friendly. We offer personalized invitations that fit your budget without compromising on quality."
        },
        {
          question: "For how long can I keep my website live?",
          answer: "Your website will remain live for 2 weeks post your event date. If you wish to extend this duration, you can purchase the post-event website option for affordable price, providing an additional 6 months of access post the event. "
        }
      ]
    };
  },
  methods: {
    toggleFaq(index) {
      this.activeFaq = this.activeFaq === index ? null : index;
    }
  }
};
</script>

<style scoped>
/* FAQ Hero Section */
.faq-hero {
  background: linear-gradient(135deg, #8b4789 0%, #a876aa 50%, #d4af37 100%);
  padding: 100px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.faq-hero::before {
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

.faq-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.faq-hero h1 {
  font-size: 48px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.faq-hero p {
  font-size: 22px;
  color: #fff;
  opacity: 0.95;
  font-weight: 300;
}

/* FAQ Section */
.faq-section {
  padding: 80px 20px;
  background: #f9f9f9;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.faq-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 60px;
}

.faq-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.faq-card:hover {
  box-shadow: 0 8px 30px rgba(139, 71, 137, 0.15);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  cursor: pointer;
  transition: all 0.15s ease;
  background: linear-gradient(90deg, transparent 0%, rgba(139, 71, 137, 0.03) 100%);
}

.faq-question:hover {
  background: linear-gradient(90deg, rgba(139, 71, 137, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%);
}

.faq-question:active {
  transform: scale(0.98);
}

.faq-question h3 {
  font-size: 18px;
  color: #2c2c2c;
  font-weight: 600;
  margin: 0;
  flex: 1;
  padding-right: 20px;
}

.faq-question i {
  font-size: 18px;
  color: #8b4789;
  transition: transform 0.2s ease;
  margin: 0;
}

.faq-answer {
  padding: 0 30px 25px;
  background: #fff;
}

.faq-answer p {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin: 0;
}

/* Slide Fade Animation - FASTER */
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.15s ease-in;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* FAQ CTA */
.faq-cta {
  text-align: center;
  padding: 50px 30px;
  background: linear-gradient(135deg, rgba(139, 71, 137, 0.05), rgba(212, 175, 55, 0.05));
  border-radius: 20px;
}

.faq-cta h2 {
  font-size: 32px;
  color: #2c2c2c;
  margin-bottom: 15px;
  font-weight: 700;
}

.faq-cta p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.btn-contact {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  background: linear-gradient(135deg, #25d366 0%, #20c75a 100%);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.3);
}

.btn-contact:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 35px rgba(37, 211, 102, 0.5);
}

.btn-contact i {
  font-size: 20px;
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
  .faq-hero {
    padding: 80px 20px 60px;
  }

  .faq-hero h1 {
    font-size: 32px;
  }

  .faq-hero p {
    font-size: 18px;
  }

  .faq-section {
    padding: 60px 15px;
  }

  .faq-question {
    padding: 20px;
  }

  .faq-question h3 {
    font-size: 16px;
  }

  .faq-answer {
    padding: 0 20px 20px;
  }

  .faq-answer p {
    font-size: 15px;
  }

  .faq-cta {
    padding: 35px 20px;
  }

  .faq-cta h2 {
    font-size: 26px;
  }

  .faq-cta p {
    font-size: 16px;
  }

  .btn-contact {
    width: 90%;
    max-width: 320px;
    justify-content: center;
  }
}
</style>
