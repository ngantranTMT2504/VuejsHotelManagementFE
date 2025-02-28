<template>
    <!-- Team Section -->
    <section id="team" class="team_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 section-title text-center mb-5">
                    <h6>What I can do for you</h6>
                    <h3>Our Special Staff</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card p-0 rounded-3">
                        <img :src="Team5" alt="" class="img-fluid rounded-3">
                        <div class="team-info">
                            <h5>Hanah Nguyễn</h5>
                            <p>Manager</p>
                            <ul class="social-network">
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-vimeo-v"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card p-0 rounded-3">
                        <img :src="Team7" alt="" class="img-fluid rounded-3">
                        <div class="team-info">
                            <h5>Ngân Lê</h5>
                            <p>Chif Reciption Officier</p>
                            <ul class="social-network">
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-vimeo-v"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card p-0 rounded-3">
                        <img :src="Team6" alt="" class="img-fluid rounded-3">
                        <div class="team-info">
                            <h5>Ronald Long</h5>
                            <p>Master Chef</p>
                            <ul class="social-network">
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-vimeo-v"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card p-0 rounded-3">
                        <img :src="Team4" alt="" class="img-fluid rounded-3">
                        <div class="team-info">
                            <h5>Jessica Trần</h5>
                            <p>Housekeeping</p>
                            <ul class="social-network">
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-vimeo-v"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

import Team4 from '@/assets/images/team/team4.webp'
import Team5 from '@/assets/images/team/team5.jpg'
import Team6 from '@/assets/images/team/team6.jpg'
import Team7 from '@/assets/images/team/team7.jpg'
</script>
<style>
/*Team Section */
.team_wrapper .card {
    position: relative;
    overflow: hidden;
}

.team_wrapper .team-info {
    background-color: var(--secondary-color);
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
    padding: 1.25rem;
    margin-bottom: -4.6875rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.team_wrapper .card:hover .team-info {
    margin-bottom: 0;
}

.team_wrapper .team-info h5,
.team_wrapper .team-info p {
    color: var(--text-white);
}

.team_wrapper .team-info ul.social-network {
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    padding: 1.25rem;
    margin: 1.25rem -1.25rem -1.25rem;
    background-color: var(--primary-color);
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.team_wrapper .team-info ul.social-network li a {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    display: block;
    border-radius: 50%;
    font-size: 0.9rem;
    color: var(--text-white);
    border: 0.0625rem solid var(--bg-white);
}
</style>