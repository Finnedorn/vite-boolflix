<template>
    <div class="start-screen-wrapper bg-my-black">
        <h1 class="text-light text-center">
            Who's watching Net..ehm..Boolflix?
        </h1>
        <div class="d-flex flex-wrap  text-center justify-content-center pt-5">
            <div class="me-5">
                <div class="avatar-wrapper" @click="$emit('avatarButton')">
                    <img src="../../assets/images/bb3a8833850498.56ba69ac33f26.png" alt="profile_1_logo_png">
                </div>
                <h2 class="avatar-text">Finn</h2>
            </div>
            <div class="me-5">
                <div class="avatar-wrapper" @click="$emit('avatarButton')">
                    <img src="../../assets/images/Netflix-avatar.png" alt="profile_2_logo_png">
                </div>
                <h2 class="avatar-text">Dave</h2>
            </div>
            <div>
                <div class="plus-wrapper d-flex justify-content-center align-items-center ">
                    <i class="fa-solid fa-circle-plus"></i>
                </div>
                <h2 class="avatar-text">New Profile</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartScreenComponent',
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
    padding-top: 300px;
}

.avatar-wrapper {
    border-radius: 5px;
    width: 250px;
    height: 250px;
    overflow: hidden;
}

.avatar-text {
    font-size: 2.5rem;
    color: grey;
    padding-top: 15px;
}

.plus-wrapper {
    color: grey;
    border-radius: 5px;
    width: 250px;
    height: 250px;
    font-size: 6rem;
}

.avatar-wrapper:hover {
    border: 5px solid rgba(230, 230, 230, 0.933);
    transition: all 0.5s;
}

.plus-wrapper:hover {
    background-color: rgba(230, 230, 230, 0.933);
    transition: all 0.5s;
}

@media screen and (max-width: 992px) {
    .start-screen-wrapper {
        height: 100vh;
        padding-top: 150px;
    }

    .avatar-wrapper {
        border-radius: 5px;
        width: 150px;
        height: 150px;
        overflow: hidden;
    }

    .plus-wrapper {
        color: grey;
        border-radius: 5px;
        width: 150px;
        height: 150px;
        font-size: 6rem;
    }

    .avatar-text {
        font-size: 2rem;
        color: grey;
        padding-top: 15px;
    }
}

@media screen and (max-width: 430px) {
    .start-screen-wrapper {
        height: 100vh;
        padding-top: 100px;
    }

    h1 {
        font-size: 2.5rem;
    }

    .avatar-wrapper {
        border-radius: 5px;
        width: 80px;
        height: 80px;
        overflow: hidden;
    }

    .plus-wrapper {
        color: grey;
        border-radius: 5px;
        width: 80px;
        height: 80px;
        font-size: 3rem;
    }

    .avatar-text {
        font-size: 1rem;
        color: grey;
        padding-top: 15px;
    }
}

</style>