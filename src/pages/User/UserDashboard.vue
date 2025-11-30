<template>
  <q-page class="q-pa-xl">

    <!-- TITLE -->
    <div class="text-h4 text-weight-bold q-mb-md">Explore Our Tour Packages</div>
    <div class="text-subtitle1 text-grey-7 q-mb-xl">
      Find your next adventure from our curated list of destinations.
    </div>

    <!-- TOUR PACKAGES GRID -->
    <div class="row q-col-gutter-lg">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="tour in tours"
        :key="tour.id"
      >
        <q-card flat bordered class="tour-card">

          <!-- Image -->
          <q-img
            :src="tour.image"
            :ratio="16/9"
            class="rounded-borders"
          >
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-grey-3 text-grey-7">
                <q-icon name="image" size="64px" />
              </div>
            </template>
          </q-img>

          <q-card-section class="q-pt-md">
            <!-- Title -->
            <div class="text-h6 text-weight-bold q-mb-sm">{{ tour.name }}</div>

            <!-- Location with icon -->
            <div class="flex items-center q-mb-xs text-grey-7">
              <q-icon name="place" size="18px" class="q-mr-xs" />
              <span class="text-body2">{{ tour.location }}</span>
            </div>

            <!-- Duration with icon -->
            <div class="flex items-center q-mb-md text-grey-7">
              <q-icon name="schedule" size="18px" class="q-mr-xs" />
              <span class="text-body2">{{ tour.duration }}</span>
            </div>

            <!-- Description -->
            <div class="text-body2 text-grey-8">
              {{ tour.description }}
            </div>
          </q-card-section>

          <!-- Price and Button Section -->
          <q-card-section class="q-pt-none">
            <div class="flex items-center justify-between">
              <div class="text-h6 text-weight-bold text-primary">
                PHP {{ tour.price.toLocaleString() }}
              </div>
              <q-btn
                color="primary"
                label="Book Now"
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
const tours = [
  {
    id: 1,
    name: 'Parisian Dream',
    location: 'Paris, France',
    duration: '7 Days',
    price: 102600,
    image: '/images/p-4.jpg',
    description: 'Experience the romance and charm of Paris, from the Eiffel Tower to the Louvre.'
  },
  {
    id: 2,
    name: 'Tokyo Lights',
    location: 'Tokyo, Japan',
    duration: '10 Days',
    price: 142500,
    image: '/images/p-5.jpg',
    description: 'Immerse yourself in the vibrant culture and futuristic landscapes of Tokyo.'
  },
  {
    id: 3,
    name: 'Egyptian Wonders',
    location: ' Egypt',
    duration: '5 Days',
    price: 85500,
    image: '/images/p-6.jpg',
    description: 'Walk through ancient history in the land of pharaohs, exploring timeless pyramids.'
  }
]
</script>

<style scoped>
.tour-card {
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tour-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
