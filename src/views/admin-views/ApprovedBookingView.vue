<template>
    <div class="container mt-4">
        <h2>Booking Information</h2>
        <table class="table-design w-100">
            <thead>
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
                <tr v-for="booking in VisiblePagenation" :key="booking.id" >
                    <td height="80px">{{ booking.id }}</td>
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
        <div v-if="VisiblePagenation.length <= 0">
            <p class="text-danger text-center py-2">There are no service yet</p>
        </div>
        <!-- Phân trang -->
        <nav aria-label="Page navigation" class="d-flex justify-content-center mt-3"
            v-if="VisiblePagenation.length > 0">
            <ul class="pagination">
                <li class="page-item">
                    <button class="page-link" @click="changePage(currentPage - 1)"
                        :disabled="currentPage == 1">&laquo;</button>
                </li>
                <li class="page-item" v-for="pageNumber in VisiblePageNumbers"
                    :class="{ active: currentPage == pageNumber || currentPage == '...' }">
                    <button class="page-link" @click=" changePage(pageNumber)"> {{ pageNumber }}</button>
                </li>
                <li class="page-item">
                    <button class="page-link" @click="changePage(currentPage + 1)"
                        :disabled='currentPage === totalPage.value'>&raquo;</button>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
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

//Confirm booking 
const approvedBooking = async (id) => {
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

//format price
const formatPrice = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

//format date
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('vi-VN');
};

//pagination 
const itemPerPage = ref(4);
const currentPage = ref(1);

const changePage = (page) => {
    if (page >= 1 && page <= totalPage.value) {
        currentPage.value = page
    }
}

const VisiblePagenation = computed(() => {
    const startPage = (currentPage.value - 1) * itemPerPage.value;
    const endPage = startPage + itemPerPage.value;
    return bookings.value.slice(startPage, endPage)
})

const totalPage = computed(() => {
    return Math.ceil(bookings.value.length / itemPerPage.value);
})

const VisiblePageNumbers = computed(() => {
    let pageNumbers = []
    if (totalPage.value <= 7) {
        for (let i = 1; i <= totalPage.value; i++) {
            pageNumbers.push(i)
        }
    } else {
        if (currentPage <= 4) {
            pageNumbers = [1, 2, 3, 4, 5, "...", totalPage.value]
        } else if (currentPage >= totalPage.value - 3) {
            pageNumbers = [1, "...", totalPage.value - 4, totalPage.value - 3, totalPage.value - 2, totalPage.value - 1, totalPage.value]
        } else {
            pageNumbers = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", + totalPage.value]
        }
    }
    return pageNumbers;
})
</script>
<style></style>