// 全局注册按钮组件  // 轮播图组件
import {Button, Swipe, SwipeItem, Popup, Icon} from 'vant'
const myplugins = [Button, Swipe, SwipeItem, Popup, Icon]
function getplugin(app) {
  myplugins.forEach((item) => {
    app.use(item)
  })
}
// 导出 getplugin 函数
export default getplugin
