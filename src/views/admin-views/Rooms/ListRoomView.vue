<template>
    <main>
        <div class="py-1 mb-3">
            <div class="button-add mb-2">
                <RouterLink to="/admin/rooms-management/create-room" class="btn btn-success">Add Room</RouterLink>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center gap-4 w-50 mb-3">
            <input type="text" class="form-control w-100" placeholder="Search room">
            <button class="btn btn-primary me-2">Search</button>
        </div>
        <div class="list-user">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Room number</th>
                        <th scope="col">Type Room</th>
                        <th scope="col">Status</th>
                        <th scope="col" class="">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="room in rooms">
                        <td>{{ room?.id }}</td>
                        <td>{{ room?.numberRoom }}</td>
                        <td>{{ room?.typeRoom?.name }}</td>
                        <td>{{ room?.statusName }}</td>
                        <td>
                            <div class="action btn d-flex gap-4">
                                <a href="" @click="editRoom(room.id)"
                                    class="btn btn-warning text-dark px-2 py-1 rounded"><i class="bi bi-pencil"></i></a>
                                <a href="" @click="deleteRoom(room.id)"
                                    class="btn btn-danger text-light px-2 py-1 rounded"><i class="bi bi-trash"></i></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example" class="d-flex justify-content-center">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const rooms = ref({
    id: null,
    numberRoom: "",
    status: null,
    statusName: "",
    typeRoom: null
})

const router = useRouter();

const API_GETALL = "http://localhost:5287/api/Room/GetRooms"
const API_DELETE = "http://localhost:5287/api/Room/DeleteRoom/"

const roomList = async () => {
    try {
        const response = await axios.get(API_GETALL);
        console.log(response.data);

        rooms.value = response.data;

        if (rooms.value[0] !== null) {
            rooms.value.forEach(element => {
                switch (element?.status) {
                    case 0:
                        element.statusName = "Available";
                        break;
                    case 1:
                        element.statusName = "Occupied";
                        break;
                    case 2:
                        element.statusName = "Maintenance";
                        break;
                    case 3:
                        element.statusName = "NeedsCleaning";
                        break;
                    default:
                        element.statusName = "None";
                        break;
                }
            });
        }

    } catch (error) {
        console.log( error);
    }
}

const editRoom = (id) => {
    router.push(`/admin/rooms-management/edit-room/${id}`);
}

const deleteRoom = (id) => {
    const _confirm = confirm("Bạn có chắc muốn xóa không?");
    if (_confirm) {
        try {
            axios.delete(API_DELETE + `${id}`)
            alert("Xóa thành công")
            roomList()
        } catch (error) {
            console.log(error);
        }
    }
}

onMounted(roomList)

</script>
<style></style>