<template>
  <div v-if="store.error === true">
    <ErrorScreenComponent/>
  </div>
  <div v-else>
    <div v-if="start">
      <StartScreenComponent @avatar-button="avatarChosen"/>
    </div>
    <div v-else>
      <div v-if="loading">
        <LoadingComponent/>
      </div>
      <div v-else>
        <div v-if="store.params.query === 'a'">
          <HeaderComponent @movie-searcher="getSearchedMovies" @nav-click="loadAllMovies" />
          <MainComponent/>
        </div>
        <div v-else>
          <SearchHeaderComponent @movie-searcher="getSearchedMovies" @nav-click="loadAllMovies"/>
          <SearchMainComponent/>
        </div>
        <FooterComponent/>
      </div>
    </div>
  </div>
</template>

<script>
  import {store} from './assets/data/store.js';
  import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  import LoadingComponent from './components/subcomponents/LoadingComponent.vue';
  import StartScreenComponent from './components/subcomponents/StartScreenComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  import SearchHeaderComponent from './components/alter-components/SearchHeaderComponent.vue';
  import SearchMainComponent from './components/alter-components/SearchMainComponent.vue';
  import ErrorScreenComponent from './components/alter-components/ErrorScreenComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent,
      LoadingComponent,
      StartScreenComponent,
      SearchHeaderComponent,
      SearchMainComponent,
      ErrorScreenComponent
    },
    data() {
      return {
        store,
        loading: true,
        start:true
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
      getNowPlaying() {
        const nowPlayingUrl = store.apiUrl + this.store.nowPlayingEndPoint;
        return axios.get(nowPlayingUrl, {params: this.store.nowPlayingParams});
      },
      getTopRated() {
        const topRatedUrl = store.apiUrl + this.store.topRatedEndPoint;
        return axios.get(topRatedUrl, {params: this.store.topRatedParams}); 
      },
      loadAll() {
        Promise.all([this.getMovies(), this.getSeries(), this.getNowPlaying(), this.getTopRated()]).then(function(resp) {
          store.movieList = resp[0].data.results;
          store.seriesList = resp[1].data.results;
          store.nowPlayingList = resp[2].data.results;
          store.topRatedList = resp[3].data.results;
        }).catch((error)=> {
          console.log(error)
          this.store.error = true;
        })
      },
      getSearchedMovies(search) {
        console.log(search);
        if(search) {
          this.store.params.query = search;
          this.loadAll();
        } else {
          this.store.params.query = 'a';
        }
      },
      loadAllMovies() {
        this.store.params.query = 'a';
        console.log('ciao');
      },
      avatarChosen() {
        this.start = false;
        setTimeout(() => {
          this.loading = false;
        },5000);
      }
    },
    created() {
      this.loadAll();
    }
  }
</script>

<style lang="scss" scoped>
template {
  width: 100%;
  height: 100vh;
}
</style>
