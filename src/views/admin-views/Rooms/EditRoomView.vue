<template>
    <div class="mt-4 my-5">
        <h3 class="text-dark text-center">Create room</h3>
        <form class="container w-75 my-5" @submit.prevent="editRoom">
            <div class="mb-3">
                <label for="roomNumber" class="form-label fw-semibold">Số phòng:</label>
                <input type="text" id="roomNumber" v-model="room.numberRoom" class="form-control" required>
            </div>

            <div class="mb-3">
                <label for="typeRoom" class="form-label fw-semibold">Loại phòng:</label>
                <select id="typeRoom" class="form-select" required>
                    <option value="" disabled>Chọn loại phòng</option>
                    <option v-for="type in typeRooms" :value="type?.id">{{ type?.name }}</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="status" class="form-label fw-semibold">Trạng thái:</label>
                <select id="status" class="form-select" required>
                    <option value=0>Trống</option>
                    <option value=1>Đã đặt</option>
                    <option value=2>Cần dọn dẹp</option>
                    <option value=3>Bảo trì</option>
                </select>
            </div>

            <div class="d-flex gap-3 justify-content-end">
                <button type="submit" class="btn btn-primary">Edit</button>
                <button type="button" class="btn btn-success">clear</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref , onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';

const API_URL_edit = "http://localhost:5287/api/Room/UpdateRoom";
const API_GET_ID = "http://localhost:5287/api/Room/GetRoom/"
const route = useRoute()
const router = useRouter()
const room = ref({})

const typeRooms = ref({
    id: null,
    name: "",
    price: null,
    capacity: null,
    description: ""
})
const API_GETALL = "http://localhost:5287/api/TypeRoom/GetTypeRooms"
const typeRoomList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        typeRooms.value = response.data
    } catch (error) {
        console.log(error);
    }
}
const fetchRoom = async() => {
  try {
    const res = await axios.get(API_GET_ID + `${route.params.id}`)
    room.value = res.data
  } catch (error) {
    console.log(error)
  }
}

const editRoom = async() => {
  try {
    await axios.put(API_URL_edit , room.value)
    alert("Cập nhật thành công")
    router.push("/admin/rooms-management/list-room")
  } catch (error) {
    console.log(error)
  }
}

onMounted(typeRoomList,fetchRoom);

</script>
<style>
    
</style>