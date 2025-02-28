<template>
    <main>
        <div class="pb-5 position-relative">
            <h1 class="text-dark position-absolute title-room ">Rooms</h1>
            <img :src="RoomBanner" alt="" width="100%">
        </div>
        <div class="container room-wrapper ">
            <div class="row">
                <div class=" col-lg-8">
                    <div  v-for="type in typeRooms" class="room-item position-relative">
                        <div class="img-room">
                            <img :src="type?.imageRoom" alt="" class="img-fluid">
                        </div>
                        <div class="room-content row py-4">
                            <h4 class="fw-semibold">{{ type?.name }}</h4>
                            <div class="d-flex">
                                <p class="fs-5 me-3 price-room">{{ type?.price }}</p>
                                <p>/ {{ type?.capacity }} persons</p>
                            </div>
                            <p class="fs-5">{{ type?.description }}</p>
                            
                            <div>
                                <RouterLink to="/booking" type="submit" class="button-primary ">
                                    Booking now 
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 fixed-form text-white">
                    <div class="form-wrapper py-5 rounded-4">
                        <h3 class="mb-4 text-center">Your Reservation</h3>
                        <form class="px-5 ">
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
                            <div class="row mb-4">
                                <label class="form-label fw-semibold">Peoples:</label>
                                <div class="col-lg mb-6 mb-lg-0">
                                    <select class="form-select">
                                        <option selected>Adults</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                       
                                    </select>
                                </div>
                                <div class="col-lg mb-6 mb-lg-0">
                                    <select class="form-select">
                                        <option selected>Children</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>
                            <div class="text-center mt-5">
                                <RouterLink to="/booking" type="submit" class="btn-payment w-100">Booking</RouterLink>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import RoomBanner from '@/assets/images/room/room-banner.jpg'
import axios from 'axios';
import { RouterLink } from 'vue-router'
import { ref, onMounted} from 'vue'


const typeRooms = ref([]);

const API_GETALL = "http://localhost:5287/api/TypeRoom/GetTypeRooms";

const typeRoomList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        typeRooms.value = response.data.reverse();
    } catch (error) {
        console.error("Lỗi!", error);
    }
};


onMounted(typeRoomList)
</script>
<style>
fixed-form {
    position: fixed;
    background-color: var(--secondary-color);
}
.title-room{
    top: 45%;
    left: 45%;
}

.price-room{
    color: var(--secondary-color);
}

</style>