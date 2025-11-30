<template>
  <q-page class="q-pa-xl">

    <div class="text-h4 text-weight-bold">My Bookings</div>
    <div class="text-subtitle1 text-grey-7 q-mb-xl">
      Review and manage your upcoming and past trips.
    </div>

    <q-card flat bordered class="q-pa-lg">

      <div class="text-h6 q-mb-md">Booking History</div>
      <div class="text-caption text-grey-7 q-mb-lg">
        A list of all your booked packages.
      </div>

      <q-table
        :rows="rows"
        :columns="columns"
        flat
        hide-bottom
        row-key="package"
        separator="horizontal"
      >
        <template v-slot:body-cell-status="props">
          <q-chip
            :color="props.row.status === 'Confirmed' ? 'primary' : 'grey-5'"
            text-color="white"
            square
            dense
          >
            {{ props.row.status }}
          </q-chip>
        </template>
      </q-table>

    </q-card>

  </q-page>
</template>

<script setup>
const columns = [
  { name: 'package', label: 'Package', field: 'package', align: 'left' },
  { name: 'date', label: 'Travel Date', field: 'date', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'left' },
  { name: 'agent', label: 'Assigned Agent', field: 'agent', align: 'left' }
]

const rows = [
  { package: 'Parisian Dream', date: '9/15/2024', status: 'Confirmed', agent: 'Alice Johnson' },
  { package: 'Tokyo Lights', date: '10/20/2024', status: 'Confirmed', agent: 'Bob Williams' },
  { package: 'Roman Holiday', date: '1/5/2025', status: 'Pending', agent: 'Alice Johnson' }
]
</script>
