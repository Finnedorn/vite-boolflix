<template>
    <div class=" container-fluid bg-my-black g-0">
        <div class="g-0 position-relative header-wrapper">
            <div class=" position-absolute logo-wrapper">
                <div class="px-5 d-flex justify-content-between align-items-center py-3">
                    <div class="d-flex">
                        <div class="logo">
                            <img src="../assets/images/Boolflix-16-11-2023.png" alt="boolflix-logo-png">
                        </div>
                        <ul class="pt-2 d-none d-lg-flex">
                            <li v-for="(el,index) in navbarArr" :key="index"><a href="#" class=" text-decoration-none text-light ms-4 ">{{el}}</a></li>
                        </ul>
                    </div>
                    <div class="input-group mb-3 w-25 pt-2">
                        <input type="text" class="form-control" placeholder="Film, serietv..." v-model="filterSearch">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="$emit('movieSearcher', filterSearch)">Search</button>
                    </div>
                </div>
            </div>
            <div class="position-absolute main-serie-wrapper ">
                <div class="d-flex text-light align-items-center ps-5">
                    <div class="net-logo-wrapper">
                        <img src="../assets/images/Netflix-N-Symbol-logo-red-transparent-RGB-png-e1684581799529.png" alt="netflix.logo">
                    </div>
                    <h4 class="ms-2">
                        SERIE
                    </h4>
                </div>
                <div class="serie-logo-wrapper">
                    <img src="../assets/images/AAAABU1-JRbb0a_bBhPJeiAAGzO4WD7ZOmd0OvHlIhU8ybxBzHxmwuC2qQF4mVAGzQi0ulXc-Q0k_P4KykHJ73o_pcGdAEydHX-Y9VErmh-rvRLj.png" alt="avatar.logo">
                </div>
                <p class=" w-50 text-light pt-3 fs-5">
                    A century has passed since the Fire Nation declared war on the other three nations of air, water and earth. The only hope lies in the Avatar intervention...
                </p>
                <button type="button" class="btn btn-light fs-4 px-4 me-3 button-lg">
                    <i class="fa-solid fa-play me-2 "></i>
                    Play  
                </button>
                <button type="button" class="btn fs-4 px-4 info-btn text-light ">
                    <i class="fa-solid fa-circle-info me-2 fs-3"></i>
                    Infos
                </button>
            </div>
            <div class="video-wrapper position-absolute ">
                <video src="../../public/images/Avatar_ The Last Airbender _ Official Teaser _ Netflix.mp4" autoplay muted loop></video>
            </div>
        </div>
    </div>
</template>
  
<script>
    import {store} from '../assets/data/store.js'
    export default {
        name:'HeaderComponent',
        data() {
            return {
                store,
                filterSearch: '',
                navbarArr: [
                    'Home',
                    'Tv Series',
                    'Movies', 
                    'Newest and Popular'
                ]
            }
        }
    }
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
.video-wrapper {
    position: relative;
    top: -20px;
    height: 800px;
    width: 100%;
    -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

video {
    width: 100%;
}

.header-wrapper {
    height: 700px;
}

.logo-wrapper {
    width: 100%;
    height: 100px;
    z-index: 2;
}

.logo>img {
    width: 150px;
}

.btn-outline-secondary {
    --bs-btn-border-color: none;
    --bs-btn-active-color: none;
    --bs-btn-active-bg: none;
    background-color: $netflix-red;
    color: white;
}

.main-serie-wrapper {
top: 270px;
left: 50px;
z-index: 1200;
}
.net-logo-wrapper {
    width: 20px;
}

.serie-logo-wrapper {
    width: 400px;
}

.btn-light {
    background-color: rgba(255, 255, 255, 0.761);
    border: none;
    &:hover {
        background-color: rgb(255, 255, 255);
        transition: all 0.3s;
    }
}

.info-btn {
background-color: rgba(128, 128, 128, 0.466);
    &:hover {
        background-color: rgba(199, 199, 199, 0.466);
        transition: all 0.3s;
    }
}
</style>