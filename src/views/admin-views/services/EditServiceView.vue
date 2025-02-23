<template lang="">
    <div class="container mt-4 my-5">
        <h2 class="mb-3">Edit Service</h2>
        <form class="container w-75 my-5" @submit.prevent="editService">
            <div class="mb-3">
                <label for="serviceName" class="form-label fw-semibold">Tên dịch vụ:</label>
                <input type="text" v-model="service.name" id="serviceName" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="servicePrice" class="form-label fw-semibold">Giá:</label>
                <input type="text" v-model="service.price" id="servicePrice" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="serviceDescription" class="form-label fw-semibold">Mô tả:</label>
                <textarea v-model="service.description" id="serviceDescription" class="form-control" required></textarea>
            </div>

            <div class="d-flex gap-3 justify-content-end">
                <button type="submit" class="btn btn-primary">Edit</button>
                <button type="reset" class="btn btn-success" @click="router.back()">clear</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref , onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';

const API_URL_edit = "http://localhost:5287/api/Service/UpdateService";
const API_GET_ID = "http://localhost:5287/api/Service/GetService/"
const route = useRoute()
const router = useRouter()
const service = ref({})

const fetchService = async() => {
  try {
    const res = await axios.get(API_GET_ID + `${route.params.id}`)
    service.value = res.data
  } catch (error) {
    console.log(error)
  }
}

const editService = async() => {
  try {
    await axios.put(API_URL_edit , service.value)
    alert("Cập nhật thành công")
    router.push("/admin/services-management/list-service")
  } catch (error) {
    console.log(error)
  }
}

onMounted(fetchService);

</script>
<style >
    
</style>