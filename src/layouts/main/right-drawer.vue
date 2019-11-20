<template>
  <q-drawer
    show-if-above
    side="right"
    content-class="bg-grey-2"
    width="350"
    v-if="isOpen"
  >
    <div class="q-py-md q-px-lg bg-grey-3">
      <div>
      <q-input dense standout bg-color="grey-2" label="Search" v-model="text">
        <template v-slot:prepend>
           <q-icon name="search" />
        </template>
                <template v-slot:append>
           <q-btn />
        </template>
      </q-input>
    </div>
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
