// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  apiParty: {
    cache: false,
    endpoints: {
        stripe: {
            url: "https://api.stripe.com/v1/",
            cookies: 'false',
            // Global headers sent with each request
            headers: {
                Authorization: `Basic ${btoa(
                    "sk_test_51N11SyBMH61eA80aSptawI4yiOWqcRkjzGMMJtyfhncE40M8ZS93IjBpdIr7IKZwDwHuIIcqTj1NsZ9ZJuL0cLOL00OVVZ8tW6" + ':'
                )}`,
            },
        },
    },
  },
})
