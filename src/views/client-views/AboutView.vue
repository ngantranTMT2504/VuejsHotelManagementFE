<template>
    <div v-if="isLoading" class="position-absolute loader">
        <LoaderView />
    </div>
    <main>
        <!-- About Section -->
        <section id="about" class="about_wrapper m-0 py-5">
            <div class="container mb-5 text-center">
                <h3>About Us</h3>
                <h2>Our Awesome Services</h2>
            </div>
            <div class="banner-about w-100">
                <img :src="AboutBanner" alt="" class="w-100">
            </div>
            <div class="container since text-center my-5">
                <h3>Since 2025 Year</h3>
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
            <div class="container mb-5">
                <div class="food-content text-center mx-5 mb-5">
                    <h3>Our Special Space</h3>
                    <p class="px-5 fs-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure aspernatur voluptatibus
                        numquam nihil cum aut explicabo! Consequatur amet beatae iure excepturi commodi, nisi maiores
                        ratione inventore eveniet cumque assumenda?
                    </p>
                </div>
                <div class="d-flex ">
                    <div class="col-lg-6 about-content">
                        <h3>About my hotel</h3>
                        <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab itaque tenetur,
                            molestiae
                            rerum facilis vitae temporibus a quibusdam veniam voluptate cumque alias eius reiciendis
                            libero debitis. Magnam, incidunt debitis?</p>
                        <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab itaque tenetur,
                            molestiae
                            rerum facilis vitae temporibus a quibusdam veniam voluptate cumque alias eius reiciendis
                            libero debitis. Magnam, incidunt debitis?</p>
                        <div>
                            <button class="main-btn">Read more</button>
                            <img :src="icon" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6 m-0 p-0 ">
                        <img :src="About4" alt="">
                    </div>
                </div>
            </div>
            <div class="container mt-5">
                <div class="food-content text-center mx-5 mb-5">
                    <h3>Our Special Food</h3>
                    <p class="px-5 fs-5">Between 08.30 and 10.30 we serve our buffet of local and fresh products. Start
                        your day with your
                        favorite breakfast!</p>
                </div>
                <div class="row">
                    <div class="col-lg-4 p-0">
                        <img :src="Food1" alt="" class="img-fluid">
                    </div>
                    <div class="col-lg-4 p-0">
                        <img :src="Food2" alt="" class="img-fluid">
                    </div>
                    <div class="col-lg-4 p-0">
                        <img :src="Food3" alt="" class="img-fluid">
                    </div>
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
import About4 from '@/assets/images/about/about-hotel.jpg'
import icon from '@/assets/images/about/icon-about-map.png'
import Food1 from '@/assets/images/about/food-img-01.jpg'
import Food2 from '@/assets/images/about/food-img-02.jpg'
import Food3 from '@/assets/images/about/food-img-03.jpg'
import LoaderView from '@/components/LoaderView.vue';
import { onMounted , ref} from 'vue';

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); 
});
</script>
<style>
.bg-white {
    background-color: white !important;
}

.about-content {
    margin-left: 50px;
    padding: 100px 20px 0 100px;
    background-color: var(--secondary-color);
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

.banner-about img {
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

.review-content {
    padding: 15px 250px;
}

.reviewer {
    color: var(--secondary-color);
}
</style>
