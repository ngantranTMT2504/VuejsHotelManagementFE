<template>
  <div class="mt-4 my-5">
    <h3 class="text-dark text-center">Edit type room</h3>

    <form class="container w-75 my-5" @submit.prevent="editTypeRoom">
      <div class="mb-3">
        <label for="typeName" class="form-label fw-semibold">Tên loại phòng:</label>
        <input type="text" id="typeName" v-model="typeRoom.name" class="form-control" required>
        <span class="text-danger error">{{ errors.name }}</span>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label fw-semibold">Giá:</label>
        <input type="number" id="price" v-model="typeRoom.price" class="form-control" required>
        <span class="text-danger error">{{ errors.price }}</span>
      </div>
      <div class="mb-3">
        <label for="capacity" class="form-label fw-semibold">Sức chứa:</label>
        <input type="number" id="capacity" v-model="typeRoom.capacity" class="form-control" required>
        <span class="text-danger error">{{ errors.capacity }}</span>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label fw-semibold">Mô tả:</label>
        <textarea id="description" v-model="typeRoom.description" class="form-control" required></textarea>
      </div>
      <div class="mb-3">
        <label for="roomImage" class="form-label fw-semibold">Hình ảnh:</label>
        <input type="file" id="roomImage" @change="handleFileUpload" class="form-control" accept="image/*" />
      </div>
      <div v-if="typeRoom.imageRoom">
        <p>Ảnh đã upload:</p>
        <img :src="typeRoom.imageRoom" alt="Uploaded Image" class="img-thumbnail" width="100" height="100">
      </div>
      <div class="d-flex gap-3 justify-content-end">
        <button type="submit" class="btn btn-primary">Edit</button>
        <button type="button" class="btn btn-success" @click="router.back()">Back</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import validator from 'validator';

const API_URL_edit = "http://localhost:5287/api/TypeRoom/UpdateTypeRoom";
const API_GET_ID = "http://localhost:5287/api/TypeRoom/GetTypeRoom/";
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dnt5lyoes/image/upload";
const UPLOAD_PRESET = "hotel_preset";

const route = useRoute();
const router = useRouter();
const typeRoom = ref({
  name: "",
  price: "",
  capacity: "",
  description: "",
  imageRoom: ""
});

const errors = ref({});

const fetchTypeRoom = async () => {
  try {
    const res = await axios.get(API_GET_ID + `${route.params.id}`);
    typeRoom.value = res.data;
  } catch (error) {
    console.log("Lỗi lấy dữ liệu:", error);
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
      typeRoom.value.imageRoom = response.data.secure_url;
      alert("Upload thành công!");
    }
  } catch (error) {
    console.error("Lỗi upload ảnh:", error);
    alert("Upload ảnh thất bại!");
  }
};

// const validateForm = () => {
//   errors.value = {};

//   if (validator.isEmpty(String(typeRoom.value.name).trim())) {
//     errors.value.name = "Tên loại phòng không được để trống";
//   }
//   if (validator.isEmpty(String(typeRoom.value.price).trim())) {
//     errors.value.price = "Giá không được để trống";
//   }
//   if (!typeRoom.value.capacity || typeRoom.value.capacity <= 0) {
//     errors.value.capacity = "Sức chứa phải lớn hơn 0";
//   }
// };

const editTypeRoom = async () => {
  try {
    await axios.put(API_URL_edit, typeRoom.value);
    console.log("image: " +  typeRoom.value.imageRoom);
    alert("Cập nhật thành công");
    router.push("/admin/type-rooms/list-type-room");
  } catch (error) {
    console.error("Lỗi cập nhật:", error);
    alert("Cập nhật thất bại!");
  }
};

onMounted(fetchTypeRoom);
</script>

<style></style>
