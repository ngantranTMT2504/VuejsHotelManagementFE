<script setup>
import AboutImg from '@/assets/images/about/team.jpg'

</script>
<template>
    <!-- About Section -->
    <section id="about" class="about_wrapper">
            <div class="container">
                <div class="row flex-lg-row flex-column-reverse ">
                    <div class="col-lg-6 text-center text-lg-start">
                        <h3>Welcome to <span>Hotel <br class="d-none d-lg-block"> the haven</span> of your weekend
                        </h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eligendi quia, totam vero
                            repellendus saepe quo in adipisci doloremque aspernatur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, alias!</p>
                        <a class="main-btn mt-4" href="#">Explore</a>
                    </div>
                    <div class="col-lg-6 mb-4 mb-lg-0 ps-lg-4 text-center">
                        <img :src="AboutImg" class="img-fluid" alt="about">
                    </div>
                </div>
            </div>
        </section>
</template>
<style>
    /* About */
.about_wrapper {
    padding-top: 9.375rem;
}

.main-btn {
    text-decoration: none;
}
</style>