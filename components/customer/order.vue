<script setup lang="ts">
  const cart_pending = ref<any>([])
  const cart_complete = ref<any>([])

  onMounted(async () => {
    processCartList()
  })

  function processCartList() {
    cart_pending.value = []
    cart_complete.value = []
    let cart = JSON.parse(localStorage.getItem('cart'))
    const _cart = cart?.filter((item: any) => item.userId === 2)
    _cart?.forEach((item: any) => {
      item.products?.forEach((product: any) => {
        if(product.status === "pending") {
          product.cart = item
          cart_pending.value.push(product)
        } else if(product.status === "complete") {
          cart_complete.value.push(product)
        }
      })
    })
  }

  function browseProduct(item: any) {
    navigateTo('/customer/'+item.productId)
  }

  function cancelOrder(cartItem: any) {
    console.log(cartItem)
    let cart = JSON.parse(localStorage.getItem('cart'))
    const cartIndex = cart.findIndex((_cart: any) => _cart.id === cartItem.cart.id )
    if (cartIndex >= 0) {
      const productIndex = cart[cartIndex].products.findIndex((item: any) => item.productId === cartItem.productId )
      cart[cartIndex].products.splice(productIndex, 1)
      cart = cart.filter((_cart: any) => _cart.products.length > 0)
      localStorage.setItem('cart',JSON.stringify(cart))
    }

    processCartList()
  }
</script>

<template>
  <div  class="grid grid-cols-12 gap-4">
    <div></div>
    <UDashboardPage class="col-span-10">
      <UDashboardPanel grow>
        <UDashboardNavbar title="Your Order">
          <template #right>
            <AppButtonBack />
          </template>
        </UDashboardNavbar>

        <UDashboardPanelContent>
          <UDashboardCard title="PENDING">
            <div class="grid lg:grid-cols-4 lg:items-start gap-8 my-4 w-full">
              <UPricingCard
                v-for="(cart, index) in cart_pending" :key="index"
                :title="cart.item.title"
                :description="cart.item.description.slice(0,100)+'...'"
                :price="`$${cart.item.price}`"
                cycle="/piece"
                :highlight="false"
                :badge="index === 0 ? { label: 'Most popular' } : undefined"
                :button="{ label: 'Cancel Order', color: 'red', click: () => cancelOrder(cart) }"
                orientation="vertical"
                align="bottom"
                :features="[`Rating: ${cart.item.rating.rate+95}%`, `Sold: ${cart.item.rating.count}`]"
                >
                <template #title>
                  <UButton
                    class="px-0"
                    color="gray"
                    variant="ghost"
                    square
                    @click="browseProduct(cart)"
                  >
                    <span class="text-2xl">{{ cart.item.title }}</span>
                  </UButton>
                </template>
              </UPricingCard>
            </div>
          </UDashboardCard>
          <br>
          <UDashboardCard title="COMPLETED">
            <div class="grid lg:grid-cols-4 lg:items-start gap-8 my-4 w-full">
              <UPricingCard
                v-for="(cart, index) in cart_complete" :key="index"
                :title="cart.item.title"
                :description="cart.item.description.slice(0,100)+'...'"
                :price="`$${cart.item.price}`"
                cycle="/piece"
                :highlight="true"
                orientation="vertical"
                align="bottom"
                :features="[`Rating: ${cart.item.rating.rate+95}%`, `Sold: ${cart.item.rating.count}`]"
                >
                <template #title>
                  <UButton
                    class="px-0"
                    color="gray"
                    variant="ghost"
                    square
                    @click="browseProduct(cart)"
                  >
                    <span class="text-2xl">{{ cart.item.title }}</span>
                  </UButton>
                </template>
              </UPricingCard>
            </div>
          </UDashboardCard>
          
        </UDashboardPanelContent>
      </UDashboardPanel>
    </UDashboardPage>
    <div></div>
  </div>
</template>
