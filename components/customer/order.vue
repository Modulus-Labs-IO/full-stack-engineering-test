<template>
  <div  class="grid grid-cols-12 gap-4">
    <div></div>
    <UDashboardPage class="col-span-10">
      <UDashboardPanel grow>
        <UDashboardNavbar title="Your Order">
          <template #right>
            
          </template>
        </UDashboardNavbar>

        <UDashboardPanelContent>
          <UDashboardCard title="PENDING">
            <div class="grid lg:grid-cols-4 lg:items-start gap-8 my-4 w-full">
              <UPricingCard
                title="Solo"
                description="For bootstrappers and indie hackers."
                price="$199"
                discount=""
                cycle="/month"
                :highlight="false"
                :badge="{ label: 'Most popular' }"
                orientation="vertical"
                align="bottom"
                :features="['One developer', 'Unlimited projects', 'Unlimited minor & patch updates', 'Lifetime access']"
              />
              <UPricingCard
                title="Solo"
                description="For bootstrappers and indie hackers."
                price="$199"
                discount=""
                cycle="/month"
                :highlight="false"
                :badge="{ label: 'Most popular' }"
                orientation="vertical"
                align="bottom"
                :features="['One developer', 'Unlimited projects', 'Unlimited minor & patch updates', 'Lifetime access']"
              />
              <UPricingCard
                title="Solo"
                description="For bootstrappers and indie hackers."
                price="$199"
                discount=""
                cycle="/month"
                :highlight="false"
                :badge="{ label: 'Most popular' }"
                orientation="vertical"
                align="bottom"
                :features="['One developer', 'Unlimited projects', 'Unlimited minor & patch updates', 'Lifetime access']"
              />
            </div>
          </UDashboardCard>
          <br>
          <UDashboardCard title="COMPLETED">
            <div class="grid lg:grid-cols-4 lg:items-start gap-8 my-4 w-full">
              <UPricingCard
                title="Solo"
                description="For bootstrappers and indie hackers."
                price="$199"
                discount=""
                cycle="/month"
                :highlight="false"
                :badge="{ label: 'Most popular' }"
                orientation="vertical"
                align="bottom"
                :features="['One developer', 'Unlimited projects', 'Unlimited minor & patch updates', 'Lifetime access']"
              />
              <UPricingCard
                title="Solo"
                description="For bootstrappers and indie hackers."
                price="$199"
                discount=""
                cycle="/month"
                :highlight="false"
                :badge="{ label: 'Most popular' }"
                orientation="vertical"
                align="bottom"
                :features="['One developer', 'Unlimited projects', 'Unlimited minor & patch updates', 'Lifetime access']"
              />
              <UPricingCard
                title="Solo"
                description="For bootstrappers and indie hackers."
                price="$199"
                discount=""
                cycle="/month"
                :highlight="false"
                :badge="{ label: 'Most popular' }"
                orientation="vertical"
                align="bottom"
                :features="['One developer', 'Unlimited projects', 'Unlimited minor & patch updates', 'Lifetime access']"
              />
            </div>
          </UDashboardCard>
          
        </UDashboardPanelContent>
      </UDashboardPanel>
    </UDashboardPage>
    <div></div>
  </div>
</template>
