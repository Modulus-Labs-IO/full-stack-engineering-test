<template>
  <div>
    <UDashboardSlideover v-model="isOpen">
      <template #title>
        Edit Product
      </template>

      <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Title" name="title">
          <UInput v-model="state.title" />
        </UFormGroup>

        <UFormGroup label="Description" name="description">
          <UTextarea v-model="state.description" />
        </UFormGroup>

        <UFormGroup label="Price" name="price">
          <UInput v-model="state.price" type="number"/>
        </UFormGroup>

        <UFormGroup label="Category" name="category">
          <UInput v-model="state.category" />
        </UFormGroup>

        <UFormGroup label="Image Path" name="image">
          <UInput v-model="state.image" />
        </UFormGroup>

        <UFormGroup label="Rate" name="rate">
          <UInput v-model="state.rating.rate" type="number"/>
        </UFormGroup>

        <UFormGroup label="Count" name="count">
          <UInput v-model="state.rating.count" type="number"/>
        </UFormGroup>
      </UForm>

      <template #footer>
        <UButton
          block
          class="p-4"
          @click="onSubmit"
        >
          Submit
        </UButton>
      </template>
    </UDashboardSlideover>
  </div>
</template>

<script setup lang="ts">
  import type { FormError, FormSubmitEvent } from '#ui/types'

  const emit = defineEmits(['update-product'])

  const toast = useToast()
  const state = reactive({
    id: 0,
    title: undefined,
    description: undefined,
    price: 0,
    category: undefined,
    image: undefined,
    rating: {
      rate: 0,
      count: 0
    }
  })

  const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.title) errors.push({ path: 'title', message: 'Required' })
    return errors
  }

  async function onSubmit(event: FormSubmitEvent<any>) {

    if (!state.title) {
      toast.add({
          id: 'invalid_form',
          title: 'Product Title is required!',
          description: 'Please try again.',
          icon: 'i-heroicons-check-circle',
          timeout: 6000,
          color: 'red',
      })
      return
    }

    const { data: responseData }: any = await useFetch('https://fakestoreapi.com/products/'+state.id, {
        method: 'PUT',
        body:JSON.stringify(
          state
        )
    })

    if (responseData.value.title) {
      toast.add({
        id: 'successfully_added',
        title: 'Product successfully updated!',
        icon: 'i-heroicons-check-circle',
        timeout: 6000,
        color:'green'
      })
    }
    emit('update-product', state)
    isOpen.value = false
  }

  const isOpen = ref(false)

  defineExpose({
    isOpen,
    state
  })
</script>