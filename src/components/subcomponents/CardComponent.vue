<template>
    <div class="col-2 card-wrapper">
        <div>
            <img :src="'http://image.tmdb.org/t/p/w342'+ source" :alt="title">
        </div>
        <div class=" text-center py-3 text-light">
            <h4 class=" text-my-red fs-5 ">
                {{ title }}
            </h4>
            <h5 class=" fw-light ">
                {{ subtitle }}
            </h5>
            <p>
                <img :src="getFlag" :alt="language + 'flag'" class="flag">
            </p>
            <p>
                <i v-for="n in 5" :key="n" class="fa-star" :class="(n <= getStars)? 'fa-solid' : 'fa-regular'"></i>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            source: String,
            title: String,
            subtitle: String,
            language: String,
            vote: Number 
        },
        data() {
            return {
                flags: [
                    'ca',
                    'de',
                    'es',
                    'fr',
                    'gb',
                    'it',
                    'ja',
                    'kr',
                    'us'
                ]
            }
        },
        computed: {
            getFlag() {
                let flag = `/public/images/${this.language}.svg`;
                if (!this.flags.includes(this.language)) {
                    flag= '/public/images/imagemissing_92832.png';
                }
                return flag;
            },
            getStars() {
                return Math.ceil(this.vote / 2);
            }
        }
    }
</script>

<style lang="scss" scoped>
img.flag {
    width: 30px;
}

.card-wrapper:hover {
    transform: translateY(-1rem);
    transition: all 0.3s;
}



</style>