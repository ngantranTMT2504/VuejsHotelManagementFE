<template>
    <div v-if="isLoading" class="position-absolute loader">
        <LoaderView />
    </div>
    <div class="main h-100">
        <div class="container pt-5 ">
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
                            <h2 class="mb-4 text-center">Login</h2>
                            <form class="px-5" @submit.prevent="login">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" v-model="form.EmailAddress"
                                        placeholder="Enter your email" @input="validateField('Email')">
                                    <small v-if="errors.Email" class="text-danger">{{ errors.Email }}</small>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <div class="position-relative">
                                        <input class="form-control" id="password" v-model="form.Password"  :type="showPassword ? 'text' : 'password'"
                                            placeholder="Enter your password" @input="validateField('Password')">
                                        <button type="button" class="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent"
                                            @click="togglePassword"> <i class="bi bi-eye"></i></button>
                                    </div>
                                        <small v-if="errors.Password" class="text-danger">{{ errors.Password }}</small>
                                </div>
                                <button type="submit" class="button-primary w-100">Login</button>

                                <div class="text-center mt-3">or</div>

                                <div class="d-flex flex-column gap-2 mt-3">
                                    <button type="button" class="btn social-btn">
                                        <img src="https://img.icons8.com/color/48/000000/google-logo.png"
                                            alt="Google Logo"> Login with Google
                                    </button>
                                    <button type="button" class="btn social-btn">
                                        <img src="https://img.icons8.com/ios-filled/50/4a90e2/facebook-new.png"
                                            alt="Facebook Logo"> Login with Facebook
                                    </button>
                                </div>
                            </form>
                            <p class="text-center mt-3">Already have an account yet? <RouterLink to="/register">Register
                                </RouterLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref , onMounted} from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import CryptoJS from 'crypto-js';
import { jwtDecode } from "jwt-decode";
import { Role, TOKEN } from "@/utils/constants.js";
import LoaderView from '@/components/LoaderView.vue';

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); 
}); 

const API_LOGIN = "http://localhost:5287/api/Authenticate/login";
const router = useRouter();
const form = ref({
    EmailAddress: "",
    Password: "",
});

const errors = ref({});
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const resultLogin = {
    data: {
        token: "",
        expiration: Date,
    }
};

const validateField = (field) => {
    switch (field) {
        case "Email":
            errors.value.Email = form.value.EmailAddress ? "" : "Email không được để trống";
            break;
        case "Password":
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
            errors.value.Password = form.value.Password
                ? passwordRegex.test(form.value.Password)
                    ? ""
                    : "Password phải ít nhất 8 kí tự với số, chữ hoa, chữ thường và kí tự đặt biệt"
                : "Password không được để trống";
            break;
    }
};

const login = async () => {

    Object.keys(form.value).forEach(field => validateField(field));

    if (Object.values(errors.value).some(error => error)) {
        console.warn("Có lỗi, không gửi form:", errors.value);
        return;
    }

    try {
        console.log("Dữ liệu gửi đi:", JSON.stringify(form.value));
        const payload = {
            EmailAddress: form.value.EmailAddress,
            Password: encryptData(form.value.Password, "AAECAwQFBgcICQoLDA0ODw==")
        }
        console.log(payload);
        const response = await axios.post(API_LOGIN, payload);
        if (response?.data?.token?.length > 0) {
            sessionStorage.setItem(TOKEN, response.data.token);
        }
        const decoded = jwtDecode(response?.data?.token);
        if (decoded[Role] === 'Admin') {
            await router.push("/admin");
        } else {
            await router.push("/");
        }
        return response;
    } catch (error) {
        console.error("Lỗi:", error);
        Swal.fire("Error!", "Something went wrong.", "error");
        return null;
    }
};

function encryptData(plainText, base64Key) {
    var key = CryptoJS.enc.Base64.parse(base64Key);
    var iv = CryptoJS.lib.WordArray.random(16);
    var encrypted = CryptoJS.AES.encrypt(plainText, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    var encryptedData = iv.concat(encrypted.ciphertext);

    return CryptoJS.enc.Base64.stringify(encryptedData);
}

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

.form-section {
    position: relative;
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
    padding-inline: 20px;
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

.social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #FFF;
    border: 1px solid #EEE;
}

.social-btn img {
    height: 20px;
}
</style>