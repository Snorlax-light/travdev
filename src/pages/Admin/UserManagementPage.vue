<template>
  <q-page class="q-pa-xl">

    <div class="row items-center q-mb-lg">
      <div class="text-h4 text-weight-bold">User Management</div>
    </div>
    <div class="text-subtitle1 text-grey-7 q-mb-xl">
      Manage all registered users and their roles.
    </div>

    <q-card flat bordered class="q-pa-lg">

      <q-table
        :rows="users"
        :columns="columns"
        row-key="id"
        flat
        separator="horizontal"
        hide-bottom
      >

        <template v-slot:body-cell-role="props">
          <q-td :props="props">
            <q-chip
              :color="props.row.role === 'admin' ? 'orange' : 'primary'"
              text-color="white"
              dense
              square
            >
              {{ props.row.role }}
            </q-chip>
          </q-td>
        </template>


        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <div class="q-gutter-sm">
              <q-btn flat round icon="edit" color="primary" @click="editUser(props.row)" />
              <q-btn flat round icon="delete" color="negative" @click="deleteUser(props.row)" />
            </div>
          </q-td>
        </template>
      </q-table>

    </q-card>

  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const users = ref([
  { id: 1, name: 'Jane Doe', email: 'jane@example.com', role: 'user' },
  { id: 2, name: 'John Smith', email: 'john@example.com', role: 'admin' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'user' }
]);

const columns = [
  { name: 'name', label: 'Name', field: 'name', align: 'left' },
  { name: 'email', label: 'Email', field: 'email', align: 'left' },
  { name: 'role', label: 'Role', field: 'role', align: 'left', style: 'width: 120px' },
  { name: 'actions', label: 'Actions', field: 'actions', align: 'right', style: 'width: 150px' }
];

const editUser = (user) => { console.log('Edit', user); };
const deleteUser = (user) => { console.log('Delete', user); };
</script>
