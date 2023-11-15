<template>
  <HeaderComponent @movie-searcher="getSearchedMovies"/>
  <MainComponent/>
</template>

<script>
  import {store} from './assets/data/store.js';
  import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getMoviesandSeries() {
        this.store.movieList = [];
        this.store.seriesList =[];
        const movieUrl= store.apiUrl + this.store.endPoint.movie;
        axios.get(movieUrl, {params: this.store.params}).then((resp) => {
        this.store.movieList = resp.data.results;
        console.log(this.store.movieList);
        })

        const seriesUrl= store.apiUrl + this.store.endPoint.series;
        axios.get(seriesUrl, {params: this.store.params}).then((resp) => {
        this.store.seriesList = resp.data.results;
        console.log(this.store.seriesList);
        })
      },
      getSearchedMovies(search) {
        console.log(search);
        if(search) {
          this.store.params.query = search;
          this.getMoviesandSeries();
        } else {
          this.store.params.query = 'a';
        }
      }
      
    },
    created() {
      this.getMoviesandSeries()
    }
  }
</script>

<style lang="scss" scoped>

</style>
