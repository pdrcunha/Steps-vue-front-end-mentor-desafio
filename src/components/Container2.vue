<template>
    <div class="container-inputs">

        <div class="info">
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly biling</p>
        </div>
        <div class="inputs">
            <label class="container-card" :class="{ 'checked': form.plan.type == 'Arcade' }">
                <div class="icon">
                    <img class="img-arcade" src="../assets/images/game-console-svgrepo-com.svg" alt="game-stick">
                </div>
                <div class="texts">
                    <p class="titulo">Arcade</p>
                    <p class="price">${{ estadoBoll ? prices.arcade.year : prices.arcade.mes }}/yr</p>
                    <p class="month-free" v-if="estadoBoll">2 months free</p>
                </div>

                <input type="radio" style="display: none;" value="Arcade"
                    @input="updatePlan('Arcade', estadoBoll ? prices.arcade.year : prices.arcade.mes)">
            </label>
            <label class="container-card" :class="{ 'checked': form.plan.type == 'Advanced' }">
                <div class="icon">
                    <img class="img-arcade" src="../assets/images/game-controller-794-svgrepo-com.svg" alt="game-stick"
                        style="background-color: burlywood;">
                </div>
                <div class="texts">
                    <p class="titulo">Advanced</p>
                    <p class="price">${{ estadoBoll ? prices.advanced.year : prices.advanced.mes }}/yr</p>
                    <p class="month-free" v-if="estadoBoll">2 months free</p>
                </div>

                <input type="radio" style="display: none;" value="Advanced"
                    @input="updatePlan('Advanced', estadoBoll ? prices.advanced.year : prices.advanced.mes)">
            </label>
            <label class="container-card" :class="{ 'checked': form.plan.type == 'Pro' }">
                <div class="icon">
                    <img class="img-arcade" src="../assets/images/game-svgrepo-com.svg" alt="game-stick"
                        style="background-color: blueviolet;">
                </div>
                <div class="texts" for="pro">
                    <p class="titulo">Pro</p>
                    <p class="price">${{ estadoBoll ? prices.pro.year : prices.pro.mes }}/yr</p>
                    <p class="month-free" v-if="estadoBoll">2 months free</p>
                </div>

                <input type="radio" style="display: none;" value="Pro"
                    @input="updatePlan('Pro', estadoBoll ? prices.pro.year : prices.pro.mes)">
            </label>
        </div>

        <div class="container-input">
            <label for="">Monthly</label>
            <Switch @trocarEstado="trocarAno" />
            <label for="">Year</label>
        </div>

        <div class="container-footer">
            <ButtonMy name="Go Back" noBorder="true" @click="$emit('backContainer', 'Container1')" />
            <ButtonMy name="Next Step" @click="$emit('nextContainer', 'Container3')" />
        </div>
    </div>
</template>

<script setup>
import ButtonMy from './ButtonMy.vue';
import Switch from './Switch.vue';
import { ref, inject } from 'vue';

const form = inject('form');
const estadoBoll = ref(true);
const prices = ref({
    arcade: { mes: 9, year: 90 },
    advanced: { mes: 12, year: 120 },
    pro: { mes: 15, year: 150 },
});

function trocarAno(estado) {
    estadoBoll.value = !estado;
    form.value.plan.time = estadoBoll.value ? "year" : "month";
    form.value.plan.price = estadoBoll.value ? form.value.plan.price : form.value.plan.price / 10;
}
function updatePlan(plan, price) {
    form.value.plan.price = form.value.plan.time = 'year' ? price / 12 : price;
    form.value.plan.type = plan;
}


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
.error {
    font-size: 0.9rem;
    color: rgb(220, 90, 90);
    opacity: 0.7;
}
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
    justify-content: space-between;

    .container-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 8px 16px;
        border: 1px solid black;
        border-radius: 8px;
        width: 90px;
        height: 150px;
        cursor: pointer;

        .img-arcade {
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3px;
            background-color: aquamarine;
            width: 30px;
        }

        .price {
            color: rgb(88, 88, 88);
            opacity: 0.7;
        }

        @media only screen and (max-width: 768px) {
            flex-direction: row;
            padding: 8px 16px;
            border: 1px solid black;
            border-radius: 8px;
            width: 80%;
            gap: 16px;
            height: auto;
            cursor: pointer;
            align-content: center;
            justify-content: flex-start;
            align-items: center;
        
        }

    }
    @media only screen and (max-width: 768px) {
           display: flex;
           flex-direction: column;
           gap: 4px;
           align-items: center;
        }
}

.container-footer {
    display: flex;
    justify-content: space-between;
}

.checked {
    border: 1px solid rgb(13, 32, 174);
    background-color: rgba(72, 72, 132, 0.077);
}
</style>