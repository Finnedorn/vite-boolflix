<template>
    <div class="col-2 card-wrapper position-relative overflow-hidden mx-2 rounded-1">
        <h5 class="title-wrapper position-absolute">
            {{ title }}
        </h5>
        <div>
            <img :src="(source)? 'http://image.tmdb.org/t/p/w342' + source : '../../images/watch-movie-missing.png'"
                :alt="title" />
        </div>
        <div class="playing-bar m-auto mt-3">
            <div class="progress-bar" ref="myDiv" :style="{ width: `${getRngWidth()}px`}"></div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "TicketComponent",
    props: {
        source: String,
        title: String,
        subtitle: String,
        language: String,
        vote: Number,
        plot: String,
    },
    data() {
        return {
            flags: ["ca", "de", "es", "fr", "gb", "it", "ja", "kr", "us"],
        };
    },
    methods: {
        getRngWidth() {
            const randomWidth = Math.floor(Math.random() * 250 + 10);
            return randomWidth
        },
    },
    mounted() {
        this.getRngWidth()
    },
};
</script>
  
<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as *;

.title-wrapper {
    color: white;
    background-color: rgba(62, 62, 62, 0.719);
    padding: 15px;
    border-radius: 5px 0px 0px 5px;
    right: 0;
    bottom: 35px;
}
img.flag {
    width: 30px;
}

div>img {
    width: 100%;
}

.card-wrapper {
    width: 400px;

}

.card-wrapper:hover {
    transform: translateY(-1rem);
    transition: all 0.3s;
}


.playing-bar {
    width: 300px;
    height: 5px;
    background-color: #5b5b5b;
}

.progress-bar {
    height: 5px;
    background-color: $netflix-red;
}

</style>