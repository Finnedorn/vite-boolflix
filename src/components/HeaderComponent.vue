<template>
    <div class=" container-fluid bg-dark">
        <div class="py-4 ps-4 d-flex container align-items-center  justify-content-between ">
            <h1 class="text-light">
                Boolflix
            </h1>
            <div class="input-group mb-3 w-25 ">
                <input type="text" class="form-control" placeholder="Film, serietv..." v-model="filterSearch">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="$emit('movieSearcher', filterSearch)">Cerca</button>
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
                filterSearch: ''
            }
        }
    }
</script>
  
<style lang="scss" scoped>
  
</style>