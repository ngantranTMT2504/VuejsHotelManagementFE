<template>
    <main>
        <div class="d-flex justify-content-between align-items-center ">
            <input type="text" class="form-control w-50" placeholder="Search for rooms and offers">
            <div class="d-flex align-items-center">
                <button class="btn btn-primary me-2">Create booking</button>
                <button type="button" class="position-relative border-0">
                    <i class="bi bi-bell-fill"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        2
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button>
            </div>
        </div>

        <div class="container my-2">
            <h1>Booking Dashboard</h1>

            <!-- First Row: Total Booking, Increase Booking, Monthly, Income -->
            <div class="row">
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Booking</h5>
                            <p class="card-text">654</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Increase Booking</h5>
                            <p class="card-text">55%</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Monthly</h5>
                            <p class="card-text">55%</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Income</h5>
                            <p class="card-text">$22784</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Row: Total Revenue, Revenue Reports -->
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Revenue</h5>
                            <p class="card-text">42%</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Revenue Reports</h5>
                            <p class="card-text">Income: $22784</p>
                            <p class="card-text">Expense: $5000</p>
                            <p class="card-text">Total: $17784</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Third Row: Total Bookings For Last Week -->
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Bookings For Last Week</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 78%" aria-valuenow="78"
                                    aria-valuemin="0" aria-valuemax="100">Delux Room Booking 78%</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 22%"
                                    aria-valuenow="22" aria-valuemin="0" aria-valuemax="100">Single Room Booking 22%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fourth Row: Room Status, Today's Bookings -->
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Room Status</h5>
                            <p class="card-text">Check In: 76%</p>
                            <p class="card-text">Check Out: +17.32% Booking is increased compared to last month.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Today's Bookings</h5>
                            <p class="card-text">Total: 35</p>
                            <p class="card-text">Checked-In: 26</p>
                            <p class="card-text">Checked-Out: 9</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>

</script>
<style>
.card {
    margin-bottom: 20px;
}

.progress {
    height: 20px;
    margin-bottom: 10px;
}
</style>