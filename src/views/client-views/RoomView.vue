<template>
    <main>
        <div class="bg-light p-5 mb-5">
            <h3 class=" text-dark">Room</h3>
        </div>
        <div class="container room-wrapper ">
            <div class="row">
                <div class=" col-lg-8">
                    <div class="room-item">
                        <div class="img-room">
                            <img :src="roomclassic" alt="" class="img-fluid">
                        </div>
                        <div class="room-content row py-4">
                            <h4 class="fw-semibold">Classic room double</h4>
                            <p class="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quod
                                laboriosam quae
                                provident hic, modi nostrum ab molestias autem, temporibus dolorem perspiciatis
                                pariatur
                                explicabo? In fugit id adipisci consectetur possimus.</p>

                            <div class=" amenities mb-3">
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--air-condition"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" width="24" viewBox="0 0 24 20" enable-background="new 0 0 24 20"
                                        xml:space="preserve">
                                        <g>
                                            <path
                                                d="M21.5,12.5h-19c-1.1,0-2-0.9-2-2v-9c0-0.6,0.4-1,1-1h21c0.6,0,1,0.4,1,1v9C23.5,11.6,22.6,12.5,21.5,12.5z">
                                            </path>
                                            <line x1="0.5" y1="6.5" x2="23.5" y2="6.5"></line>
                                            <path
                                                d="M18.5,9.5h-13c-0.6,0-1,0.4-1,1v2h15v-2C19.5,9.9,19.1,9.5,18.5,9.5z">
                                            </path>
                                            <path d="M17.5,15.5c0,2,2,4,4,4"></path>
                                            <path d="M6.5,15.5c0,2-2,4-4,4"></path>
                                            <circle cx="3.5" cy="3.5" r="0.5"></circle>
                                            <circle cx="5.5" cy="3.5" r="0.5"></circle>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--bath" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24"
                                        viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M16.5,21.5h-9c-3.3,0-6-2.7-6-6v-4h21v4C22.5,18.8,19.8,21.5,16.5,21.5z">
                                            </path>
                                            <line x1="0.5" y1="11.5" x2="23.5" y2="11.5"></line>
                                            <line x1="6.5" y1="21.5" x2="5.5" y2="23.5"></line>
                                            <line x1="17.5" y1="21.5" x2="18.5" y2="23.5"></line>
                                            <line x1="1.5" y1="4.5" x2="1.5" y2="11.5"></line>
                                            <path d="M1.5,4.5V3c0-1.4,1.1-2.5,2.5-2.5l0,0c1.4,0,2.5,1.1,2.5,2.5v0.5">
                                            </path>
                                            <line x1="5.5" y1="6.5" x2="5.5" y2="7.5"></line>
                                            <line x1="7.5" y1="8.5" x2="7.5" y2="9.5"></line>
                                            <line x1="7.5" y1="5.5" x2="7.5" y2="6.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--tv" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24"
                                        viewBox="0 0 24 19" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path
                                                    d="M22.5,15.5h-21c-0.6,0-1-0.4-1-1v-13c0-0.6,0.4-1,1-1h21c0.6,0,1,0.4,1,1v13C23.5,15.1,23.1,15.5,22.5,15.5z">
                                                </path>
                                                <polyline points="19.5,18.5 17.5,15.5 6.5,15.5 4.5,18.5"></polyline>
                                            </g>
                                            <line x1="4.5" y1="3.5" x2="2.5" y2="5.5"></line>
                                            <line x1="8.5" y1="3.5" x2="2.5" y2="9.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--map" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22.5"
                                        viewBox="0 0 22.5 22" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M0.5,1.9v14.9c0,0.4,0.2,0.7,0.5,0.9l6.5,3.5c0.3,0.1,0.6,0.1,0.9,0l5.7-3.5c0.3-0.2,0.6-0.2,0.9,0l5.7,3c0.6,0.3,1.4-0.2,1.4-0.9V4.2c0-0.4-0.2-0.8-0.6-0.9l-6.5-2.6c-0.2-0.1-0.5-0.1-0.7,0L8.3,3.3c-0.2,0.1-0.5,0.1-0.7,0L1.8,1C1.2,0.8,0.5,1.2,0.5,1.9z">
                                            </path>
                                            <line x1="8" y1="21.5" x2="8" y2="3.5"></line>
                                            <line x1="14.5" y1="17.5" x2="14.5" y2="0.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--luggage" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15.3"
                                        viewBox="0 0 15.3 27.3" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M11.8,25.2H3.5c-1.6,0-3-1.4-3-3V9.6c0-1.6,1.4-3,3-3h8.3c1.7,0,3,1.3,3,3v12.7C14.8,23.9,13.5,25.2,11.8,25.2z">
                                            </path>
                                            <path d="M0.5,13.3c0-1.6,1.4-3,3-3h8.3c1.7,0,3,1.4,3,3"></path>
                                            <path d="M9.4,6.6V1.5c0-0.6-0.4-1-1-1H6.9c-0.6,0-1,0.4-1,1v5.1"></path>
                                            <g>
                                                <line x1="4" y1="25.2" x2="4" y2="26.8"></line>
                                                <line x1="11.3" y1="25.2" x2="11.3" y2="26.8"></line>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--pool" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22.2"
                                        viewBox="0 0 22.2 22.1" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M0.5,19.9c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7">
                                            </path>
                                            <path d="M10.6,5.1V3.3c0-1.5-1.2-2.8-2.8-2.8S5.1,1.7,5.1,3.3V18"></path>
                                            <path d="M21.7,5.1V3.3c0-1.5-1.2-2.8-2.8-2.8s-2.8,1.2-2.8,2.8V18">
                                            </path>
                                            <line x1="5.1" y1="8.8" x2="16.1" y2="8.8"></line>
                                            <line x1="5.1" y1="14.3" x2="16.1" y2="14.3"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--hair-dryer" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22"
                                        viewBox="0 0 22 23" enable-background="new 0 0 22 23" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M20.5,3.5h-5C14.2,3.5,13,3,12,2.1c-1.5-1.3-3.6-1.9-5.8-1.5c-2.8,0.5-5,2.7-5.5,5.5c-0.9,4.5,2.5,8.4,6.9,8.4c1.7,0,3.2-0.6,4.4-1.6c1.1-0.9,2.4-1.4,3.8-1.4h4.8c0.6,0,1-0.4,1-1v-6C21.5,3.9,21.1,3.5,20.5,3.5z">
                                            </path>
                                            <path
                                                d="M10.5,13.8v7.7c0,0.5-0.5,1-1,1h-2c-0.6,0-1-0.4-1-1C6.4,18.1,5.9,16,4.8,14">
                                            </path>
                                            <circle cx="7.5" cy="7.5" r="3"></circle>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <a type="submit" class="main-btn ">Booking</a>
                            </div>
                        </div>
                    </div>
                    <div class="room-item">
                        <div class="img-room">
                            <img :src="roomdeluxe" alt="" class="img-fluid">
                        </div>
                        <div class="room-content row py-4">
                            <h4 class="fw-semibold">Classic room double</h4>
                            <p class="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quod
                                laboriosam quae
                                provident hic, modi nostrum ab molestias autem, temporibus dolorem perspiciatis
                                pariatur
                                explicabo? In fugit id adipisci consectetur possimus.</p>

                            <div class=" amenities mb-3">
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--air-condition"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" width="24" viewBox="0 0 24 20" enable-background="new 0 0 24 20"
                                        xml:space="preserve">
                                        <g>
                                            <path
                                                d="M21.5,12.5h-19c-1.1,0-2-0.9-2-2v-9c0-0.6,0.4-1,1-1h21c0.6,0,1,0.4,1,1v9C23.5,11.6,22.6,12.5,21.5,12.5z">
                                            </path>
                                            <line x1="0.5" y1="6.5" x2="23.5" y2="6.5"></line>
                                            <path
                                                d="M18.5,9.5h-13c-0.6,0-1,0.4-1,1v2h15v-2C19.5,9.9,19.1,9.5,18.5,9.5z">
                                            </path>
                                            <path d="M17.5,15.5c0,2,2,4,4,4"></path>
                                            <path d="M6.5,15.5c0,2-2,4-4,4"></path>
                                            <circle cx="3.5" cy="3.5" r="0.5"></circle>
                                            <circle cx="5.5" cy="3.5" r="0.5"></circle>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--bath" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24"
                                        viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M16.5,21.5h-9c-3.3,0-6-2.7-6-6v-4h21v4C22.5,18.8,19.8,21.5,16.5,21.5z">
                                            </path>
                                            <line x1="0.5" y1="11.5" x2="23.5" y2="11.5"></line>
                                            <line x1="6.5" y1="21.5" x2="5.5" y2="23.5"></line>
                                            <line x1="17.5" y1="21.5" x2="18.5" y2="23.5"></line>
                                            <line x1="1.5" y1="4.5" x2="1.5" y2="11.5"></line>
                                            <path d="M1.5,4.5V3c0-1.4,1.1-2.5,2.5-2.5l0,0c1.4,0,2.5,1.1,2.5,2.5v0.5">
                                            </path>
                                            <line x1="5.5" y1="6.5" x2="5.5" y2="7.5"></line>
                                            <line x1="7.5" y1="8.5" x2="7.5" y2="9.5"></line>
                                            <line x1="7.5" y1="5.5" x2="7.5" y2="6.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--tv" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24"
                                        viewBox="0 0 24 19" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path
                                                    d="M22.5,15.5h-21c-0.6,0-1-0.4-1-1v-13c0-0.6,0.4-1,1-1h21c0.6,0,1,0.4,1,1v13C23.5,15.1,23.1,15.5,22.5,15.5z">
                                                </path>
                                                <polyline points="19.5,18.5 17.5,15.5 6.5,15.5 4.5,18.5"></polyline>
                                            </g>
                                            <line x1="4.5" y1="3.5" x2="2.5" y2="5.5"></line>
                                            <line x1="8.5" y1="3.5" x2="2.5" y2="9.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--map" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22.5"
                                        viewBox="0 0 22.5 22" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M0.5,1.9v14.9c0,0.4,0.2,0.7,0.5,0.9l6.5,3.5c0.3,0.1,0.6,0.1,0.9,0l5.7-3.5c0.3-0.2,0.6-0.2,0.9,0l5.7,3c0.6,0.3,1.4-0.2,1.4-0.9V4.2c0-0.4-0.2-0.8-0.6-0.9l-6.5-2.6c-0.2-0.1-0.5-0.1-0.7,0L8.3,3.3c-0.2,0.1-0.5,0.1-0.7,0L1.8,1C1.2,0.8,0.5,1.2,0.5,1.9z">
                                            </path>
                                            <line x1="8" y1="21.5" x2="8" y2="3.5"></line>
                                            <line x1="14.5" y1="17.5" x2="14.5" y2="0.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--luggage" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15.3"
                                        viewBox="0 0 15.3 27.3" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M11.8,25.2H3.5c-1.6,0-3-1.4-3-3V9.6c0-1.6,1.4-3,3-3h8.3c1.7,0,3,1.3,3,3v12.7C14.8,23.9,13.5,25.2,11.8,25.2z">
                                            </path>
                                            <path d="M0.5,13.3c0-1.6,1.4-3,3-3h8.3c1.7,0,3,1.4,3,3"></path>
                                            <path d="M9.4,6.6V1.5c0-0.6-0.4-1-1-1H6.9c-0.6,0-1,0.4-1,1v5.1"></path>
                                            <g>
                                                <line x1="4" y1="25.2" x2="4" y2="26.8"></line>
                                                <line x1="11.3" y1="25.2" x2="11.3" y2="26.8"></line>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--pool" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22.2"
                                        viewBox="0 0 22.2 22.1" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M0.5,19.9c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7">
                                            </path>
                                            <path d="M10.6,5.1V3.3c0-1.5-1.2-2.8-2.8-2.8S5.1,1.7,5.1,3.3V18"></path>
                                            <path d="M21.7,5.1V3.3c0-1.5-1.2-2.8-2.8-2.8s-2.8,1.2-2.8,2.8V18">
                                            </path>
                                            <line x1="5.1" y1="8.8" x2="16.1" y2="8.8"></line>
                                            <line x1="5.1" y1="14.3" x2="16.1" y2="14.3"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--hair-dryer" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22"
                                        viewBox="0 0 22 23" enable-background="new 0 0 22 23" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M20.5,3.5h-5C14.2,3.5,13,3,12,2.1c-1.5-1.3-3.6-1.9-5.8-1.5c-2.8,0.5-5,2.7-5.5,5.5c-0.9,4.5,2.5,8.4,6.9,8.4c1.7,0,3.2-0.6,4.4-1.6c1.1-0.9,2.4-1.4,3.8-1.4h4.8c0.6,0,1-0.4,1-1v-6C21.5,3.9,21.1,3.5,20.5,3.5z">
                                            </path>
                                            <path
                                                d="M10.5,13.8v7.7c0,0.5-0.5,1-1,1h-2c-0.6,0-1-0.4-1-1C6.4,18.1,5.9,16,4.8,14">
                                            </path>
                                            <circle cx="7.5" cy="7.5" r="3"></circle>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <a type="submit" class="main-btn">Booking</a>

                            </div>
                        </div>
                    </div>
                    <div class="room-item">
                        <div class="img-room">
                            <img :src="roomsignature" alt="" class="img-fluid">
                        </div>
                        <div class="room-content row py-4">
                            <h4 class="fw-semibold">Classic room double</h4>
                            <p class="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quod
                                laboriosam quae
                                provident hic, modi nostrum ab molestias autem, temporibus dolorem perspiciatis
                                pariatur
                                explicabo? In fugit id adipisci consectetur possimus.</p>

                            <div class=" amenities mb-3">
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--air-condition"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" width="24" viewBox="0 0 24 20" enable-background="new 0 0 24 20"
                                        xml:space="preserve">
                                        <g>
                                            <path
                                                d="M21.5,12.5h-19c-1.1,0-2-0.9-2-2v-9c0-0.6,0.4-1,1-1h21c0.6,0,1,0.4,1,1v9C23.5,11.6,22.6,12.5,21.5,12.5z">
                                            </path>
                                            <line x1="0.5" y1="6.5" x2="23.5" y2="6.5"></line>
                                            <path
                                                d="M18.5,9.5h-13c-0.6,0-1,0.4-1,1v2h15v-2C19.5,9.9,19.1,9.5,18.5,9.5z">
                                            </path>
                                            <path d="M17.5,15.5c0,2,2,4,4,4"></path>
                                            <path d="M6.5,15.5c0,2-2,4-4,4"></path>
                                            <circle cx="3.5" cy="3.5" r="0.5"></circle>
                                            <circle cx="5.5" cy="3.5" r="0.5"></circle>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--bath" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24"
                                        viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M16.5,21.5h-9c-3.3,0-6-2.7-6-6v-4h21v4C22.5,18.8,19.8,21.5,16.5,21.5z">
                                            </path>
                                            <line x1="0.5" y1="11.5" x2="23.5" y2="11.5"></line>
                                            <line x1="6.5" y1="21.5" x2="5.5" y2="23.5"></line>
                                            <line x1="17.5" y1="21.5" x2="18.5" y2="23.5"></line>
                                            <line x1="1.5" y1="4.5" x2="1.5" y2="11.5"></line>
                                            <path d="M1.5,4.5V3c0-1.4,1.1-2.5,2.5-2.5l0,0c1.4,0,2.5,1.1,2.5,2.5v0.5">
                                            </path>
                                            <line x1="5.5" y1="6.5" x2="5.5" y2="7.5"></line>
                                            <line x1="7.5" y1="8.5" x2="7.5" y2="9.5"></line>
                                            <line x1="7.5" y1="5.5" x2="7.5" y2="6.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--tv" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24"
                                        viewBox="0 0 24 19" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path
                                                    d="M22.5,15.5h-21c-0.6,0-1-0.4-1-1v-13c0-0.6,0.4-1,1-1h21c0.6,0,1,0.4,1,1v13C23.5,15.1,23.1,15.5,22.5,15.5z">
                                                </path>
                                                <polyline points="19.5,18.5 17.5,15.5 6.5,15.5 4.5,18.5"></polyline>
                                            </g>
                                            <line x1="4.5" y1="3.5" x2="2.5" y2="5.5"></line>
                                            <line x1="8.5" y1="3.5" x2="2.5" y2="9.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--map" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22.5"
                                        viewBox="0 0 22.5 22" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M0.5,1.9v14.9c0,0.4,0.2,0.7,0.5,0.9l6.5,3.5c0.3,0.1,0.6,0.1,0.9,0l5.7-3.5c0.3-0.2,0.6-0.2,0.9,0l5.7,3c0.6,0.3,1.4-0.2,1.4-0.9V4.2c0-0.4-0.2-0.8-0.6-0.9l-6.5-2.6c-0.2-0.1-0.5-0.1-0.7,0L8.3,3.3c-0.2,0.1-0.5,0.1-0.7,0L1.8,1C1.2,0.8,0.5,1.2,0.5,1.9z">
                                            </path>
                                            <line x1="8" y1="21.5" x2="8" y2="3.5"></line>
                                            <line x1="14.5" y1="17.5" x2="14.5" y2="0.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--luggage" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15.3"
                                        viewBox="0 0 15.3 27.3" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M11.8,25.2H3.5c-1.6,0-3-1.4-3-3V9.6c0-1.6,1.4-3,3-3h8.3c1.7,0,3,1.3,3,3v12.7C14.8,23.9,13.5,25.2,11.8,25.2z">
                                            </path>
                                            <path d="M0.5,13.3c0-1.6,1.4-3,3-3h8.3c1.7,0,3,1.4,3,3"></path>
                                            <path d="M9.4,6.6V1.5c0-0.6-0.4-1-1-1H6.9c-0.6,0-1,0.4-1,1v5.1"></path>
                                            <g>
                                                <line x1="4" y1="25.2" x2="4" y2="26.8"></line>
                                                <line x1="11.3" y1="25.2" x2="11.3" y2="26.8"></line>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--pool" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22.2"
                                        viewBox="0 0 22.2 22.1" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M0.5,19.9c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7">
                                            </path>
                                            <path d="M10.6,5.1V3.3c0-1.5-1.2-2.8-2.8-2.8S5.1,1.7,5.1,3.3V18"></path>
                                            <path d="M21.7,5.1V3.3c0-1.5-1.2-2.8-2.8-2.8s-2.8,1.2-2.8,2.8V18">
                                            </path>
                                            <line x1="5.1" y1="8.8" x2="16.1" y2="8.8"></line>
                                            <line x1="5.1" y1="14.3" x2="16.1" y2="14.3"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--hair-dryer" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22"
                                        viewBox="0 0 22 23" enable-background="new 0 0 22 23" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M20.5,3.5h-5C14.2,3.5,13,3,12,2.1c-1.5-1.3-3.6-1.9-5.8-1.5c-2.8,0.5-5,2.7-5.5,5.5c-0.9,4.5,2.5,8.4,6.9,8.4c1.7,0,3.2-0.6,4.4-1.6c1.1-0.9,2.4-1.4,3.8-1.4h4.8c0.6,0,1-0.4,1-1v-6C21.5,3.9,21.1,3.5,20.5,3.5z">
                                            </path>
                                            <path
                                                d="M10.5,13.8v7.7c0,0.5-0.5,1-1,1h-2c-0.6,0-1-0.4-1-1C6.4,18.1,5.9,16,4.8,14">
                                            </path>
                                            <circle cx="7.5" cy="7.5" r="3"></circle>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <a type="submit" class="main-btn ">Booking</a>

                            </div>

                        </div>
                    </div>
                    <div class="room-item">
                        <div class="img-room">
                            <img :src="roomsuite" alt="" class="img-fluid">
                        </div>
                        <div class="room-content row py-4">
                            <h4 class="fw-semibold">Classic room double</h4>
                            <p class="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quod
                                laboriosam quae
                                provident hic, modi nostrum ab molestias autem, temporibus dolorem perspiciatis
                                pariatur
                                explicabo? In fugit id adipisci consectetur possimus.</p>

                            <div class="amenities mb-3">
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--air-condition"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" width="24" viewBox="0 0 24 20" enable-background="new 0 0 24 20"
                                        xml:space="preserve">
                                        <g>
                                            <path
                                                d="M21.5,12.5h-19c-1.1,0-2-0.9-2-2v-9c0-0.6,0.4-1,1-1h21c0.6,0,1,0.4,1,1v9C23.5,11.6,22.6,12.5,21.5,12.5z">
                                            </path>
                                            <line x1="0.5" y1="6.5" x2="23.5" y2="6.5"></line>
                                            <path
                                                d="M18.5,9.5h-13c-0.6,0-1,0.4-1,1v2h15v-2C19.5,9.9,19.1,9.5,18.5,9.5z">
                                            </path>
                                            <path d="M17.5,15.5c0,2,2,4,4,4"></path>
                                            <path d="M6.5,15.5c0,2-2,4-4,4"></path>
                                            <circle cx="3.5" cy="3.5" r="0.5"></circle>
                                            <circle cx="5.5" cy="3.5" r="0.5"></circle>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--bath" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24"
                                        viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M16.5,21.5h-9c-3.3,0-6-2.7-6-6v-4h21v4C22.5,18.8,19.8,21.5,16.5,21.5z">
                                            </path>
                                            <line x1="0.5" y1="11.5" x2="23.5" y2="11.5"></line>
                                            <line x1="6.5" y1="21.5" x2="5.5" y2="23.5"></line>
                                            <line x1="17.5" y1="21.5" x2="18.5" y2="23.5"></line>
                                            <line x1="1.5" y1="4.5" x2="1.5" y2="11.5"></line>
                                            <path d="M1.5,4.5V3c0-1.4,1.1-2.5,2.5-2.5l0,0c1.4,0,2.5,1.1,2.5,2.5v0.5">
                                            </path>
                                            <line x1="5.5" y1="6.5" x2="5.5" y2="7.5"></line>
                                            <line x1="7.5" y1="8.5" x2="7.5" y2="9.5"></line>
                                            <line x1="7.5" y1="5.5" x2="7.5" y2="6.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--tv" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24"
                                        viewBox="0 0 24 19" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path
                                                    d="M22.5,15.5h-21c-0.6,0-1-0.4-1-1v-13c0-0.6,0.4-1,1-1h21c0.6,0,1,0.4,1,1v13C23.5,15.1,23.1,15.5,22.5,15.5z">
                                                </path>
                                                <polyline points="19.5,18.5 17.5,15.5 6.5,15.5 4.5,18.5"></polyline>
                                            </g>
                                            <line x1="4.5" y1="3.5" x2="2.5" y2="5.5"></line>
                                            <line x1="8.5" y1="3.5" x2="2.5" y2="9.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--map" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22.5"
                                        viewBox="0 0 22.5 22" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M0.5,1.9v14.9c0,0.4,0.2,0.7,0.5,0.9l6.5,3.5c0.3,0.1,0.6,0.1,0.9,0l5.7-3.5c0.3-0.2,0.6-0.2,0.9,0l5.7,3c0.6,0.3,1.4-0.2,1.4-0.9V4.2c0-0.4-0.2-0.8-0.6-0.9l-6.5-2.6c-0.2-0.1-0.5-0.1-0.7,0L8.3,3.3c-0.2,0.1-0.5,0.1-0.7,0L1.8,1C1.2,0.8,0.5,1.2,0.5,1.9z">
                                            </path>
                                            <line x1="8" y1="21.5" x2="8" y2="3.5"></line>
                                            <line x1="14.5" y1="17.5" x2="14.5" y2="0.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--luggage" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15.3"
                                        viewBox="0 0 15.3 27.3" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M11.8,25.2H3.5c-1.6,0-3-1.4-3-3V9.6c0-1.6,1.4-3,3-3h8.3c1.7,0,3,1.3,3,3v12.7C14.8,23.9,13.5,25.2,11.8,25.2z">
                                            </path>
                                            <path d="M0.5,13.3c0-1.6,1.4-3,3-3h8.3c1.7,0,3,1.4,3,3"></path>
                                            <path d="M9.4,6.6V1.5c0-0.6-0.4-1-1-1H6.9c-0.6,0-1,0.4-1,1v5.1"></path>
                                            <g>
                                                <line x1="4" y1="25.2" x2="4" y2="26.8"></line>
                                                <line x1="11.3" y1="25.2" x2="11.3" y2="26.8"></line>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--pool" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22.2"
                                        viewBox="0 0 22.2 22.1" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M0.5,19.9c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7">
                                            </path>
                                            <path d="M10.6,5.1V3.3c0-1.5-1.2-2.8-2.8-2.8S5.1,1.7,5.1,3.3V18"></path>
                                            <path d="M21.7,5.1V3.3c0-1.5-1.2-2.8-2.8-2.8s-2.8,1.2-2.8,2.8V18">
                                            </path>
                                            <line x1="5.1" y1="8.8" x2="16.1" y2="8.8"></line>
                                            <line x1="5.1" y1="14.3" x2="16.1" y2="14.3"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--hair-dryer" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22"
                                        viewBox="0 0 22 23" enable-background="new 0 0 22 23" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M20.5,3.5h-5C14.2,3.5,13,3,12,2.1c-1.5-1.3-3.6-1.9-5.8-1.5c-2.8,0.5-5,2.7-5.5,5.5c-0.9,4.5,2.5,8.4,6.9,8.4c1.7,0,3.2-0.6,4.4-1.6c1.1-0.9,2.4-1.4,3.8-1.4h4.8c0.6,0,1-0.4,1-1v-6C21.5,3.9,21.1,3.5,20.5,3.5z">
                                            </path>
                                            <path
                                                d="M10.5,13.8v7.7c0,0.5-0.5,1-1,1h-2c-0.6,0-1-0.4-1-1C6.4,18.1,5.9,16,4.8,14">
                                            </path>
                                            <circle cx="7.5" cy="7.5" r="3"></circle>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <a type="submit" class="main-btn ">Booking</a>

                            </div>

                        </div>
                    </div>
                    <div class="room-item">
                        <div class="img-room">
                            <img :src="room5" alt="" class="img-fluid">
                        </div>
                        <div class="room-content row py-4">
                            <h4 class="fw-semibold">Classic room double</h4>
                            <p class="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quod
                                laboriosam quae
                                provident hic, modi nostrum ab molestias autem, temporibus dolorem perspiciatis
                                pariatur
                                explicabo? In fugit id adipisci consectetur possimus.</p>

                            <div class="amenities mb-3">
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--air-condition"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" width="24" viewBox="0 0 24 20" enable-background="new 0 0 24 20"
                                        xml:space="preserve">
                                        <g>
                                            <path
                                                d="M21.5,12.5h-19c-1.1,0-2-0.9-2-2v-9c0-0.6,0.4-1,1-1h21c0.6,0,1,0.4,1,1v9C23.5,11.6,22.6,12.5,21.5,12.5z">
                                            </path>
                                            <line x1="0.5" y1="6.5" x2="23.5" y2="6.5"></line>
                                            <path
                                                d="M18.5,9.5h-13c-0.6,0-1,0.4-1,1v2h15v-2C19.5,9.9,19.1,9.5,18.5,9.5z">
                                            </path>
                                            <path d="M17.5,15.5c0,2,2,4,4,4"></path>
                                            <path d="M6.5,15.5c0,2-2,4-4,4"></path>
                                            <circle cx="3.5" cy="3.5" r="0.5"></circle>
                                            <circle cx="5.5" cy="3.5" r="0.5"></circle>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--bath" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24"
                                        viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M16.5,21.5h-9c-3.3,0-6-2.7-6-6v-4h21v4C22.5,18.8,19.8,21.5,16.5,21.5z">
                                            </path>
                                            <line x1="0.5" y1="11.5" x2="23.5" y2="11.5"></line>
                                            <line x1="6.5" y1="21.5" x2="5.5" y2="23.5"></line>
                                            <line x1="17.5" y1="21.5" x2="18.5" y2="23.5"></line>
                                            <line x1="1.5" y1="4.5" x2="1.5" y2="11.5"></line>
                                            <path d="M1.5,4.5V3c0-1.4,1.1-2.5,2.5-2.5l0,0c1.4,0,2.5,1.1,2.5,2.5v0.5">
                                            </path>
                                            <line x1="5.5" y1="6.5" x2="5.5" y2="7.5"></line>
                                            <line x1="7.5" y1="8.5" x2="7.5" y2="9.5"></line>
                                            <line x1="7.5" y1="5.5" x2="7.5" y2="6.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--tv" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24"
                                        viewBox="0 0 24 19" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path
                                                    d="M22.5,15.5h-21c-0.6,0-1-0.4-1-1v-13c0-0.6,0.4-1,1-1h21c0.6,0,1,0.4,1,1v13C23.5,15.1,23.1,15.5,22.5,15.5z">
                                                </path>
                                                <polyline points="19.5,18.5 17.5,15.5 6.5,15.5 4.5,18.5"></polyline>
                                            </g>
                                            <line x1="4.5" y1="3.5" x2="2.5" y2="5.5"></line>
                                            <line x1="8.5" y1="3.5" x2="2.5" y2="9.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--map" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22.5"
                                        viewBox="0 0 22.5 22" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M0.5,1.9v14.9c0,0.4,0.2,0.7,0.5,0.9l6.5,3.5c0.3,0.1,0.6,0.1,0.9,0l5.7-3.5c0.3-0.2,0.6-0.2,0.9,0l5.7,3c0.6,0.3,1.4-0.2,1.4-0.9V4.2c0-0.4-0.2-0.8-0.6-0.9l-6.5-2.6c-0.2-0.1-0.5-0.1-0.7,0L8.3,3.3c-0.2,0.1-0.5,0.1-0.7,0L1.8,1C1.2,0.8,0.5,1.2,0.5,1.9z">
                                            </path>
                                            <line x1="8" y1="21.5" x2="8" y2="3.5"></line>
                                            <line x1="14.5" y1="17.5" x2="14.5" y2="0.5"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--luggage" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15.3"
                                        viewBox="0 0 15.3 27.3" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M11.8,25.2H3.5c-1.6,0-3-1.4-3-3V9.6c0-1.6,1.4-3,3-3h8.3c1.7,0,3,1.3,3,3v12.7C14.8,23.9,13.5,25.2,11.8,25.2z">
                                            </path>
                                            <path d="M0.5,13.3c0-1.6,1.4-3,3-3h8.3c1.7,0,3,1.4,3,3"></path>
                                            <path d="M9.4,6.6V1.5c0-0.6-0.4-1-1-1H6.9c-0.6,0-1,0.4-1,1v5.1"></path>
                                            <g>
                                                <line x1="4" y1="25.2" x2="4" y2="26.8"></line>
                                                <line x1="11.3" y1="25.2" x2="11.3" y2="26.8"></line>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--pool" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22.2"
                                        viewBox="0 0 22.2 22.1" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M0.5,19.9c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7c1.8,0,1.8,1.7,3.5,1.7c1.8,0,1.8-1.7,3.5-1.7">
                                            </path>
                                            <path d="M10.6,5.1V3.3c0-1.5-1.2-2.8-2.8-2.8S5.1,1.7,5.1,3.3V18"></path>
                                            <path d="M21.7,5.1V3.3c0-1.5-1.2-2.8-2.8-2.8s-2.8,1.2-2.8,2.8V18">
                                            </path>
                                            <line x1="5.1" y1="8.8" x2="16.1" y2="8.8"></line>
                                            <line x1="5.1" y1="14.3" x2="16.1" y2="14.3"></line>
                                        </g>
                                    </svg>
                                </span>
                                <span class="me-4 svg-amenities">
                                    <svg class="qodef-ei-svg-icon qodef--hair-dryer" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22"
                                        viewBox="0 0 22 23" enable-background="new 0 0 22 23" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M20.5,3.5h-5C14.2,3.5,13,3,12,2.1c-1.5-1.3-3.6-1.9-5.8-1.5c-2.8,0.5-5,2.7-5.5,5.5c-0.9,4.5,2.5,8.4,6.9,8.4c1.7,0,3.2-0.6,4.4-1.6c1.1-0.9,2.4-1.4,3.8-1.4h4.8c0.6,0,1-0.4,1-1v-6C21.5,3.9,21.1,3.5,20.5,3.5z">
                                            </path>
                                            <path
                                                d="M10.5,13.8v7.7c0,0.5-0.5,1-1,1h-2c-0.6,0-1-0.4-1-1C6.4,18.1,5.9,16,4.8,14">
                                            </path>
                                            <circle cx="7.5" cy="7.5" r="3"></circle>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <a type="submit" class="main-btn">Booking</a>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 fixed-form">
                    <div class="form-wrapper py-5 rounded-4 bg-light">
                        <h3 class="mb-4 text-center">Your Reservation</h3>
                        <form class="px-5">
                            <div class="mb-3">
                                <label for="check-in" class="form-label fw-semibold">Check-in</label>
                                <input type="date" class="form-control" id="check-in" required>
                            </div>
                            <div class="mb-3">
                                <label for="check-out" class="form-label fw-semibold">Check-out</label>
                                <input type="date" class="form-control" id="check-out" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-semibold">Room</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3"> 3 </option>
                                </select>
                            </div>
                            <div class="row mb-3">
                                <div class="col-lg mb-6 mb-lg-0">
                                    <select class="form-select">
                                        <option selected>Adults</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                                <div class="col-lg mb-6 mb-lg-0">
                                    <select class="form-select">
                                        <option selected>Children</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <a type="submit" class="main-btn">Booking</a>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import roomclassic from '@/assets/images/room/classic-double.jpg'
import roomdeluxe from '@/assets/images/room/deluxe-white-wooden.jpg'
import roomsignature from '@/assets/images/room/signature-purple.jpg'
import roomsuite from '@/assets/images/room/rooms-slide-4.jpg'
import room5 from '@/assets/images/room/bedroom-1.jpg'

</script>
<style>
fixed-form {
    position: fixed;
}

.room-content .main-btn{
    width: auto;
}
</style>