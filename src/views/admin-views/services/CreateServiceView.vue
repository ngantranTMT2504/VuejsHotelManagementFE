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
        <input type="text" v-model="price" id="servicePrice" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="serviceDescription" class="form-label fw-semibold">Mô tả:</label>
        <textarea id="serviceDescription" v-model="description" class="form-control" required></textarea>
      </div>
      <div>
        <label for="serviceImage" class="form-label fw-semibold">Hình ảnh:</label>
        <input type="file" id="serviceImage" @change="handleFileUpload" class="form-control" accept="image/*" />
      </div>
      <div v-if="imageUrl">
        <p>Ảnh đã upload:</p>
        <img :src="imageUrl" alt="Uploaded Image" class="img-thumbnail" width="100" height="100">
      </div>

      <div class="d-flex gap-3 justify-content-end">
        <button type="submit" class="btn btn-primary">Create</button>
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
const imageUrl = ref(null);

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dnt5lyoes/image/upload";
const UPLOAD_PRESET = "hotel_preset";

const API_ADD = "http://localhost:5287/api/Service/AddService"
const router = useRouter()

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const response = await axios.post(CLOUDINARY_URL, formData);
    imageUrl.value = response.data.secure_url; // Lấy link ảnh từ Cloudinary
    alert("Upload thành công!");
    return imageUrl.value;
  } catch (error) {
    console.error("Lỗi upload ảnh:", error);
    alert("Upload ảnh thất bại!");
  }
};

const createService = async () => {
  const service = {
    name: name.value,
    price: price.value,
    description: description.value,
    ImageService: imageUrl.value,
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