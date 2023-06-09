<template>
    <div class="aloc-input">
        <div class="label">Name</div>
        <input type="text" class="" placeholder="e.g Stephen King" required v-model="form.persona.name">
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