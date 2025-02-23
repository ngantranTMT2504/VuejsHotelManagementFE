<template>
  <div class="mt-4 my-5">
    <h3 class="text-dark text-center">Create type room</h3>

    <form class="container w-75 my-5" @submit.prevent="createTypeRoom">
      <div class="mb-3">
        <label for="typeName" class="form-label fw-semibold">Tên loại phòng:</label>
        <input type="text" id="typeName" v-model="name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label fw-semibold">Giá:</label>
        <input type="text" id="price" v-model="price" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="capacity" class="form-label fw-semibold">Sức chứa:</label>
        <input type="number" id="capacity" v-model="capacity" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label fw-semibold">Mô tả:</label>
        <textarea id="description" v-model="description" class="form-control" required></textarea>
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
const capacity = ref(null);
const description = ref(null);

const API_ADD = "http://localhost:5287/api/TypeRoom/AddTypeRoom"
 
const router = useRouter()

const createTypeRoom = async() => {
  const typeRoom = {
    name : name.value,
    price : price.value,
    capacity : capacity.value,
    description : description.value
  }

  try {
    await axios.post(API_ADD, typeRoom);
    alert("Thêm thành công");
    router.push("/admin/type-rooms/list-type-room");
  } catch (error) {
    console.log("Lỗi");
  }
}

</script>
<style></style>