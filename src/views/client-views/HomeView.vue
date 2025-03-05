<script setup>
import BannerView from '@/components/Home/BannerSectionView.vue';
import AboutSectionView from '@/components/Home/AboutSectionView.vue';
import RoomSectionView from '@/components/Home/RoomSectionView.vue';
import ServiceSectionView from '@/components/Home/ServiceSectionView.vue';
import TeamSectionView from '@/components/Home/TeamSectionView.vue';
import GallerySectionView from '@/components/Home/GallerySectionView.vue';
import BlogSectionView from '@/components/Home/BlogSectionView.vue';
import LoaderView from '@/components/LoaderView.vue';
import { onMounted , ref} from 'vue';

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); 
});
</script>
<template>
  <div v-if="isLoading"  class="position-absolute loader">
     <LoaderView />
  </div>
  <main class="position-relative">
    <!-- Banner section -->
    <BannerView />
    <!-- About section -->
    <AboutSectionView />
    <!-- Room section -->
    <RoomSectionView />
    <!-- Service section -->
    <ServiceSectionView />
    <!-- Team section -->
    <TeamSectionView />
    <!-- Gallery section -->
    <GallerySectionView />
    <!-- Blog Section -->
    <BlogSectionView />
  </main>
</template>

<style>
.loader{
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  top: 0;
  left:0;
  background:radial-gradient(#ffffff, #fdfdfa);
}
</style>
