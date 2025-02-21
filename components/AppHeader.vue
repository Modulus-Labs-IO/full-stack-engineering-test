<script setup lang="ts">

  onMounted(async () => {
  })

  function gotoOrder() {
    navigateTo('/customer/order')
  }

  function signout() {
    localStorage.removeItem('user')
    navigateTo('/')
  }
</script>

<template>
  <UHeader>
    <template #logo>
      <div class="w-auto h-6 capitalize">
        Web Store
      </div>
    </template>

    <template #right>
      <UButton
        color="gray"
        variant="ghost"
        square
        @click="gotoOrder"
      >
        <UIcon
          name="i-heroicons-shopping-bag"
          class="w-5 h-5"
        />
      </UButton>
      <UColorModeButton />

      <UButton to="https://github.com/Modulus-Labs-IO/full-stack-engineering-test" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
      <UButton @click="signout" label="Sign out" icon="i-tdesign:logout" color="red" variant="ghost" />
    </template>
  </UHeader>
</template>
