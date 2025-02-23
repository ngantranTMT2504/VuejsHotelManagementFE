<template>
   <div class="mt-4 my-5">
    <h3 class="text-dark text-center">Create type room</h3>

    <form class="container w-75 my-5" @submit.prevent="editTypeRoom">
      <div class="mb-3">
        <label for="typeName" class="form-label fw-semibold">Tên loại phòng:</label>
        <input type="text" id="typeName" v-model="typeRoom.name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label fw-semibold">Giá:</label>
        <input type="text" id="price" v-model="typeRoom.price" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="capacity" class="form-label fw-semibold">Sức chứa:</label>
        <input type="number" id="capacity" v-model="typeRoom.capacity" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label fw-semibold">Mô tả:</label>
        <textarea id="description" v-model="typeRoom.description" class="form-control" required></textarea>
      </div>
      <div class="d-flex gap-3 justify-content-end">
        <button type="submit" class="btn btn-primary">Edit</button>
        <button type="reset" class="btn btn-success" @click="router.back()">Back</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref , onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';

const API_URL_edit = "http://localhost:5287/api/TypeRoom/UpdateTypeRoom";
const API_GET_ID = "http://localhost:5287/api/TypeRoom/GetTypeRoom/"
const route = useRoute()
const router = useRouter()
const typeRoom = ref({})


const fetchTypeRoom = async() => {
  try {
    const res = await axios.get(API_GET_ID + `${route.params.id}`)
    typeRoom.value = res.data
  } catch (error) {
    console.log(error)
  }
}

const editTypeRoom = async() => {
  try {
    await axios.put(API_URL_edit , typeRoom.value)
    alert("Cập nhật thành công")
    router.push("/admin/type-rooms/list-type-room")
  } catch (error) {
    console.log(error)
  }
}

onMounted(fetchTypeRoom);

</script>
<style>
    
</style>