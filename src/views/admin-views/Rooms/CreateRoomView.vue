<template>
    <div class="mt-4 my-5">
        <h3 class="text-dark text-center">Create room</h3>
        <form class="container w-75 my-5" @submit.prevent="createRoom">
            <div class="mb-3">
                <label for="roomNumber" class="form-label fw-semibold">Room number:</label>
                <input type="text" id="roomNumber" v-model="numberRoom" class="form-control"
                    @input="validateField('numberRoom')" />
                <span v-if="errors.numberRoom" class="text-danger">{{ errors.numberRoom }}</span>
            </div>
            <div class="mb-3">
                <label for="typeRoom" class="form-label fw-semibold">Type room:</label>
                <select id="typeRoom" v-model="typeRoomId" class="form-select" @change="validateField('typeRoomId')">
                    <option value="" disabled>Choose type room</option>
                    <option v-for="type in typeRooms" :key="type.id" :value="type.id">{{ type.name }}</option>
                </select>
                <span v-if="errors.typeRoomId" class="text-danger">{{ errors.typeRoomId }}</span>
            </div>
            <div class="mb-3">
                <label for="status" class="form-label fw-semibold">Status room:</label>
                <select id="status" v-model="status" class="form-select" @change="validateField('status')">
                    <option value="">Choose status</option>
                    <option value="0">Available</option>
                    <option value="1">Occupied</option>
                    <option value="2">Maintenance</option>
                    <option value="3">NeedsCleaning</option>
                </select>
                <span v-if="errors.status" class="text-danger">{{ errors.status }}</span>
            </div>
            <div class="d-flex gap-3 justify-content-end">
                <RouterLink to="/admin/rooms-management/list-room" type="button" class="btn btn-warning" >Back</RouterLink>
                <button type="submit" class="btn btn-primary">Create</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter, RouterLink } from 'vue-router';

const numberRoom = ref('');
const typeRoomId = ref('');
const status = ref('');
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

const validateField = (field) => {
    switch (field) {
        case "numberRoom":
            if (!numberRoom.value) {
                errors.value.numberRoom = "Số phòng không được để trống.";
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
    }
};

const validateForm = () => {
    validateField("numberRoom");
    validateField("typeRoomId");
    validateField("status");

    return Object.keys(errors.value).length === 0;
};

const createRoom = async () => {
    if (!validateForm()) {
        Swal.fire({
            title: "Lỗi!",
            text: "Cập nhật thất bại.",
            icon: "error",
            confirmButtonText: "Thử lại"
        });
        return;
    }

    const roomData = {
        id: 0,
        numberRoom: numberRoom.value,
        status: Number.parseInt(status.value),
        typeRoomId: typeRoomId.value
    };

    try {
        await axios.post(API_ADD, roomData);
        Swal.fire({
            title: "Thành công!",
            text: "Thêm thành công.",
            icon: "success",
            confirmButtonText: "OK"
        });
        router.push("/admin/rooms-management/list-room");
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: "Lỗi!",
            text: "Cập nhật thất bại.",
            icon: "error",
            confirmButtonText: "Thử lại"
        });
    }
};

onMounted(typeRoomList);
</script>
