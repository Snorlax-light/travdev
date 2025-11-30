<template>
  <q-page class="q-pa-xl">

    <!-- Header -->
    <div class="text-h4 text-weight-bold q-mb-md">Admin Dashboard</div>
    <div class="text-subtitle1 text-grey-7 q-mb-xl">
      Quick overview of your Travel & Tours platform
    </div>

    <!-- Stats Row -->
    <div class="row q-col-gutter-md q-mb-xl">
      <div class="col-6 col-md-3" v-for="card in stats" :key="card.title">
        <q-card flat bordered class="q-pa-md">
          <div class="text-subtitle2 text-grey-7">{{ card.title }}</div>
          <div class="text-h5 text-weight-bold q-mt-sm">{{ card.value }}</div>
        </q-card>
      </div>
    </div>

    <!-- Recent Bookings -->
    <q-card flat bordered class="q-pa-lg">
      <div class="text-h6 q-mb-md">Recent Bookings</div>
      <q-table
        :rows="bookings"
        :columns="bookingColumns"
        row-key="id"
        flat
        hide-bottom
        separator="horizontal"
      >
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-chip
              :color="props.row.status === 'Confirmed' ? 'primary' : 'grey-5'"
              text-color="white"
              dense
              square
            >
              {{ props.row.status }}
            </q-chip>
          </q-td>
        </template>
      </q-table>
    </q-card>

  </q-page>
</template>

<script setup>
import { ref } from "vue";

const stats = [
  { title: "Users", value: 150 },
  { title: "Bookings", value: 320 },
  { title: "Tours", value: 25 },
  { title: "Vehicles", value: 12 },
];

const bookings = ref([
  { id: 1, package: "Parisian Dream", user: "Jane Doe", date: "2024-09-15", status: "Confirmed" },
  { id: 2, package: "Tokyo Lights", user: "John Smith", date: "2024-10-20", status: "Pending" },
  { id: 3, package: "Egyptian Wonders", user: "Alice Johnson", date: "2025-01-05", status: "Confirmed" },
]);

const bookingColumns = [
  { name: "package", label: "Package", field: "package", align: "left" },
  { name: "user", label: "User", field: "user", align: "left" },
  { name: "date", label: "Travel Date", field: "date", align: "left" },
  { name: "status", label: "Status", field: "status", align: "left" },
];
</script>
