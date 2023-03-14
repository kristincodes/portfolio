<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true
	},
	tags: {
		type: Array,
		required: true
	},
	href: {
		type: String,
		default: '#'
	},
	dev: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<div class="portfolio-item">
		<slot />
		<div class="info">
			<div class="tags">
				<span class="tag" v-for="tag in tags">{{ tag }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.portfolio-item {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0;

	:deep(img) {
		width: 100%;
		position: relative;
		left: 0;
		grid-column: 1 / 3;
		grid-row: 1 / 2;
		transition: left 0.5s ease-in-out;

	}

	&:hover {
		:deep(img) {
			left: 50%;
		}
	}

	.info {
		padding: 1rem;
		background: $black;
		color: $white;

		grid-column: 1 / 2;
		grid-row: 1 / 2;

		.tags {
			.tag {
				&:not(:last-child) {
					&:after {
						content: ", "
					}
				}
			}
		}
	}
}
</style>