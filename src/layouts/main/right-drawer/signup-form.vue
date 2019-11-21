<template>
  <div
    class="q-pt-md bg-green-6 text-grey-2"
    style="margin: 32px auto; width: 250px;"
  >
    <div class="q-pa-md text-center text-grey-2 text-h5 text-weight-medium">
      The Latest News
    </div>
    <div
      class="q-mb-lg q-py-sm q-px-md text-center text-h5 text-weight-regular"
      style="line-height: 1.25"
    >
      Signup for Our Newsletter & Stay Up to Date
    </div>
    <q-form class="column items-center" @submit="onSubmit" @reset="onReset">
      <q-input
        borderless
        dense
        filled
        lazy-rules
        square
        bg-color="white"
        class="q-mb-sm"
        label="Enter your email address"
        style="width: 215px;"
        v-model="name"
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />

      <q-btn
        unelevated
        class="q-mb-lg q-px-lg text-subtitle1 text-weight-regular"
        color="blue-7"
        label="Signup Now"
        style="border-radius: 2px; letter-spacing: 0.05em; margin-bottom: 36px;"
        type="submit"
      />
    </q-form>
  </div>
</template>
