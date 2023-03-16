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
	desc: {
		type: String,
		required: true
	},
	href: {
		type: String,
		default: '#'
	},
	open: {
		type: Boolean,
		default: false
	},
	dev: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<div class="portfolio-item">
		<div class="image-wrap" :class="{ open }">
			<slot />
		</div>
		<div class="info">
			<div class="tags">
				<span class="tag" v-for="tag in tags">{{ tag }}</span>
			</div>
			<div class="description">
				{{ desc }}
			</div>
			<div v-if="!dev" class="link-wrap">
				<a :href="href" target="_blank">Visit</a>
			</div>
			<div v-else>in development</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.portfolio-item {
	display: grid;
	grid-template-columns: 1fr;
	gap: 0;

	@media only screen and (max-width: 900px) {
		overflow: hidden;
	}

	@media only screen and (max-width: 600px) {
		overflow: visible;
	}

	.image-wrap {
		position: relative;
		left: 0;
		grid-column: 1 / 4;
		grid-row: 1 / 2;
		transition: left 0.5s cubic-bezier(.02, .01, .47, 1);
		z-index: 1;

		&:hover {
			cursor: pointer;
		}

		:deep(img) {
			display: block;
			width: 100%;
		}

		&.open {
			left: 100%;
		}
	}


	.info {
		height: 100%;
		padding: 1rem;
		background: $black;
		color: $white;
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-weight: 250;

		.tags {
			margin-bottom: 1rem;
			font-size: 0.9rem;

			.tag {
				&:not(:last-child) {
					&:after {
						content: ", "
					}
				}
			}
		}

		.description {
			margin-bottom: auto;
			line-height: 1.2;
		}

		.link-wrap {
			a {
				color: $white;
				text-decoration: none;
				position: relative;
				display: flex;
				justify-content: flex-star;
				align-items: center;
				letter-spacing: 0.075em;

				&:after {
					content: url('@/assets/images/KM_arrow_long_white.svg');
					width: 2.75rem;
					margin-left: 1rem;
					position: relative;
					right: 0;
					transition: right 0.35s cubic-bezier(.02, .01, .47, 1);
				}

				&:hover {
					&:after {
						right: -1rem;
					}
				}
			}
		}
	}
}
</style>