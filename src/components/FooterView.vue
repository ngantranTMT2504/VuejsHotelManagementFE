<template >
    <!-- Footer Section -->
    <section id="contact" class="footer_wrapper mt-3 mt-md-0 pb-0">
            <div class="container pb-3">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <h5>Hotel Location</h5>
                        <p class="ps-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cum.....
                        </p>
                        <div class="contact-info">
                            <ul class="list-unstyled">
                                <li><a href="#"><i class="fa-solid fa-house me-3"></i>No. 96, Ninh Kieu, Can Tho</a></li>
                                <li><a href="#"><i class="fa-solid fa-phone me-3"></i>+971 222 3333</a></li>
                                <li><a href="#"><i class="fa-solid fa-envelope me-3"></i>info@demo.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5>More Links</h5>
                        <ul class="link-widget p-0">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Office</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Our Store</a></li>
                            <li><a href="#">Guarantee</a></li>
                            <li><a href="#">Buy Gift Card</a></li>
                            <li><a href="#">Return Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5>More Links</h5>
                        <ul class="link-widget p-0">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Office</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Our Store</a></li>
                            <li><a href="#">Guarantee</a></li>
                            <li><a href="#">Buy Gift Card</a></li>
                            <li><a href="#">Return Policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <h5>Newsletter</h5>
                        <div class="form-group mb-4">
                            <input type="email" class="form-control bg-transparent" placeholder="Enter your Email here">
                            <button type="submit"
                                class="main-btn rounded-2 mt-3 border-white text-white">Subscribe</button>
                        </div>
                        <h5>Stay Connected</h5>
                        <ul class="social-network d-flex align-items-center p-0">
                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-vimeo-v"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="container-fluid copyright-section text-center text-capitalize">
                <p>Copyright <a href="#">©️ Kim Ngan</a> All Rights Reserved</p>
            </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style >
    /* Footer */
.footer_wrapper {
    background-color: var(--bg-black);
}

.footer_wrapper h5 {
    color: var(--text-white);
    margin-bottom: 1.25rem;
}

.footer_wrapper ul li {
    margin-bottom: .5rem;
    list-style: none;
}

.footer_wrapper .contact-info li a {
    color: var(--secondary-color);
}

.footer_wrapper .link-widget li a,
.footer_wrapper p {
    color: var(--text-gray);
    font-size: .875rem;
    padding-left: 1.5rem;
    position: relative;
    -webkit-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
}

.footer_wrapper .link-widget li a::before {
    content: '\f105';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    left: 0.3rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

.footer_wrapper .link-widget li a:hover {
    color: var(--secondary-color);
    margin-left: .625rem;
}

.footer_wrapper .social-network a {
    width: 2.1875rem;
    height: 2.1875rem;
    margin: 0.5rem;
    line-height: 2rem;
    font-size: .875rem;

    display: inline-block;
    border: .125rem solid var(--text-gray);
    color: var(--text-gray);
    text-align: center;
    border-radius: 100%;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.footer_wrapper .social-network a:hover {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
    color: var(--text-white);
    transform: translateY(-0.1875rem);
    box-shadow: 0 .625rem .9375rem rgb(0 0 0 / 10%);
}

.footer_wrapper .form-control:focus {
    outline: none;
    box-shadow: none;
    border-color: var(--secondary-color);
}

.footer_wrapper .copyright-section {
    background-color: var(--primary-color);
    padding: 1.25rem 0 .3125rem;
}

.footer_wrapper .copyright-section a {
    color: var(--secondary-color);
}
</style>