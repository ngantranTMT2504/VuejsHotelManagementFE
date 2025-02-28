<template>
    <div class="container mt-5 d-flex justify-content-center">
        <div class=" card p-3 w-50 mb-5">
            <h3 class="text-center">Pay to complete the booking procedure</h3>
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="fw-bold">Payment Details</h5>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember">
                    <label class="form-check-label" for="remember">Remember</label>
                </div>
            </div>

            <div class="mt-3">
                <label class="fw-bold">CARD NUMBER</label>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Valid Card Number">
                    <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col">
                    <label class="fw-bold">EXPIRY DATE</label>
                    <div class="d-flex">
                        <input type="text" class="form-control me-2" placeholder="MM">
                        <input type="text" class="form-control" placeholder="YY">
                    </div>
                </div>
                <div class="col">
                    <label class="fw-bold">CV CODE</label>
                    <input type="text" class="form-control" placeholder="CV">
                </div>
            </div>

            <div class="mt-3">
                <h5>Total: {{formatPrice(totalPrice) }}</h5>
                <p class="text-secondary">Please pay so the staff can arrange a room for you early</p>
            </div>

            <div class="mt-4 d-d-flex justify-content-between align-items-center">
                <button class="btn btn-danger btn-lg me-3" @click="router.back()">Cancel</button>
                <button class="button-primary rounded-2">
                    Final Payment
                </button>
            </div>

            
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'

const route = useRoute();
const router = useRouter();
const totalPrice = route.query.price || 0;

const formatPrice = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
</script>
<style></style>