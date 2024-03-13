<template>
    <div class="col-2 mx-2 rounded-1">
        
    </div>
</template>

<script>
export default {
    name: "TopCardComponent",
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

        };
    },
    methods: {

    },
    mounted() {
    },
};
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as *;
</style>