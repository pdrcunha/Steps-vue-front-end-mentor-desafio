<template>
    <div class="container-inputs">

        <div class="info">
            <h2>Pick add-ons</h2>
            <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <div class="inputs">
            <label class="container-card" :class="{ 'checked': addOns.some(addOn => addOn.nomeAddOn === 'service') }">
                <input type="checkbox" :checked="addOns.some(addOn => addOn.nomeAddOn === 'service')"  value="service" @change="pushValue">
                <input type="number" value="1" class="moneyValue" style="display: none;" />
                <div class="texts">
                    <p class="titulo">Online service</p>
                    <p class="price">Access to mutiplayer games</p>
                </div>
                <p class="month-free">+1/mo</p>
            </label>
            <label class="container-card" :class="{ 'checked': addOns.some(addOn => addOn.nomeAddOn === 'large') }">
                <input type="checkbox" :checked="addOns.some(addOn => addOn.nomeAddOn === 'large')" value="large" @change="pushValue">
                <input type="number" value="2" class="moneyValue" style="display: none;" />
                <div class="texts">
                    <p class="titulo">Large storage</p>
                    <p class="price">Extra 1TB of cloud save</p>
                </div>
                <p class="month-free">+2/mo</p>
            </label>
            <label class="container-card" :class="{ 'checked': addOns.some(addOn => addOn.nomeAddOn === 'custom_prof') }">
                <input type="checkbox" :checked="addOns.some(addOn => addOn.nomeAddOn === 'custom_prof')" value="custom_prof" @change="pushValue">
                <input type="number" value="2" class="moneyValue" style="display: none;" />
                <div class="texts">
                    <p class="titulo">Customizable Profile</p>
                    <p class="price">Custom theme on your profile</p>
                </div>
                <p class="month-free">+2/mo</p>
            </label>
        </div>

        <div class="container-footer">
            <ButtonMy name="Go Back" noBorder="true" @click="$emit('backContainer', 'Container2')" />
            <ButtonMy name="Next Step" @click="$emit('nextContainer', 'Container4')" />
        </div>
    </div>
</template>

<script setup>
import ButtonMy from './ButtonMy.vue';
import { ref,inject } from 'vue';

const form = inject('form');

const addOns = form.value.addOns;

function pushValue(event) {
    const index = addOns.indexOf(event.target.value);
    const inputValor = event.target.nextElementSibling;

    if (event.target.checked) addOns.push({ nomeAddOn: event.target.value, price: inputValor.value });
    if (!event.target.checked) addOns.splice(index, 1);
    
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
    justify-content: space-between;

    gap: 16px;

    .container-card {
        display: flex;
        justify-content: space-between;
        padding: 8px 16px;
        align-items: center;
        border: 1px solid black;
        border-radius: 8px;

        height: 45px;

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