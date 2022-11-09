<template>
  <router-view></router-view>
  <Footer v-show="$store.state.isFooterShow"></Footer>
</template>
<script>
import Footer from '@/components/Allzujian/Footer.vue'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {Footer}
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  // 不会因为边距撑开盒子
  box-sizing: border-box;
}
li {
  list-style: none;
}
</style>
