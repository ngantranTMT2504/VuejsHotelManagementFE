<template >
    <!-- Blog Section -->
    <section id="blog" class="blog_wrapper pb-0">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 section-title text-center mb-5">
                        <h6>Say Hello to Our Visiters</h6>
                        <h3>Our Blog</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card p-0 border-0 rounded-0">
                            <img :src="blog1" alt="">
                            <div class="blog-content bg-white p-4">
                                <h5 class="text-decoration-underline mb-4">It’s Breakfast Time!</h5>
                                <h6>By Admin - February 18, 2024</h6>
                                <p class="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
                                    cumque nostrum! A magni tenetur perferendis.</p>
                                <a href="#" class="main-btn mt-2">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="card p-0 border-0 rounded-0">
                            <img :src="blog2" alt="">
                            <div class="blog-content bg-white p-4">
                                <h5 class="text-decoration-underline mb-4">Wild Camping Trip</h5>
                                <h6>By Admin - February 18, 2024</h6>
                                <p class="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
                                    cumque nostrum! A magni tenetur perferendis.</p>
                                <a href="#" class="main-btn mt-2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="our-partner-slider mt-5">
                <div class="container our-partner">
                    <div class="row">
                        <div class="col-lg-2 col-md-4">
                            <img :src="brand1" alt="">
                        </div>
                        <div class="col-lg-2 col-md-4">
                            <img :src="brand2" alt="">
                        </div>
                        <div class="col-lg-2 col-md-4">
                            <img :src="brand3" alt="">
                        </div>
                        <div class="col-lg-2 col-md-4">
                            <img :src="brand4" alt="">
                        </div>
                        <div class="col-lg-2 col-md-4">
                            <img :src="brand5" alt="">
                        </div>
                        <div class="col-lg-2 col-md-4">
                            <img :src="brand6" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script setup>
import brand1 from '@/assets/images/partners/brand1.webp'
import brand2 from '@/assets/images/partners/brand2.webp'
import brand3 from '@/assets/images/partners/brand3.webp'
import brand4 from '@/assets/images/partners/brand4.webp'
import brand5 from '@/assets/images/partners/brand5.webp'
import brand6 from '@/assets/images/partners/brand6.webp'
import blog1 from '@/assets/images/blog/blog-img-1.jpg'
import blog2 from '@/assets/images/blog/blog-img-3.jpg'

</script>
<style >
    /*Blog */
.blog_wrapper .blog-content {
    margin: -5rem 0 0 4.375rem;
    box-shadow: 0 .125rem .25rem rgb(34 30 31/ 40%);
}

.our-partner-slider {
    background-color: var(--bg-color);
    padding: 3.125rem 0;
}
</style>