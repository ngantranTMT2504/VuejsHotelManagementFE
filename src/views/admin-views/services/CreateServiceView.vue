<template>
  <div class="container mt-4 my-5">
    <h2 class="mb-3 text-center">Create Service</h2>
    <form class="container w-75 my-5" @submit.prevent="createService">
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="serviceName" class="form-label fw-semibold ">Name service(<span
              class="text-danger fs-5">*</span>):</label>
            <input type="text" v-model="name" id="serviceName" class="form-control" @input="validateField('name')" />
            <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
          </div>
          <div class="mb-3">
            <label for="servicePrice" class="form-label fw-semibold">Price(<span
              class="text-danger fs-5">*</span>):</label>
            <input type="text" v-model="price" id="servicePrice" class="form-control" @input="validateField('price')" />
            <span class="text-danger" v-if="errors.price">{{ errors.price }}</span>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="serviceImage" class="form-label fw-semibold">Image(<span
              class="text-danger fs-5">*</span>):</label>
            <input type="file" id="serviceImage" @change="handleFileUpload" class="form-control" accept="image/*" />
            <!-- <span class="text-danger" v-if="errors.image">{{ errors.image }}</span> -->
          </div>
          <div v-if="imageUrl">
            <img :src="imageUrl" alt="Uploaded Image" class="img-thumbnail" width="100" height="100">
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="serviceDescription" class="form-label fw-semibold">Description(<span
          class="text-danger fs-5">*</span>):</label>
        <textarea id="serviceDescription" v-model="description" class="form-control" rows="5"
          @input="validateField('description')"></textarea>
        <span class="text-danger" v-if="errors.description">{{ errors.description }}</span>
      </div>
      <div class="d-flex gap-3 justify-content-end">
        <RouterLink to="/admin/services-management/list-service" type="reset" class="btn btn-warning"><i class="bi bi-arrow-left-circle"></i> Back</RouterLink>
        <button type="submit" class="btn btn-primary"><i class="bi bi-plus-circle"></i> Create</button>
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

const CLOUDINARY_URL = "";
const UPLOAD_PRESET = "";
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
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "Error!",
      text: "An error occurred while adding.",
      icon: "error",
      confirmButtonText: "Try again"
    });
  }
};

const validateField = (field) => {
  errors.value[field] = "";

  if (field === "name" && !name.value.trim()) {
    errors.value.name = "Service name cannot be empty";
  }
  if (field === "price") {
    if (!price.value.trim()) {
      errors.value.price = "Price cannot be empty";
    } else if (isNaN(price.value) || Number(price.value) <= 0) {
      errors.value.price = "Price must be a number > 0";
    }
  }
  if (field === "description" && !description.value.trim()) {
    errors.value.description = "Description cannot be empty";
  }
};

const validateForm = () => {
  validateField("name");
  validateField("price");
  validateField("description");

  return Object.values(errors.value).every((err) => !err);
};

const createService = async () => {
  if (!validateForm()) {
    return;
  }

  const service = {
    name: name.value,
    price:  Number(price.value),
    description: description.value,
    ImageService: imageUrl.value,
  };

  try {
    await axios.post(API_ADD, service);
    Swal.fire("Added!", "The data has been successfully added.", "success");
    router.push("/admin/services-management/list-service");
  } catch (error) {
    console.error("Lỗi khi thêm dịch vụ:", error);
    Swal.fire("Error!", "An error occurred while adding.", "error");
  }
};
</script>

<style></style>
