<template>
    <div class="aloc-input">
        <div class="label">Phone Number</div>
        <input type="text" placeholder="e.g +1 234 567 890" required v-model="form.persona.phone">
    </div>
</template>

<script setup>
import { ref,inject } from 'vue'

const form = inject('form');

</script>

<style lang="scss" scoped>
.aloc-input{
    display: flex;
    flex-direction: column;

    font-size: 0.95rem;
    input{
        padding: 8px 16px;
        border: 1px solid black;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
    }
}
.error{
    display: flex;
   justify-content: end;
   color: rgb(215, 49, 49);
   font-style: italic;
}
</style>