const {defineConfig} = require('@vue/cli-service')

// 按需引入vant 步骤一
const {VantResolver} = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  transpileDependencies: true
})
// 按需引入vant 步骤二
module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  }
}
