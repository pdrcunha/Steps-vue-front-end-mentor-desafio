<template>
    <div class="container-inputs">

        <div class="info">
            <h2>Personal Info </h2>
            <p>Please provide your name,email and phone number.</p>
        </div>
        <div class="inputs">
            <InputText />
            <InputEmail />
            <InputPhone />
        </div>
        <div class="error">
            <div v-show="form.errors.erroName">You must fill in your name</div>
            <div v-show="form.errors.erroEmail">You must fill in your email</div>
            <div v-show="form.errors.erroPhone">You must fill in your phone</div>
        </div>


        <div class="container-footer">
            <ButtonMy name="Next Step" @click="$emit('nextContainer', 'Container2');" />
        </div>

    </div>
</template>

<script setup>

import ButtonMy from './ButtonMy.vue';
import InputEmail from './Inputs/InputEmail.vue';
import InputPhone from './Inputs/InputPhone.vue';
import InputText from './Inputs/InputText.vue';
import { inject } from 'vue';

const form = inject('form');

</script>

<style lang="scss" scoped>
.container-inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    padding: 32px 60px;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
        font-size: 2rem;
    }

    p {
        opacity: 0.7;
    }
}

.inputs {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.error {
    font-size: 0.9rem;
    color: rgb(220, 90, 90);
    opacity: 0.7;
}

.container-footer {
    align-self: flex-end;
}
</style>