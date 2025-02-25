<template>
  <div class="mt-4 my-5">
    <h3 class="text-dark text-center">Create type room</h3>

    <form class="container w-75 my-5" @submit.prevent="createTypeRoom">
      <div class="mb-3">
        <label for="typeName" class="form-label fw-semibold">Tên loại phòng:</label>
        <input type="text" id="typeName" v-model="form.name" class="form-control" required>
        <span class="text-danger error">{{ errors.name }}</span>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label fw-semibold">Giá:</label>
        <input type="number" id="price" v-model="form.price" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="capacity" class="form-label fw-semibold">Sức chứa:</label>
        <input type="number" id="capacity" v-model="form.capacity" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label fw-semibold">Mô tả:</label>
        <textarea id="description" v-model="form.description" class="form-control" required></textarea>
      </div>
      <div class="mb-3">
        <label for="roomImage" class="form-label fw-semibold">Hình ảnh:</label>
        <input type="file" id="roomImage" @change="handleFileUpload" class="form-control" accept="image/*" />
      </div>
      <div v-if="form.imageRoom">
        <p>Ảnh đã upload:</p>
        <img :src="form.imageRoom" alt="Uploaded Image" class="img-thumbnail" width="100" height="100">
      </div>
      <div class="d-flex gap-3 justify-content-end">
        <button type="submit" class="btn btn-primary">Create</button>
        <button type="button" class="btn btn-success" @click="resetForm">Clear</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import validator from 'validator';

const form = ref({
  name: "",
  price: "",
  capacity: "",
  description: "",
  imageRoom: ""
});

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dnt5lyoes/image/upload"; 
const UPLOAD_PRESET = "hotel_preset"; 

const errors = ref({});
const API_ADD = "http://localhost:5287/api/TypeRoom/AddTypeRoom";
const router = useRouter();

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const response = await axios.post(CLOUDINARY_URL, formData);
    form.value.imageRoom = response.data.secure_url; 
    alert("Upload thành công!");
  } catch (error) {
    console.error("Lỗi upload ảnh:", error);
    alert("Upload ảnh thất bại!");
  }
};

const validateForm = () => {
  errors.value = {};
  if (validator.isEmpty(String(form.value.name).trim())) {
    errors.value.name = "Tên loại phòng không được để trống";
  }
};

const createTypeRoom = async () => {
  validateForm();
  if (Object.keys(errors.value).length > 0) {
    return;
  }

  try {
    await axios.post(API_ADD, form.value);
    alert("Thêm thành công");
    router.push("/admin/type-rooms/list-type-room");
  } catch (error) {
    console.error("Lỗi:", error);
    alert("Thêm thất bại");
  }
};

const resetForm = () => {
  form.value = {
    name: "",
    price: "",
    capacity: "",
    description: "",
    imageRoom: ""
  };
  errors.value = {};
};
</script>

<style></style>
