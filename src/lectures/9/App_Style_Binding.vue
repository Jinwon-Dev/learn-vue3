<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
			facilis iste mollitia non, perferendis provident? Animi consectetur
			cupiditate, eius eligendi esse ex facilis molestiae non odit officiis,
			sint suscipit voluptatum.
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, ref } from "vue";

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: "red",
		// 	fontSize: "13px",
		// });
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: "red",
				fontSize: fontSize.value + "px",
			};
		});
		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
