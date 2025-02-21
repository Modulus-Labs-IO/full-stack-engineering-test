<script setup lang="ts">
  const merchantAddProduct = ref<any>(null)
  const merchantEditProduct = ref<any>(null)

  const { data } = await useFetch('https://fakestoreapi.com/products')

  const products = ref<any>(data.value)
  const user_carts = ref<any>(null)
  const total_carts = ref<any>(0)
  const userId = ref<any>()
  const popular = ref<any>(1)
  const newProduct = ref<any>(null)
  const currentProduct = ref<any>(null)

  onMounted(async () => {
    
  })

  const editProduct = async (productItem: any) => {
    currentProduct.value = productItem
    merchantEditProduct.value.state.id = productItem.id
    merchantEditProduct.value.state.title = productItem.title
    merchantEditProduct.value.state.description = productItem.description
    merchantEditProduct.value.state.price = productItem.price
    merchantEditProduct.value.state.category = productItem.category
    merchantEditProduct.value.state.image = productItem.image
    merchantEditProduct.value.state.rating.rate = productItem.rating.rate
    merchantEditProduct.value.state.rating.count = productItem.rating.count
    merchantEditProduct.value.isOpen = true
}

function browseProduct(item: any) {
  navigateTo('/customer/'+item.id)
}

function openSlideover() {
  merchantAddProduct.value.isAddProductSlideover = true
}

function addProduct(product: any) {
  newProduct.value = null
  products.value.unshift(product)
}

function updateProduct(product: any) {
  const indexProduct = products.value.findIndex((p: any) => p.id === currentProduct.value.id)
  products.value[indexProduct] = product
  if (indexProduct >= 0) {
    products.value[indexProduct] = product
    currentProduct.value = null
  }
}

</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <div></div>
    <UDashboardPage class="col-span-10">
      <UDashboardPanel grow>
        <UDashboardNavbar title="Product List">
          <template #right>
            <AppButtonBack />
            <div>
              <UButton
                @click="openSlideover()"
                label="Add Product"
                icon="i-heroicons-plus"
                size="sm"
                color="green"
                variant="solid"
                :trailing="false"
              />
            </div>
          </template>
        </UDashboardNavbar>

        <UDashboardPanelContent>
          <div class="grid lg:grid-cols-4 lg:items-start gap-8 my-4 w-full">
            <UPricingCard
              v-for="(item, index) in products" :key="index"
              :title="item.title"
              :description="item.description ? item.description?.slice(0,100)+'...' : ''"
              :price="`$${item.price}`"
              cycle="/piece"
              :highlight="currentProduct?.title === item.title ? true : false"
              :badge="popular === item.id ? { label: 'Most popular' } :  undefined"
              :button="{ label: 'Edit Product', color: 'black', click: () => editProduct(item) }"
              orientation="vertical"
              align="bottom"
              :features="[`Rating: ${item.rating.rate+95}%`, `Sold: ${item.rating.count}`]"
            >
              <template #title>
                <UButton
                  class="px-0"
                  color="gray"
                  variant="ghost"
                  square
                  @click="browseProduct(item)"
                >
                  <span class="text-2xl">{{ item.title }}</span>
                </UButton>
              </template>
            </UPricingCard>
          </div>
        </UDashboardPanelContent>
      </UDashboardPanel>
    </UDashboardPage>
    <div></div>
    <MerchantAddProduct ref="merchantAddProduct" @add-product="addProduct" />
    <MerchantEditProduct ref="merchantEditProduct" :product="currentProduct" @update-product="updateProduct" />
  </div>
</template>
