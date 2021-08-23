import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 全局生效样式
import "./styles/index.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
