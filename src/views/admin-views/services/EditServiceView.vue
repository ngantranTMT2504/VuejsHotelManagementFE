<template>
  <div class="container mt-4 my-5">
    <h2 class="mb-3">Edit Service</h2>
    <form class="container w-75 my-5" @submit.prevent="editService">

      <!-- Tên dịch vụ -->
      <div class="mb-3">
        <label for="serviceName" class="form-label fw-semibold">Tên dịch vụ:</label>
        <input type="text" v-model="service.name" id="serviceName" class="form-control"
          @input="validateField('name')" />
        <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
      </div>

      <!-- Giá dịch vụ -->
      <div class="mb-3">
        <label for="servicePrice" class="form-label fw-semibold">Giá:</label>
        <input type="text" v-model="service.price" id="servicePrice" class="form-control"
          @input="validateField('price')" />
        <span class="text-danger" v-if="errors.price">{{ errors.price }}</span>
      </div>

      <!-- Mô tả -->
      <div class="mb-3">
        <label for="serviceDescription" class="form-label fw-semibold">Mô tả:</label>
        <textarea v-model="service.description" id="serviceDescription" class="form-control"
          @input="validateField('description')"></textarea>
        <span class="text-danger" v-if="errors.description">{{ errors.description }}</span>
      </div>

      <!-- Hình ảnh -->
      <div class="mb-3">
        <label for="serviceImage" class="form-label fw-semibold">Hình ảnh:</label>
        <input type="file" id="serviceImage" @change="handleFileUpload" class="form-control" accept="image/*" />
      </div>
      <div v-if="service.imageService">
        <p>Ảnh đã upload:</p>
        <img :src="service.imageService" alt="Uploaded Image" class="img-thumbnail" width="100" height="100" />
      </div>

      <!-- Buttons -->
      <div class="d-flex gap-3 justify-content-end">
        <button type="submit" class="btn btn-primary">Edit</button>
        <button type="button" class="btn btn-success" @click="router.go(-1)">Back</button>
      </div>

    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const API_URL_EDIT = "http://localhost:5287/api/Service/UpdateService";
const API_GET_ID = "http://localhost:5287/api/Service/GetService/";
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dnt5lyoes/image/upload";
const UPLOAD_PRESET = "hotel_preset";

const route = useRoute();
const router = useRouter();

// Lưu thông tin dịch vụ
const service = ref({
  name: "",
  price: "",
  description: "",
  imageService: ""
});

// Lưu lỗi validate
const errors = ref({});

// Lấy dữ liệu dịch vụ cần sửa
const fetchService = async () => {
  try {
    const res = await axios.get(API_GET_ID + route.params.id);
    service.value = res.data;
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu dịch vụ:", error);
  }
};

// Xử lý upload ảnh
const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const response = await axios.post(CLOUDINARY_URL, formData);
    if (response.data.secure_url) {
      service.value.imageService = response.data.secure_url;
      alert("Upload thành công!");
    }
  } catch (error) {
    console.error("Lỗi upload ảnh:", error);
    alert("Upload ảnh thất bại!");
  }
};

// Validate từng field khi nhập
const validateField = (field) => {
  errors.value[field] = "";

  if (field === "name" && !service.value.name.trim()) {
    errors.value.name = "Tên dịch vụ không được để trống";
  }
  if (field === "price") {
    if (!String(service.value.price).trim()) {
      errors.value.price = "Giá không được để trống";
    } else if (isNaN(String(service.value.price))) {
      errors.value.price = "Giá phải là số";
    }
  }
  if (field === "description" && !service.value.description.trim()) {
    errors.value.description = "Mô tả không được để trống";
  }
};

// Validate toàn bộ form trước khi submit
const validateForm = () => {
  errors.value = {};

  if (!service.value.name.trim()) {
    errors.value.name = "Tên dịch vụ không được để trống";
  }
  if (!String(service.value.price).trim()) {
    errors.value.price = "Giá không được để trống";
  } else if (isNaN(String(service.value.price))) {
    errors.value.price = "Giá phải là số";
  }
  if (!service.value.description.trim()) {
    errors.value.description = "Mô tả không được để trống";
  }

  return Object.keys(errors.value).length === 0;
};

// Xử lý cập nhật dịch vụ
const editService = async () => {
  if (!validateForm()) return; // Nếu có lỗi thì không submit

  try {
    await axios.put(API_URL_EDIT, service.value);
    alert("Cập nhật thành công");
    router.push("/admin/services-management/list-service");
  } catch (error) {
    console.error("Lỗi cập nhật:", error);
    alert("Cập nhật thất bại!");
  }
};

onMounted(fetchService);
</script>
