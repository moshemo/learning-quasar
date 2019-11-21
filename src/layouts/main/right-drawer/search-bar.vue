<template>
  <div class="q-py-md q-px-lg bg-grey-3">
    <div id="search-bar--right-drawer">
      <q-input
        borderless
        dense
        bg-color="grey-1"
        id="search-input--right-drawer"
        label="Enter search term"
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
</template>
