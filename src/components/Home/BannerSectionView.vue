<script setup>
import slide1 from '@/assets/images/slider/slider1.jpg'
import slide2 from '@/assets/images/slider/slider2.webp'



</script>

<template>

  <!-- Banner Section -->
  <section id="home" class="banner_wrapper p-0">
    <div id="carouselFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="slide1" class="d-block w-100 img-slider" alt="slide 1">
      <div class="carousel-caption d-none d-md-block carousel-content">
        <h1 class="text-uppercase">Welcome to my hotel</h1>
        <p class="text-white fs-5"> Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="slide2" class="d-block w-100 img-slider" alt="slide 2">
      <div class="carousel-caption d-none d-md-block carousel-content">
        <h1 class="text-uppercase ">Welcome to my hotel</h1>
        <p class="text-white fs-5">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <div class="container booking-area rounded-3">
      <form class="row">
        <div class="col-lg mb-3 mb-lg-0">
          <input type="date" class="form-control" id="" placeholder="Date">
        </div>
        <div class="col-lg mb-3 mb-lg-0">
          <input type="date" name="" class="form-control" id="" placeholder="Date">
        </div>
        <div class="col-lg mb-3 mb-lg-0">
          <select class="form-select">
            <option selected>Adults</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div class="col-lg mb-3 mb-lg-0">
          <select class="form-select">
            <option selected>Children</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div class="col-lg mb-3 mb-lg-0">
          <a href="/booking" class="main-btn px-lg-3">Booking Now</a>
        </div>
      </form>
    </div>
  </section>
</template>

<style>
/*Banner*/
.banner_wrapper {
    height: 40.625rem;
} 
.carousel-content{
  margin-bottom: 35vh;
}

.carousel-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 0;
}

.booking-area {
  background: var(--bg-white);
  box-shadow: 0 .625rem .9375rem 0 rgb(0 0 0 / 10%);
  margin-top: -4rem;
  padding: 3.125rem 1.875rem;
  position: relative;
  z-index: 99;
}
</style>