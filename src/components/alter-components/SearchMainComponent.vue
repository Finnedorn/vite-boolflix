<template>
    <main>
        <div>
            <div class="container-fluid p-2 bg-my-black main-wrapper">
                <div class="container-fluid g-0">
                    <!--movies-->
                    <div v-if="store.movieList.length > 1" class="position-relative">
                        <h1 class="pt-4 text-light ms-5">
                            Movies results for {{ this.store.params.query }}
                        </h1>
                        <div @click="scrollLft('movieAlbum')" class="arrow-wrapper position-absolute arrow-right-pos text-center">
                            <i class="fa-solid fa-chevron-right text-light arrow-scroll"></i>
                        </div>
                        <div @click="scrollRgt('movieAlbum')"
                            class="arrow-wrapper position-absolute arrow-left-pos text-center">
                            <i class="fa-solid fa-chevron-left text-light arrow-scroll"></i>
                        </div>
                        <div class="d-flex justify-content-center py-4 overflow-x-auto text-light album-wrapper no-bar"
                            ref="movieAlbum">
                            <CardComponent v-for="(info, index) in store.movieList" :key="index" :source="info.poster_path"
                                :title="info.title" :subtitle="info.original_title" :language="info.original_language"
                                :vote="info.vote_average" :plot="info.overview" 
                            />
                        </div>
                    </div>
                    <!--movies-else-->
                    <div v-else>
                        <h3 class="bg-my-black text-light p-4">
                            We've found no result for your research
                        </h3>
                    </div>
                    <!--series-->
                    <div v-if="store.seriesList.length > 1" class="position-relative">
                        <h1 class="py-4 text-light ms-5">
                            Tv Series results for {{ this.store.params.query }}
                        </h1>
                        <div @click="scrollLft('seriesAlbum')"
                            class=" arrow-wrapper position-absolute arrow-right-pos text-center">
                            <i class="fa-solid fa-chevron-right text-light arrow-scroll"></i>
                        </div>
                        <div @click="scrollRgt('seriesAlbum')"
                            class=" arrow-wrapper position-absolute arrow-left-pos text-center">
                            <i class="fa-solid fa-chevron-left text-light arrow-scroll"></i>
                        </div>
                        <div class="d-flex justify-content-center overflow-x-auto text-light album-wrapper"
                            ref="seriesAlbum">
                            <CardComponent v-for="(info, index) in store.seriesList" :key="index" :source="info.poster_path"
                                :title="info.name" :subtitle="info.original_name" :language="info.original_language"
                                :vote="info.vote_average" :plot="info.overview" />
                        </div>
                    </div>
                    <!--series-else-->
                    <div v-else>
                        <h3 class="bg-my-black text-light p-4">
                            We've found no result for your research
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
import CardComponent from "../subcomponents/CardComponent.vue";
import TicketComponent from "../subcomponents/TicketComponent.vue";
import { store } from "../../assets/data/store.js";
export default {
    name: "SearchMainComponent",
    components: {
        CardComponent,
        TicketComponent,
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        scrollLft(el) {
            this.$refs[el].scrollBy({
                left: 800,
                behavior: "smooth"
            });
        },
        scrollRgt(el) {
            this.$refs[el].scrollBy({
                left: -800,
                behavior: "smooth"
            });
        }
    },
};
</script>
  
<style lang="scss" scoped>

.main-wrapper {
    padding: 50px 0px !important;
}
.arrow-wrapper {
    border-radius: 5px;
    opacity: 0.9;
    width: 80px;
    background-color: rgba(4, 4, 4, 0.763);
    padding: 120px 0px;
}

.arrow-right-pos {
    top: 125px;
    right: 10px;
    z-index: 1100;
}

.arrow-left-pos {
    top: 125px;
    left: 10px;
    z-index: 1100;
}

.arrow-wrapper-watch {
    border-radius: 5px;
    opacity: 0.9;
    width: 80px;
    background-color: rgba(4, 4, 4, 0.763);
    padding: 60px 0px;
}

.arrow-right-watch-pos {
    top: 115px;
    right: 10px;
    z-index: 1100;
}

.arrow-left-watch-pos {
    top: 115px;
    left: 10px;
    z-index: 1100;
}


.arrow-scroll {
    font-size: 5rem;
}

</style>