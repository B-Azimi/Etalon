import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import Store from "./stores.js";
import Router from "./router/index";
import "./index.css";
const app = createApp(App);


app.use(Router).use(Store).mount("#app");
