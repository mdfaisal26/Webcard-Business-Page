<template>
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-img" v-for="(item, index) in carouselItems" :key="index"
                    :class="{ 'carousel-item': true, 'active': index === activeIndex }">
                    <!-- Your carousel item content goes here -->
                    <img class="d-block w-100" :src="item.src" :alt="item.alt">
                </div>
            </div>
            <!-- <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"
                @click="prevSlide">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"
                @click="nextSlide">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a> -->
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'CarouselOne',
    data() {
        return {
            activeIndex: 0,
            carouselItems: [
                { src: require('../assets/CarousalPics/1.jpg'), alt: 'First slide' },
                { src: require('../assets/CarousalPics/2.jpg'), alt: 'Second slide' },
                { src: require('../assets/CarousalPics/3.jpg'), alt: 'Third slide' },
                { src: require('../assets/CarousalPics/4.jpg'), alt: 'Fourth slide' },
                { src: require('../assets/CarousalPics/5.jpg'), alt: 'Fifth slide' },
                { src: require('../assets/CarousalPics/6.webp'), alt: 'Sixth slide' },
                { src: require('../assets/CarousalPics/7.webp'), alt: 'Seventh slide' },
                // { src: '', alt: '' }
            ],
            intervalId: null,
        };
    },
    methods: {
        nextSlide() {
            this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length;
        },
        prevSlide() {
            this.activeIndex = (this.activeIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
        },
        startAutoSlide() {
            this.intervalId = setInterval(this.nextSlide, 3000); // 2000 milliseconds = 2 seconds
        },
        stopAutoSlide() {
            clearInterval(this.intervalId);
        },
    },
    created() {
        this.startAutoSlide();
    },
    unmounted() {
        this.stopAutoSlide();
    },
};
</script>
  

<style scoped>
.carousel-inner {
    display: flex;
    justify-content: center;
}

.carousel-img {
    margin: 30px 60px;
    height: 70vh;
    width: 100vb;
}

.carousel-img img {
    width: 100%;
    height: 100%;
}

/* Media query for screens with a maximum width of 767 pixels (typical mobile devices) */
@media only screen and (max-width: 767px) {
    .carousel-img {
        margin: unset;
        padding: 16px;
        height: 40vh;
        width: 80vw;
    }
}
</style>