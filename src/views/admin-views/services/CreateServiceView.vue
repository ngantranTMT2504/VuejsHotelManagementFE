<template>
  <div class="container mt-4 my-5">
    <h2 class="mb-3">Create Service</h2>
    <form class="container w-75 my-5" @submit.prevent="createService">

      <!-- Tên dịch vụ -->
      <div class="mb-3">
        <label for="serviceName" class="form-label fw-semibold">Tên dịch vụ:</label>
        <input type="text" v-model="name" id="serviceName" class="form-control" @input="validateField('name')" />
        <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
      </div>

      <!-- Giá dịch vụ -->
      <div class="mb-3">
        <label for="servicePrice" class="form-label fw-semibold">Giá:</label>
        <input type="text" v-model="price" id="servicePrice" class="form-control" @input="validateField('price')" />
        <span class="text-danger" v-if="errors.price">{{ errors.price }}</span>
      </div>

      <!-- Mô tả -->
      <div class="mb-3">
        <label for="serviceDescription" class="form-label fw-semibold">Mô tả:</label>
        <textarea id="serviceDescription" v-model="description" class="form-control"
          @input="validateField('description')"></textarea>
        <span class="text-danger" v-if="errors.description">{{ errors.description }}</span>
      </div>

      <!-- Hình ảnh -->
      <div class="mb-3">
        <label for="serviceImage" class="form-label fw-semibold">Hình ảnh:</label>
        <input type="file" id="serviceImage" @change="handleFileUpload" class="form-control" accept="image/*" />
      </div>
      <div v-if="imageUrl">
        <p>Ảnh đã upload:</p>
        <img :src="imageUrl" alt="Uploaded Image" class="img-thumbnail" width="100" height="100">
      </div>

      <!-- Buttons -->
      <div class="d-flex gap-3 justify-content-end">
        <button type="submit" class="btn btn-primary">Create</button>
        <button type="reset" class="btn btn-success" @click="clearForm">Clear</button>
      </div>

    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Các biến lưu giá trị input
const name = ref('');
const price = ref('');
const description = ref('');
const imageUrl = ref('');

// Biến lưu lỗi
const errors = ref({});

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dnt5lyoes/image/upload";
const UPLOAD_PRESET = "hotel_preset";

const API_ADD = "http://localhost:5287/api/Service/AddService";
const router = useRouter();

// Xử lý upload ảnh
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
  } catch (error) {
    console.error("Lỗi upload ảnh:", error);
    alert("Upload ảnh thất bại!");
  }
};

// Validate từng field khi nhập
const validateField = (field) => {
  errors.value[field] = "";

  if (field === "name" && !name.value.trim()) {
    errors.value.name = "Tên dịch vụ không được để trống";
  }
  if (field === "price") {
    if (!price.value.trim()) {
      errors.value.price = "Giá không được để trống";
    } else if (isNaN(price.value)) {
      errors.value.price = "Giá phải là số";
    }
  }
  if (field === "description" && !description.value.trim()) {
    errors.value.description = "Mô tả không được để trống";
  }
};

// Validate toàn bộ form trước khi submit
const validateForm = () => {
  errors.value = {};

  if (!name.value.trim()) {
    errors.value.name = "Tên dịch vụ không được để trống";
  }
  if (!price.value.trim()) {
    errors.value.price = "Giá không được để trống";
  } else if (isNaN(price.value)) {
    errors.value.price = "Giá phải là số";
  }
  if (!description.value.trim()) {
    errors.value.description = "Mô tả không được để trống";
  }

  return Object.keys(errors.value).length === 0;
};

// Xử lý submit form
const createService = async () => {
  if (!validateForm()) return; // Nếu có lỗi thì không submit

  const service = {
    name: name.value,
    price: parseFloat(price.value), // Chuyển giá về số
    description: description.value,
    ImageService: imageUrl.value,
  };

  try {
    await axios.post(API_ADD, service);
    alert("Thêm thành công");
    router.push("/admin/services-management/list-service");
  } catch (error) {
    console.log("Lỗi khi thêm dịch vụ:", error);
  }
};

// Xóa dữ liệu form
const clearForm = () => {
  name.value = "";
  price.value = "";
  description.value = "";
  imageUrl.value = "";
  errors.value = {};
};
</script>

<style></style>
