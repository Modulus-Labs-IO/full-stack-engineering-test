<template>
  <div  class="grid grid-cols-12 gap-4">
    <div></div>
    <UDashboardPage class="col-span-10">
      <UDashboardPanel grow>
        <UDashboardNavbar title="Product Details">
          <template #right>
            <AppButtonBack />
          </template>
        </UDashboardNavbar>

        <UDashboardPanelContent>
          <UDashboardCard>
            <UPricingCard
              v-if="item"
              :title="item.title"
              :description="item.description"
              :price="`$${item.price}`"
              discount=""
              cycle="/piece"
              :highlight="true"
              orientation="vertical"
              align="bottom"
              :features="[`Rating: ${item.rating.rate+95}%`, `Sold: ${item.rating.count}`]"
            >
              <template #title>
                <span class="text-2xl">{{ item.title }}</span>
              </template>
              <template #description>
                <span>{{ item.description }}</span>
                <img
                  :src="item.image"
                  class="w-50 h-50 rounded-md"
                />
              </template>
            </UPricingCard>

          </UDashboardCard>
        </UDashboardPanelContent>
      </UDashboardPanel>
    </UDashboardPage>
    <div></div>
  </div>
</template>

<script setup lang="ts">
    const props = defineProps(['product'])
    const item = ref<any>(props.product)
</script>
