<template>
    <div class="sidebar pt-4">
        <div class="d-flex justify-content-center py-2">
            <img :src="logosidebar" alt="logo" class="img-flud" />
        </div>
        <RouterLink to="/admin/dashboard" class="sidebar-link active">Dashboard</RouterLink>
        <RouterLink to="/admin/users" class="sidebar-link">Users</RouterLink>
        <RouterLink to="/admin/type-rooms" class="sidebar-link">Types Room</RouterLink>
        <RouterLink to="/admin/services-management" class="sidebar-link">Services</RouterLink>
        <RouterLink to="/admin/rooms-management" class="sidebar-link">Rooms</RouterLink>
        <RouterLink to="/admin/approved-booking" class="sidebar-link">Booking</RouterLink>
        <RouterLink to="/login" class="sidebar-link">Log out</RouterLink>
    </div>
    <main>
        <div class="content">
            <div class="d-flex justify-content-end pb-3 header">
                <div class="d-flex align-items-center">
                    <button class="main-btn me-4">Booking</button>
                    <a class="position-relative border-0 me-4 text-dark ">
                        <i class="bi bi-envelope fs-5"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            2
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </a>
                    <a type="button" class="position-relative border-0 text-dark">
                        <i class="bi bi-bell-fill fs-5"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            2
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </a>
                </div>
            </div>
            <Suspense>
                <template #default >
                    <component :is="currentComponent" />
                </template>
                <template #fallback>
                    <p>Loading...</p>
                </template>
            </Suspense>
            <!-- Copyright -->
            <div class="copyright-section text-capitalize">
                <p>2025 <a href="#">©️ Kim Ngan</a> All Rights Reserved</p>
            </div>
        </div>
    </main>
</template>
<script setup>
import { RouterLink} from 'vue-router';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import logosidebar from '@/assets/images/about/logo.png'
import AdminDashboardView from '@/views/admin-views/DashboardView.vue' 

const route = useRoute();

const currentComponent = computed(()=>{
    return route.matched.length > 1 ? 'router-view' : AdminDashboardView
})
</script>
<style>
.header{
    border-bottom: 1px solid gray;
}


.sidebar {
    height: 100vh;
    background: var(--primary-color);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 250px;
    transition: all 0.3s;
    
}

.sidebar .sidebar-link {
    padding: 12px 20px;
    display: block;
    color: white;
    text-decoration: none;
    font-weight: 700;
}

.sidebar .sidebar-link:hover {
    background: #f1f1f1;
    color: var(--secondary-color);
}

.content {
    margin-left: 260px;
    padding: 20px;
    transition: all 0.3s;
}

.copyright-section {
    background-color: white;
    padding: 1.25rem 0 .3125rem;
}

.copyright-section a {
    color: var(--secondary-color);
}

/* Responsive Design */
@media (max-width: 992px) {
    .sidebar {
        width: 0;
        overflow: hidden;
    }

    .content {
        margin-left: 0;
        width: 100%;
    }
}
</style>