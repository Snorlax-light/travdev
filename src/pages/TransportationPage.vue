<template>
  <q-page class="q-pa-xl">

    <div class="text-h4 text-weight-bold q-mb-md">Transportation Options</div>
    <div class="text-subtitle1 text-grey-7 q-mb-xl">
      Choose from our reliable travel transportation services.
    </div>

    <div class="row q-col-gutter-lg">

      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="vehicle in vehicles"
        :key="vehicle.id"
      >
        <q-card flat bordered class="vehicle-card">

          <!-- Image -->
          <q-img
            :src="vehicle.image"
            :ratio="16/9"
            class="rounded-borders"
          >
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-grey-3 text-grey-7">
                <q-icon name="directions_car" size="64px" />
              </div>
            </template>
          </q-img>

          <q-card-section class="q-pt-md">

            <div class="text-h6 text-weight-bold q-mb-sm">{{ vehicle.name }}</div>


            <div class="flex items-center q-mb-md text-grey-7">
              <q-icon name="category" size="18px" class="q-mr-xs" />
              <span class="text-body2">{{ vehicle.type }}</span>
            </div>


            <div class="text-body2 text-grey-8">
              {{ vehicle.description }}
            </div>
          </q-card-section>

       
          <q-card-section class="q-pt-none">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-h6 text-weight-bold text-primary">
                  ₱{{ vehicle.price }}
                </div>
                <div class="text-caption text-grey-6">per day</div>
              </div>
              <q-btn
                color="primary"
                label="Reserve"
                unelevated
                padding="8px 24px"
                icon-right="arrow_forward"
              />
            </div>
          </q-card-section>

        </q-card>
      </div>

    </div>

  </q-page>
</template>

<script setup>
const vehicles = [
  {
    id: 1,
    name: 'Luxury Van',
    type: 'Group Transport',
    price: '9,500',
    description: 'Comfortable transport ideal for families and groups.',
    image: '/images/Vehicles/LaxuryVan.jpg'
  },
  {
    id: 2,
    name: 'Private Car',
    type: 'Personal Transport',
    price: '7,500',
    description: 'A private and convenient way to explore destinations.',
    image: '/images/Vehicles/PrivateCar.jpg'
  },
  {
    id: 3,
    name: 'Tour Bus',
    type: 'Large Group Transport',
    price: '10,500',
    description: 'Perfect for big groups and long-distance travel.',
    image: '/images/Vehicles/TourBus.jpg'
  }
]
</script>

<style scoped>
.vehicle-card {
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.vehicle-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
