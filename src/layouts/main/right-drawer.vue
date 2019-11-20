<template>
  <q-drawer show-if-above side="right" content-class="bg-grey-2" v-if="isOpen">
    <q-list>
      <q-item-label header>Navigation</q-item-label>
      <q-item to="/" class="q-px-lg">
        <q-item-section>
          <q-item-label>Label</q-item-label>
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
    }
  }
};
</script>
