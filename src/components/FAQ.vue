<template>
  <section class="mt-2 mb-2" id="FAQ">
    <h3 class="faq-header">FAQ's</h3>
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item" v-for="(item, index) in faqItems" :key="index">
        <h2 :id="'panelsStayOpen-heading' + index">
          <button :class="['accordion-button', { collapsed: index !== 0 }]" type="button" :data-bs-toggle="'collapse'" :data-bs-target="'#panelsStayOpen-collapse' + index" :aria-expanded="false" :aria-controls="'panelsStayOpen-collapse' + index">
            {{ item.question }}
          </button>
        </h2>
        <div :id="'panelsStayOpen-collapse' + index" :class="['accordion-collapse', 'collapse', { show: index === 0 }]" :aria-labelledby="'panelsStayOpen-heading' + index">
          <div class="accordion-body">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
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
  }
};
</script>

<style scoped>
section {
  min-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.faq-header {
  text-align: center;
  margin: 20px 0 10px;
}

.accordion {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.accordion-item {
  margin: 10px 10px;
  width: 80%;
}

@media (max-width: 700px) {
  .accordion-item {
    width: 90%;
  }
}
</style>
