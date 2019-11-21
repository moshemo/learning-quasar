<template>
  <q-layout view="lhh lpR lff">
    <Header @leftDrawerToggled="updateLeftDrawer()" :navLinks="navLinks" />

    <LeftDrawer :isOpen="isLeftDrawerOpen" :navLinks="navLinks" />
    <PageContainer />
    <RightDrawer :isOpen="isRightDrawerOpen" />

    <Footer :navLinks="navLinks" />
  </q-layout>
</template>

<script>
import Header from "./main/header";
import LeftDrawer from "./main/left-drawer";
import PageContainer from "./main/page-container";
import RightDrawer from "./main/right-drawer/index";
import Footer from "./main/footer";

export default {
  components: {
    Header,
    LeftDrawer,
    PageContainer,
    RightDrawer,
    Footer
  },
  methods: {
    updateLeftDrawer() {
      this.isLeftDrawerOpen = !this.isLeftDrawerOpen;
    }
  },
  name: "Layout",
  data() {
    return {
      isLeftDrawerOpen: false,
      isRightDrawerOpen: true,
      navLinks: [
        {
          label: "Home",
          icon: "home",
          to: "/"
        },
        {
          label: "News",
          icon: "language",
          to: "/news"
        },
        {
          label: "Advertise",
          icon: "dvr",
          to: "/advertise",
          subLinks: [
            {
              label: "Events",
              to: "/advertise/events"
            },
            {
              label: "Classifieds",
              to: "/advertise/classifieds"
            },
            {
              label: "Banner Ads",
              to: "/advertise/banner-ads"
            },
            {
              label: "Press Release",
              to: "/advertise/press-release"
            }
          ]
        },
        {
          label: "Newsletter",
          icon: "email",
          to: "/newsletter"
        },
        {
          label: "About",
          icon: "info",
          to: "/about"
        },
        {
          label: "Contact",
          icon: "call",
          to: "/contact"
        }
      ]
    };
  }
};
</script>
