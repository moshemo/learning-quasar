<template>
  <q-header class="bg-blue-8 q-px-md">
    <q-toolbar>
      <q-toolbar-title>startupReporter</q-toolbar-title>
      <q-space />
      <q-btn
        v-for="(navLink, index) in navLinks"
        :key="index"
        :label="navLink.label"
        :to="navLink.to"
        class="q-px-lg q-py-md gt-sm"
        flat
        size="16px"
        stretch
      />
      <q-btn
        flat
        dense
        round
        aria-label="Menu"
        class="lt-md"
        icon="menu"
        @click="toggleLeftDrawer"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  props: {
    navLinks: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.$emit("leftDrawerToggled");
    }
  }
};
</script>
  .logo--second {
    color: red;
  }

<style>
</style>
