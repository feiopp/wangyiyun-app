<template>
  <div class="musicList-container">
    <div class="music-top">
      <div class="music-title">发现好歌单</div>
      <div class="music-more"><a href="#" class="more">查看更多</a></div>
    </div>
    <div class="music-content">
      <van-swipe :loop="false" :width="150" :show-indicators="false">
        <van-swipe-item v-for="item in states.musicList" :key="item">
          <router-link
            :to="{path: '/musicitem', query: {id: item.id}}"
            style="color: #000"
          >
            <img :src="item.picUrl" alt="" />
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-play"></use>
              </svg>
              {{ changeCount(item.playCount) }}
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import {getMusic} from '@/request/api/home.js'
// vue 3写法
import {reactive, onMounted} from 'vue'
export default {
  name: 'My-MusicList',
  // vue 2写法
  // data() {
  //   return {
  //     musicList: []
  //   }
  // },
  // methods: {
  //   async getMusicList() {
  //     const {data: res} = await getMusic()
  //     console.log(res)
  //     this.musicList = res.result
  //   },
  //   changeCount(num) {
  //     if (num >= 100000000) {
  //       return (num / 100000000).toFixed(1) + '亿'
  //     } else if (num >= 10000) {
  //       return (num / 10000).toFixed(1) + '万'
  //     }
  //   }
  // },
  // mounted() {
  //   this.getMusicList()
  // }
  // vue 2写法

  // vue 3写法
  setup() {
    const states = reactive({
      musicList: []
    })
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + '亿'
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + '万'
      }
    }
    onMounted(async () => {
      const {data: res} = await getMusic()
      console.log(res)
      states.musicList = res.result
    })

    return {states, changeCount}
  }
  // vue 3写法
}
</script>

<style lang="less" scoped>
.musicList-container {
  width: 100%;
  margin-top: 0.2rem;
  .music-top {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    .music-title {
      height: 1rem;
      font-size: 0.42rem;
      font-weight: 700;
      line-height: 1rem;
    }
    .music-more {
      width: 80px;
      height: 1rem;
      font-size: 0.32rem;
      padding: 0.2rem 0;
      .more {
        display: block;
        width: 100%;
        height: 0.6rem;
        text-align: center;
        line-height: 0.5rem;
        border: 0.02rem solid #ccc;
        border-radius: 0.32rem;
      }
    }
  }
  .music-content {
    width: 100%;
    height: 5rem;
    .van-swipe {
      height: 100%;
      .van-swipe-item {
        margin-left: 0.2rem;
        img {
          position: absolute;
          width: 100%;
          height: 3rem;
          border: 0.02rem solid #000;
          border-radius: 0.2rem;
        }
        .playCount {
          position: relative;
          top: 0.2rem;
          right: -1.2rem;
          z-index: 999;
          height: 0.4rem;
          font-size: 0.32rem;
          color: #fff;
          vertical-align: text-top;
        }
        .icon {
          width: 0.32rem;
          height: 0.32rem;
          use {
            color: #fff !important;
          }
        }
        .name {
          display: block;
          position: relative;
          top: 2.7rem;
          // left: 0;
          // height: 0.4rem;
        }
      }
    }
  }
}
</style>
