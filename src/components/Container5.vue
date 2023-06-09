<template>
    <div class="container-inputs">

        <div class="info" v-show="
            form.persona.name &&
            form.persona.email &&
            form.persona.phone &&
            form.plan.type
            ">
            <img src="../assets/images/icon-thank-you.svg" alt="">
            <h2>Thank you!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur, sem quis tempor pulvinar, ante
                libero vehicula dolor, quis vestibulum velit mi et urna. Suspendisse in urna congue, euismod libero sit
                amet, placerat est. Proin placerat, ante facilisis aliquam varius, urna lacus blandit dolor,</p>
            <p>DATA:</p>
            <p>Check Log</p>
        </div>

        <div class="error">
            <div v-show="form.errors.erroName">You must fill in your name</div>
            <div v-show="form.errors.erroEmail">You must fill in your email</div>
            <div v-show="form.errors.erroPhone">You must fill in your phone</div>
            <div v-show="form.errors.erroType">Select the plan!</div>
        </div>

    </div>
</template>
 
<script setup>
import ButtonMy from './ButtonMy.vue';
import { ref, inject } from 'vue';

const form = inject('form');
console.log(form.value);
</script>

<style lang="scss" scoped>
.container-input {
    display: flex;

    align-items: center;
    justify-content: center;
    gap: 8px;

    label {
        font-size: 0.9rem;
        color: rgb(88, 88, 88);
        opacity: 0.7;

    }
}


.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 100%;

    h2 {
        font-size: 2rem;
    }

    p {
        opacity: 0.7;
        text-align: center;
        padding: 0 48px;
    }
}
</style>