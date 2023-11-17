<template>
    <div class=" no-bar p-0 overflow-hidden d-flex justify-content-center  ">
        <video src="/images/Netflix_New_Logo_Animation_2019.mp4" autoplay></video>
    </div>
</template>

<script>
    export default {
        name: 'LoadingComponent',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
div{
    height: 100vh;
    background-color: black;
}

video {
    height: 100%;
}

</style>