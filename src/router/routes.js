const routes = [
  {
    path: "/",
    component: () => import("layouts/layout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/index.vue")
      },
      {
        path: "/news",
        component: () => import("pages/news.vue")
      },
      {
        path: "/advertise",
        component: () => import("pages/advertise/index.vue")
      },
      {
        path: "/advertise/banner-ads",
        component: () => import("pages/advertise/banner-ads.vue")
      },
      {
        path: "/advertise/classifieds",
        component: () => import("pages/advertise/classifieds.vue")
      },
      {
        path: "/advertise/events",
        component: () => import("pages/advertise/events.vue")
      },
      {
        path: "/advertise/press-release",
        component: () => import("pages/advertise/press-release.vue")
      },
      {
        path: "/newsletter",
        component: () => import("pages/newsletter.vue")
      },
      {
        path: "/about",
        component: () => import("pages/about.vue")
      },
      {
        path: "/contact",
        component: () => import("pages/contact.vue")
      },
      {
        path: "/admin",
        component: () => import("pages/admin")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
