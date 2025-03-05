<template>
  <div class="mx-4 my-3">
    <h3 class="text-dark text-center">Create type room</h3>
    <form class="container w-75 my-5" @submit.prevent="createTypeRoom">
      <div class="row">
        <div class="col-lg-6">

          <div class="mb-3">
            <label for="typeName" class="form-label fw-semibold">Name Type Room(<span
                class="text-danger fs-5">*</span>):</label>
            <input type="text" id="typeName" v-model="form.name" class="form-control" @input="validateField('name')">
            <span class="text-danger error">{{ errors.name }}</span>
          </div>

          <div class="mb-3 d-flex gap-3">
            <div>
              <label for="price" class="form-label fw-semibold">Price(<span class="text-danger fs-5">*</span>):</label>
              <input type="text" id="price" v-model="form.price" class="form-control" @input="validateField('price')">
              <span class="text-danger error">{{ errors.price }}</span>
            </div>
            <div>
              <label for="capacity" class="form-label fw-semibold">Capacity(<span
                  class="text-danger fs-5">*</span>):</label>
              <input type="number" id="capacity" v-model="form.capacity" class="form-control"
                @input="validateField('capacity')">
              <span class="text-danger error">{{ errors.capacity }}</span>
            </div>
          </div>

        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="image" class="form-label fw-semibold">Image(<span class="text-danger fs-5">*</span>):</label>
            <input type="file" id="image" @change="handleFileUpload" class="form-control" accept="image/*" />
            <!-- <span class="text-danger error">{{ errors.image }}</span> -->
          </div>
          <div v-if="form.imageRoom">
            
            <img :src="form.imageRoom" alt="Uploaded Image" class="img-thumbnail" width="80" height="100">
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label fw-semibold">Description(<span class="text-danger fs-5">*</span>):
        </label>
        <textarea id="description" v-model="form.description" class="form-control" rows="4"
          @input="validateField('description')"></textarea>
        <span class="text-danger error">{{ errors.description }}</span>
      </div>
      <div class="d-flex gap-3 justify-content-end">
        <RouterLink to="/admin/type-rooms/list-type-room" type="button" class="btn btn-warning"><i class="bi bi-arrow-left-circle"></i> Back</RouterLink>
        <button type="submit" class="btn btn-primary"> <i class="bi bi-plus-circle"></i> Create</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
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
    
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error!",
      text: "An error occurred while adding.",
      icon: "error",
      confirmButtonText: "Try again"
    });
  }
};

const validateField = (field) => {
  if (field === "name" && validator.isEmpty(form.value.name.trim())) {
    errors.value.name = "Room type name cannot be empty";
  } else if (field === "price") {
    if (validator.isEmpty(form.value.price.trim())) {
      errors.value.price = "Price cannot be empty";
    } else if (!validator.isNumeric(form.value.price)) {
      errors.value.price = "Price must be a number";
    } else {
      delete errors.value.price;
    }
  } else if (field === "capacity") {
    if (validator.isEmpty(String(form.value.capacity).trim())) {
      errors.value.capacity = "Capacity cannot be empty";
    } else if (!validator.isInt(String(form.value.capacity), { min: 1 })) {
      errors.value.capacity = "Capacity must be a positive integer";
    } else {
      delete errors.value.capacity;
    }
  } else if (field === "description" && validator.isEmpty(form.value.description.trim())) {
    errors.value.description = "Description cannot be empty";
  } else if (field === "image" && validator.isEmpty(form.value.imageRoom.trim())) {
    errors.value.image = "Image cannot be empty";
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
    Swal.fire("Added!", "The data has been successfully added.", "success");
    router.push("/admin/type-rooms/list-type-room");
  } catch (error) {
    console.error("Error:", error);
    Swal.fire("Error!", "An error occurred while adding.", "error");
  }
};

</script>

<style></style>
