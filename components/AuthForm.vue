<template>
  <div class="flex flex-col items-center justify-center min-h-screen place-content-center">
    <UAuthForm
      class=""
      title="Login"
      description="Enter your credentials to access your account."
      align="bottom"
      icon="i-heroicons-user-circle"
      :fields="[{ type: 'text', label: 'User', name: 'user', placeholder: 'Enter your user', color: 'gray' }, { type: 'password', label: 'Password', name: 'password', placeholder: 'Enter your password', color: 'gray' }]"
      :loading="isLoading"
      @submit="onSubmit"
    />
  </div>
</template>

<script setup lang="ts">
  const toast = useToast()
  const isLoading = ref<boolean>(false)

  async function onSubmit(data: any) {
    isLoading.value = true
    const { data: responseData }: any = await useFetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body:JSON.stringify(
          {
              username: data.user,
              password: data.password
          }
        )
    })

    if (responseData.value?.token) {
      const { data: responseUser }:any = await useFetch('https://fakestoreapi.com/users')
      const user = responseUser.value.find((_user: any) => _user.username === data.user)

      localStorage.setItem('user',JSON.stringify({
        u: btoa(data.user),
        p: btoa(data.password),
        i: btoa(user?.id)
      }))

      navigateTo('/home')
    } else {
      toast.add({
          id: 'invalid_login',
          title: 'Invalid Login!',
          description: 'Please try again.',
          icon: 'i-heroicons-check-circle',
          timeout: 6000,
          color: 'red',
      })
    }
    isLoading.value = false
  }
</script>
