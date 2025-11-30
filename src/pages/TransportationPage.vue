<template>
  <q-page class="q-pa-xl">

    <div class="text-h4 text-weight-bold">Transportation Options</div>
    <div class="text-subtitle1 text-grey-7 q-mb-xl">
      Choose from our reliable travel transportation services.
    </div>

    <div class="row q-col-gutter-xl">

      <div
        class="col-12 col-md-4"
        v-for="vehicle in vehicles"
        :key="vehicle.id"
      >
        <q-card bordered flat class="full-height">

          <q-img :src="vehicle.image" ratio="16/9" />

          <q-card-section>
            <div class="text-h6">{{ vehicle.name }}</div>
            <div class="text-caption text-grey-7">{{ vehicle.type }}</div>
          </q-card-section>

          <q-card-section>
            {{ vehicle.description }}
          </q-card-section>

          <q-card-section class="text-h6">
            ₱{{ vehicle.price }} / day
          </q-card-section>

          <q-card-actions align="right">
            <q-btn color="primary" label="Reserve" flat />
          </q-card-actions>

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
    price: '4500',
    description: 'Comfortable transport ideal for families and groups.',
    image: 'https://images.pexels.com/photos/976872/pexels-photo-976872.jpeg'
  },
  {
    id: 2,
    name: 'Private Car',
    type: 'Personal Transport',
    price: '2500',
    description: 'A private and convenient way to explore destinations.',
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg'
  },
  {
    id: 3,
    name: 'Tour Bus',
    type: 'Large Group Transport',
    price: '8500',
    description: 'Perfect for big groups and long-distance travel.',
    image: 'https://images.pexels.com/photos/3859994/pexels-photo-3859994.jpeg'
  }
]
</script>
