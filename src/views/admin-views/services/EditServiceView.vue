<template>
  <div class="container mt-4 my-5">
    <h2 class="mb-3">Edit Service</h2>
    <form class="container w-75 my-5" @submit.prevent="editService">
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
        <label for="serviceName" class="form-label fw-semibold">Name service:</label>
        <input type="text" v-model="service.name" id="serviceName" class="form-control"
          @input="validateField('name')" />
        <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
      </div>
      <div class="mb-3">
        <label for="servicePrice" class="form-label fw-semibold">Price:</label>
        <input type="text" v-model="service.price" id="servicePrice" class="form-control"
          @input="validateField('price')" />
        <span class="text-danger" v-if="errors.price">{{ errors.price }}</span>
      </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
        <label for="serviceImage" class="form-label fw-semibold">Image:</label>
        <input type="file" id="serviceImage" @change="handleFileUpload" class="form-control" accept="image/*" />
        <span class="text-danger" v-if="errors.imageService">{{ errors.imageService }}</span>
      </div>
      <div v-if="service.imageService">
        <p>Image uploaded:</p>
        <img :src="service.imageService" alt="Uploaded Image" class="img-thumbnail" width="200" height="200" />
      </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="serviceDescription" class="form-label fw-semibold">Description:</label>
        <textarea v-model="service.description" id="serviceDescription" class="form-control" rows="5"
          @input="validateField('description')"></textarea>
        <span class="text-danger" v-if="errors.description">{{ errors.description }}</span>
      </div>
      <div class="d-flex gap-3 justify-content-end">
        <RouterLink to="/admin/services-management/list-service" type="button" class="btn btn-warning">Back</RouterLink>
        <button type="submit" class="btn btn-primary">Edit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";

const API_URL_EDIT = "http://localhost:5287/api/Service/UpdateService";
const API_GET_ID = "http://localhost:5287/api/Service/GetService/";
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dnt5lyoes/image/upload";
const UPLOAD_PRESET = "hotel_preset";

const route = useRoute();
const router = useRouter();

const service = ref({
  name: "",
  price: "",
  description: "",
  imageService: ""
});

const errors = ref({});

const fetchService = async () => {
  try {
    const res = await axios.get(API_GET_ID + route.params.id);
    service.value = res.data;
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu dịch vụ:", error);
  }
};

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
      Swal.fire("Thành công!", "Upload ảnh thành công.", "success");
    }
  } catch (error) {
    console.error("Lỗi upload ảnh:", error);
    Swal.fire("Lỗi!", "Upload ảnh thất bại.", "error");
  }
};

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
  if (field === "imageService" && !service.value.imageService) {
    errors.value.imageService = "Hình ảnh không được để trống";
  }
};


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
  if (!service.value.imageService) {
    errors.value.imageService = "Hình ảnh không được để trống";
  }

  return Object.keys(errors.value).length === 0;
};


const editService = async () => {
  if (!validateForm()) return;

  try {
    await axios.put(API_URL_EDIT, service.value);
    Swal.fire({
      title: "Thành công!",
      text: "Cập nhật thành công.",
      icon: "success",
      confirmButtonText: "OK"
    });
    router.push("/admin/services-management/list-service");
  } catch (error) {
    console.error("Lỗi cập nhật:", error);
    Swal.fire({
      title: "Lỗi!",
      text: "Cập nhật thất bại.",
      icon: "error",
      confirmButtonText: "Thử lại"
    });
  }
};

onMounted(fetchService);
</script>
