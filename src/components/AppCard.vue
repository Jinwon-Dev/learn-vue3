<template>
	<div className="card">
		<div className="card-body">
			<h5 className="card-title red">Card title</h5>
			<p className="card-text">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" className="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";

console.log("AppCard Module");
export default {
	setup() {
		console.log("AppCard setup()");
		const color = ref("red");
		color.value = "blue";
		return { color };
	},
};
</script>

<style>
.red {
	color: v-bind(color) !important;
}
</style>
