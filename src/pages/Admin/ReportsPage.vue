<template>
  <q-page class="q-pa-xl">
    <div class="text-subtitle1 text-grey-7 q-mb-xl">
      View booking and user activity reports.
    </div>

    <div class="row q-col-gutter-xl">

      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-lg">
          <div class="text-h6 q-mb-md">Booking Summary</div>
          <q-chart type="bar" :data="bookingData" />
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-lg">
          <div class="text-h6 q-mb-md">User Registrations</div>
          <q-chart type="line" :data="userData" />
        </q-card>
      </div>

    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const bookingData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    { label: 'Bookings', backgroundColor: '#F05A28', data: [12, 19, 7, 15, 10] }
  ]
});

const userData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    { label: 'New Users', backgroundColor: '#081A37', data: [5, 8, 4, 10, 6] }
  ]
});

</script>
