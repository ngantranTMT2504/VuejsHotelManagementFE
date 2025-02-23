<template>
    <main>
        <!-- About Section -->
        <section id="about" class="about_wrapper m-0 py-5">
            <div class="container mb-5 text-center">
                <h6>About Us</h6>
                <h2>Our Awesome Services</h2>
            </div>
            <div class="banner-about w-100">
                <img :src="AboutBanner" alt="" class="w-100">
            </div>
            <div class="container since text-center my-5">
                <h2>Since 2015 Year</h2>
                <p class="px-5 fs-5 pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis officia
                    doloribus
                    earum aliquam
                    dolorum commodi nulla tempore repudiandae, nam ullam vitae possimus quidem dolorem rerum natus ea
                    sint aspernatur voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <div class="image-wrapper">
                    <div class="row">
                        <div class="col-lg-4">
                            <img :src="About1" alt="" class="img-fluid">
                            <div class="item-img">
                                <h3>Gathering</h3>
                                <a href="" class="button-image fs-5">Booking</a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <img :src="About2" alt="" class="img-fluid">
                            <div class="item-img">
                                <h3>Nice food</h3>
                                <a href="" class="button-image fs-5">Booking</a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <img :src="About3" alt="" class="img-fluid">
                            <div class="item-img">
                                <h3>Explore</h3>
                                <a href="" class="button-image fs-5">Booking</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div id="carouselReviews" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item bg-white active">
                            <div class="card border-0 review-content text-center py-5">
                                <h2>"Magical Place"</h2>
                                <p class="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur maxime
                                    asperiores fuga eos repellendus tempora exercitationem doloremque, perspiciatis
                                    molestiae eius quaerat rerum non harum assumenda delectus eveniet at debitis?</p>
                                <p class="reviewer">Usurla Kelly</p>
                            </div>
                        </div>
                        <div class="carousel-item bg-white">
                            <div class="card border-0 review-content text-center py-5">
                                <h2>"A Great Find"</h2>
                                <p class="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur maxime
                                    asperiores fuga eos repellendus tempora exercitationem doloremque, perspiciatis
                                    molestiae eius quaerat rerum non harum assumenda delectus eveniet at debitis?</p>
                                <p class="reviewer">Usurla Kelly</p>
                            </div>
                        </div>
                        <div class="carousel-item bg-white">
                            <div class="card review-content border-0 text-center py-5">
                                <h2>"Amazing Stay"</h2>
                                <p class="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur maxime
                                    asperiores fuga eos repellendus tempora exercitationem doloremque, perspiciatis
                                    molestiae eius quaerat rerum non harum assumenda delectus eveniet at debitis?</p>
                                <p class="reviewer">Usurla Kelly</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselReviews"
                        data-bs-slide="prev" >
                        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselReviews"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
import AboutBanner from '@/assets/images/about/about-banner.jpg'
import About1 from '@/assets/images/about/About-1.jpg'
import About2 from '@/assets/images/about/About-2.jpg'
import About3 from '@/assets/images/about/About-3.jpg'
</script>
<style>
.bg-white {
    background-color: white !important;
}
.item-img {
    background-color: var(--primary-color);
    padding: 10px 0;
}
@keyframes scaleUpSmooth {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1.5);
  }
}

.banner-about {
    overflow: hidden;
}
.banner-about img{
    /* animation: scaleUpSmooth 3s ease-in-out infinite; */
}

.item-img h3 {
    color: white;
}

.button-image {
    color: black;
    background-color: var(--secondary-color);
    padding: 10px 45px;
    transition: cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

.button-image:hover {
    background-color: rgb(225, 225, 225);
    color: var(--secondary-color);
}

.review-content{
    padding: 15px 250px;
}

.reviewer{
    color: var(--secondary-color);
}
</style>
