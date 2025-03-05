<template>
   <div v-if="isLoading" class="position-absolute loader">
        <LoaderView />
    </div>
  <GallerySectionView />
</template>
<script setup>
import GallerySectionView from '@/components/Home/GallerySectionView.vue';
import { ref, onMounted } from 'vue'
import LoaderView from '@/components/LoaderView.vue';

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); 
}); 

</script>
<style >
    
</style>