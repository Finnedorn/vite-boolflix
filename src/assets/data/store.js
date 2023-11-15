import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        series:'search/tv'
    },
    params: {
        api_key: "b37015654ecd0d19e54fcb7d98e1fe00",
        query: 'star',
    },
    movieList: [],
    seriesList: []
})