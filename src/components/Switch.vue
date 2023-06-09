<template>
	<input type="checkbox" id="switch" v-model="initState" /><label for="switch"
		@click="emitirTrocaEstado"></label>
</template>

<script>
export default {
	name: "Switch",
	data() {
		return {
			initState: true
		}
	},
	emits: ['trocarEstado'],
	methods: {
		emitirTrocaEstado() {
			this.$emit('trocarEstado', this.initState)
		}
	}
}
</script>

<style lang="scss" scoped>
input {
	display: none;
}

input[type=checkbox] {
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 50px;
	height: 25px;
	background: grey;
	display: block;
	border-radius: 50px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	top: 5px;
	left: 5px;
	width: 15px;
	height: 15px;
	background: #fff;
	border-radius: 15px;
	transition: 0.3s;
}

input:checked+label {
	background: #555eda;
}

input:checked+label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

label:active:after {
	width: 20px;
}
</style>