// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	app: {
		head: {
			title: 'Kristin Meyer – Full-Stack Web Developer',
			htmlAttrs: {
				lang: "en",
			}
		}
	},
	modules: [
		'@nuxtjs/device',
		['nuxt3-lazy-load', {
			loadingClass: 'loading',
			loadedClass: 'loaded',
			appendClass: false,
		}]
	],
	css: ['modern-normalize/modern-normalize.css', '@/assets/styles/global.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/_custom.scss" as *;'
				}
			}
		}
	}
})
