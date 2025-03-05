<template>
     <div v-if="isLoading" class="position-absolute loader">
        <LoaderView />
    </div>
    <div>
        <div v-if="bookings.length <= 0" class="py-5">
            <p class="text-center fs-4 my-5 text-danger">You have not made any previous bookings</p>
            <div class="text-center">
                <RouterLink to="/booking" type="submit" class="button-primary px-3">
                    Booking now
                </RouterLink>
            </div>
        </div>
        <div class="container my-5" v-if="bookings.length > 0">
            <h2>Your booking</h2>
            <table class="table-design w-100">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Check-in Date</th>
                        <th>Check-out Date</th>
                        <th>Total Price</th>
                        <th>Total Rooms</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(booking,index) in bookings" :key="booking.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ formatDate(booking.dateCheckin) }}</td>
                        <td>{{ formatDate(booking.dateCheckout) }}</td>
                        <td>{{ formatPrice(booking.totalPrice) }}</td>
                        <td>{{ booking.totalRoom }}</td>
                        <td>{{ booking.statusName }}</td>
                        <td>
                            <div class="action btn d-flex gap-4" v-if="booking.status == 0">
                                <a class="btn btn-warning text-dark px-2 py-1 rounded"
                                    @click="cancelBooking(booking.id)">
                                    cancel
                                </a>
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { jwtDecode } from "jwt-decode";
import { TOKEN, UserId } from "@/utils/constants.js";
import LoaderView from '@/components/LoaderView.vue';

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); 
}); 
const bookings = ref([]);
const router = useRouter();
const API_GETALL = "http://localhost:5287/api/Booking/GetBooking";
const API_EDIT = "http://localhost:5287/api/Booking/UpdateBooking";
const API_GET_ID = "http://localhost:5287/api/Booking/GetBooking/";

// const userId = ref('');

const bookingList = async () => {
    try {
        let userId = "";
        if (sessionStorage.getItem(TOKEN)) {
            const token = sessionStorage.getItem(TOKEN);
            const decoded = jwtDecode(token);
            userId = decoded[UserId];
            console.log(decoded[UserId]);
        }
        // userId = userId.value;
        const response = await axios.get(API_GETALL);
        response.data.forEach(element => {

            if (element.userID == userId) {
                bookings.value.push(element);
                if (bookings.value[0] !== null) {
                    bookings.value.forEach(element => {
                        switch (element?.status) {
                            case 0:
                                element.statusName = "Pending";
                                break;
                            case 1:
                                element.statusName = "Confirmed";
                                break;
                            case 2:
                                element.statusName = "Cancelled";
                                break;
                            default:
                                element.statusName = "None";
                                break;
                        }
                    });
                }
            }
        })
    }
    catch (error) {
        console.error("Lỗi!", error);
    }
};

onMounted(bookingList)

const cancelBooking = async (id) => {
    try {
        const response = await axios.get(API_GET_ID + id);
        let booking = response.data;
        booking.status = 2;
        await axios.put(API_EDIT, booking);
        Swal.fire({
            title: "Thành công!",
            text: "Cancel thành công.",
            icon: "success",
            confirmButtonText: "OK"
        });
        bookingList();
        router.push("/admin/approved-booking");

    } catch (error) {
        console.error("Lỗi cập nhật:", error);
        Swal.fire({
            title: "Lỗi!",
            text: "Cancel thất bại.",
            icon: "error",
            confirmButtonText: "Thử lại"
        });
    }
};

const formatPrice = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('vi-VN');
};
</script>

<style></style>