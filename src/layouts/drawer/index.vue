<template>
  <q-drawer v-model="leftDrawerOpen" show-if-above content-class="bg-grey-9">
    <q-list dark>
      <q-item-label header>Navigation</q-item-label>
      <q-item :active="active" active-class="text-orange" clickable exact to="/">
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Home</q-item-label>
        </q-item-section>
      </q-item>
      <q-item :active="active" active-class="text-orange" clickable exact to="/news">
        <q-item-section avatar>
          <q-icon name="language" />
        </q-item-section>
        <q-item-section>
          <q-item-label>News</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
