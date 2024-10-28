import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TDesign from 'tdesign-vue-next';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/dist/reset.css';
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App)
app.use(TDesign)
app.use(router)
app.mount('#app')
