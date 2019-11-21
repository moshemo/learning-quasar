<template>
  <q-header id="header-layout--main" class="bg-blue-8 q-px-md">
    <q-toolbar>
      <q-toolbar-title>startupReporter</q-toolbar-title>
      <q-space />
      <template v-for="(navLink, index) in navLinks">
        <template v-if="navLink.subLinks">
          <q-btn-dropdown
            :label="navLink.label"
            :key="index"
            :to="navLink.to"
            class="q-pl-lg q-pr-md q-py-md gt-sm"
            size="16px"
            flat
            stretch
          >
            <q-list>
              <q-item
                v-for="(subLink, subIndex) in navLink.subLinks"
                :key="subIndex"
                :to="subLink.to"
                class="q-item--header_custom"
                clickable
                v-close-popup
              >
                <q-item-section>
                  <q-item-label>{{subLink.label}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </template>

        <template v-else>
          <q-btn
            :key="index"
            :label="navLink.label"
            :to="navLink.to"
            class="q-px-lg q-py-md gt-sm"
            size="16px"
            flat
            stretch
          />
        </template>
      </template>

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

<style lang="scss">
/* body {
  .q-menu {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
} */
.q-item--header_custom:hover {
  background-color: $blue-8;
  color: #fff;
  font-weight: 600;

  .q-focus-helper {
    background-color: inherit !important;
  }
}
</style>
