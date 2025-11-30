<template>
  <q-page class="q-pa-xl">

    <!-- TITLE -->
    <div class="text-h4 text-weight-bold">Explore Our Tour Packages</div>
    <div class="text-subtitle1 text-grey-7 q-mb-xl">
      Find your next adventure from our curated list of destinations.
    </div>

    <!-- TOUR PACKAGES GRID -->
    <div class="row q-col-gutter-xl">
      <div
        class="col-12 col-md-4"
        v-for="tour in tours"
        :key="tour.id"
      >
        <q-card bordered flat class="full-height">

          <q-img :src="tour.image" ratio="16/9" />

          <q-card-section>
            <div class="text-h6">{{ tour.name }}</div>
            <div class="text-caption text-grey-7">{{ tour.location }}</div>
          </q-card-section>

          <q-card-section>
            {{ tour.description }}
          </q-card-section>

          <q-card-section>
            <div class="text-h6 text-primary">₱{{ tour.price }}</div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn color="primary" flat label="View Details" />
          </q-card-actions>

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
    price: '35,000',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
    description: 'Discover the charm of Paris with iconic landmarks and rich culture.'
  },
  {
    id: 2,
    name: 'Tokyo Lights',
    location: 'Tokyo, Japan',
    price: '42,000',
    image: 'https://images.pexels.com/photos/2187601/pexels-photo-2187601.jpeg',
    description: 'Experience modern city life mixed with ancient traditions.'
  },
  {
    id: 3,
    name: 'Santorini Escape',
    location: 'Greece',
    price: '55,000',
    image: 'https://images.pexels.com/photos/1642414/pexels-photo-1642414.jpeg',
    description: 'Relax and enjoy the breathtaking ocean views and architecture.'
  }
]
</script>
