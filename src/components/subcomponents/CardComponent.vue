<template>
    <div class="col-2 ms-1 py-1">
        <!-- <div>
            <img :src="img" :alt="title">
        </div> -->
        <div class=" text-center py-3 ">
            <h4 class=" fs-5 ">
                {{ title }}
            </h4>
            <h5 class=" fw-light ">
                {{ subtitle }}
            </h5>
            <h5 class=" fw-light ">
                {{ language }}
            </h5>
            <h5 class=" fs-6 fw-light ">
                {{ vote }}
            </h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            title: String,
            subtitle: String,
            language: String,
            vote: Number
        },
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>