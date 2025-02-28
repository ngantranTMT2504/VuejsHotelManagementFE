<template >
    <main>
        <div class="pb-5 position-relative">
            <h1 class="text-dark position-absolute title-room ">Services</h1>
            <img :src="ServiceBanner" alt="" width="100%">
        </div>
        <div class="container room-wrapper ">
            <div class="row">
                <div class=" col-lg-8">
                    <div v-for="service in services" class="room-item">
                        <div class="img-room">
                            <img :src="service?.imageService" alt="" class="img-fluid">
                        </div>
                        <div class="room-content row py-4">
                            <h4 class="fw-semibold">{{ service?.name }}</h4>
                            <p class="fs-5 price-service">{{ service?.price }}</p>
                            <p class="fs-5">{{ service?.description }}</p>

                            <div>
                                <RouterLink to="/booking" type="submit" class="button-primary">Booking now</RouterLink>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-lg-4 text-white">
                    <div class="form-wrapper py-5 rounded-4 ">
                        <h3 class="mb-4 text-center">Your Reservation</h3>
                        <form class="px-5">
                            <div class="mb-3">
                                <label for="check-in" class="form-label fw-semibold">Check-in</label>
                                <input type="date" class="form-control" id="check-in" required>
                            </div>
                            <div class="mb-3">
                                <label for="check-out" class="form-label fw-semibold">Check-out</label>
                                <input type="date" class="form-control" id="check-out" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-semibold">Room</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3"> 3 </option>
                                </select>
                            </div>
                            <div class="row mb-3">
                                <label class="form-label fw-semibold">Peoples</label>
                                <div class="col-lg mb-6 mb-lg-0">
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
                                <div class="col-lg mb-6 mb-lg-0">
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
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-semibold">Type room</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="Standard Room" selected>Standard Room</option>
                                    <option value="Superior Room">Superior Room </option>
                                    <option value="Deluxe Room"> Deluxe Room </option>
                                    <option value="Suite Room"> Suite Room </option>
                                    <option value="Executive Suite"> Executive Suite </option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-semibold">Extra Services</label>
                                <div class="form-check">
                                    <input class="form-check-input custom-check" type="checkbox" value=""
                                        id="SpaService">
                                    <label class="form-check-label" for="SpaService">
                                        Spa, beauty & Health
                                    </label>
                                    <span class="price">$20</span>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input custom-check" type="checkbox" value=""
                                        id="RestaurentService">
                                    <label class="form-check-label" for="RestaurentService">
                                        Restaurent
                                    </label>
                                    <span class="price">$20</span>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input custom-check" type="checkbox" value=""
                                        id="SwimmingPoolService">
                                    <label class="form-check-label" for="SwimmingPoolService">
                                        Swimming Pool
                                    </label>
                                    <span class="price">$20</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input custom-check" type="checkbox" value=""
                                        id="ConferenceService">
                                    <label class="form-check-label" for="ConferenceService">
                                        Conference Hall
                                    </label>
                                    <span class="price ">$20</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <p class="fw-semibold text-white">You price</p>
                                <p class="text-white">Total : $70</p>
                            </div>
                            <RouterLink to="/booking" type="submit" class="btn-payment w-100">Booking</RouterLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import ServiceBanner from '@/assets/images/services/service-banner.jpg'
import axios from 'axios';
import { RouterLink } from 'vue-router'
import { ref, onMounted} from 'vue'

const API_GETALL = "http://localhost:5287/api/Service/GetServices"
const services= ref([])



const serviceList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        services.value = response.data
    } catch (error) {
        console.log("Lỗi!" + error);
    }
}

onMounted(serviceList)
</script>
<style >
.price-service{
    color: var(--secondary-color);
}
</style>