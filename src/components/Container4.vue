<template>
    <div class="container-inputs">

        <div class="info">
            <h2>Finishing up</h2>
            <p>Double-check everythinf look OK before confirming</p>
        </div>

        <div class="addOns">
            <div class="master">
                <div class="text">
                    <p>{{!form.plan.type ? "Not selected plan" : form.plan.type}}</p>
                    <a href="#" @click="$emit('backContainer2','Container2')" class="link-change">Change</a>
                </div>
                <div class="valor">${{form.plan.price}}/mo</div>
            </div>

            <div class="addOnUnic" v-for="addOns in form.addOns" :key="addOns">
                <div class="text">
                    <p>{{addOns.nomeAddOn}}</p>
                </div>
                <div class="valor">${{addOns.price}}/mo</div>
            </div>

        </div>

        <div class="totalMonth">
            <div class="text">Total(per month)</div>
            <div class="value">+ ${{form.total}}/mo</div>
        </div>

        <div class="container-footer">
            <ButtonMy name="Go Back" noBorder="true"   @click="$emit('backContainer','Container2')"/>
            <ButtonMy name="Concluir" @click="$emit('concluir','Container5')"/>
        </div>
    </div>
</template>
 
<script setup>
import ButtonMy from './ButtonMy.vue';
import { ref,inject } from 'vue';

const form = inject('form');
(function calcTotal() {
    form.value.total = 0;
  form.value.total += form.value.plan.price;
  form.value.addOns.forEach((addOn)=>{
    form.value.total += parseInt(addOn.price);
  })
})();
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

.addOns {
    background-color: rgba(120, 120, 157, 0.077);
    border-radius: 10px;
    padding: 8px 24px;
}

.master,.addOnUnic,.totalMonth{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    opacity: 0.7;
}
.master{
    border-bottom: 1px solid rgba(0, 0, 0, 0.27);
    padding: 24px 0px;
    opacity: 1;
    .text{
        display: flex;
        flex-direction: column;
        gap: 8px;
        p{
            font-size: 1.2rem;
            font-weight: bold;
        }
    }
    .valor{
        font-weight: bold;
        font-size: 1.2rem;
    }
}
.totalMonth{
    padding: 8px 32px;
    .value{
        font-weight: bold;
        font-size: 1.2rem;
        color: rgb(0, 0, 173)
    }
}

.container-footer {
    display: flex;
    justify-content: space-between;
}

.checked {
    border: 1px solid rgb(13, 32, 174);
    background-color: rgba(72, 72, 132, 0.077);
}</style>