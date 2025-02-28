<template>
  <div class="mx-4 my-5">
    <h3 class="text-dark text-center">Create type room</h3>
    <form class="container w-75 my-5" @submit.prevent="createTypeRoom">
      <div class="mb-3">
        <label for="typeName" class="form-label fw-semibold">Tên loại phòng:</label>
        <input type="text" id="typeName" v-model="form.name" class="form-control" @input="validateField('name')">
        <span class="text-danger error">{{ errors.name }}</span>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label fw-semibold">Giá:</label>
        <input type="text" id="price" v-model="form.price" class="form-control" @input="validateField('price')">
        <span class="text-danger error">{{ errors.price }}</span>
      </div>
      <div class="mb-3">
        <label for="capacity" class="form-label fw-semibold">Sức chứa:</label>
        <input type="number" id="capacity" v-model="form.capacity" class="form-control"
          @input="validateField('capacity')">
        <span class="text-danger error">{{ errors.capacity }}</span>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label fw-semibold">Mô tả:</label>
        <textarea id="description" v-model="form.description" class="form-control"
          @input="validateField('description')"></textarea>
        <span class="text-danger error">{{ errors.description }}</span>
      </div>
      <div class="mb-3">
        <label for="image" class="form-label fw-semibold">Hình ảnh:</label>
        <input type="file" id="image" @change="handleFileUpload" class="form-control" accept="image/*" />
        <span class="text-danger error">{{ errors.image }}</span>
      </div>
      <div v-if="form.imageRoom">
        <p>Ảnh đã upload:</p>
        <img :src="form.imageRoom" alt="Uploaded Image" class="img-thumbnail" width="100" height="100">
      </div>
      <div class="d-flex gap-3 justify-content-end">
        <button type="submit" class="btn btn-primary">Create</button>
        <RouterLink to="/admin/type-rooms/list-type-room"    type="button" class="btn btn-success" >Back</RouterLink>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter , RouterLink} from 'vue-router';
import validator from 'validator';

const form = ref({
  name: "",
  price: "",
  capacity: "",
  description: "",
  imageRoom: ""
});

const errors = ref({});
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dnt5lyoes/image/upload";
const UPLOAD_PRESET = "hotel_preset";
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
    Swal.fire({
        title: "Thành công!",
        text: "Upload ảnh thành công.",
        icon: "success",
        confirmButtonText: "OK"
      });
  } catch (error) {
    console.error("Lỗi upload ảnh:", error);
    Swal.fire({
      title: "Lỗi!",
      text: "Upload ảnh thất bại.",
      icon: "error",
      confirmButtonText: "Thử lại"
    });
  }
};

const validateField = (field) => {
  if (field === "name" && validator.isEmpty(form.value.name.trim())) {
    errors.value.name = "Tên loại phòng không được để trống";
  } else if (field === "price") {
    if (validator.isEmpty(form.value.price.trim())) {
      errors.value.price = "Giá không được để trống";
    } else if (!validator.isNumeric(form.value.price)) {
      errors.value.price = "Giá phải là số";
    } else {
      delete errors.value.price;
    }
  } else if (field === "capacity") {
    if (validator.isEmpty(String(form.value.capacity).trim())) {
      errors.value.capacity = "Sức chứa không được để trống";
    } else if (!validator.isInt(String(form.value.capacity), { min: 1 })) {
      errors.value.capacity = "Sức chứa phải là số nguyên dương";
    } else {
      delete errors.value.capacity;
    }
  } else if (field === "description" && validator.isEmpty(form.value.description.trim())) {
    errors.value.description = "Mô tả không được để trống";
  } else if (field === "image" && validator.isEmpty(form.value.imageRoom.trim())) {
    errors.value.image = "Hình ảnh không được để trống";
  } else {
    delete errors.value[field];
  }
};


const validateForm = () => {
  validateField("name");
  validateField("price");
  validateField("capacity");
  validateField("description");
  validateField("image");
};

const createTypeRoom = async () => {
  validateForm();
  if (Object.keys(errors.value).length > 0) {
    return;
  }
  try {
    form.value.price = parseInt(form.value.price);
    await axios.post(API_ADD, form.value);
    Swal.fire("Đã thêm!", "Dữ liệu đã được thêm thành công.", "success");
    router.push("/admin/type-rooms/list-type-room");
  } catch (error) {
    console.error("Lỗi:", error);
    Swal.fire("Lỗi!", "Có lỗi xảy ra khi thêm.", "error");
  }
};

</script>

<style></style>
