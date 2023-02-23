<template>
	<div>
		<h2>Author가 책을 갖고 있나요?</h2>
		<!-- <p>{{ teacher.lectures.length > 0 ? '예' : '아니오' }}</p> -->
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<button v-on:click="counter++">counter: {{ counter }}</button>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, reactive, ref } from "vue";

export default {
	setup() {
		const teacher = reactive({
			name: "짐코딩",
			lectures: ["HTML/CSS", "JavaScript", "Vue3"],
		});

		const hasLecture = computed(() => {
			console.log("computed");
			return teacher.lectures.length ? "있음 🙂" : "없음 🥲";
		});

		const existLecture = () => {
			console.log("method");
			return teacher.lectures.length ? "있음 🙂" : "없음 🥲";
		};

		const counter = ref(0);

		console.log("Console 출력: ", hasLecture.value);

		const firstName = ref("홍");
		const lastName = ref("길동");

		const fullName = computed({
			get() {
				return firstName.value + " " + lastName.value;
			},
			set(value) {
				console.log("value: ", value);
				[firstName.value, lastName.value] = value.split(" ");
			},
		});

		fullName.value = "짐 코딩";

		return { teacher, hasLecture, existLecture, counter, fullName };
	},
};
</script>

<style lang="scss" scoped></style>
