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
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="text-white"
          @click="drawerMini = !drawerMini"
        />
        <div v-if="!drawerMini" class="text-h6 q-ml-sm">
          Admin Panel
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
          <q-item-section v-if="!drawerMini">
            {{ item.label }}
          </q-item-section>
        </q-item>
      </q-list>

      <!-- Bottom User Section -->
      <div class="absolute-bottom q-pa-md">
        <div v-if="!drawerMini">
          <div class="text-subtitle2">Admin User</div>
          <div class="text-caption text-grey-4">Administrator</div>
        </div>
        <div v-else class="row justify-center">
          <q-icon name="person" color="white" />
        </div>
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

const menu = [
  { label: "Dashboard", icon: "dashboard", to: "/admin" },
  { label: "Users", icon: "people", to: "/admin/users" },
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

.sidebar-header {
  min-height: 60px;
}

.absolute-bottom {
  bottom: 0;
  width: 100%;
  padding-bottom: 16px;
}
</style>
