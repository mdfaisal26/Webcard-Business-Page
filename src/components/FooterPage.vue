<template>
  <div id="footerContainer">
    <footer class="footer-modern">
      <div class="container footer-content">
        <div class="footer-brand">
          <h2 class="footer-logo">
            <span>Web Card</span>
            <i class="fa-solid fa-heart"></i>
          </h2>
          <p class="footer-tagline">Creating beautiful digital memories for your special celebrations</p>
          <div class="footer-quick-contact">
            <a href="tel:7411242726" class="quick-contact-btn">
              <i class="fa-solid fa-phone"></i> Call Us
            </a>
            <a href="http://wa.me/917411242726" target="_blank" class="quick-contact-btn whatsapp-btn">
              <i class="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>

        <div class="footer-team">
          <h3 class="footer-section-title">Our Team</h3>
          <div class="team-members">
            <div class="team-member">
              <div class="member-avatar">
                <img src="../assets/Faisal img.jpeg" alt="Faisal" />
              </div>
              <div class="member-details">
                <h4>Mohammed Faisal</h4>
                <p class="member-role">Co-founder & CEO</p>
                <div class="member-links">
                  <a href="tel:7411242726" aria-label="Call Faisal"><i class="fa-solid fa-phone"></i></a>
                  <a href="mailto:mdfaisal2699@gmail.com" aria-label="Email Faisal"><i class="fa-regular fa-envelope"></i></a>
                  <a href="http://wa.me/917411242726" target="_blank" aria-label="WhatsApp Faisal"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
            </div>

            <div class="team-member">
              <div class="member-avatar">
                <img src="../assets/Hassan img.jpeg" alt="Hassan" />
              </div>
              <div class="member-details">
                <h4>Hassan Mohammed Nabeel</h4>
                <p class="member-role">Co-founder & CTO</p>
                <div class="member-links">
                  <a href="tel:7795077266" aria-label="Call Hassan"><i class="fa-solid fa-phone"></i></a>
                  <a href="mailto:hassaninbox17@gmail.com" aria-label="Email Hassan"><i class="fa-regular fa-envelope"></i></a>
                  <a href="http://wa.me/917795077266" target="_blank" aria-label="WhatsApp Hassan"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">© {{ currentYear }} Web Card. <br> Crafted with <i class="fa-solid fa-heart"></i> by Faisal & Hassan. <br> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
  methods: {}
};
</script>

<style scoped>
#footerContainer {
  margin-top: auto;
}

.footer-modern {
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
}

.footer-modern::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139, 71, 137, 0.5), rgba(212, 175, 55, 0.5), transparent);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  padding: 60px 20px 40px;
  align-items: start;
}

/* Footer Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-logo {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-logo i {
  color: #d4af37;
  font-size: 28px;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.footer-tagline {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
  max-width: 350px;
}

.footer-quick-contact {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

.quick-contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.quick-contact-btn:hover {
  background: linear-gradient(135deg, #8b4789, #a876aa);
  border-color: #8b4789;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 71, 137, 0.3);
}

.quick-contact-btn.whatsapp-btn:hover {
  background: linear-gradient(135deg, #25d366, #20c75a);
  border-color: #25d366;
  box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
}

.quick-contact-btn i {
  font-size: 16px;
  margin: 0;
}

/* Footer Team Section */
.footer-team {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.footer-section-title {
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(139, 71, 137, 0.3);
}

.team-members {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.team-member {
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.2s ease;
}

.team-member:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(139, 71, 137, 0.3);
}

.member-avatar {
  flex-shrink: 0;
}

.member-avatar img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 2px solid #8b4789;
  object-fit: cover;
}

.member-details {
  flex: 1;
}

.member-details h4 {
  font-size: 16px;
  color: #fff;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.member-role {
  font-size: 13px;
  color: rgba(212, 175, 55, 0.9);
  margin: 0 0 10px 0;
  font-weight: 500;
}

.member-links {
  display: flex;
  gap: 8px;
}

.member-links a {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 71, 137, 0.2);
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 14px;
}

.member-links a:hover {
  background: linear-gradient(135deg, #8b4789, #d4af37);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 71, 137, 0.4);
}

.member-links i {
  margin: 0;
}

/* Footer Bottom */
.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 20px 0;
}

.copyright {
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.copyright i {
  color: #d4af37;
  margin: 0 4px;
  font-size: 12px;
}

/* Responsive */
@media only screen and (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 50px 20px 35px;
  }

  .team-members {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 768px) {
  .footer-content {
    padding: 40px 15px 30px;
    gap: 35px;
  }

  .footer-logo {
    font-size: 26px;
  }

  .footer-logo i {
    font-size: 24px;
  }

  .footer-tagline {
    font-size: 14px;
  }

  .footer-quick-contact {
    flex-direction: column;
  }

  .quick-contact-btn {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
    font-size: 15px;
  }

  .footer-section-title {
    font-size: 18px;
  }

  .team-member {
    padding: 18px;
  }

  .member-avatar img {
    width: 50px;
    height: 50px;
  }

  .member-details h4 {
    font-size: 15px;
  }

  .member-role {
    font-size: 12px;
  }

  .member-links a {
    width: 30px;
    height: 30px;
    font-size: 13px;
  }

  .copyright {
    font-size: 13px;
  }
}
</style>
