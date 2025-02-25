<template>
    <div class="container mt-4">
        <h2>Booking Information</h2>
        <table class="table table-bordered table-striped">
            <thead class="table-primary">
                <tr>
                    <th>Booking ID</th>
                    <th>Client ID</th>
                    <th>Check-in Date</th>
                    <th>Check-out Date</th>
                    <th>Total Price</th>
                    <th>Total Rooms</th>
                    <th>Payment Method</th>
                    <th>Payment Amount</th>
                    <th>Rooms</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="booking in bookings" :key="booking.ID">
                    <td>{{ booking.ID }}</td>
                    <td>{{ booking.client }}</td>
                    <td>{{ booking.checkInDate }}</td>
                    <td>{{ booking.checkOutDate }}</td>
                    <td>{{ booking.price }}</td>
                    <td>{{ booking.totalRoom }}</td>
                    <td>{{ booking.PaymentMethod }}</td>
                    <td>{{ booking.PaymentAmount }}</td>
                    <td>{{ booking.Room }}</td>
                    <td>
                        <div class="action btn d-flex gap-4">
                            <a href="" class="btn btn-danger text-dark px-2 py-1 rounded">
                                Cancel
                            </a>
                        </div>
                    </td>

                </tr>
                <!-- Thêm các hàng khác tại đây -->
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const bookings = ref([
    {
        ID: 1,
        client: 'John Doe',
        checkInDate: '2023-10-01',
        checkOutDate: '2023-10-05',
        price: '$500.00',
        totalRoom: 2,
        PaymentMethod: 'Credit Card',
        PaymentAmount: '$250.00',
        Room: '101 , 102'
    },
    {
        ID: 2,
        client: 'Jane Smith',
        checkInDate: '2023-10-10',
        checkOutDate: '2023-10-15',
        price: '$700.00',
        totalRoom: 3,
        PaymentMethod: 'PayPal',
        PaymentAmount: '$350.00',
         Room: '201 , 202'
    }
])
</script>
<style></style>