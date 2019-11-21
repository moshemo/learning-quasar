<template>
  <q-footer>
    <q-tabs>
      <q-route-tab
        v-for="(navLink, index) in navLinks"
        :key="index"
        :icon="navLink.icon"
        :label="navLink.label"
        :to="navLink.to"
        class="q-px-lg"
      />
    </q-tabs>
  </q-footer>
</template>

<script>
export default {
  props: {
    navLinks: {
      type: Object,
      required: true
    }
  }
};
</script>
