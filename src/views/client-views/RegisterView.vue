<template>
    <div class="main">
        <div class="container pt-5">
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
                            <form class="px-5" @submit.prevent="register">
                                <div class="mb-3">
                                    <label for="fullName" class="form-label">Full Name</label>
                                    <input type="text" v-model="form.Name" class="form-control" id="fullName"
                                        @input="validateField('Name')">
                                    <small v-if="errors.Name" class="text-danger">{{ errors.Name }}</small>
                                </div>

                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" v-model="form.Email" class="form-control" id="email"
                                        @input="validateField('Email')">
                                    <small v-if="errors.Email" class="text-danger">{{ errors.Email }}</small>
                                </div>

                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" v-model="form.Password" class="form-control" id="password"
                                        @input="validateField('Password')">
                                    <small v-if="errors.Password" class="text-danger">{{ errors.Password }}</small>
                                </div>

                                <div class="row">
                                    <div class="col-lg-6 mb-3">
                                        <label for="phone" class="form-label">Phone Number</label>
                                        <input type="tel" v-model="form.PhoneNumber" class="form-control" id="phone"
                                            @input="validateField('PhoneNumber')">
                                        <small v-if="errors.PhoneNumber" class="text-danger">{{ errors.PhoneNumber
                                            }}</small>
                                    </div>
                                    <div class="col-lg-6 mb-3">
                                        <label for="dateOfBirth" class="form-label">Date of birth</label>
                                        <input type="date" v-model="form.DateOfBirth" class="form-control"
                                            @change="validateField('DateOfBirth')">
                                        <small v-if="errors.DateOfBirth" class="text-danger">{{ errors.DateOfBirth
                                            }}</small>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <div class="d-flex gap-4">
                                        <div class="form-check">
                                            <input class="form-check-input" v-model="form.Gender" type="radio"
                                                name="gender" id="male" :value="true" @change="validateField('Gender')">
                                            <label class="form-check-label" for="male">Male</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" v-model="form.Gender" type="radio"
                                                name="gender" id="female" :value="false"
                                                @change="validateField('Gender')">
                                            <label class="form-check-label" for="female">Female</label>
                                        </div>
                                    </div>
                                    <small v-if="errors.Gender" class="text-danger">{{ errors.Gender }}</small>
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
import { useRouter } from 'vue-router';

const API_REGISTER = "http://localhost:5287/api/Authenticate/register";
const router = useRouter();

const form = ref({
    Name: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    Gender: null,
    DateOfBirth: ""
});

const errors = ref({});

const validateField = (field) => {
    switch (field) {
        case "Name":
            errors.value.Name = form.value.Name ? "" : "Full Name không được để trống";
            break;
        case "Email":
            errors.value.Email = form.value.Email ? "" : "Email không được để trống";
            break;
        case "Password":
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
            errors.value.Password = form.value.Password
                ? passwordRegex.test(form.value.Password)
                    ? ""
                    : "Password phải ít nhất 8 kí tự với số, chữ hoa, chữ thường và kí tự đặt biệt"
                : "Password không được để trống";
            break;
        case "PhoneNumber":
            errors.value.PhoneNumber = form.value.PhoneNumber
                ? /^\d{10}$/.test(form.value.PhoneNumber)
                    ? ""
                    : "Phone number không đúng"
                : "Phone number không được để trống";
            break;
        case "DateOfBirth":
            if (!form.value.DateOfBirth) {
                errors.value.DateOfBirth = "Date of birth không được để trống";
            } else {
                const birthDate = new Date(form.value.DateOfBirth);
                const today = new Date();
                const age = today.getFullYear() - birthDate.getFullYear();
                errors.value.DateOfBirth = (age > 18 || (age === 18 && today >= new Date(birthDate.setFullYear(birthDate.getFullYear() + 18))))
                    ? ""
                    : "Bạn phải lớn hơn 18 tuổi";
            }
            break;
        case "Gender":
            errors.value.Gender = form.value.Gender !== null ? "" : "Gender không được để trống";
            break;
    }
};

const register = async () => {
    Object.keys(form.value).forEach(field => validateField(field)); 

    if (Object.values(errors.value).some(error => error)) {
        console.warn("Có lỗi, không gửi form:", errors.value);
        return;
    }

    try {
        console.log("Dữ liệu gửi đi:", JSON.stringify(form.value));
        await axios.post(API_REGISTER, form.value);
        Swal.fire("Success!", "You have registered successfully.", "success");
        router.push("/login");
    } catch (error) {
        console.error("Lỗi:", error);
        Swal.fire("Error!", "Something went wrong.", "error");
    }
};
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

.icon-home {
    color: var(--primary-color);
}

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