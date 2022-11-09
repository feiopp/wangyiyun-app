<template>
  <div class="musicList-container">
    <div class="musicListTop">
      <div class="musicTopLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuyi_bofang"></use>
        </svg>
        <span class="playAll">
          播放全部
          <small class="musicCount">(共{{ songsList.length }}首)</small>
        </span>
      </div>
      <div class="musicTopRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tianjia"></use>
        </svg>
        <span>收藏({{ subscribedCount }})</span>
      </div>
    </div>
    <ul class="musicListMiddle">
      <li class="musicList" v-for="(item, index) in songsList" :key="index">
        <div class="listLeft" @click="playMusic(index)">
          <span class="index">{{ index + 1 }}</span>
          <div class="keyname">
            <span>{{ item.name }}</span>
            <p>
              <span
                v-for="(item1, i) in item.ar"
                :key="i"
                style="font-size: 0.24rem; color: #ccc"
                >{{ item1.name }}
              </span>
            </p>
          </div>
        </div>
        <div class="listRight">
          <svg class="icon" aria-hidden="true" v-if="item.mv != 0">
            <use xlink:href="#icon-shipin1"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao2"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
// import {reactive, onMounted} from 'vue'
// import {getListMusic} from '@/request/api/home.js'
export default {
  name: 'My-MiddleItem',
  props: ['songsList', 'subscribedCount'],
  setup(props) {
    console.log(props)
  },
  methods: {
    playMusic(i) {
      this.updataIsPlayList(this.songsList)
      this.updataIsPlayListIndex(i)
      this.updataIsBtnShow(false)
    },
    ...mapMutations([
      'updataIsPlayList',
      'updataIsPlayListIndex',
      'updataIsBtnShow'
    ])
  }
}
</script>

<style lang="less" scoped>
.musicList-container {
  width: 100%;
  // height: 7rem;
  border: 0.02rem solid #fff;
  border-radius: 0.4rem 0.4rem 0 0;
  background-color: #fff;
  .musicListTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 0.02rem solid rgb(234, 218, 218);
    // height: 1rem;
    .musicTopLeft {
      margin: 0.05rem 0 0 0.2rem;
      width: 50%;
      height: 1rem;
      line-height: 1rem;
      // background-color: pink;
      .icon {
        margin-bottom: -0.1rem;
        width: 0.5rem;
        height: 0.5rem;
        fill: #000;
      }
      .playAll {
        margin-left: 0.2rem;
        font-size: 0.32rem;
        font-weight: 700;
        font-family: 'Courier New', Courier, monospace;
        letter-spacing: -0.04rem;
        .musicCount {
          margin-left: -0.15rem;
          font-size: 0.26rem;
          color: rgb(188, 182, 182);
        }
      }
    }
    .musicTopRight {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-right: 0.16rem;
      margin-top: -0.04rem;
      width: 2.4rem;
      height: 0.8rem;
      background-color: red;
      border-radius: 0.5rem;
      color: #fff;
      font-size: 0.28rem;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      .icon {
        width: 0.35rem;
        height: 0.35rem;
        fill: #fff;
      }
    }
  }
  .musicListMiddle {
    width: 100%;
    margin-bottom: 1.4rem;
    .musicList {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 1rem;
      .listLeft {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // margin-left: 0.2rem;
        height: 1rem;
        .index {
          width: 0.7rem;
          text-align: center;
          font-size: 0.32rem;
        }
        .keyname {
          display: flex;
          flex-direction: column;
          align-content: space-between;
          margin-left: 0.3rem;
          span:first-child {
            width: 4rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0.1rem;
            font-size: 0.28rem;
            font-weight: 700;
          }
          p {
            width: 4rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .listRight {
        margin-right: 0.2rem;
        .icon {
          margin: 0.15rem 0 0 0.4rem;
          width: 0.5rem;
          height: 0.5rem;
          fill: rgb(145, 143, 143);
        }
      }
    }
  }
}
</style>
