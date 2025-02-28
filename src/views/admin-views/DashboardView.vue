<template>
    <main class="">
        <div class="container my-2">
            <div class="d-flex justify-content-between mb-3">
                <h5 class="text-secondary">Dashboard</h5>
                <div class="actions d-flex ">
                    <select class="form-select me-3" aria-label="Default select example">
                        <option selected>Action</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <a href="" class="btn btn-primary me-2">
                        <i class="bi bi-funnel-fill"></i>
                    </a>
                    <a href="" class="btn btn-primary">
                        <i class="bi bi-arrow-clockwise"></i>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="welcome-card card ">
                        <div class="row p-2">
                            <div class="card-body col-lg-7">
                                <h5 class="card-title">Welcom back, Admin</h5>
                                <p class="card-text">Hotel dashboard</p>
                            </div>
                            <div class="col-lg-5">
                                <img :src="Admin1" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total earnings</h5>
                            <p class="card-text">$55,000</p>
                            <p class="card-text ">+5.52%</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Monthly</h5>
                            <p class="card-text">$55,000</p>
                            <p class="card-text ">+5.52%</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Income</h5>
                            <p class="card-text">$22784</p>
                            <p class="card-text ">+5.52%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Revenue</h5>
                            <p class="card-text bg-price">Total: $17784</p>
                            <p class="card-text">+ 4.2%</p>
                            <p class="card-text text-secondary">Since last week</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="row">
                            <div class="card-body col-lg-8 ps-4">
                                <h5 class="card-title">Revenue Reports</h5>
                                <p class="card-text">Income: $22784</p>
                                <p class="card-text">Expense: $5000</p>
                                <p class="card-text bg-price">Total: $17784</p>
                            </div>
                            <div class="col-lg-4 my-3">
                                <img :src="Chart" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="datepicker" id="calendar">
                        <div class="datepicker-top">
                            <div class="btn-group">
                                <button class="tag">Today</button>
                                <button class="tag">Tomorrow</button>
                                <button class="tag">In 2 days</button>
                            </div>
                            <div class="month-selector">
                                <button class="arrow"><i class="material-icons">&lt;</i></button>
                                <button class="arrow"><i class="material-icons">&gt;</i></button>
                            </div>
                        </div>
                        <div class="datepicker-calendar">
                            <span class="day">Mo</span>
                            <span class="day">Tu</span>
                            <span class="day">We</span>
                            <span class="day">Th</span>
                            <span class="day">Fr</span>
                            <span class="day">Sa</span>
                            <span class="day">Su</span>
                            <button class="date faded">30</button>
                            <button class="date">1</button>
                            <button class="date">2</button>
                            <button class="date">3</button>
                            <button class="date">4</button>
                            <button class="date">5</button>
                            <button class="date">6</button>
                            <button class="date">7</button>
                            <button class="date">8</button>
                            <button class="date current-day">9</button>
                            <button class="date">10</button>
                            <button class="date">11</button>
                            <button class="date">12</button>
                            <button class="date">13</button>
                            <button class="date">14</button>
                            <button class="date">15</button>
                            <button class="date">16</button>
                            <button class="date">17</button>
                            <button class="date">18</button>
                            <button class="date">19</button>
                            <button class="date">20</button>
                            <button class="date">21</button>
                            <button class="date">22</button>
                            <button class="date">23</button>
                            <button class="date">24</button>
                            <button class="date">25</button>
                            <button class="date">26</button>
                            <button class="date">27</button>
                            <button class="date">28</button>
                            <button class="date">29</button>
                            <button class="date">30</button>
                            <button class="date">31</button>
                            <button class="date faded">1</button>
                            <button class="date faded">2</button>
                            <button class="date faded">3</button>
                        </div>
                    </div>

                </div>
                <div class="col-md-8">
                    <table class="table table-hover">
                        <thead class="table-primary rounded-top ">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </main>
</template>
<script setup>
import Admin1 from '@/assets/images/admin/customer-support.png'
import Chart from '@/assets/icons/pie-chart.png'
</script>
<style>
.card {
    margin-bottom: 20px;
}

.welcome-card {
    background-color: rgb(192, 220, 255) !important;
}

.bg-price {
    display: inline-block;
    background-color: rgb(192, 222, 255) !important;
    padding-inline: 5px;
    color: rgb(1, 115, 238);

}

.progress {
    height: 20px;
    margin-bottom: 10px;
}


/* CSS Calendar */

/* :root {
    --c-theme-primary: #008FFD;
    --c-theme-primary-accent: #CBE8FF;
    --c-bg-primary: #D6DAE0;
    --c-bg-secondary: #EAEBEC;
    --c-bg-tertiary: #FDFDFD;
    --c-text-primary: #1F1F25;
    --c-text-secondary: #999FA6;
}

body {
    font-family: "Inter", sans-serif;
    line-height: 1.5;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--c-bg-primary);
    color: var(--c-text-primary);
} */

button {
    font: inherit;
    cursor: pointer;
}

button:focus {
    outline: 0;
}

.datepicker {
    width: 95%;
    max-width: 350px;
    background-color: var(--c-bg-tertiary);
    border-radius: 10px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 1rem;
}

.datepicker-top {
    margin-bottom: 1rem;
}

.btn-group {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    margin-top: -0.5rem;
}

.tag {
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    border: 0;
    background-color: var(--c-bg-secondary);
    border-radius: 10px;
    padding: 0.5em 0.75em;
    font-weight: 600;
}

.month-selector {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: #FFF;
    border-radius: 12px;
    width: 2.5rem;
    height: 2.5rem;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.15);
}

.month-name {
    font-weight: 600;
}

.datepicker-calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-row-gap: 1rem;
}

.day,
.date {
    justify-self: center;
}

.day {
    color: var(--c-text-secondary);
    font-size: 0.875em;
    font-weight: 500;
    justify-self: center;
}

.date {
    border: 0;
    padding: 0;
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-weight: 600;
    border: 2px solid transparent;
    background-color: transparent;
    cursor: pointer;
}

.date:focus {
    outline: 0;
    color: var(--c-theme-primary);
    border: 2px solid var(--c-theme-primary-accent);
}

.faded {
    color: var(--c-text-secondary);
}

.current-day {
    color: #FFF;
    border-color: var(--c-theme-primary);
    background-color: var(--c-theme-primary);
}

.current-day:focus {
    background-color: var(--c-theme-primary-accent);
}
</style>