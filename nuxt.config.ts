// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
