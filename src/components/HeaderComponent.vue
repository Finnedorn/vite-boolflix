<template>
    <div class=" container-fluid bg-my-black g-0">
        <div class="g-0 position-relative header-wrapper">
            <div class=" position-absolute logo-wrapper">
                <div class="px-5 d-flex justify-content-between align-items-center py-3">
                    <div class="d-flex">
                        <div class="logo">
                            <img src="../../public/images/Boolflix-16-11-2023.png" alt="boolflix-logo-png">
                        </div>
                        <ul class=" list-unstyled d-flex pt-2">
                            <li v-for="(el,index) in navbarArr" :key="index"><a href="#" class=" text-decoration-none text-light ms-4 ">{{el}}</a></li>
                        </ul>
                    </div>
                    <div class="input-group mb-3 w-25 pt-2">
                        <input type="text" class="form-control" placeholder="Film, serietv..." v-model="filterSearch">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="$emit('movieSearcher', filterSearch)">Cerca</button>
                    </div>
                </div>
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
                    'Serie Tv',
                    'Film', 
                    'Nuovi e popolari'
                ]
            }
        }
    }
</script>
  
<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
.video-wrapper {
    width: 100%;
    -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));

}

video {
    width: 100%;
    height: 100%;
}

.header-wrapper {
    height: 800px;
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
</style>