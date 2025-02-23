<template >
    <!-- Services Section -->
    <section id="services" class="services_wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 section-title text-center mb-5">
                        <h6>We Are Here for Your</h6>
                        <h3>Our Awesome Services</h3>
                    </div>
                </div>
                <!-- Tab Content -->
                <div class="row align-items-center service-items-wrap">
                    <div class="col-lg-7 p-lg-0">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane show active" id="spa" role="tabpanel">
                                <img :src="service1" alt="services">
                            </div>
                            <div class="tab-pane show" id="restaurent" role="tabpanel">
                                <img :src="service2" alt="services">
                            </div>
                            <div class="tab-pane show" id="swimming" role="tabpanel">
                                <img :src="service3" alt="services">
                            </div>
                            <div class="tab-pane show" id="conference" role="tabpanel">
                                <img :src="service4" alt="services">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 position-relative">
                        <div class="service-menu-area">
                            <ul class="nav">
                                <li>
                                    <a data-bs-toggle="tab" class="active" href="#spa">
                                        <span class="service-icon">
                                            <img :src="serviceIcon4" alt="icon spa"></span>
                                        <h5>Spa, beauty & Health</h5>
                                        <p><span>Spa and beauty </span> Lorem ipsum dolor sit amet consectetur,
                                            adipisicing elit.</p>
                                    </a>
                                </li>
                                <li>
                                    <a data-bs-toggle="tab" href="#restaurent">
                                        <span class="service-icon">
                                            <img :src="serviceIcon3" alt="icon restaurent"></span>
                                        <h5>Restaurent</h5>
                                        <p><span>Restaurent </span> Lorem ipsum dolor sit amet consectetur,
                                            adipisicing elit. Iure, itaque!</p>
                                    </a>
                                </li>
                                <li>
                                    <a data-bs-toggle="tab" href="#swimming">
                                        <span class="service-icon">
                                            <img :src="serviceIcon2" alt="icon swimming"></span>
                                        <h5>Swimming Pool</h5>
                                        <p><span>Swimming </span> Lorem ipsum dolor sit amet consectetur,
                                            adipisicing elit. Iure, itaque!</p>
                                    </a>
                                </li>
                                <li>
                                    <a data-bs-toggle="tab" href="#conference">
                                        <span class="service-icon">
                                            <img :src="serviceIcon1" alt="icon conference"></span>
                                        <h5>Conference Hall</h5>
                                        <p><span>Conference </span> Lorem ipsum dolor sit amet consectetur,
                                            adipisicing elit. Iure, itaque!</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="counter mt-5">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                            <h1><span id="count1"></span>{{ count1 }}</h1>
                            <p>Happy Clients</p>
                        </div>

                        <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                            <h1><span id="count2"></span>{{ count2 }}</h1>
                            <p>New Friendship</p>
                        </div>
                        <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                            <h1><span id="count3"></span>{{ count3 }}</h1>
                            <p>Five Start Ratings</p>
                        </div>
                        <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                            <h1><span id="count4"></span>{{ count4 }}</h1>
                            <p>Served Brackfast</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script setup>
import service1 from '@/assets/images/services/service1.webp'
import service2 from '@/assets/images/services/service2.webp'
import service3 from '@/assets/images/services/service3.webp'
import service4 from '@/assets/images//services/service6.webp'
import serviceIcon1 from '@/assets/images/services/service-icon1.webp'
import serviceIcon2 from '@/assets/images/services/service-icon2.webp'
import serviceIcon3 from '@/assets/images/services/service-icon3.webp'
import serviceIcon4 from '@/assets/images/services/service-icon4.webp'
import { ref, onMounted } from "vue";

// Khai báo các biến phản ứng (reactive) để lưu giá trị bộ đếm
const count1 = ref(0);
const count2 = ref(100);
const count3 = ref(0);
const count4 = ref(0);

const counter = (countRef, start, end, duration) => {
  let current = start;
  let range = end - start;
  let increment = end > start ? 1 : -1;
  let step = Math.abs(Math.floor(duration / range));

  let timer = setInterval(() => {
    current += increment;
    countRef.value = current; // Cập nhật giá trị trong Vue
    if (current === end) {
      clearInterval(timer);
    }
  }, step);
};

onMounted(() => {
  counter(count1, 0, 1287, 3000);
  counter(count2, 100, 2087, 3000);
  counter(count3, 0, 2088, 3000);
  counter(count4, 0, 2277, 3000);
});
</script>
<style >
    /*Services */
.service-items-wrap {
    background-color: var(--bg-color);
}

.service-menu-area ul li a {
    display: block;
    margin-bottom: 2.8125rem;
}

.service-menu-area ul li a .service-icon {
    height: 5.625rem;
    width: 5.625rem;
    background-color: var(--secondary-color);
    line-height: 5.625rem;
    text-align: center;
    border-radius: 100%;
    float: left;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.service-menu-area ul li a .service-icon:hover,
.service-menu-area ul li a.active .service-icon {
    background-color: var(--primary-color);
    color: var(--text-white);
    box-shadow: 0 .125rem rgb(34 30 31/ 40%);

}

.service-menu-area ul li:nth-child(1) {
    margin-left: 0.5625rem;
}

.service-menu-area ul li:nth-child(2) {
    margin-left: -2.75rem;
}

.service-menu-area ul li:nth-child(3) {
    margin-left: -6.375rem;
}

.service-menu-area ul li:nth-child(4) {
    margin-left: -8.8125rem;
}

.service-menu-area ul li a p,
.service-menu-area ul li a h5 {
    padding-left: 6.975rem;
    display: block;
    text-align: left;
}

.counter {
    background-image: url('@/assets/images/services/counter-bg.webp');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 3.125rem;
    position: relative;
}

.counter::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background-color: var(--bg-black);
    opacity: 0.5;
    z-index: 1;
}

.counter h1,
.counter p {
    position: relative;
    z-index: 1;
    color: var(--text-white);
}

</style>