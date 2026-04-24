<template>
  <div id="headerContainer">
    <div class="bg-dark emptyHeader"></div>
    <div class="nav bg-dark">
      <div class="container">
        <h1 class="logo">
          <a class="headerTitle" href="/">
            <span class="logo-text">Web Card</span>
            <i class="fa-solid fa-heart logo-icon"></i>
          </a>
        </h1>
        <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
          <i :class="menuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'"></i>
        </button>
        <ul :class="['nav-menu', { open: menuOpen }]">
          <li><a v-on:click="handleNavClick('mainPage')" class="nav-link">Home</a></li>
          <li><router-link @click="closeMenu" to="/portfolio" class="nav-link">Our Work</router-link></li>
          <li><router-link v-on:click="handleNavClick('aboutUsContainer')" to="/about" class="nav-link">About</router-link></li>
          <li><router-link @click="closeMenu" to="/FAQ" class="nav-link">FAQ</router-link></li>
          <li class="cta-nav">
            <a v-on:click="handleNavClick('footerContainer')" class="btn-nav-cta">
              <i class="fa-solid fa-paper-plane"></i> Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    handleNavClick(scrollid) {
      this.closeMenu();
      setTimeout(() => {
        this.scrollTo(scrollid);
      }, 100);
    },
    scrollTo(scrollid) {
      const scrollTop = ["aboutUsContainer", "mainPage"];
      if (scrollTop.includes(scrollid)) {
        if (scrollid == "mainPage") {
          this.$router.push("/");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        this.$router.push("/").then(() => {
          const scrollPage = document.getElementById(scrollid);
          if (scrollPage) {
            const topOffset = scrollPage.offsetTop - 100;
            window.scrollTo({ top: topOffset, behavior: "smooth" });
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.emptyHeader {
  height: 80px;
}

/* ========== Modern Navigation ========== */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: transparent;
  z-index: 999;
  backdrop-filter: blur(0px);
}

.nav.bg-dark {
  background: linear-gradient(135deg, rgba(139, 71, 137, 0.9) 0%, rgba(212, 175, 55, 0.8) 100%);
  backdrop-filter: blur(10px);
}

.nav.active {
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  max-width: 1400px;
  margin: 0 auto;
  transition: all 0.3s ease;
}

/* Logo Styling */
.logo {
  margin: 0;
}

.headerTitle {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #fff;
  font-size: 24px !important;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.logo-text {
  font-size: 24px;
}

.logo-icon {
  color: #d4af37;
  font-size: 20px;
  animation: heartbeat 1.5s ease-in-out infinite;
}

.nav.active .headerTitle {
  color: #8b4789;
}

.nav.active .logo-icon {
  color: #d4af37;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Navigation Menu */
.nav-menu {
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 5px;
  margin: 0;
  padding: 0;
}

.nav-link {
  position: relative;
  color: #fff;
  text-decoration: none;
  padding: 10px 18px;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 8px;
  letter-spacing: 0.3px;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #d4af37;
}

.nav.active .nav-link {
  color: #2c2c2c;
}

.nav.active .nav-link:hover {
  background: rgba(139, 71, 137, 0.08);
  color: #8b4789;
}

/* CTA Button in Nav */
.cta-nav {
  margin-left: 10px;
}

.btn-nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
  color: #2c2c2c;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.btn-nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(212, 175, 55, 0.5);
  background: linear-gradient(135deg, #f4d03f 0%, #d4af37 100%);
}

.btn-nav-cta i {
  margin: 0;
  font-size: 14px;
}

/* Hamburger Menu (Hidden on desktop) */
.hamburger {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  transition: transform 0.15s ease, color 0.2s ease;
  z-index: 1001;
}

.hamburger:hover {
  transform: scale(1.05);
}

.hamburger:active {
  transform: scale(0.95);
}

.hamburger i {
  margin: 0;
  transition: transform 0.15s ease;
}

.nav.active .hamburger {
  color: #8b4789;
}

/* Responsive Design */
@media only screen and (max-width: 1024px) {
  .nav .container {
    padding: 15px 30px;
  }

  .nav-menu {
    gap: 0;
  }

  .nav-link {
    padding: 8px 14px;
    font-size: 14px;
  }

  .btn-nav-cta {
    padding: 10px 20px;
    font-size: 13px;
  }
}

@media only screen and (max-width: 768px) {
  .emptyHeader {
    height: 70px;
  }

  .nav .container {
    flex-direction: row;
    padding: 12px 15px;
    gap: 0;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: auto;
    text-align: left;
    padding-bottom: 0;
    border-bottom: none;
  }

  .nav.active .logo {
    border-bottom: none;
  }

  .headerTitle {
    font-size: 20px !important;
  }

  .logo-text {
    font-size: 20px;
  }

  .logo-icon {
    font-size: 16px;
  }

  /* Show Hamburger on mobile */
  .hamburger {
    display: block;
    z-index: 1001;
  }

  /* Mobile Menu */
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, rgba(139, 71, 137, 0.98), rgba(168, 118, 170, 0.98));
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 0;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1), padding 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
  }

  .nav.active .nav-menu {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(249, 249, 249, 0.98));
  }

  .nav-menu.open {
    max-height: 450px;
    padding: 20px 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 14px 20px;
    font-size: 15px;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .nav-link:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .nav.active .nav-link {
    color: #2c2c2c;
  }

  .nav.active .nav-link:hover {
    background: rgba(139, 71, 137, 0.1);
    color: #8b4789;
  }

  .cta-nav {
    width: 100%;
    margin-left: 0;
    margin-top: 12px;
  }

  .btn-nav-cta {
    width: 100%;
    justify-content: center;
    padding: 14px 20px;
    font-size: 15px;
  }
}

@media only screen and (max-width: 480px) {
  .headerTitle {
    font-size: 20px !important;
  }

  .logo-text {
    font-size: 20px;
  }

  .logo-icon {
    font-size: 18px;
  }

  .nav-link {
    font-size: 12px;
    padding: 6px 10px;
  }
}
</style>
