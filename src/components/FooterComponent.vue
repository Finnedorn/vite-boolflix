<template>
    <div class="container-fluid bg-my-black">
        <div class="container pt-3">
            <div class="text-light fs-2 ms-4">
                <i class="fa-brands fa-facebook-f mx-2 "></i>
                <i class="fa-brands fa-instagram mx-2 "></i>
                <i class="fa-brands fa-x-twitter mx-2"></i>
                <i class="fa-brands fa-youtube mx-2 "></i>
            </div>
            <div class="d-flex flex-wrap py-3">
                <ul class="me-4">
                    <li v-for="(el, index) in footerArrA" :key="index" class="py-2">
                        <a href="#" class="text-my-grey">
                            {{ el }}
                        </a>
                    </li>
                </ul>
                <ul class="me-4">
                    <li v-for="(el, index) in footerArrB" :key="index" class="py-2">
                        <a href="#" class="text-my-grey">
                            {{ el }}
                        </a>
                    </li>
                </ul>
                <ul class="me-4">
                    <li v-for="(el, index) in footerArrC" :key="index" class="py-2">
                        <a href="#" class="text-my-grey">
                            {{ el }}
                        </a>
                    </li>
                </ul>
                <ul>
                    <li v-for="(el, index) in footerArrD" :key="index" class="py-2">
                        <a href="#" class="text-my-grey">
                            {{ el }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="text-my-grey ms-4 ">
                ©1997-2023  Net..ehm..Boolflix, Inc.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent',
        data() {
            return {
                footerArrA: ['Audiodescrizione', 'Rapporti con gli Investitori', 'Note legali', 'Preferenze per la pubblicità'],
                footerArrB: ['Centro assistenza', 'Opportunità di lavoro', 'Preferenze per i cookie'],
                footerArrC: ['Carte Regalo', 'Condizioni di utilizzo', 'Informazioni sull/azienda'],
                footerArrD: ['Media Center', 'Privacy', 'Contattaci']
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>