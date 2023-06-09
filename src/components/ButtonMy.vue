<template>
    <button :class="noBorder?'no-border':''">{{this.name}}</button>
</template>

<script>
export default {
    name:'ButtonMy',
    props:["name",'noBorder']
}
</script>

<style lang="scss" scoped>
button{
    color: #fff;
    background-color: rgb(6, 14, 107);
    border-radius: 12px;
    border: none;
    font-weight: bold;
    padding: 12px 24px;
    cursor: pointer;
}
.no-border{
    background-color: transparent;
    border: none;
    color: #767676;
}
</style>