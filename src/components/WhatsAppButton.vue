<template>
  <div class="whatsapp-container">
    <a
      href="https://wa.me/917411242726?text=Hi!%20I'm%20interested%20in%20creating%20a%20digital%20invitation%20for%20my%20special%20event.%20Can%20you%20help%20me?"
      class="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fa-brands fa-whatsapp"></i>
      <span class="tooltip-text">Chat with us!</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "WhatsAppButton"
};
</script>

<style scoped>
.whatsapp-container {
  position: fixed;
  bottom: 30px;
  left: 30px;
  z-index: 1000;
}

.whatsapp-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  background: linear-gradient(135deg, #25d366 0%, #20c75a 100%);
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 5px 25px rgba(37, 211, 102, 0.4);
  text-decoration: none;
  transition: all 0.3s ease;
  animation: pulse-whatsapp 2s infinite;
}

.whatsapp-button:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 35px rgba(37, 211, 102, 0.6);
}

.whatsapp-button i {
  font-size: 32px;
  margin: 0;
}

.tooltip-text {
  position: absolute;
  left: 75px;
  background: #2c2c2c;
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  font-weight: 500;
}

.tooltip-text::after {
  content: "";
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  border-right: 8px solid #2c2c2c;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.whatsapp-button:hover .tooltip-text {
  opacity: 1;
  visibility: visible;
  left: 80px;
}

@keyframes pulse-whatsapp {
  0% {
    box-shadow: 0 5px 25px rgba(37, 211, 102, 0.4);
  }
  50% {
    box-shadow: 0 5px 35px rgba(37, 211, 102, 0.6);
  }
  100% {
    box-shadow: 0 5px 25px rgba(37, 211, 102, 0.4);
  }
}

/* Mobile Responsive */
@media only screen and (max-width: 768px) {
  .whatsapp-container {
    bottom: 20px;
    left: 20px;
  }

  .whatsapp-button {
    width: 55px;
    height: 55px;
  }

  .whatsapp-button i {
    font-size: 28px;
  }

  .tooltip-text {
    display: none;
  }
}
</style>
