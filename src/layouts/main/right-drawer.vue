<template>
  <q-drawer show-if-above side="right" content-class="bg-grey-2" width="350" v-if="isOpen">
    <div class="q-py-md q-px-lg bg-grey-3">
      <div id="search-bar--right-drawer">
        <q-input
          borderless
          dense
          bg-color="grey-1"
          id="search-input--right-drawer"
          placeholder="Enter search term"
          v-model="text"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template v-slot:after>
            <q-btn
              unelevated
              color="primary"
              label="Search"
              style="border-top-left-radius: 0; border-bottom-left-radius: 0;"
            />
          </template>
        </q-input>
      </div>
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

<style lang="scss">
#search-bar--right-drawer {
  .q-field__control {
    height: 36px;
    padding-left: 7px;
    padding-right: 0;
  }

  .q-field__after {
    padding-left: 0;
  }

  .q-btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
