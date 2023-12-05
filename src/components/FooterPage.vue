<template>
  <div id="footerContainer">
    <footer class="bg-dark">
      <div class="container pt-2">
        <div class="row address-main">
          <div class="col-lg-4 col-sm-12 col-xs-12">
            <div class="address-box clearfix">
              <div class="add-icon">
                <i class="fa-solid fa-map-location-dot fa-2xl lh-base"></i>
              </div>
              <div class="add-content">
                <h5>Address</h5>
                <p>Udayagiri, Mysore - 570019</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-xs-12">
            <div class="address-box clearfix">
              <div class="add-icon">
                <img
                  src="https://media.licdn.com/dms/image/C5603AQGFoAgFxK9SjA/profile-displayphoto-shrink_800_800/0/1650982035553?e=1706140800&v=beta&t=7lG24B1yflncaiBPM1Q1M_WjSV1ESwb8yimwNC1ozjY"
                  alt="image" />
                <!-- <i class="fa-solid fa-phone fa-2xl"></i> -->
              </div>
              <div class="add-content">
                <h6>Mohammed Faisal</h6>
                <div class="footerIcon">
                  <a href="tel:7411242726" style="text-decoration: none"><i class="fa-solid fa-phone fa-l mr-4"></i></a>
                  <a href="mailto:mdfaisal2699@gmail.com" style="text-decoration: none"><i
                      class="fa-regular fa-envelope fa-xl mr-4"></i></a>
                  <i class="fa-brands fa-whatsapp fa-xl mr-4" @click="openUrlInNewTab('http://wa.me/917411242726')"></i>
                </div>
                <p>
                  <a href="tel:7411242726" style="text-decoration: none"> +(91) 74112 42726</a>
                </p>
                <p>
                  <a href="mailto:mdfaisal2699@gmail.com" style="text-decoration: none"> mdfaisal2699@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-xs-12">
            <div class="address-box clearfix">
              <div class="add-icon">
                <img
                  src="https://media.licdn.com/dms/image/C5603AQHui__Hf7pLqQ/profile-displayphoto-shrink_800_800/0/1649415671325?e=1706140800&v=beta&t=l9M-7uyqxyVAg2eL1HYD2wtpDXEd9T-7eE8SpMxqCWs"
                  alt="image" />
                <!-- <i class="fa-regular fa-envelope fa-2xl"></i> -->
              </div>
              <div class="add-content">
                <h6>Hassan Mohammed Nabeel</h6>
                <div class="footerIcon">
                  <a href="tel:7795077266" style="text-decoration: none"><i class="fa-solid fa-phone fa-l mr-4"></i></a>
                  <a href="mailto:hassaninbox17@gmail.com" style="text-decoration: none"><i
                      class="fa-regular fa-envelope fa-xl mr-4"></i></a>
                  <i class="fa-brands fa-whatsapp fa-xl mr-4" @click="openUrlInNewTab('http://wa.me/917795077266')"></i>
                </div>
                <p>
                  <a href="tel:7795077266" style="text-decoration: none"> +(91) 77950 77266</a>
                </p>
                <p>
                  <a href="mailto:hassaninbox17@gmail.com" style="text-decoration: none"> hassaninbox17@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright Footer -->
      <footer class="bg-dark text-center text-white">
        <!-- Grid container -->
        <div class="container pt-3 pb-3">
          <!-- Section: Social media -->
          <section class="social-media">
            <!-- Instagram -->
            <i class="fa-brands fa-instagram fa-2xl"></i>
            <!-- Fb -->
            <i class="fa-brands fa-facebook fa-2xl"></i>
            <!-- WhatsApp -->
            <i class="fa-brands fa-whatsapp fa-2xl"></i>
          </section>
          <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-2" style="background-color: rgba(0, 0, 0, 0.2)">
          Faisal & Hassan © <span>{{ currentYear }}</span> All Rights Reserved.
        </div>
        <!-- Copyright -->
      </footer>
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
  methods: {
    openUrlInNewTab(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style>
#footerContainer {
  margin-top: auto;
}

.footer-main {
  padding-top: 36px;
}

.footerIcon {
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 30px;
  margin: 10px 0;
}

a {
  color: unset;
}

i:hover {
  color: #0d6efd;
  cursor: pointer;
}

.address-main>div.col-lg-4 {
  border-bottom: dotted 1px #999;
  display: flex;
}

.address-box {
  padding: 10px 0;
  margin: 5px 0;
  display: flex;
  justify-content: flex-start;
}

.add-icon {
  width: 60px;
  /* padding: 0px 5px; */
}

.add-icon img {
  width: 50px;
}

.address-box .add-icon {
  background: white;
  height: 50px;
  /* line-height: 50px; */
  width: 50px;
  margin-right: 20px;
  text-align: center;
}

.add-content h5 {
  font-size: 22px;
  color: #ffffff;
  padding: 0;
  font-weight: 400;
  /* margin-bottom: 10px; */
}

.add-content h6 {
  font-size: 18px;
  color: #ffffff;
  padding: 0;
  font-weight: 400;
  margin-bottom: 10px;
}

.add-content p,
.add-content p a {
  font-size: 14px;
  color: #efefef;
  font-weight: 300;
  cursor: pointer;
}

.add-content p a:hover,
.address-box p:hover {
  color: #ffb32d;
}

.social-media i {
  margin: 0 8px;
}
</style>
