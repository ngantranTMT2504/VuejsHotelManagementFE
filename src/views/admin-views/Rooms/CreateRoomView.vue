<template>
    <div class="mt-4 my-5">
        <h3 class="text-dark text-center">Create room</h3>
        <form class="container w-75 my-5" @submit.prevent="createRoom">
            <div class="mb-3">
                <label for="roomNumber" class="form-label fw-semibold">Số phòng:</label>
                <input 
                    type="text" 
                    id="roomNumber" 
                    v-model="numberRoom" 
                    class="form-control"
                    @input="validateField('numberRoom')"
                />
                <span v-if="errors.numberRoom" class="text-danger">{{ errors.numberRoom }}</span>
            </div>

            <div class="mb-3">
                <label for="typeRoom" class="form-label fw-semibold">Loại phòng:</label>
                <select 
                    id="typeRoom" 
                    v-model="typeRoomId" 
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
                    v-model="status" 
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

            <div class="mb-3">
                <label for="img" class="form-label fw-semibold">Hình ảnh:</label>
                <input 
                    type="file" 
                    id="img" 
                    @change="uploadImage" 
                    class="form-control"
                />
                <span v-if="errors.image" class="text-danger">{{ errors.image }}</span>
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
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const numberRoom = ref('');
const typeRoomId = ref('');
const status = ref('');
const image = ref(null);
const errors = ref({});

const router = useRouter();
const typeRooms = ref([]);

const API_ADD = "http://localhost:5287/api/Room/AddRoom";
const API_GETALL = "http://localhost:5287/api/TypeRoom/GetTypeRooms";

const typeRoomList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        typeRooms.value = response.data;
    } catch (error) {
        console.log(error);
    }
};

// Validate input fields
const validateField = (field) => {
    switch (field) {
        case "numberRoom":
            if (!numberRoom.value) {
                errors.value.numberRoom = "Số phòng không được để trống.";
            } else if (!/^\d+$/.test(numberRoom.value)) {
                errors.value.numberRoom = "Số phòng phải là số.";
            } else {
                delete errors.value.numberRoom;
            }
            break;
        case "typeRoomId":
            if (!typeRoomId.value) {
                errors.value.typeRoomId = "Vui lòng chọn loại phòng.";
            } else {
                delete errors.value.typeRoomId;
            }
            break;
        case "status":
            if (!status.value) {
                errors.value.status = "Vui lòng chọn trạng thái.";
            } else {
                delete errors.value.status;
            }
            break;
        case "image":
            if (!image.value) {
                errors.value.image = "Vui lòng chọn hình ảnh.";
            } else {
                delete errors.value.image;
            }
            break;
    }
};

// Upload Image
const uploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
        image.value = file;
        validateField("image");
    }
};

// Kiểm tra toàn bộ form trước khi submit
const validateForm = () => {
    validateField("numberRoom");
    validateField("typeRoomId");
    validateField("status");
    validateField("image");

    return Object.keys(errors.value).length === 0;
};

// Reset Form
const resetForm = () => {
    numberRoom.value = "";
    typeRoomId.value = "";
    status.value = "";
    image.value = null;
    errors.value = {};
};

// Create Room
const createRoom = async () => {
    if (!validateForm()) {
        return;
    }

    const formData = new FormData();
    formData.append("id", 0);
    formData.append("numberRoom", numberRoom.value);
    formData.append("status", Number.parseInt(status.value));
    formData.append("typeRoomId", typeRoomId.value);
    formData.append("image", image.value);

    try {
        await axios.post(API_ADD, formData);
        alert("Thêm thành công");
        router.push("/admin/rooms-management/list-room");
    } catch (error) {
        console.log(error);
    }
};

onMounted(typeRoomList);
</script>
