<template>
    <div id="footerContainer">

        <footer class="footer-main bg-dark">
            <div class="container">
                <div class="row address-main">
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                        <div class="address-box clearfix">
                            <div class="add-icon">
                                <i class="fa-solid fa-map-location-dot fa-2xl"></i>
                            </div>
                            <div class="add-content">
                                <h5>Address</h5>
                                <p> Udaigiri, Mysore - 570006 </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                        <div class="address-box clearfix">
                            <div class="add-icon">
                                <i class="fa-solid fa-phone fa-2xl"></i>
                            </div>
                            <div class="add-content">
                                <h5>Phone</h5>
                                <p><a href="tel:7411242726" style="text-decoration:none">+(91) 74112 42726</a></p>
                                <p><a href="tel:7795077266" style="text-decoration:none">+(91) 77950 77266</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                        <div class="address-box clearfix">
                            <div class="add-icon">
                                <i class="fa-regular fa-envelope fa-2xl"></i>
                            </div>
                            <div class="add-content">
                                <h5>Email</h5>
                                <p> <a href="mailto:" style="text-decoration:none">mdfaisalwonders@gmail.com</a>
                                </p>
                                <p> <a href="mailto:hassaninbox17@gmail.com"
                                        style="text-decoration:none">hassaninbox17@gmail.com</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Copyright Footer -->
            <footer class="bg-dark text-center text-white">

                <!-- Grid container -->
                <div class="container p-4 pb-0">
                    <!-- Section: Social media -->
                    <section class="mb-4 social-media">
                        <!-- Instagram -->
                        <i class="fa-brands fa-instagram fa-2xl"></i>
                        <!-- Fb -->
                        <i class="fa-brands fa-facebook fa-2xl"></i>
                    </section>
                    <!-- Section: Social media -->
                </div>
                <!-- Grid container -->

                <!-- Copyright -->
                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                    Faisal & Hassan © 2023 All Rights Reserved.
                </div>
                <!-- Copyright -->
            </footer>
        </footer>
    </div>
</template>
  
<script>
export default {
    name: 'FooterPage',
    methods: {
        openUrlInNewTab(url) {
            window.open(url, '_blank');
        }
    }
}
</script>

<style>
.footer-main {
    padding-top: 36px;
}

.address-main>div.col-lg-4 {
    border-bottom: dotted 1px #999;
    display: flex;

}

.address-box {
    padding: 10px 0;
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-start;
}

.add-icon {
    width: 60px;
    padding: 0px 5px;
}

.address-box .add-icon {
    background: white;
    height: 50px;
    line-height: 50px;
    width: 50px;
    margin-right: 20px;
    text-align: center;
}

.add-content h5 {
    font-size: 22px;
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
}

.add-content p a:hover,
.address-box p:hover {
    color: #ffb32d;
}

.social-media i {
    margin: 0 8px;
}
</style>