<template>
    <div class="py-3 ps-4 d-flex bg-dark ">
        <div class="">
            Boolflix
        </div>
        
    </div>
</template>
  
<script>
    import {store} from '../assets/data/store.js'
    export default {
        name:'HeaderComponent',
        data() {
            return {
                store
            }
        }
    }
</script>
  
<style lang="scss" scoped>
  
</style>