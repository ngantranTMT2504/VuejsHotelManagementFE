<template>
    <header>
        <div class="header_wrapper">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <RouterLink class="navbar-brand" to="/">
                        <img :src="logo" alt="logo.png" class="img-flud" />
                    </RouterLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon fa-solid fa-bars-staggered"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end  align-item-center" id="navbarNav">
                        <ul class="navbar-nav menu-navbar-nav">
                            <li class="nav-item">
                                <RouterLink class="nav-link active" to="/">Home</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/about">About</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/room">Rooms</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/service">Services</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/gallery">Gallery</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/blog">Blog</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
                            </li>
                            <li class="nav-item ">
                                <RouterLink class="nav-link" to="/booking-detail">Your booking</RouterLink>
                            </li>
                            <li class="nav-item mt-3 mt-lg-0" v-if="!userName.length > 0">
                                <RouterLink class="main-btn" to="/login">Login</RouterLink>
                            </li>
                            <li class="nav-item dropdown" v-if="userName.length > 0">
                                <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDarkDropdownMenuLink"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-person-circle fs-4"></i>
                                     {{ userName }}
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item mt-3 mt-lg-0" v-if="role == 'Admin'">
                                        <RouterLink class="dropdown-item" to="/admin">Admin</RouterLink>
                                    </li>
                                    <li class="nav-item ">
                                        <RouterLink class="dropdown-item" to="/login" @click="clearToken()">Logout</RouterLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/about/logo.png'
import { ref, onMounted } from 'vue';
import { jwtDecode } from "jwt-decode";
import { Role, TOKEN, Email } from "@/utils/constants.js";

const userName = ref('');
const role = ref('')
if (sessionStorage.getItem(TOKEN)) {
    const token = sessionStorage.getItem(TOKEN);
    const decoded = jwtDecode(token);
    userName.value = decoded[Email];
    role.value = decoded[Role]
    console.log(decoded);
}

onMounted(() => {
    const nav = document.querySelector(".navbar");
    const handleScroll = () => {
        if (document.documentElement.scrollTop > 50) {
            nav.classList.add("header-scrolled")
        } else {
            nav.classList.remove("header-scrolled")
        }
    }
    window.addEventListener("scroll", handleScroll);
});

const clearToken = () => {
    sessionStorage.removeItem(TOKEN);
}

</script>
<style>
/* Navbar */
.header_wrapper .navbar {
    padding: 0.9375rem 0;
    background-color: var(--bg-white);
    -webkit-box-shadow: 0 .5rem 0.375rem -0.375rem rgb(0 0 0/ 40%);
    box-shadow: 0 .5rem 0.375rem -0.375rem rgb(0 0 0 / 40%);
    -webkit-transition: background 0s ease-in-out 0s, margin-top 0s ease-in-out 0s, opacity 0s ease-in-out 0s;
    transition: background 0s ease-in-out 0s, margin-top 0s ease-in-out 0s, opacity 0s ease-in-out 0s;
}

.header_wrapper .navbar-toggler {
    border: 0;
    color: var(--primary-text);
    line-height: 2;
}

.header_wrapper .navbar-toggler:focus {
    box-shadow: none;
}

.header_wrapper .nav-item {
    margin: 0 .625rem;
}

.header_wrapper .nav-item .nav-link {
    font-size: 1rem;
    font-weight: 500;
    color: var(--primary-text);
    display: inline-block;
}

.header_wrapper .nav-item .nav-link:hover,
.header_wrapper .nav-item .nav-link:active {
    color: var(--secondary-text);
}

.header_wrapper .main-btn {
    text-decoration: none;
}

.navbar.header-scrolled {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    background-color: rgb(255, 255, 255, .85);
    -webkit-animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
}

@keyframes fadeInDown {
    0% {
        top: -30%;
    }

    50% {
        top: -15%;
    }

    100% {
        top: 0;
    }
}

@media (max-width: 1199px) {

    /* Header */
    .header_wrapper .navbar-expand-lg .navbar-nav {
        align-items: center;
    }

    .header_wrapper .navbar-expand-lg .navbar-nav .nav-link {
        padding: 0;
        font-size: 0.875rem;
    }

    .main-btn {
        font-size: 0.875rem;
    }

    /* Booking*/
    .booking-area {
        font-size: .875rem;
    }

    .booking-area .main-btn {
        padding-left: .312rem !important;
        padding-right: .312rem !important
    }
}
</style>