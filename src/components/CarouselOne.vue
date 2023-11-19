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
                { src: 'https://bsmedia.business-standard.com/_media/bs/img/article/2017-12/12/full/1513058323-566.jpg?im=FeatureCrop,size=(826,465)', alt: 'First slide' },
                { src: 'https://assets.vogue.in/photos/5dfa4b8f7c02da0008038ed8/4:3/w_1079,h_809,c_limit/Priyanka%20Chopra%20and%20Nick%20Jonas.jpg', alt: 'Third slide' },
                { src: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2018/10/Celebrity-Wedding-Feature.jpg?tr=w-600,pr-true', alt: 'Third slide' },
                { src: 'https://www.weddingsutra.com/images/athiya-rahul-thumb-350x350.jpg', alt: 'Third slide' },
                { src: 'https://cdn.bollywoodmdb.com/fit-in/800x800/post/news_desc/BCM221_1670670494359.jpg', alt: 'Third slide' },
                { src: 'https://cdn.bollywoodmdb.com/fit-in/800x800/post/news_desc/BCM221_1670670494359.jpg', alt: 'Third slide' },
                { src: 'https://www.pinkvilla.com/english/images/2023/05/843201419_alia-bhatt-main-cover_3_1280*720.jpg', alt: 'Third slide' },
                { src: 'https://assets.telegraphindia.com/telegraph/2022/Dec/1671788341_vikrant.jpg', alt: 'Third slide' },
                { src: 'https://im.idiva.com/photogallery/2020/Aug/iDiva-Unseen-Bollywood-Celebrity-Wedding-Photos_1_5f296507b6763.jpg?w=600&h=450&cc=1', alt: 'Third slide' },
                { src: 'https://cdn.bollywoodmdb.com/fit-in/800x800/post/news_desc/c_1641665088679.jpg', alt: 'Third slide' },
                // Add more items as needed
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
    height: 60vh;
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