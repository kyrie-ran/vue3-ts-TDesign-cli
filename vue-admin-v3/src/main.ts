import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TDesign from 'tdesign-vue-next';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/dist/reset.css';
import 'tdesign-vue-next/es/style/index.css';
import { createPinia } from 'pinia';
import pinaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pina = createPinia()
pina.use(pinaPluginPersistedstate)
const app = createApp(App)
app.use(TDesign)
app.use(router)
app.use(pina)
app.mount('#app')
