<template>
  <div v-if="loading">

  </div>
  <div v-else>
    <HeaderComponent @movie-searcher="getSearchedMovies"/>
    <MainComponent/>
  </div>
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
        store,
        loading: true
      } 
    },
    methods: {
      getMovies() {
        this.store.movieList= [];
        const movieUrl= store.apiUrl + this.store.endPoint.movie;
        return axios.get(movieUrl, {params: this.store.params});
      },

      getSeries() {
        this.store.seriesList= [];
        const seriesUrl= store.apiUrl + this.store.endPoint.series;
        return axios.get(seriesUrl, {params: this.store.params});
      },

      // getMoviesandSeries() {
      //   this.store.movieList = [];
      //   this.store.seriesList =[];
      //   const movieUrl= store.apiUrl + this.store.endPoint.movie;
      //   axios.get(movieUrl, {params: this.store.params}).then((resp) => {
      //   this.store.movieList = resp.data.results;
      //   console.log(this.store.movieList);
      //   })

      //   const seriesUrl= store.apiUrl + this.store.endPoint.series;
      //   axios.get(seriesUrl, {params: this.store.params}).then((resp) => {
      //   this.store.seriesList = resp.data.results;
      //   console.log(this.store.seriesList);
      //   })
      // },

      getSearchedMovies(search) {
        console.log(search);
        if(search) {
          this.store.params.query = search;
          this.getMoviesandSeries();
        } else {
          this.store.params.query = 'a';
        }
      },

      loadingScreen() {
        setTimeout(() => {
          this.loading = false;
        },5000);
      }
    },
    created() {

      // this.getMoviesandSeries()

      Promise.all([this.getMovies(), this.getSeries()]).then(function(resp) {
        store.movieList = resp[0].data.results;
        store.seriesList = resp[1].data.results;
      }).catch((error)=> {
        console.log(error)
        this.store.error = true;
      })
    },
    mounted() {
      this.loadingScreen();
    }
  }
</script>

<style lang="scss" scoped>
template {
  width: 100%;
  height: 100vh;
}
</style>
