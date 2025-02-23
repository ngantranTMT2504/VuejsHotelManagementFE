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
        <RouterLink to="/admin/approved-booking" class="sidebar-link">Approved Booking</RouterLink>
        <RouterLink to="/login" class="sidebar-link">Log out</RouterLink>
    </div>
    <main>
        <div class="content">
            <Suspense>
                <template #default>
                    <component :is="currentComponent" />
                    
                </template>
                <template #fallback>
                    <p>Loading...</p>
                </template>
            </Suspense>
            <!-- Copyright -->
            <div class="container-fluid copyright-section text-center text-capitalize">
                <p class="text-white">Copyright <a href="#">©️ Kim Ngan</a> All Rights Reserved</p>
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
.sidebar {
    height: 100vh;
    background: #fff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 250px;
    transition: all 0.3s;
}

.sidebar .sidebar-link {
    padding: 12px 20px;
    display: block;
    color: #333;
    text-decoration: none;
    font-weight: 500;
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
    background-color: var(--primary-color);
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