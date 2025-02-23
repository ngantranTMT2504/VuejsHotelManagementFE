<template>
    <div class="container mt-4 my-5">
        <h2 class="mb-3">Create Service</h2>
        <form class="container w-75 my-5" @submit.prevent="createService">
            <div class="mb-3">
                <label for="serviceName" class="form-label fw-semibold">Tên dịch vụ:</label>
                <input type="text" v-model="name" id="serviceName" class="form-control" required>
            </div>

            <div class="mb-3">
                <label for="servicePrice" class="form-label fw-semibold">Giá:</label>
                <input type="text"  v-model="price" id="servicePrice" class="form-control" required>
            </div>

            <div class="mb-3">
                <label for="serviceDescription" class="form-label fw-semibold">Mô tả:</label>
                <textarea id="serviceDescription"  v-model="description" class="form-control" required></textarea>
            </div>
            <div class="d-flex gap-3 justify-content-end">
                <button type="submit" class="btn btn-primary" >Create</button>
                <button type="reset" class="btn btn-success">clear</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref(null);
const price = ref(null);
const description = ref(null);

const API_ADD = "http://localhost:5287/api/Service/AddService"
const router = useRouter()

const createService = async() => {
  const service = {
    name : name.value,
    price : price.value,
    description : description.value
  }

  try {
    await axios.post(API_ADD, service);
    alert("Thêm thành công");
    router.push("/admin/services-management/list-service");
  } catch (error) {
    console.log("Lỗi");
  }
}
</script>
<style></style>