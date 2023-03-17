import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import axios from "axios";
import "vant/lib/index.css";
const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(store);// TODO:vuex配置
app.use(Vant);// TODO:全局引入vant
app.use(router);
app.mount("#app");
