<template>
  <q-drawer elevated overlay show-if-above :breakpoint="0" content-class="bg-grey-9" v-if="isOpen">
    <q-list dark>
      <q-item-label header>Navigation</q-item-label>
      <q-item
        v-for="(navLink, index) in navLinks"
        :key="index"
        :to="navLink.to"
        :active="active"
        active-class="text-orange"
        class="q-px-lg"
        clickable
        exact
      >
        <q-item-section avatar>
          <q-icon :name="navLink.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{navLink.label}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    navLinks: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.q-drawer {
  transition: 0.5s;
}
</style>
