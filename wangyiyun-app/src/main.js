import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入获取插件的函数
import getplugin from './plugin/index.js'
// 导入全局 axios
// import axios from 'axios'
const app = createApp(App)
// 为 axios 配置请求根路径
// axios.defaults.baseURL = 'http://localhost:3000'
// 将 axios 挂载为 app 的全局自定义属性后, 每个组件可通过 this.$http 直接访问全局挂载的自定义属性
// app.config.globalProperties.$http = axios

// 将 app 传给 getplugin 函数
getplugin(app)
app.use(store)
app.use(router).mount('#app')
