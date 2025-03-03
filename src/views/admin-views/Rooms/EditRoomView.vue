<template>
    <div class="mt-4 my-5">
        <h3 class="text-dark text-center">Edit Room</h3>
        <form class="container w-75 my-5" @submit.prevent="editRoom">
            <div class="mb-3">
                <label for="roomNumber" class="form-label fw-semibold">Room number:</label>
                <input type="text" id="roomNumber" v-model="room.numberRoom" class="form-control"
                    @input="validateField('numberRoom')" />
                <span v-if="errors.numberRoom" class="text-danger">{{ errors.numberRoom }}</span>
            </div>

            <div class="mb-3">
                <label for="typeRoom" class="form-label fw-semibold">Type room:</label>
                <select id="typeRoom" v-model="room.typeRoomId" class="form-select"
                    @change="validateField('typeRoomId')">
                    <option value="" disabled>Choose type room</option>
                    <option v-for="type in typeRooms" :key="type.id" :value="type.id">{{ type.name }}</option>
                </select>
                <span v-if="errors.typeRoomId" class="text-danger">{{ errors.typeRoomId }}</span>
            </div>

            <div class="mb-3">
                <label for="status" class="form-label fw-semibold">Status:</label>
                <select id="status" v-model="room.status" class="form-select" @change="validateField('status')">
                    <option value="">Choose status</option>
                    <option value="0">Available</option>
                    <option value="1">Occupied</option>
                    <option value="2">Maintenance</option>
                    <option value="3">NeedsCleaning</option>
                </select>
                <span v-if="errors.status" class="text-danger">{{ errors.status }}</span>
            </div>

            <div class="d-flex gap-3 justify-content-end">
                <button type="button" class="btn btn-warning" @click="router.back()">Back</button>
                <button type="submit" class="btn btn-primary">Edit</button>
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

const typeRoomList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        typeRooms.value = response.data;
    } catch (error) {
        console.log(error);
    }
};

const fetchRoom = async () => {
    try {
        const res = await axios.get(API_GET_ID + `${route.params.id}`);
        room.value = res.data;
        resetErrors();
    } catch (error) {
        console.log(error);
    }
};

const validateField = (field) => {
    switch (field) {
        case "numberRoom":
            if (!room.value.numberRoom) {
                errors.value.numberRoom = "Số phòng không được để trống.";
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

const validateForm = () => {
    validateField("numberRoom");
    validateField("typeRoomId");
    validateField("status");

    return Object.keys(errors.value).length === 0;
};

const resetErrors = () => {
    errors.value = {};
};

const editRoom = async () => {
    if (!validateForm()) {
        return;
    }

    try {
        await axios.put(API_EDIT, room.value);
        Swal.fire({
            title: "Thành công!",
            text: "Cập nhật thành công.",
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

watch(room, () => {
    resetErrors();
}, { deep: true });

onMounted(fetchRoom);
onMounted(typeRoomList);
</script>
