import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Detail from "./pages/Detail.vue";
import MiniComputers from "./pages/MiniComputers.vue";
import OS from "./pages/OS.vue";
import Robots from "./pages/Robots.vue";
import Algorithms from "./pages/Algorithms.vue";
import DetailPage from "./pages/DetailPage.vue";
import DetailSafety from "./pages/DetailSafety.vue";
import Sensors from "./pages/Sensors.vue";
import Detail1 from "./pages/Detail1.vue";
import Index1 from "./pages/Index1.vue";
import "./global.css";

interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/minicomputers",
    name: "MiniComputers",
    component: MiniComputers,
  },
  {
    path: "/os",
    name: "OS",
    component: OS,
  },
  {
    path: "/robots",
    name: "Robots",
    component: Robots,
  },
  {
    path: "/algorithms",
    name: "Algorithms",
    component: Algorithms,
  },
  {
    path: "/detailpage",
    name: "DetailPage",
    component: DetailPage,
  },
  {
    path: "/detailsafety",
    name: "DetailSafety",
    component: DetailSafety,
  },
  {
    path: "/sensors",
    name: "Sensors",
    component: Sensors,
  },
  {
    path: "/detail",
    name: "Detail1",
    component: Detail1,
  },
  {
    path: "/index",
    name: "Index1",
    component: Index1,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title : "Amaroso_v1";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
