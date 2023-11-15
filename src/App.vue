<template>
  <HeaderComponent/>
</template>

<script>
  import {store} from './assets/data/store.js';
  import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
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
        });

        // const seriesUrl= store.apiUrl + this.store.endPoint.series;
        // axios.get(seriesUrl, {params: this.store.params}).then((resp) => {
        // console.log(resp.data.results);
        // this.store.seriesList = resp.data.results;
        // })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
