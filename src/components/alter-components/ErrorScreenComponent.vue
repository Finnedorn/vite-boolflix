<template>
    <div class="start-screen-wrapper bg-my-black">
        <h1 class="text-light text-center">
            Something's not right, API where are u?
        </h1>
        <div class="d-flex flex-wrap  text-center justify-content-center pt-5">
            <div class="me-5">
                <div class="avatar-wrapper">
                    <img src="../../assets/images/Netflix-avatar-8.png" alt="profile_error_logo_png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ErrorScreenComponent',
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
h1 {
    font-size: 4rem;
}
.start-screen-wrapper {
    height: 100vh;
    padding-top: 300px
};

.avatar-wrapper {
    border-radius: 5px;
    width: 250px;
    height: 250px;
    overflow: hidden;
}
</style>