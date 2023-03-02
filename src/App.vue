<template>
	<div>
		<TheNav></TheNav>
		<TheView></TheView>
	</div>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
import TheView from "@/components/TheView.vue";

export default {
	components: { TheView, TheNav },

	setup() {
		return { TheNav, TheView };
	},
};
</script>

<style scoped></style>
