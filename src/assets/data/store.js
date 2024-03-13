import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        series:'search/tv'
    },
    params: {
        api_key: "b37015654ecd0d19e54fcb7d98e1fe00",
        query: 'a',
    },
    nowPlayingEndPoint: 'movie/now_playing',
    nowPlayingParams: {
        api_key: "b37015654ecd0d19e54fcb7d98e1fe00",
        query: 'language=en-US&page=1'
    },
    topRatedEndPoint: 'movie/top_rated',
    topRatedParams: {
        api_key: "b37015654ecd0d19e54fcb7d98e1fe00",
        query: 'language=en-US&page=1'
    },
    topRatedList: [],
    nowPlayingList: [],
    movieList: [],
    seriesList: [],
    error: false,
    topTen: [
        "../assets/images/1.png",
        "../assets/images/2.png",
        "../assets/images/3.png",
        "../assets/images/4.png",
        "../assets/images/5.png",
        "../assets/images/6.png",
        "../assets/images/7.png",
        "../assets/images/8.png",
        "../assets/images/9.png",
        "../assets/images/10.png",
    ]
})