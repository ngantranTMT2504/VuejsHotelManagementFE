<template>
    <!-- Gallery Section -->
    <section id="gallery" class="gallery_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 section-title text-center mb-5">
                    <h6>Best Pictures of Our Hotel</h6>
                    <h3>Our Gallery</h3>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img :src="gallery1" alt="..." class="img-fluid w-100">
                    <div class="gallery-item-content">

                    </div>
                </div>
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img :src="gallery2" alt="..." class="img-fluid w-100">
                    <div class="gallery-item-content">

                    </div>
                </div>
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img :src="gallery3" alt="..." class="img-fluid w-100">
                    <div class="gallery-item-content">

                    </div>
                </div>
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img :src="gallery4" alt="..." class="img-fluid w-100">
                    <div class="gallery-item-content">

                    </div>
                </div>
                <div class="col-md-6 gallery-item">
                    <img :src="gallery5" alt="..." class="img-fluid w-100">
                    <div class="gallery-item-content">

                    </div>
                </div>
                <div class="col-md-6 gallery-item">
                    <img :src="gallery6" alt="..." class="img-fluid w-100">
                    <div class="gallery-item-content">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import gallery1 from '@/assets/images/gallery/1.webp'
import gallery2 from '@/assets/images/gallery/2.webp'
import gallery3 from '@/assets/images/gallery/3.webp'
import gallery4 from '@/assets/images/gallery/4.webp'
import gallery5 from '@/assets/images/gallery/5.webp'
import gallery6 from '@/assets/images/gallery/6.webp'

</script>
<style>
/* Gallery Section */
.gallery_wrapper .gallery-item {
    box-shadow: 0 0 .1875rem rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
}

.gallery_wrapper .gallery-item::before,
.gallery_wrapper .gallery-item::after,
.gallery_wrapper .gallery-item-content::before,
.gallery_wrapper .gallery-item-content::after {
    content: '';
    width: 50%;
    height: 50%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    -webkit-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
}

.gallery_wrapper .gallery-item::after {
    top: 50%;
}

.gallery_wrapper .gallery-item:hover::after {
    top: 0;
    opacity: 1;
}

.gallery_wrapper .gallery-item:hover::before {
    left: 50%;
    opacity: 1;
}

.gallery_wrapper .gallery-item-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    opacity: 0;
    z-index: 1;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.gallery_wrapper .gallery-item:hover .gallery-item-content {
    opacity: 1;
}

.gallery_wrapper .gallery-item-content::before,
.gallery_wrapper .gallery-item-content::after {
    top: 0;
    left: 50%;
    z-index: -1;
}

.gallery_wrapper .gallery-item-content::before {
    top: 50%;
    opacity: 1;
}

.gallery_wrapper .gallery-item-content::after {
    top: 50%;
}

.gallery_wrapper .gallery-item:hover .gallery-item-content::after {
    opacity: 1;
    left: 0;
}
</style>