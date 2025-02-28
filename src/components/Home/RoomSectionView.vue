<template>
    <!-- Rooms Section -->
    <section id="rooms" class="rooms_wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 section-title text-center mb-5">
                    <h6>What I can do for you</h6>
                    <h3>Our Favourite Rooms</h3>
                </div>
            </div>
            <div class="row m-0">
                <div class="col-md-4 mb-4 mb-lg-0">
                    <div class="room-items">
                        <img :src="room1" alt="" class="img-fluid">
                        <div class="room-item-wrap">
                            <div class="room-content">
                                <h5 class="text-white mb-lg-5 text-decoration-underline">Deluxe Room</h5>
                                <p class="text-white">Discover five of our favourite dresses from our new
                                    collection that are
                                    destined to be worn and loved immediately</p>
                                <p class="text-white fw-bold mt-lg-4">2,800,000đ/ Per Night</p>
                                <a class="main-btn border-white text-white mt-lg-5" href="#">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4 mb-lg-0">
                    <div class="room-items">
                        <img :src="room2" alt="" class="img-fluid">
                        <div class="room-item-wrap">
                            <div class="room-content">
                                <h5 class="text-white mb-lg-5 text-decoration-underline"></h5>
                                <p class="text-white">Discover five of our favourite dresses from our new
                                    collection that are
                                    destined to be worn and loved immediately</p>
                                <p class="text-white fw-bold mt-lg-4">1,500,00đ/ Per Night</p>
                                <a class="main-btn border-white text-white mt-lg-5" href="#">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4 mb-lg-0">
                    <div class="room-items">
                        <img :src="room3" alt="" class="img-fluid">
                        <div class="room-item-wrap">
                            <div class="room-content">
                                <h5 class="text-white mb-lg-5 text-decoration-underline">Standard Room</h5>
                                <p class="text-white">Discover five of our favourite dresses from our new
                                    collection that are
                                    destined to be worn and loved immediately</p>
                                <p class="text-white fw-bold mt-lg-4">850,000đ/ Per Night</p>
                                <a class="main-btn border-white text-white mt-lg-5" href="#">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import room1 from '@/assets/images/room/room1.webp'
import room2 from '@/assets/images/room/room2.webp'
import room3 from '@/assets/images/room/room3.jpg'
</script>
<style>
/* Room */
.section-title:after {
  content: "";
  background-image: url('@/assets/title-icon.webp');
  background-position: center center;
  background-repeat: no-repeat;
  display: block;
  margin-top: -0.9375rem;
  height: 0.9375rem;
}
.rooms_wrapper .room-items {
    position: relative;
    overflow: hidden;
}

.rooms_wrapper .room-items img {
    width: 100%;
    -webkit-transition: all 400ms ease-in 0s;
    transition: all 400ms ease-in 0s;
}

.rooms_wrapper .room-items:hover img {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
}

.rooms_wrapper .room-items::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-black);
    opacity: 0;
    z-index: 1;
    -webkit-transition: all 400ms ease-in 0s;
    transition: all 400ms ease-in 0s;
}

.rooms_wrapper .room-items:hover::before {
    opacity: 0.6;
}

.rooms_wrapper .room-item-wrap {
    position: absolute;
    left: 1.875rem;
    right: 1.875rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

.rooms_wrapper .room-items .room-content {
    border: .125rem solid var(--bg-white);
    padding: 5rem 1.875rem;
    -webkit-transform: scale3d(1.2, 1.2, 1.2);
    transform: scale3d(1.2, 1.2, 1.2);
    -webkit-transition: all 500ms ease-in 0s;
    transition: all 500ms ease-in 0s;
    opacity: 0;

}

.rooms_wrapper .room-items:hover .room-content {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
</style>