<template>
  <q-layout view="lHh Lpr lFf">
    <Header />
    <Footer />
    <Drawer />
    <Container />
  </q-layout>
</template>

<script>
import Container from "./container";
import Drawer from "./drawer";
import Footer from "./footer";
import Header from "./header";

export default {
  components: {
    Container,
    Drawer,
    Footer,
    Header
  },
  name: "Layout"
};
</script>
