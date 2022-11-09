<template>
  <div class="topItem-container">
    <div class="item-content">
      <img :src="playList.coverImgUrl" alt="" class="bgpic" />
      <div class="itemTop">
        <div class="topLeft">
          <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-zuojiantou1"></use>
          </svg>
          <span>歌单</span>
        </div>
        <div class="topRight">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao2"></use>
          </svg>
        </div>
      </div>
      <div class="itemMiddle">
        <img :src="playList.coverImgUrl" alt="" class="M_left" />
        <div class="M_right">
          <p class="rightTop">{{ playList.name }}</p>
          <p class="rightMiddle" v-if="playList.creator != null">
            <img :src="playList.creator.avatarUrl" alt="" class="autorpic" />
            <span class="nickname">{{ playList.creator.nickname }}</span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </p>
          <p class="rightBottom">{{ playList.description }}</p>
        </div>
      </div>
      <div class="itemBottom">
        <div class="bottomSon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiaoxi"></use>
          </svg>
          <span class="bottomFont">{{ playList.commentCount }}</span>
        </div>
        <div class="bottomSon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
          </svg>
          <span class="bottomFont">{{ playList.shareCount }}</span>
        </div>
        <div class="bottomSon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiazai-wenjianxiazai-07"></use>
          </svg>
          <span class="bottomFont">下载</span>
        </div>
        <div class="bottomSon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-show_duoxuan"></use>
          </svg>
          <span class="bottomFont">多选</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {reactive} from 'vue'
export default {
  name: 'My-TopItem',
  props: ['playList'],
  setup(props) {
    // const state = reactive({
    //   playlist: {}
    // })
    console.log('自定义属性获取到的数据:' + props)
    console.log(props)
    // state.playlist = props
    // console.log(state.playlist)

    // state.playlist.playList = JSON.parse(sessionStorage.getItem('itemDetail'))

    // return {state}

    // if (props.playList.creator === '') {
    //   props.playList.creator = JSON.parse(
    //     sessionStorage.getItem().musicItemList
    //   ).creator
    // }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.topItem-container {
  width: 100%;
  .item-content {
    position: relative;
    width: 100%;
    height: 7rem;
    .bgpic {
      position: fixed;
      z-index: -1;
      width: 100%;
      height: 8rem;
      filter: blur(0.8rem);
    }
    .itemTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0 0 0;
      // margin-top: 0.2rem;
      width: 100%;
      height: 1rem;
      .icon {
        width: 0.6rem;
        height: 0.6rem;
        fill: #fff;
      }
      .topLeft,
      .topRight {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 30%;
        height: 100%;
        span {
          font-size: 0.4rem;
          color: #fff;
        }
      }
    }
    .itemMiddle {
      display: flex;
      justify-content: space-between;
      padding: 0.7rem 0 0 0.2rem;
      .M_left {
        width: 3rem;
        height: 3rem;
        // border: 0.02rem solid #ccc;
        border-radius: 0.26rem;
      }
      .M_right {
        display: flex;
        flex-direction: column;
        align-content: space-around;
        width: 4rem;
        height: 3rem;
        .rightTop {
          margin-left: 0.2rem;
          color: #fff;
          font-size: 0.32rem;
          font-family: 'Courier New', Courier, monospace;
          letter-spacing: -0.04rem;
        }
        .rightMiddle {
          height: 0.8rem;
          margin: 0.2rem 0 0 0.2rem;
          vertical-align: text-top;
          line-height: 0.8rem;
          .nickname {
            margin-left: 0.2rem;
            font-size: 0.32rem;
            font-family: 'Courier New', Courier, monospace;
            letter-spacing: -0.04rem;

            color: rgb(200, 194, 192);
          }
          .autorpic {
            width: 0.66rem;
            border-radius: 0.35rem;
            margin-bottom: -0.2rem;
          }
          .icon {
            width: 0.2rem;
            height: 0.2rem;
            fill: rgb(200, 194, 192);
          }
        }
        .rightBottom {
          margin: 0.15rem 0 0 0.2rem;
          width: 3.2rem;
          height: 1rem;
          font-size: 0.2rem;
          color: rgb(167, 144, 139);
          // white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: -0.03rem;
        }
      }
    }
    .itemBottom {
      display: flex;
      justify-content: space-around;
      margin-top: 0.4rem;
      width: 100%;
      .bottomSon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .icon {
          margin-bottom: 0.2rem;
          width: 0.6rem;
          height: 0.6rem;
          fill: #fff;
        }
        .bottomFont {
          color: #fff;
        }
      }
    }
  }
}
</style>
