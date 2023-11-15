<template>
    <main>
        <!--cards-->
        <div>
            <div class="container-fluid p-2 bg-my-light-brown">
                <div class="container">
                    <div class="row justify-content-center">
                        <h1 class=" py-4 text-light ms-3">
                            Movies
                        </h1>
                        <CardComponent v-if="store.movieList.length > 1" v-for="(info,index) in store.movieList" :key="index" :source="info.poster_path" :title="info.title" :subtitle="info.original_title" :language="info.original_language" :vote="info.vote_average"/>
                        <div v-else>
                            <h3 class="bg-my-black text-light p-4 ">
                                Nessun risultato trovato per la tua ricerca
                            </h3>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <h1 class=" py-4 text-light ms-3 ">
                            Tv Series
                        </h1>
                        <CardComponent v-if="store.seriesList.length > 1" v-for="(info,index) in store.seriesList" :key="index" :source="info.poster_path" :title="info.name" :subtitle="info.original_name" :language="info.original_language" :vote="info.vote_average"/>
                        <div v-else>
                            <h3 class="bg-my-black text-light p-4 ">
                                Nessun risultato trovato per la tua ricerca
                            </h3>
                        </div>
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
            CardComponent
        },
        data() {
            return {
                store
            }
        }
    }
</script>
  
<style lang="scss" scoped>
  
</style>