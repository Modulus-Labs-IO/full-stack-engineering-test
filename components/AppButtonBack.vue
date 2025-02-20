<template>
    <div>
        <UButton
            @click="goBack"
            label="Back"
            icon="i-heroicons-arrow-left-circle"
            size="sm"
            color="black"
            variant="solid"
            :trailing="false"
        />
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1) // This will navigate one page back in the history stack
        },
    },
}
</script>