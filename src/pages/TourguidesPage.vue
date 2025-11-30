<template>
  <q-page class="q-pa-xl">

    <div class="text-h4 text-weight-bold">Our Expert Tour Guides</div>
    <div class="text-subtitle1 text-grey-7 q-mb-xl">
      Meet the professionals who will make your journey unforgettable.
    </div>

    <q-card flat bordered class="q-pa-lg">

      <div class="text-h6 q-mb-md">Guide Directory</div>
      <div class="text-caption text-grey-7 q-mb-lg">
        Our team of certified and experienced tour guides.
      </div>

      <q-table
        :columns="columns"
        :rows="rows"
        flat
        separator="horizontal"
        row-key="name"
        hide-bottom
      >
        <template v-slot:body-cell-image="props">
          <q-td :props="props">
            <q-avatar size="40px">
              <img :src="props.row.image" />
            </q-avatar>
          </q-td>
        </template>

        <template v-slot:body-cell-languages="props">
          <q-td :props="props">
            <div class="row q-gutter-sm">
              <q-chip
                v-for="lang in props.row.languages"
                :key="lang"
                color="grey-3"
                text-color="black"
                dense
              >
                {{ lang }}
              </q-chip>
            </div>
          </q-td>
        </template>

      </q-table>

    </q-card>

  </q-page>
</template>

<script setup>
const columns = [
  { name: 'image', label: '', field: 'image', align: 'left', style: 'width: 60px' },
  { name: 'name', label: 'Name', field: 'name', align: 'left' },
  { name: 'languages', label: 'Languages', field: 'languages', align: 'left' },
  { name: 'specialization', label: 'Specialization', field: 'specialization', align: 'left' },
  { name: 'contact', label: 'Contact', field: 'contact', align: 'left' }
]

const rows = [
  {
    name: 'Maria Rossi',
    image: '/public/images/guides/pic-2.png',
    languages: ['Italian', 'English'],
    specialization: 'Ancient Rome History',
    contact: 'maria.rossi@email.com'
  },
  {
    name: 'Ken Tanaka',
    image: '/public/images/guides/pic-3.png',
    languages: ['Japanese', 'English'],
    specialization: 'Tokyo Modern Culture',
    contact: 'ken.tanaka@email.com'
  },
  {
    name: 'Jean-Pierre Dubois',
    image: '/public/images/guides/pic-4.png',
    languages: ['French', 'English', 'Spanish'],
    specialization: 'Parisian Art & Cuisine',
    contact: 'jp.dubois@email.com'
  },
  {
    name: 'Ahmed Hassan',
    image: '/public/images/guides/pic-1.png',
    languages: ['Arabic', 'English'],
    specialization: 'Egyptology',
    contact: 'ahmed.hassan@email.com'
  }
]
</script>
