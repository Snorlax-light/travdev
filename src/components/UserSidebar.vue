<template>
  <div class="row no-wrap">

    <!-- Sidebar -->
    <q-drawer
      v-model="drawer"
      :mini="drawerMini"
      show-if-above
      side="left"
      class="bg-primary text-white"
      :width="240"
      :mini-width="80"
    >

      <!-- Header: toggle + title -->
      <div class="row items-center q-pa-md sidebar-header">

        <!-- This toggles mini/max -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="text-white"
          @click="drawerMini = !drawerMini"
        />

        <!-- Title (hidden in mini mode) -->
        <div v-if="!drawerMini" class="text-h6 q-ml-sm">
          Travel Tours
        </div>

      </div>

      <!-- Menu List -->
      <q-list class="q-pa-sm">
        <q-item
          v-for="item in menu"
          :key="item.label"
          clickable
          v-ripple
          tag="router-link"
          :to="item.to"
          class="menu-item"
          :active="isActive(item.to)"
          active-class="active-menu"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <!-- Hide labels when mini -->
          <q-item-section v-if="!drawerMini">
            {{ item.label }}
          </q-item-section>
        </q-item>
      </q-list>

      <!-- Bottom User Box -->
      <div v-if="!drawerMini" class="absolute-bottom q-pa-md user-box">
        <div class="text-subtitle2">Jane Doe</div>
        <div class="text-caption text-grey-4">Logged in</div>
      </div>

    </q-drawer>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const drawer = ref(true);
const drawerMini = ref(false);

// Sidebar menu
const menu = [
  { label: "Dashboard", icon: "dashboard", to: "/user" },
  { label: "Bookings", icon: "event", to: "/user/bookings" },
  { label: "Tour Guides", icon: "groups", to: "/user/tourguides" },
  { label: "Transportation", icon: "directions_bus", to: "/user/transportation" },
];

const isActive = (path) => route.path === path;
</script>

<style scoped>
.bg-primary {
  background: #081A37;
}

.menu-item {
  border-radius: 8px;
  margin-bottom: 6px;
  transition: 0.2s;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.active-menu {
  background: #F05A28 !important;
  color: white;
}

.user-box {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar-header {
  min-height: 60px;
}
</style>
