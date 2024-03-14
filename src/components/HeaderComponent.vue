<template>
    <div class=" container-fluid bg-my-black g-0 overflow-hidden">
        <div class="g-0 position-relative header-wrapper overflow-hidden">
            <div class=" position-absolute logo-wrapper">
                <div class="container-fluid nav-shadow"></div>
                <div class="px-5 d-flex justify-content-between align-items-center py-3">
                    <div class="d-flex">
                        <div class="logo">
                            <img src="../assets/images/Boolflix-16-11-2023.png" alt="boolflix-logo-png">
                        </div>
                        <ul class="pt-2 d-none d-lg-flex">
                            <li v-for="(el, index) in navbarArr" :key="index"><a id="nav-names" href="#"
                                    class=" nav-voice text-decoration-none text-light ms-4"
                                    @click="$emit('navClick', el)">{{ el }}</a></li>
                        </ul>
                    </div>
                    <div class="input-group mb-3 w-25 pt-2">
                        <input type="text" class="form-control" placeholder="Film, serietv..." v-model="filterSearch">
                        <button class="btn btn-outline-secondary btn-search" type="button" id="button-addon2"
                            @click="$emit('movieSearcher', filterSearch)">Search</button>
                    </div>
                </div>
            </div>
            <div class="position-absolute main-serie-wrapper ">
                <div class="d-flex text-light align-items-center ps-5">
                    <div class="net-logo-wrapper">
                        <img src="../assets/images/Netflix-N-Symbol-logo-red-transparent-RGB-png-e1684581799529.png"
                            alt="netflix.logo">
                    </div>
                    <h4 class="ms-2">
                        SERIE
                    </h4>
                </div>
                <div class="serie-logo-wrapper mb-md-4">
                    <img src="../assets/images/AAAABU1-JRbb0a_bBhPJeiAAGzO4WD7ZOmd0OvHlIhU8ybxBzHxmwuC2qQF4mVAGzQi0ulXc-Q0k_P4KykHJ73o_pcGdAEydHX-Y9VErmh-rvRLj.png"
                        alt="avatar.logo">
                </div>
                <p class=" w-50 text-light pt-3 fs-5 d-none d-lg-block">
                    A century has passed since the Fire Nation declared war on the other three nations of air, water and
                    earth. The only hope lies in the Avatar intervention...
                </p>
                <button type="button" class="btn btn-light fs-4 px-4 me-3 button-lg ms-md-5">
                    <i class="fa-solid fa-play me-2 "></i>
                    Play
                </button>
                <button type="button" class="btn fs-4 px-4 info-btn text-light ">
                    <i class="fa-solid fa-circle-info me-2 fs-3"></i>
                    Infos
                </button>
            </div>
            <div class="position-absolute settings-wrapper d-flex align-items-center d-none d-md-flex ">
                <div class="mute-btn-wrapper d-flex justify-content-center me-3">
                    <button id="mute-btn" class="btn p-2 rounded-5" @click=volumeOn()>
                        <i id="mute-icon" class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
                <div class="pegi-wrapper p-2">
                    16+
                </div>
            </div>
            <div class="video-wrapper position-absolute ">
                <video id="myVideo" src="../../public/images/Avatar_ The Last Airbender _ Official Teaser _ Netflix.mp4"
                    autoplay muted loop></video>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store.js'
export default {
    name: 'HeaderComponent',
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
    },
    methods: {
        volumeOn() {
            let volBtn = document.getElementById('mute-btn');

            volBtn.addEventListener('click', () => {
                let video = document.getElementById('myVideo');
                let icon = document.getElementById('mute-icon');
                video.muted = !video.muted
                if (video.muted) {
                    icon.classList.remove('fa-volume-xmark');
                    icon.classList.add('fa-volume-high');
                    video.setAttribute('muted', '');
                } else {
                    icon.classList.remove('fa-volume-high');
                    icon.classList.add('fa-volume-xmark');
                    video.removeAttribute('muted', '');
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

input {
    &:focus {
        box-shadow: $netflix-red !important;
    }
}

.nav-voice {
    &:hover {
        color: rgb(144, 144, 144) !important;
        transition: all 0.3s;
    }
}

.btn-search {
    &:hover {
        background-color: #ff4141 !important;
    }
}

#mute-icon {
    padding-top: 2px;
    font-size: 1.4rem;
    color: white;
}

.pegi-wrapper {
    color: white;
    font-size: 1.5rem;
    border-left: 3px solid white;
    background-color: rgba(79, 79, 79, 0.321);
    width: 150px;
}

.nav-shadow {
    height: 100px;
    width: 100%;
    -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    background-color: rgba(0, 0, 0, 0.781);
    position: absolute;
    z-index: -1;
}

.settings-wrapper {
    position: absolute;
    bottom: 50px;
    right: 0px;
    z-index: 1000;
}

.mute-btn-wrapper {
    width: 60px;
    height: 60px;
    border: 2px solid rgba(255, 255, 255, 0.485);
    border-radius: 50%;
    z-index: 1000;
}

.video-wrapper {
    position: relative;
    top: -210px;
    height: 1000px;
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

@media screen and (max-width: 992px) {

    .input-group {
        width: 30% !important;
    }

    .header-wrapper {
        height: 700px;
    }

    .main-serie-wrapper {
        top: 350px;
        left: 50px;
        z-index: 1200;
    }

    .settings-wrapper {
        right: -40px;
        bottom: 90px;
    }

    .video-wrapper {
        width: 100%;
        height: 900px;
        top: -90px;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    video {
        width: 2800px;
    }

}
</style>