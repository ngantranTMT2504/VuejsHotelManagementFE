<template>
    <div class="mt-4 my-5">
        <h3 class="text-dark text-center">Edit Room</h3>
        <form class="container w-75 my-5" @submit.prevent="editRoom">
            <div class="mb-3">
                <label for="roomNumber" class="form-label fw-semibold">Số phòng:</label>
                <input 
                    type="text" 
                    id="roomNumber" 
                    v-model="room.numberRoom" 
                    class="form-control"
                    @input="validateField('numberRoom')"
                />
                <span v-if="errors.numberRoom" class="text-danger">{{ errors.numberRoom }}</span>
            </div>

            <div class="mb-3">
                <label for="typeRoom" class="form-label fw-semibold">Loại phòng:</label>
                <select 
                    id="typeRoom" 
                    v-model="room.typeRoomId" 
                    class="form-select"
                    @change="validateField('typeRoomId')"
                >
                    <option value="" disabled>Chọn loại phòng</option>
                    <option v-for="type in typeRooms" :key="type.id" :value="type.id">{{ type.name }}</option>
                </select>
                <span v-if="errors.typeRoomId" class="text-danger">{{ errors.typeRoomId }}</span>
            </div>

            <div class="mb-3">
                <label for="status" class="form-label fw-semibold">Trạng thái:</label>
                <select 
                    id="status" 
                    v-model="room.status"  
                    class="form-select"
                    @change="validateField('status')"
                >
                    <option value="">Chọn trạng thái</option>
                    <option value="0">Trống</option>
                    <option value="1">Đã có khách</option>
                    <option value="2">Cần dọn dẹp</option>
                    <option value="3">Bảo trì</option>
                </select>
                <span v-if="errors.status" class="text-danger">{{ errors.status }}</span>
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
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const API_EDIT = "http://localhost:5287/api/Room/UpdateRoom";
const API_GET_ID = "http://localhost:5287/api/Room/GetRoom/";
const API_GETALL = "http://localhost:5287/api/TypeRoom/GetTypeRooms";

const route = useRoute();
const router = useRouter();
const room = ref({ numberRoom: "", typeRoomId: "", status: "" });
const typeRooms = ref([]);
const errors = ref({});

// Lấy danh sách loại phòng
const typeRoomList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        typeRooms.value = response.data;
    } catch (error) {
        console.log(error);
    }
};

// Lấy thông tin phòng từ API
const fetchRoom = async () => {
    try {
        const res = await axios.get(API_GET_ID + `${route.params.id}`);
        room.value = res.data;
        resetErrors(); // Reset lỗi khi dữ liệu API tải về
    } catch (error) {
        console.log(error);
    }
};

// Validate input fields
const validateField = (field) => {
    switch (field) {
        case "numberRoom":
            if (!room.value.numberRoom) {
                errors.value.numberRoom = "Số phòng không được để trống.";
            } else if (!/^\d+$/.test(room.value.numberRoom)) {
                errors.value.numberRoom = "Số phòng phải là số.";
            } else {
                delete errors.value.numberRoom;
            }
            break;
        case "typeRoomId":
            if (!room.value.typeRoomId) {
                errors.value.typeRoomId = "Vui lòng chọn loại phòng.";
            } else {
                delete errors.value.typeRoomId;
            }
            break;
        case "status":
            if (room.value.status === "") {
                errors.value.status = "Vui lòng chọn trạng thái.";
            } else {
                delete errors.value.status;
            }
            break;
    }
};

// Kiểm tra toàn bộ form trước khi submit
const validateForm = () => {
    validateField("numberRoom");
    validateField("typeRoomId");
    validateField("status");

    return Object.keys(errors.value).length === 0;
};

// Reset lỗi khi API trả về dữ liệu mới
const resetErrors = () => {
    errors.value = {};
};

// Chỉnh sửa phòng
const editRoom = async () => {
    if (!validateForm()) {
        return;
    }

    try {
        await axios.put(API_EDIT, room.value);
        alert("Cập nhật thành công");
        router.push("/admin/rooms-management/list-room");
    } catch (error) {
        console.log(error);
    }
};

// Lắng nghe khi dữ liệu từ API thay đổi để reset lỗi
watch(room, () => {
    resetErrors();
}, { deep: true });

onMounted(fetchRoom);
onMounted(typeRoomList);
</script>
