<template>
  <div id="aboutUsContainer">
    <section class="container portfolio">
      <div class="bio-info d-flex justify-content-sm-around align-items-center">
        <div class="bio-image">
          <img src="https://media.licdn.com/dms/image/C5603AQGFoAgFxK9SjA/profile-displayphoto-shrink_800_800/0/1650982035553?e=1706140800&v=beta&t=7lG24B1yflncaiBPM1Q1M_WjSV1ESwb8yimwNC1ozjY" alt="image" />
        </div>
        <div class="col-md-6">
          <div class="bio-content">
            <h4>Hi there, I'm Faisal</h4>
            <p>Co-founder and CEO for Web Card. Weekday I am coder in weekend I build business.</p>
            <!-- <h6 class="mt-2">P.S I have no special talent, I'm just passionately curious ;)</h6> -->
            <div>
              <i class="fa-brands fa-instagram fa-2xl mt-4" @click="openUrlInNewTab('https://instagram.com/md_faisal_26?igshid=NzZlODBkYWE4Ng==')"></i>
              <i class="fa-brands fa-whatsapp fa-2xl mt-4" @click="openUrlInNewTab('http://wa.me/917411242726')"></i>
              <i class="fa-brands fa-linkedin fa-2xl" @click="openUrlInNewTab('https://www.linkedin.com/in/mohammedfaisal26/')"> </i>
            </div>
          </div>
        </div>
      </div>
      <div class="bio-info border-top d-flex justify-content-sm-around align-items-center">
        <div class="col-md-6">
          <div class="bio-content">
            <h4>I am Hassan</h4>
            <p>Co-founder and CTO for Web Card. Most of the time you can see me in restaurants or home doing zomato or swiggy</p>
            <h6></h6>
            <div class="">
              <i class="fa-brands fa-instagram fa-2xl mt-4" @click="openUrlInNewTab('https://instagram.com/hassan.hmn?igshid=NzZlODBkYWE4Ng==')"></i>
              <i class="fa-brands fa-whatsapp fa-2xl mt-4" @click="openUrlInNewTab('http://wa.me/917795077266')"></i>
              <i class="fa-brands fa-linkedin fa-2xl" @click="openUrlInNewTab('https://www.linkedin.com/in/hassan-mohammed-nabeel/')"> </i>
            </div>
          </div>
        </div>
        <div class="bio-image">
          <img src="https://media.licdn.com/dms/image/C5603AQHui__Hf7pLqQ/profile-displayphoto-shrink_800_800/0/1649415671325?e=1706140800&v=beta&t=l9M-7uyqxyVAg2eL1HYD2wtpDXEd9T-7eE8SpMxqCWs" alt="image" />
        </div>
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
i {
  margin: 0 10px;
}

body {
  background: linear-gradient(90deg, #e8e8e8 50%, #3d009e 50%);
}

.heading img {
  width: 10%;
}

.name {
  font-family: "Charmonman", cursive;
  font-weight: 600;
}

.bio-info {
  padding: 32px 0;
}

.bio-image {
  text-align: center;
  width: 170px;
  height: 170px;
}

.bio-image img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

.bio-content {
  text-align: left;
}
.bio-content div i {
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  .bio-image,
  .col-md-6 {
    width: 100%;
    max-width: none;
    text-align: center;
  }

  .bio-image {
    order: -1;
    width: 152px;
    height: 152px;
    margin-bottom: 16px;
  }

  .bio-info {
    flex-direction: column;
  }

  .bio-content {
    padding: 0 10px;
  }
}
</style>
