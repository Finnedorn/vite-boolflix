<template>
    <div class=" container-fluid bg-my-black g-0">
        <div class="g-0  header-wrapper">
            <div class="logo-wrapper">
                <div class="px-5 d-flex justify-content-between align-items-center py-3">
                    <div class="d-flex">
                        <div class="logo">
                            <img src="../../assets/images/Boolflix-16-11-2023.png" alt="boolflix-logo-png">
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
        </div>
    </div>
</template>
  
<script>
    import {store} from '../../assets/data/store'
    export default {
        name:'SearchHeaderComponent',
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
@use '../../assets/style/partials/variables' as *;


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