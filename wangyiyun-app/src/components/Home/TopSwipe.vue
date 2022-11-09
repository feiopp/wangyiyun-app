<template>
  <div class="topswiper-container">
    <!-- <van-button type="primary">主要按钮</van-button> -->
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in states.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import axios from 'axios'
// import instance from '../../request/index.js'
import {getApi} from '@/request/api/home.js'
import {reactive, onMounted} from 'vue'
export default {
  name: 'My-TopSwipe',
  setup() {
    const states = reactive({
      images: []
    })
    onMounted(async () => {
      // instance.get('/banner?type=2').then(({data: res}) => {
      //   console.log(res)
      //   states.images = res.banners
      // })
      const {data: res} = await getApi()
      states.images = res.banners

      // const {data: res} = await this.$http.get('/banner?type=2')
      // console.log(res)
    })
    return {states}
  }
}
</script>

<style lang="less" scoped>
.topswiper-container {
  padding: 0 0.2rem;

  .van-swipe {
    width: 100%;
    height: 3rem;

    .van-swipe-item {
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }

    :deep(.van-swipe__indicator--active) {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>
