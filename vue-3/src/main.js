import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "vant/lib/index.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Vant from "vant";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Vue.use(Vant);

app.use(Vant);
app.use(ElementPlus);
app.mount("#app");
