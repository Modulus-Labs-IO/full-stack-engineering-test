<template>
    <div>
        <AppHeader />
        <ProductDetails v-if="product" :product="product" />
    </div>
</template>

<script setup lang="ts">
    const { slug } = useRoute().params
    console.log('slug ', Number(slug))
    const product = ref<any>()

    onMounted(async () => {
        const { data }: any = await useFetch('https://fakestoreapi.com/products/' + Number(slug))
        console.log('data ', data.value)
        product.value = data.value
    })

    watchEffect(async() => {
        const { data }: any = await useFetch('https://fakestoreapi.com/products/' + Number(slug))
        console.log('data ', data.value)
        product.value = data.value
    })
</script>

<style scoped>

</style>