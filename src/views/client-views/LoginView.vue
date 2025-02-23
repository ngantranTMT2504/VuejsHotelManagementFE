<template>
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
                                <a href="/" class="text-secondary fs-4">
                                    <i class="bi bi-house-door-fill"></i>
                                </a>
                            </div>
                            <h2 class="mb-4 text-center">Login</h2>
                            <form class="px-5">
                                <div class="mb-3">
                                    <label for="fullName" class="form-label">User Name</label>
                                    <input type="text" class="form-control" id="fullName"
                                        placeholder="Enter your user name">
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter your email">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password"
                                        placeholder="Enter your password">
                                </div>
                                <button type="submit" class="main-btn w-100">Login</button>

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
                            <p class="text-center mt-3">Already have an account yet?<a href="/register">Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
.main {
    background: url('@/assets/images/slider/slider1.webp') no-repeat center center fixed;
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

.icon-close{
   position: absolute;
   top: 0; 
   left: 10px;
}

.icon-close a>i:hover{
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