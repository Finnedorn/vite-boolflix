<template>
  <main>
    <!--cards-->
    <div>
      <div class="container-fluid p-2 bg-my-black main-wrapper">
        <div class="container-fluid g-0">
          <!--Continue-->
          <div class="position-relative my-md-3 ">
            <h1 class="pt-4 text-light ms-5 mb-md-4">
              Continue Watching
            </h1>
            <div @click="scrollLft('watchingAlbum')"
              class=" arrow-wrapper-watch position-absolute arrow-right-watch-pos text-center">
              <i class="fa-solid fa-chevron-right text-light arrow-scroll"></i>
            </div>
            <div @click="scrollRgt('watchingAlbum')"
              class=" arrow-wrapper-watch position-absolute arrow-left-watch-pos text-center">
              <i class="fa-solid fa-chevron-left text-light arrow-scroll"></i>
            </div>
            <div class="d-flex justify-content-center py-4 overflow-x-auto text-light album-wrapper no-bar"
              ref="watchingAlbum">
              <TicketComponent v-for="(info, index) in store.nowPlayingList" :key="index" :source="info.backdrop_path"
                :title="info.title" />
            </div>
          </div>
          <!--top rated-->
          <div class="position-relative d-none d-md-block ">
            <h1 class="pt-4 text-light ms-5">
              Top Rated Movies This Week
            </h1>
            <div @click="scrollLft('movieAlbum')" class=" arrow-wrapper position-absolute arrow-right-pos-ten text-center">
              <i class="fa-solid fa-chevron-right text-light arrow-scroll"></i>
            </div>
            <div @click="scrollRgt('movieAlbum')" class=" arrow-wrapper position-absolute arrow-left-pos-ten text-center">
              <i class="fa-solid fa-chevron-left text-light arrow-scroll"></i>
            </div>
            <div id="topTen-cards"
              class="d-flex justify-content-center py-4 overflow-x-auto text-light album-wrapper no-bar"
              ref="movieAlbum">
              <div v-for="(info, index) in store.movieList.slice(0, 7)" :key="index" class="position-relative">
                <CardComponent class="card-component-wrapper" :source="info.poster_path" :title="info.title"
                  :subtitle="info.original_title" :language="info.original_language" :vote="info.vote_average"
                  :plot="info.overview" />
                <div class="number-wrapper">
                  <div class="ms-4 ms-sm-0 ">
                    <img :src="store.topTen[index]" alt="title">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--movies-->
          <div class="position-relative">
            <h1 class="pt-4 text-light ms-5">
              Movies
            </h1>
            <div @click="scrollLft('topAlbum')" class=" arrow-wrapper position-absolute arrow-right-pos text-center">
              <i class="fa-solid fa-chevron-right text-light arrow-scroll"></i>
            </div>
            <div @click="scrollRgt('topAlbum')" class=" arrow-wrapper position-absolute arrow-left-pos text-center">
              <i class="fa-solid fa-chevron-left text-light arrow-scroll"></i>
            </div>
            <div class="d-flex justify-content-center py-4 overflow-x-auto text-light album-wrapper no-bar"
              ref="topAlbum">

              <CardComponent class="me-2" v-for="(info, index) in store.topRatedList" :key="index"
                :source="info.poster_path" :title="info.title" :subtitle="info.original_title"
                :language="info.original_language" :vote="info.vote_average" :plot="info.overview" />
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
              <CardComponent class="me-2" v-for="(info, index) in store.seriesList" :key="index"
                :source="info.poster_path" :title="info.name" :subtitle="info.original_name"
                :language="info.original_language" :vote="info.vote_average" :plot="info.overview" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CardComponent from "./subcomponents/CardComponent.vue";
import TicketComponent from "./subcomponents/TicketComponent.vue";
import { store } from "../assets/data/store.js";
export default {
  name: "MainComponent",
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
        left: 900,
        behavior: "smooth"
      });
    },
    scrollRgt(el) {
      this.$refs[el].scrollBy({
        left: -900,
        behavior: "smooth"
      });
    },
    scrollTopTen() {
      const topTenScroll = document.getElementById("topTen-cards");
      topTenScroll.scrollTo({
        top: 0,
        right: -1000,
        behavior: "smooth"
      });

    }
  },
  mounted() {
    this.scrollTopTen();
  }
};
</script>

<style lang="scss" scoped>
.card-component-wrapper {
  width: 180px;
  height: 250px;
  margin-left: 140px;
  margin-top: 120px;
  position: relative;
  top: -60px;
  right: -60px;
  z-index: 5;
}

.number-wrapper {
  position: absolute;
  top: 30px;
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

.arrow-right-pos-ten {
  top: 125px;
  right: 10px;
  z-index: 1100;
}

.arrow-left-pos-ten {
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
  top: 130px;
  right: 10px;
  z-index: 1100;
}

.arrow-left-watch-pos {
  top: 130px;
  left: 10px;
  z-index: 1100;
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

@media screen and (max-width: 992px) {

  .arrow-wrapper-watch {
    border-radius: 5px;
    opacity: 0.9;
    width: 80px;
    background-color: rgba(4, 4, 4, 0.763);
    padding: 60px 0px;
  }

  .arrow-right-watch-pos {
    top: 95px;
    right: 10px;
    z-index: 1100;
  }

  .arrow-left-watch-pos {
    top: 95px;
    left: 10px;
    z-index: 1100;
  }



}

@media screen and (max-width: 480px) {
  .main-wrapper {
    top: -2px;
  }

  h1 {
    font-size: 1.2rem;
    position: relative;
    left: -30px;
  }

  .arrow-wrapper-watch {
    border-radius: 5px;
    opacity: 0.9;
    width: 50px;
    background-color: rgba(4, 4, 4, 0.763);
    padding: 30px 0px;
  }

  .arrow-right-watch-pos {
    top: 78px;
    right: 10px;
    z-index: 1100;
  }

  .arrow-left-watch-pos {
    top: 78px;
    left: 10px;
    z-index: 1100;
  }

  .arrow-scroll {
    font-size: 3.5rem;
  }

  .card-component-wrapper {
    width: 130px;
    height: 180px;
    margin-left: 130px;
    margin-top: 120px;
    position: relative;
    top: -60px;
    right: -20px;
    z-index: 5;
  }

  .arrow-wrapper {
    border-radius: 5px;
    opacity: 0.9;
    width: 50px;
    background-color: rgba(4, 4, 4, 0.763);
    padding: 30px 0px;
  }

  .arrow-right-pos-ten {
    top: 170px;
    right: 10px;
    z-index: 1100;
  }

  .arrow-left-pos-ten {
    top: 170px;
    left: 10px;
    z-index: 1100;
  }

  .arrow-right-pos {
    top: 115px;
    right: 10px;
    z-index: 1100;
  }

  .arrow-left-pos {
    top: 115px;
    left: 10px;
    z-index: 1100;
  }

}
</style>
