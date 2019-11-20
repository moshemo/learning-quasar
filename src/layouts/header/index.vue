<template>
  <q-header>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="leftDrawerOpen = !leftDrawerOpen"
        icon="menu"
        aria-label="Menu"
      />

      <q-toolbar-title>Quasar App</q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {};
</script>
