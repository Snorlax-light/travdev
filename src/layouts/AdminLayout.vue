<template>
  <q-layout view="hHh lpR fFf">

    <AdminSidebar />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import AdminSidebar from "src/components/AdminSidebar.vue";
</script>
