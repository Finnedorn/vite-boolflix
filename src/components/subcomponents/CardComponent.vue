<template>
    <div class="col-2 ms-1 py-1">
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
            <h5 class=" fw-light ">
                {{ language }}
            </h5>
            <div class=" fs-6 fw-light">
                {{ vote / 2 }}
            </div>
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
                
            }
        },
        // methods: {
        //     getStars() {
        //         for(let i = 0; i < parseInt(this.vote); i++) {
        //             this.$refs.starsInput.append(<i class="fa-solid fa-star"></i>)
        //         }
        //     }
        // }
        
    }
</script>

<style lang="scss" scoped>
</style>