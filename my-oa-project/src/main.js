import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Element from "element-plus";
import './utils/rem'
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App)
app.use(router)
app.use(Element)

app.mount('#app')
