<template>
  <main>
    <!--cards-->
    <div>
      <div class="container-fluid p-2 bg-my-black main-wrapper">
        <div class="container-fluid g-0">
          <h1 class="pt-4 text-light ms-5">Movies</h1>
          <div class="d-flex justify-content-center py-4 overflow-x-auto text-light" ref="album">
                <CardComponent
                v-if="store.movieList.length > 1"
                v-for="(info, index) in store.movieList"
                :key="index"
                :source="info.poster_path"
                :title="info.title"
                :subtitle="info.original_title"
                :language="info.original_language"
                :vote="info.vote_average"
                :plot="info.overview"
                />
                <div v-else>
                <h3 class="bg-my-black text-light p-4">
                    Nessun risultato trovato per la tua ricerca
                </h3>
                </div>
          </div>
          <h1 class="py-4 text-light ms-5">Tv Series</h1>
          <div class="d-flex justify-content-center overflow-x-auto">
                <CardComponent
                v-if="store.seriesList.length > 1"
                v-for="(info, index) in store.seriesList"
                :key="index"
                :source="info.poster_path"
                :title="info.name"
                :subtitle="info.original_name"
                :language="info.original_language"
                :vote="info.vote_average"
                :plot="info.overview"
                />
                <div v-else>
                    <h3 class="bg-my-black text-light p-4">
                        Nessun risultato trovato per la tua ricerca
                    </h3>
                </div>
          </div>
          <i class="fa-solid fa-chevron-right text-light fs-1" @click="scrollLft"></i>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CardComponent from "./subcomponents/CardComponent.vue";
import { store } from "../assets/data/store.js";
export default {
  name: "MainComponent",
  components: {
    CardComponent,
  },
  data() {
    return {
      store,
      distance: 200,
    };
  },
  methods: {
        scrollLft() {
            this.$refs.album.scrollBy({
            left: 200,
            behavior: "smooth",
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  z-index: 1000;
}
</style>
