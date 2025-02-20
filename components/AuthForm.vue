<template>
  <div class="flex flex-col items-center justify-center min-h-screen place-content-center">
    <UAuthForm
      class=""
      title="Login"
      description="Enter your credentials to access your account."
      align="bottom"
      icon="i-heroicons-user-circle"
      :fields="[{ type: 'email', label: 'Email', name: 'email', placeholder: 'Enter your email', color: 'gray' }, { type: 'password', label: 'Password', name: 'password', placeholder: 'Enter your password', color: 'gray' }]"
      :loading="false"
    />
  </div>
</template>

<script setup lang="ts">

</script>
