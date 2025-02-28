<template>
  <div class="container mt-4 my-5">
    <h2 class="mb-3">Create Service</h2>
    <form class="container w-75 my-5" @submit.prevent="createService">
      <div class="mb-3">
        <label for="serviceName" class="form-label fw-semibold">Tên dịch vụ:</label>
        <input type="text" v-model="name" id="serviceName" class="form-control" @input="validateField('name')" />
        <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
      </div>
      <div class="mb-3">
        <label for="servicePrice" class="form-label fw-semibold">Giá:</label>
        <input type="text" v-model="price" id="servicePrice" class="form-control" @input="validateField('price')" />
        <span class="text-danger" v-if="errors.price">{{ errors.price }}</span>
      </div>
      <div class="mb-3">
        <label for="serviceDescription" class="form-label fw-semibold">Mô tả:</label>
        <textarea id="serviceDescription" v-model="description" class="form-control"
          @input="validateField('description')"></textarea>
        <span class="text-danger" v-if="errors.description">{{ errors.description }}</span>
      </div>
      <div class="mb-3">
        <label for="serviceImage" class="form-label fw-semibold">Hình ảnh:</label>
        <input type="file" id="serviceImage" @change="handleFileUpload" class="form-control" accept="image/*" />
        <span class="text-danger" v-if="errors.image">{{ errors.image }}</span>
      </div>
      <div v-if="imageUrl">
        <p>Ảnh đã upload:</p>
        <img :src="imageUrl" alt="Uploaded Image" class="img-thumbnail" width="100" height="100">
      </div>
      <div class="d-flex gap-3 justify-content-end">
        <button type="submit" class="btn btn-primary">Create</button>
        <RouterLink to="/admin/services-management/list-service" type="reset" class="btn btn-success" >Back</RouterLink>
      </div>

    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";

const name = ref("");
const price = ref("");
const description = ref("");
const imageUrl = ref("");
const errors = ref({});

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dnt5lyoes/image/upload";
const UPLOAD_PRESET = "hotel_preset";
const API_ADD = "http://localhost:5287/api/Service/AddService";

const router = useRouter();

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const response = await axios.post(CLOUDINARY_URL, formData);
    imageUrl.value = response.data.secure_url;
    delete errors.value.image;
    Swal.fire("Thành công!", "Upload ảnh thành công.", "success");
  } catch (error) {
    console.error("Lỗi upload ảnh:", error);
    Swal.fire("Lỗi!", "Upload ảnh thất bại.", "error");
  }
};

const validateField = (field) => {
  errors.value[field] = "";

  if (field === "name" && !name.value.trim()) {
    errors.value.name = "Tên dịch vụ không được để trống";
  }
  if (field === "price") {
    if (!price.value.trim()) {
      errors.value.price = "Giá không được để trống";
    } else if (isNaN(price.value) || Number(price.value) <= 0) {
      errors.value.price = "Giá phải là số dương";
    }
  }
  if (field === "description" && !description.value.trim()) {
    errors.value.description = "Mô tả không được để trống";
  }
  if (field === "image" && !imageUrl.value) {
    errors.value.image = "Hình ảnh không được để trống";
  }
};

const validateForm = () => {
  validateField("name");
  validateField("price");
  validateField("description");
  validateField("image");

  return Object.keys(errors.value).length === 0; 
};

const createService = async () => {
  if (!validateForm()) {
    Swal.fire("Lỗi!", "Vui lòng nhập đầy đủ thông tin.", "error");
    return;
  }

  const service = {
    name: name.value,
    price: parseInt(price.value),
    description: description.value,
    ImageService: imageUrl.value,
  };

  try {
    await axios.post(API_ADD, service);
    Swal.fire("Thành công!", "Dịch vụ đã được thêm.", "success");
    router.push("/admin/services-management/list-service");
  } catch (error) {
    console.error("Lỗi khi thêm dịch vụ:", error);
    Swal.fire("Lỗi!", "Không thể thêm dịch vụ.", "error");
  }
};


</script>

<style></style>
