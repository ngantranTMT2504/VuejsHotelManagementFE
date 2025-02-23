<template>
    <!-- Navbar Section -->
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

                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
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
                                <RouterLink class="nav-link" to="/team">Team</RouterLink>
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
                            <li class="nav-item mt-3 mt-lg-0">
                                <RouterLink class="main-btn" to="/login">Login</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup>
import { RouterLink} from 'vue-router';
import logo from '@/assets/images/about/logo.png'
import { onMounted} from 'vue';


onMounted(()=> {
  const nav = document.querySelector(".navbar");
  
  const handleScroll = () => {
    if(document.documentElement.scrollTop > 50) {
      nav.classList.add("header-scrolled")
    } else {
      nav.classList.remove("header-scrolled")
    }
  }

  // Lắng nghe sự kiện cuộn
  window.addEventListener("scroll", handleScroll);
}); 
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