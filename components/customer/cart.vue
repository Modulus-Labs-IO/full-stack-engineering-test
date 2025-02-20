<script setup lang="ts">
  const toast = useToast()

  const { data } = await useFetch('https://fakestoreapi.com/products')
  console.log('data ', data.value)

  const products = ref<any>(data.value)
  const user_carts = ref<any>(null)
  const total_carts = ref<any>(0)

  onMounted(async () => {
    const { data: _user_carts }: any = await useFetch('https://fakestoreapi.com/carts/user/2')
    console.log('_user_carts ', _user_carts.value)
    user_carts.value = _user_carts.value
    await processCart()
  })

  async function processCart() {
    user_carts.value?.map((user: any, userIndex: any) => {
      user.products?.map((product: any, productIndex: any) => {
        const _product = products.value.find((item: any) => item.id === product.productId )
        console.log(_product)
        if (_product) {
          user_carts.value[userIndex].products[productIndex].item = _product 
          total_carts.value = total_carts.value + (_product.price * product.quantity)
        }
      })
    })
    console.log('user_carts ', user_carts.value)
    console.log('total_carts ', total_carts.value)

    if(!user_carts.value) {
      const { data: _user_carts }: any = await useFetch('https://fakestoreapi.com/carts/user/2')
      console.log('_user_carts ', _user_carts.value)
      user_carts.value = _user_carts.value
      await processCart()
    }
  }

  const submitCart = async (productItem: any) => {
    const { data: responseData } = await useFetch('https://fakestoreapi.com/carts', {
        method: 'POST',
        body:JSON.stringify(
          {
            userId:2,
            date: "2020-02-03",
            products:[{productId:productItem.id,quantity:1}]
          }
        )
    })

    console.log(responseData.value)
    total_carts.value = 0
    user_carts.value.push(responseData.value)
    await processCart()
    // user_carts.value?.map((user: any, userIndex: any) => {
    //   user.products?.map((product: any, productIndex: any) => {
    //     const _product = products.value.find((item: any) => item.id === product.productId )
    //     console.log(_product)
    //     if (_product) {
    //       user_carts.value[userIndex].products[productIndex].item = _product 
    //       total_carts.value = total_carts.value + (_product.price * product.quantity)
    //     }
    //   })
    // })
    // console.log('user_carts ', user_carts.value)
    console.log('toast ', toast)

    toast.add({
      id: 'successfully_added',
      title: 'Successfully added to the cart!',
      description: 'New Product already added to the cart summary.',
      icon: 'i-heroicons-check-circle',
      timeout: 6000,
      color:'green'
    })
}

</script>

<template>
  <div  class="grid grid-cols-12 gap-4">
    <div></div>
    <UDashboardPage class="col-span-10">
      <UDashboardPanel grow>
        <UDashboardNavbar title="Shopping Cart">
          <template #right>
            
          </template>
        </UDashboardNavbar>

        <UDashboardPanelContent>
          <div class="grid lg:grid-cols-4 lg:items-start gap-8 my-4 w-full">
            <div class="grid lg:grid-cols-3 lg:items-start gap-8 col-span-3">
              <UPricingCard
                v-for="(item, index) in products" :key="index"
                :title="item.title"
                :description="item.description.slice(0,100)+'...'"
                :price="`$${item.price}`"
                discount=""
                cycle="/piece"
                :highlight="index === 0 ? true : false"
                :badge="index === 0 ? { label: 'Most popular' } : undefined"
                :button="{ label: 'Add to Cart', color: 'black', click: () => submitCart(item) }"
                orientation="vertical"
                align="bottom"
                :features="[`Rating: ${item.rating.rate+95}%`, `Sold: ${item.rating.count}`]"
              />
            </div>
            <UDashboardCard title="Cart Summary">
                <div class="space-y-4">
                  <div v-for="(cart, cartIndex) in user_carts" :key="cartIndex">
                    <dl class="items-center justify-between gap-4 mb-4" v-for="(product, productIndex) in cart.products" :key="productIndex">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">{{ product.item.title.slice(0,40)+'...' }}</dt>
                      <dd class="text-base font-normal text-gray-500 dark:text-gray-400 text-right">
                        {{ '$'+product.item.price+' x '+product.quantity+' = ' }}
                        <span class="text-white">{{ '$'+(product.item.price*product.quantity).toFixed(2) }}</span>
                      </dd>
                    </dl>
                  </div>
                </div>

                <dl class="flex items-center justify-between gap-4 border-t border-b border-gray-200 py-6 my-6 dark:border-gray-700">
                  <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd class="text-base font-bold text-gray-900 dark:text-white">{{ '$'+total_carts.toFixed(2) }}</dd>
                </dl>

                <a href="#" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a>
            </UDashboardCard>
          </div>
        </UDashboardPanelContent>
      </UDashboardPanel>
    </UDashboardPage>
    <div></div>
  </div>
</template>
