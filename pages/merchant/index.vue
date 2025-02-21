<template>
  <div>
    <AppHeader />
    <MerchantOrder />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })
</script>