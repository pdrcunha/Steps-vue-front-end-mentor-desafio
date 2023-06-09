<template>
    <div class="container-step">
        <div class="step" :class="checked ? 'checked' : ''">{{ this.number }}</div>
        <div class="titulo-info">
            <div class="titulo">STEP {{ this.number }}</div>
            <div class="info">{{ this.titulo }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Steps",
    props: ['titulo', 'number', 'checked']
}
</script>

<style lang="scss" scoped>
.container-step {
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: transparent;
    cursor: pointer;

    .step {
        border-radius: 50%;
        color: #ffff;
        padding: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: 1px solid rgb(197, 242, 227);
    }

    .checked {
        color: black;
        background-color: rgb(197, 242, 227);
    }

    .titulo-info {
        color: #ffff;

        .titulo {
            opacity: 0.5;

            @media only screen and (max-width: 768px) {
                display: none;
            }
        }

        .info {
            font-weight: bold;
            @media only screen and (max-width: 768px) {
                display: none;
            }
        }
    }
}</style>