<template>
    <div class="mt-4 my-5">
        <h3 class="text-dark text-center">Create room</h3>
        <form class="container w-75 my-5">
            <div class="mb-3">
                <label for="roomNumber" class="form-label fw-semibold">Số phòng:</label>
                <input type="text" id="roomNumber" class="form-control" required>
            </div>

            <div class="mb-3">
                <label for="typeRoom" class="form-label fw-semibold">Loại phòng:</label>
                <select id="typeRoom" class="form-select" required>
                    <option value="" disabled>Chọn loại phòng</option>
                    <option v-for="type in typeRooms" :key="type.ID" :value="type.typeName">{{ type.typeName }}</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="status" class="form-label fw-semibold">Trạng thái:</label>
                <select id="status" class="form-select" required>
                    <option value="Available">Trống</option>
                    <option value="Booked">Đã đặt</option>
                    <option value="Maintenance">Bảo trì</option>
                </select>
            </div>

            <div class="d-flex gap-3 justify-content-end">
                <button type="submit" class="btn btn-primary">Create</button>
                <button type="reset" class="btn btn-success">clear</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const typeRooms = ref([
    { ID: 1, typeName: 'Deluxe' },
    { ID: 2, typeName: 'Standard' },
    { ID: 3, typeName: 'Suite' },
    { ID: 4, typeName: 'Family' },
    { ID: 5, typeName: 'Single' }
]);
</script>
<style></style>