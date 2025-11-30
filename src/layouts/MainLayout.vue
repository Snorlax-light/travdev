<template>
  <q-layout view="hHh lpR fFf">

    <UserSidebar />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import UserSidebar from "src/components/UserSidebar.vue";
</script>
