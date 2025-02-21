<template>
  <div>
    <AppHeader />
    <CustomerOrder />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })
</script>