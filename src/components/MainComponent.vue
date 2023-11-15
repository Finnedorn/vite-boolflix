<template>
    <main>
        <!--cards-->
        <div>
            <div class="container-fluid p-5">
                <div class="container py-5 rounded-4">
                    <div class="row justify-content-center">
                        <h1 class=" py-2 ">
                            Movies
                        </h1>
                        <CardComponent v-for="(info,index) in store.movieList" :key="index" :title="info.title" :subtitle="info.original_title" :language="info.original_language" :vote="info.vote_average"/>
                    </div>
                    <div class="row justify-content-center">
                        <h1 class=" py-2 ">
                            Tv Series
                        </h1>
                        <CardComponent v-for="(info,index) in store.seriesList" :key="index" :title="info.name" :subtitle="info.original_name" :language="info.original_language" :vote="info.vote_average"/>
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
    import CardComponent from './subcomponents/CardComponent.vue';
    import {store} from '../assets/data/store.js';
    export default {
        name:'MainComponent',
        components: {
            CardComponent,
        },
        data() {
            return {
                store
            }
            
        },
        methods: {

        }
    }
</script>
  
<style lang="scss" scoped>
  
</style>