<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button" @click="sayHello">
			My Button
		</button>
	</div>
</template>

<script>
export default {
	// inheritAttrs: false,
	emits: ["click"],
	setup(props, { emit }) {
		// console.log("context.attrs: ", context.attrs);
		// console.log("context.class: ", context.attrs.class);
		// console.log("context.id: ", context.attrs.id);
		// console.log("context.onClick: ", context.attrs.onClick);
		const sayHello = () => {
			emit("click");
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
