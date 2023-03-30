import { LocalStorage } from "quasar";
const requireAuth = (to, from, next) => {
  const isAuthenticated = LocalStorage.getItem("isAuthenticated") ?? false;
  if (isAuthenticated) {
    next();
  } else {
    next({ path: "/login" });
  }
};
const isAuth = (to, from, next) => {
  const isAuthenticated = LocalStorage.getItem("isAuthenticated") ?? false;
  if (isAuthenticated) {
    next({ path: "/profile" });
  } else {
    next();
  }
};
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  },
  {
    path: "/articles",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ArticlesPage.vue") }],
  },
  {
    path: "/faq",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/FAQPage.vue") }],
  },
  {
    path: "/profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ProfilePage.vue") }],
    beforeEnter: requireAuth,
  },
  {
    path: "/login",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
    beforeEnter: isAuth,
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
