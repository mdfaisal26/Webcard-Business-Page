<template>
    <section class="mt-2 mb-2" id="FAQ">
        <h3 class="faq-header">FAQ's</h3>
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne">
                        What kind of invites can I create at WedCard ?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        we offer digital invitations for wedding, anniversary, engagement, birthday, housewarming and baby
                        shower, as well as baby birth announcements. You can choose from animated, video, multipage and
                        regional-language invites.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        Is this service charged?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        Yes, we charge for all our invites. Our digital invitations price starts from ₹1999 each, video
                        invites price starts from ₹2500
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree">
                        Can I customise my invite?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        Yes. If you are creating an e-invitation, you can choose from one of our many templates and
                        customise it by adding your details and information. If you are looking for a custom e-invite
                        design.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour">
                        How can I share my e-invitation with my friends?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFour">
                    <div class="accordion-body">
                        Once you have created your invite, you will get an option of sharing it with your friends and family
                        a QR code, which will redirect to your wedding card website.You can also use this option to share
                        the invite on WhatsApp.
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "FAQ"
}
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