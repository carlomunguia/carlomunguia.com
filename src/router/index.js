import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Resume from "@/components/Resume.vue";
import Zen from "@/components/Zen.vue";
import Music from "@/components/Music.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/h",
      name: "Home",
      component: Home,
    },
    {
      path: "/r",
      name: "Resume",
      component: Resume,
    },
    {
      path: "/p",
      name: "Projects",
      component: Zen,
    },
    {
      path: "/m",
      name: "Music",
      component: Music,
    },
  ],
});
