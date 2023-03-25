<script setup lang="ts">
const props = defineProps({
	href: {
		type: String,
		required: true
	},
	blank: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<div class="text-link">
		<a :href="href" :target="blank ? '_blank' : '_self'">
			<span>
				<slot />
			</span>
		</a>
	</div>
</template>

<style scoped lang="scss">
.text-link {
	display: inline-block;
	position: relative;
	line-height: 1;

	&:before {
		content: "";
		width: 0;
		height: 100%;
		background: $black;
		position: absolute;
		left: 0;
		transition: width 0.35s ease-out;
	}

	&:after {
		content: "";
		width: 0;
		height: 100%;
		background: $black;
		position: absolute;
		right: -1.25rem;
		transition: all 0.15s ease-out 0.35s;
	}

	&:hover {
		&:before {
			width: calc(100% + 1.25rem);
		}

		&:after {
			width: 1rem;
			transition: all 0.15s ease-out 0.7s;
		}

		a {
			&:before {
				width: calc(100% + 1rem);
			}

			&:after {
				opacity: 1;
			}
		}
	}

	a {
		color: $black;
		text-decoration: none;
		position: relative;

		@media (hover:none) {
			margin-right: 1rem;
		}

		span {
			position: relative;
		}

		&:before {
			content: "";
			width: 0;
			height: 100%;
			background: $white;
			position: absolute;
			left: 0;
			transition: width 0.35s ease-out 0.35s;
		}

		&:after {
			content: url('/images/KM_arrow_forward_white.svg');
			width: 0.75rem;
			position: absolute;
			right: -1rem;
			z-index: 1;
			opacity: 0;
			transition: opacity 0.35s ease 0.7s;

			@media (hover:none) {
				content: url('/images/KM_arrow_forward_black.svg');
				opacity: 1;
				width: 0.7rem;
			}
		}
	}
}
</style>