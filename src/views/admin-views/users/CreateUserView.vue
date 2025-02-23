<template>
        <div class="create-user-form">
            <h3 class="text-dark text-center">Create User</h3>
            <form class="container w-75 my-5">
            <div class="mb-3">
                <label for="email" class="form-label fw-semibold">Email</label>
                <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label fw-semibold">Phone</label>
                <input type="text" class="form-control" id="phone" name="phone" required>
            </div>
            <div class="mb-3">
                <label for="fullname" class="form-label fw-semibold">Full Name</label>
                <input type="text" class="form-control" id="fullname" name="fullname" required>
            </div>
            <div class="d-flex gap-5">
                <div class="mb-3 w-25">
                    <label for="dob" class="form-label fw-semibold">Date of Birth</label>
                    <input type="date" class="form-control" id="dob" required>
                </div>
                <div class="mb-3 w-25">
                    <label class="form-label fw-semibold">Gender</label>
                    <select class="form-select">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="mb-3">
                    <label for="address" class="form-label fw-semibold">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="123A, Tran Binh Trong" required>
                </div>
                <div>
                    <label for="ward" class="form-label fw-semibold">Ward</label>
                    <Select class="form-select" id="ward"></Select>
                </div>
                <div>
                    <label for="district" class="form-label fw-semibold">District</label>
                    <Select class="form-select" id="district"></Select>
                </div>
                <div>
                    <label for="city" class="form-label fw-semibold">City</label>
                    <Select class="form-select" id="city"></Select>
                </div>
            </div>
            <div class="mb-3">
                <label for="role" class="form-label fw-semibold">Role</label>
                <select class="form-select" id="role">
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="status" class="form-label fw-semibold">Status</label>
                <select class="form-select" id="status">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
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

</script>
<style></style>