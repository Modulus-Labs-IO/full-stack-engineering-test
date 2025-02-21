<template>
  <div>
    <AppHeader />
    <div class="grid grid-cols-12 gap-4">
      <div></div>
      <UDashboardPage class="col-span-10">
        <UDashboardPanel grow>
          <UDashboardNavbar title="Main Components" />

          <UDashboardPanelContent>
            <div class="grid lg:grid-cols-2 lg:items-start gap-8 my-4">
              <UButton
                color="gray"
                variant="ghost"
                @click="gotoPage('customer')"
              >
                <UDashboardCard title="Customer Web Store" 
                  description="Browse and purchase products"
                  icon="i-heroicons-shopping-bag"
                  class="w-full text-left"
                />
              </UButton>

              <UButton
                color="gray"
                variant="ghost"
                @click="gotoPage('merchant')"
              >
                <UDashboardCard title="Merchant Dashboard"
                  description="Manage their products and orders"
                  icon="i-heroicons-chart-bar"
                  class="w-full text-left"
                />
              </UButton>
            </div>
          </UDashboardPanelContent>
        </UDashboardPanel>
      </UDashboardPage>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })

  function gotoPage(page: any) {
    navigateTo('/' + page)
  }
</script>