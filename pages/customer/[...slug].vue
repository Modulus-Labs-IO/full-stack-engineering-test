<template>
    <div>
        <AppHeader />
        <ProductDetails v-if="product" :product="product" />
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    const { slug } = useRoute().params
    const product = ref<any>()

    onMounted(async () => {
        const { data }: any = await useFetch('https://fakestoreapi.com/products/' + Number(slug))
        product.value = data.value
    })

    watchEffect(async() => {
        const { data }: any = await useFetch('https://fakestoreapi.com/products/' + Number(slug))
        product.value = data.value
    })
</script>

<style scoped>

</style>