import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        series:'search/tv'
    },
    params: {
        apiKey: '5bd8fff8cbbc90b57954ae54131f465f',
        query: 'a',
    },
    movieList: [],
    seriesList: []
})