<template>
    <div class="container mt-4">
        <h2>Booking Information</h2>
        <table class="table-design w-100">
            <thead >
                <tr>
                    <th>Booking ID</th>
                    <th>Client ID</th>
                    <th>Check-in Date</th>
                    <th>Check-out Date</th>
                    <th>Total Price</th>
                    <th>Total Rooms</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="booking in bookings" :key="booking.id">
                    <td>{{ booking.id }}</td>
                    <td>{{ booking.userID }}</td>
                    <td>{{ formatDate(booking.dateCheckin) }}</td>
                    <td>{{ formatDate(booking.dateCheckout) }}</td>
                    <td>{{ formatPrice(booking.totalPrice) }}</td>
                    <td>{{ booking.totalRoom }}</td>
                    <td>{{ booking.statusName }}</td>
                    <td>
                        <div class="action btn d-flex gap-4" v-if="booking.status == 0">
                            <a class="btn btn-warning text-dark px-2 py-1 rounded" @click="approvedBooking(booking.id)">
                                Approved
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const bookings = ref([]);
const router = useRouter();

const API_GETALL = "http://localhost:5287/api/Booking/GetBooking";
const API_EDIT = "http://localhost:5287/api/Booking/UpdateBooking";
const API_GET_ID = "http://localhost:5287/api/Booking/GetBooking/";

const bookingList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        bookings.value = response.data.reverse();
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
    } catch (error) {
        console.error("Lỗi!", error);
    }
};

onMounted(bookingList)

const approvedBooking = async(id) => {
  try {
    const response = await axios.get(API_GET_ID + id);
    let booking = response.data; 
    booking.status = 1;
    await axios.put(API_EDIT, booking);
    Swal.fire({
      title: "Thành công!",
      text: "Cập nhật thành công.",
      icon: "success",
      confirmButtonText: "OK"
    });
    bookingList();
    router.push("/admin/approved-booking");

  } catch (error) {
    console.error("Lỗi cập nhật:", error);
    Swal.fire({
      title: "Lỗi!",
      text: "Cập nhật thất bại.",
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