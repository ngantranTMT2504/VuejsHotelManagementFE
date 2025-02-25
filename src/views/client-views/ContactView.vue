<template>
    <div class="contact-banner w-100 p-0 m-0">
        <img :src="ContactBanner" alt="" class="img-fluid">
    </div>
    <div class="container contact-content py-5">
        <div class="row mb-5">
            <div class="col-lg-6">
                <div class="mb-4">
                    <h5 class="fw-semibold">Feel free </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam placeat, sit, veritatis
                        enim rem ipsa nostrum praesentium sint ea unde quia maiores pariatur id? Deserunt commodi natus
                        incidunt maiores!</p>
                </div>
                <div class="mb-4">
                    <h5 class="fw-semibold">Call us +84 123 456 798</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam placeat, sit, veritatis
                        enim rem ipsa nostrum praesentium sint ea unde quia maiores pariatur id? Deserunt commodi natus
                        incidunt maiores!</p>
                </div>
                <div class="mb-4">
                    <h5 class="fw-semibold">Visit us on </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam placeat, sit, veritatis
                        enim rem ipsa nostrum praesentium sint ea unde quia maiores pariatur id? Deserunt commodi natus
                        incidunt maiores!</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="mb-4">
                    <h5 class="fw-semibold"> How can we help?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam placeat, sit, veritatis
                        enim rem ipsa nostrum praesentium sint ea unde quia maiores pariatur id? Deserunt commodi natus
                        incidunt maiores!</p>
                </div>
                <form>
                    <div class="mb-3">
                        <label for="fullName" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="fullName">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Write your message</label>
                        <textarea class="form-control" id="message"></textarea>
                    </div>
                </form>
            </div>
        </div>
        <div class="maps">
            <iframe
                src="https://maps.google.com/maps?hl=vi&amp;q=21.024842,105.856046&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%" height="341px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    </div>
</template>
<script setup>
import ContactBanner from '@/assets/images/slider/contact-banner.jpg'
</script>
<style>
.contact-banner {
    width: 100%;
    overflow: hidden;
}
</style>