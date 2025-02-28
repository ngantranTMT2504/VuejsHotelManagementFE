<template>
    <div class="main">
        <div class="container py-2">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-8 col-md-10">
                    <div class="row g-0">
                        <div
                            class="col-md-6 d-none d-md-block background-image d-flex align-items-center justify-content-center">
                        </div>
                        <div class="col-md-6 form-section">
                            <div class="icon-close">
                                <a href="/" class="icon-home fs-4">
                                    <i class="bi bi-house-door-fill"></i>
                                </a>
                            </div>
                            <h2 class="mb-4 text-center">Register</h2>
                            <form class="px-5">
                                <div class="mb-3">
                                    <label for="fullName" class="form-label">Full Name</label>
                                    <input type="text" v-model="form.fullName" class="form-control" id="fullName"
                                        placeholder="Enter your full name" required>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Enter your email"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" v-model="form.passWord" class="form-control" id="password"
                                        placeholder="Enter your password" required>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 mb-3">
                                        <label for="phone" class="form-label">Phone Number</label>
                                        <input type="tel" v-model="form.phoneNumber" class="form-control" id="phone"
                                            placeholder="Enter your phone number" required>
                                    </div>
                                    <div class="col-lg-6 mb-3">
                                        <label for="dateOfBirth" class="form-label">Date of birth</label>
                                        <input type="date" v-model="form.dateOfBirth" class="form-control" id="address" required>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <div class="d-flex gap-4">
                                        <div class="form-check">
                                            <input class="form-check-input" v-model="form.gender" type="radio" name="gender"
                                                id="male" value="male">
                                            <label class="form-check-label" for="male">
                                                Male
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" v-model="form.gender" type="radio" name="gender"
                                                id="female" value="female" checked>
                                            <label class="form-check-label" for="female">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="address" class="form-label">Address</label>
                                    <input type="address" class="form-control" id="address"
                                        placeholder="No1 , Nguyen Van Cu, Ninh Kieu, Can Tho" required>
                                </div>
                                <button type="submit" class="button-primary w-100">Register</button>
                            </form>
                            <p class="text-center mt-3">Already have an account? <a href="/login">Log in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter , RouterLink} from 'vue-router';
import validator from 'validator';

const form = ref({
    fullName: "",
    email : "",
    passWord: "",
    phoneNumber: "",
    dateOfBirth: null,
    gender : null,
    address: ""
})
</script>
<style>
.main {
    background: url('@/assets/images/slider/slider1.jpg') no-repeat center center fixed;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
}

.icon-home{ color: var(--primary-color);}

.form-section {
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
}

.background-image {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
}

.icon-close {
    position: absolute;
    top: 0;
    left: 10px;
}

.icon-close a>i:hover {
    color: var(--secondary-text);
}
</style>