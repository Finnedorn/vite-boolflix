<template>
  <main>
    <!--cards-->
    <div>
      <div class="container-fluid p-2 bg-my-black main-wrapper">
        <div class="container-fluid g-0">
          <!--Continue-->
          <div class="position-relative">
            <h1 class="pt-4 text-light ms-5">
              Continue Watching
            </h1>
            <div @click="scrollLft('watchingAlbum')" class=" arrow-wrapper-watch position-absolute arrow-right-watch-pos text-center">
              <i class="fa-solid fa-chevron-right text-light arrow-scroll"></i>
            </div>
            <div @click="scrollRgt('watchingAlbum')" class=" arrow-wrapper-watch position-absolute arrow-left-watch-pos text-center">
              <i class="fa-solid fa-chevron-left text-light arrow-scroll"></i>
            </div>
            <div class="d-flex justify-content-center py-4 overflow-x-auto text-light album-wrapper no-bar" ref="watchingAlbum">
              <TicketComponent
              v-for="(info, index) in store.nowPlayingList"
              :key="index"
              :source="info.backdrop_path"
              :title="info.title"
              />
            </div>
          </div>
          <!--movies-->
          <div class="position-relative">
            <h1 class="pt-4 text-light ms-5">
              Movies
            </h1>
            <div @click="scrollLft('movieAlbum')" class=" arrow-wrapper position-absolute arrow-right-pos text-center">
              <i class="fa-solid fa-chevron-right text-light arrow-scroll"></i>
            </div>
            <div @click="scrollRgt('movieAlbum')" class=" arrow-wrapper position-absolute arrow-left-pos text-center">
              <i class="fa-solid fa-chevron-left text-light arrow-scroll"></i>
            </div>
            
            <div class="d-flex justify-content-center py-4 overflow-x-auto text-light album-wrapper no-bar" ref="movieAlbum">
              <TopCardComponent
              
              />

              <CardComponent
              v-for="(info, index) in store.movieList"
              :key="index"
              :source="info.poster_path"
              :title="info.title"
              :subtitle="info.original_title"
              :language="info.original_language"
              :vote="info.vote_average"
              :plot="info.overview"
              />
            </div>
          </div>
          <!--movies-->
          <div class="position-relative">
            <h1 class="pt-4 text-light ms-5">
              Movies
            </h1>
            <div @click="scrollLft('movieAlbum')" class=" arrow-wrapper position-absolute arrow-right-pos text-center">
              <i class="fa-solid fa-chevron-right text-light arrow-scroll"></i>
            </div>
            <div @click="scrollRgt('movieAlbum')" class=" arrow-wrapper position-absolute arrow-left-pos text-center">
              <i class="fa-solid fa-chevron-left text-light arrow-scroll"></i>
            </div>
            <div class="d-flex justify-content-center py-4 overflow-x-auto text-light album-wrapper no-bar" ref="movieAlbum">
              <CardComponent
              v-for="(info, index) in store.movieList"
              :key="index"
              :source="info.poster_path"
              :title="info.title"
              :subtitle="info.original_title"
              :language="info.original_language"
              :vote="info.vote_average"
              :plot="info.overview"
              />
            </div>
          </div>
          <!--top rated-->
          <div class="position-relative">
            <h1 class="pt-4 text-light ms-5">
              Top Rated this week
            </h1>
            <div @click="scrollLft('topAlbum')" class=" arrow-wrapper position-absolute arrow-right-pos text-center">
              <i class="fa-solid fa-chevron-right text-light arrow-scroll"></i>
            </div>
            <div @click="scrollRgt('topAlbum')" class=" arrow-wrapper position-absolute arrow-left-pos text-center">
              <i class="fa-solid fa-chevron-left text-light arrow-scroll"></i>
            </div>
            <div class="d-flex justify-content-center py-4 overflow-x-auto text-light album-wrapper no-bar" ref="topAlbum">
              <CardComponent
              v-for="(info, index) in store.topRatedList"
              :key="index"
              :source="info.poster_path"
              :title="info.title"
              :subtitle="info.original_title"
              :language="info.original_language"
              :vote="info.vote_average"
              :plot="info.overview"
              />
            </div>
          </div>
          <!--series-->
          <div class="position-relative">
            <h1 class="py-4 text-light ms-5">
              Tv Series
            </h1>
            <div @click="scrollLft('seriesAlbum')" class=" arrow-wrapper position-absolute arrow-right-pos text-center">
              <i class="fa-solid fa-chevron-right text-light arrow-scroll"></i>
            </div>
            <div @click="scrollRgt('seriesAlbum')" class=" arrow-wrapper position-absolute arrow-left-pos text-center">
              <i class="fa-solid fa-chevron-left text-light arrow-scroll"></i>
            </div>
            <div class="d-flex justify-content-center overflow-x-auto text-light album-wrapper" ref="seriesAlbum">
              <CardComponent
              v-for="(info, index) in store.seriesList"
              :key="index"
              :source="info.poster_path"
              :title="info.name"
              :subtitle="info.original_name"
              :language="info.original_language"
              :vote="info.vote_average"
              :plot="info.overview"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TopCardComponent from "./subcomponents/TopCardComponent.vue";
import CardComponent from "./subcomponents/CardComponent.vue";
import TicketComponent from "./subcomponents/TicketComponent.vue";
import { store } from "../assets/data/store.js";
export default {
  name: "MainComponent",
  components: {
    CardComponent,
    TicketComponent,
    TopCardComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    scrollLft(el) {
      this.$refs[el].scrollBy({
        left: 900,
        behavior: "smooth"
      });
    },
    scrollRgt(el) {
      this.$refs[el].scrollBy({
        left: -900,
        behavior:"smooth"
      });
    }
  },
};
</script>

<style lang="scss" scoped>

.arrow-wrapper {
  border-radius: 5px;
  opacity: 0.9;
  width: 80px;
  background-color: rgba(4, 4, 4, 0.763);
  padding: 120px 0px;
}

.arrow-right-pos {
  top: 125px;
  right:10px;
  z-index:1100;
}

.arrow-left-pos {
  top: 125px;
  left:10px;
  z-index:1100;
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
  right:10px;
  z-index:1100;
}

.arrow-left-watch-pos {
  top: 115px;
  left:10px;
  z-index:1100;
}

.arrow-scroll {
  font-size: 5rem;
}
.main-wrapper {
  z-index: 1000;
}

.topweek-wrapper {
  height: 500px;
}

.top-card {
  z-index: 1000;
}
</style>
