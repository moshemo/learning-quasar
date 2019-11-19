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
