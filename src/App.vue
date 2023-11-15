<template>
  <HeaderComponent/>
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
        const movieUrl= store.apiUrl + this.store.endPoint.movie;
        axios.get(movieUrl, {params: this.store.params}).then((resp) => {
        console.log(resp.data.results);
        this.store.movieList = resp.data.results;
        console.log(this.store.movieList[0]);
        });

        const seriesUrl= store.apiUrl + this.store.endPoint.series;
        axios.get(seriesUrl, {params: this.store.params}).then((resp) => {
        console.log(resp.data.results);
        this.store.seriesList = resp.data.results;
        console.log(this.store.seriesList[0]);
        })
      }
    },
    created() {
      this.getMoviesandSeries()
    }
  }
</script>

<style lang="scss" scoped>

</style>
