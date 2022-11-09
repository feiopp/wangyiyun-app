<template>
  <div class="search-container">
    <!-- 搜索顶部 -->
    <div class="searchTop">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou1"></use>
      </svg>
      <input
        type="text"
        placeholder="周杰伦"
        v-model.trim="searchKey"
        @keydown.enter="enterKey"
      />
    </div>
    <!-- 搜索顶部 -->

    <!-- 搜索历史 -->
    <div class="searchHistory">
      <p class="history">历史</p>
      <span
        v-for="item in searchList"
        :key="item"
        class="keyword"
        @click="historyMusic(item)"
      >
        {{ item }}
      </span>
      <svg class="icon" aria-hidden="true" @click="delHistory">
        <use xlink:href="#icon-shanchu"></use>
      </svg>
    </div>
    <!-- 搜索历史 -->

    <!-- 搜索到的歌单 -->
    <div class="searchMusic">
      <div class="Top">
        <h3>单曲</h3>
        <div class="buttonAll">
          <svg class="icon" aria-hidden="true" @click="delHistory">
            <use xlink:href="#icon-playfill"></use>
          </svg>
          <span>播放全部</span>
        </div>
      </div>
      <div class="searchMList">
        <div
          class="music"
          v-for="(item, index) in searchHistoryMusic"
          :key="index"
        >
          <div class="listLeft" @click="playMusicIndex(item)">
            <div class="keyname">
              <span>{{ item.name }}</span>
              <p>
                <span
                  v-for="(item1, i) in item.ar"
                  :key="i"
                  style="font-size: 0.24rem; color: rgba(146, 146, 144, 1)"
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
              <use xlink:href="#icon-liebiao-dian"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- 搜索到的歌单 -->
  </div>
</template>

<script>
import {getSearchMusic} from '@/request/api/home.js'
export default {
  name: 'My-Search',
  data() {
    return {
      searchList: [],
      searchKey: '',
      searchHistoryMusic: []
    }
  },
  mounted() {
    this.searchList = JSON.parse(localStorage.getItem('searchItem'))
      ? JSON.parse(localStorage.getItem('searchItem'))
      : []
  },
  methods: {
    // 调用enterKey时,获取搜索关键字音乐
    async enterKey() {
      if (this.searchKey !== '') {
        this.searchList.unshift(this.searchKey)
        this.searchList = [...new Set(this.searchList)] // 数组去重
        if (this.searchList.length > 10) {
          // 限制数组长度
          this.searchList.splice(this.searchList.length - 1, 1)
        }

        const {data: res} = await getSearchMusic(this.searchKey)
        console.log(res, '搜索音乐')
        this.searchHistoryMusic = res.result.songs
        localStorage.setItem('searchItem', JSON.stringify(this.searchList))
        this.searchKey = ''
      }
    },
    delHistory() {
      localStorage.removeItem('searchList')
      this.searchList = []
    },
    async historyMusic(item) {
      // 点击历史记录, 获取搜索关键字音乐
      const {data: res} = await getSearchMusic(item)
      console.log(res.result.songs)
      this.searchHistoryMusic = res.result.songs
    },
    playMusicIndex(item) {
      this.$store.commit('pushPlayList', item)
      this.$store.commit(
        'updataIsPlayListIndex',
        this.$store.state.playlist.length - 1
      )
      this.$store.commit('updataIsBtnShow')
    }
  }
}
</script>

<style lang="less" scoped>
.search-container {
  padding: 0.2rem;
  width: 100%;
  height: 12.68rem;
  background-color: rgb(246, 247, 241);
  .searchTop {
    display: flex;
    align-items: center;
    width: 100%;
    height: 1rem;
    .icon {
      margin-left: 10px;
      width: 0.5rem;
      height: 0.5rem;
    }
    input {
      margin-left: 20px;
      width: 80%;
      height: 0.5rem;
      border: none;
      border-bottom: 0.02rem solid #000;
    }
  }
  .searchHistory {
    position: relative;
    width: 90%;
    padding: 0.2rem;
    .history {
      // padding: 0.1rem;
      font-weight: 700;
    }
    .keyword {
      display: inline-block;
      margin: 0.1rem 0.1rem;
      padding: 0.1rem 0.2rem;
      background-color: rgb(255, 255, 255);
      color: rgba(146, 146, 144, 1);
      border-radius: 0.3rem;
      font-size: 0.26rem;
    }
    .icon {
      position: absolute;
      right: -0.38rem;
      top: 0.18rem;
      width: 0.4rem;
      height: 0.4rem;
    }
  }
  .searchMusic {
    margin-top: 0.2rem;
    padding: 0.2rem;
    background-color: #fff;
    border-radius: 0.2rem 0.2rem 0 0;
    width: 100%;
    .Top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.2rem;
      padding: 0 0.2rem 0.3rem 0.2rem;
      border-bottom: 0.01rem solid #ccc;
      .buttonAll {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.05rem 0.1rem;
        border: 0.01rem solid #000;
        border-radius: 0.3rem;
        font-size: 0.24rem;
        .icon {
          margin-bottom: -0.02rem;
          width: 0.3rem;
          height: 0.3rem;
        }
      }
    }
    .searchMList {
      width: 100%;
      margin-bottom: 1.4rem;
      .music {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.01rem solid rgb(238, 231, 231);
        width: 100%;
        height: 1rem;
        .listLeft {
          display: flex;
          justify-content: space-between;
          align-items: center;
          // margin-left: 0.2rem;
          height: 1rem;
          .keyname {
            display: flex;
            flex-direction: column;
            align-content: space-between;
            margin-left: 0.2rem;
            span:first-child {
              width: 4rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 0.1rem;
              font-size: 0.28rem;
              font-weight: 500;
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
            width: 0.4rem;
            height: 0.4rem;
            fill: rgb(145, 143, 143);
          }
        }
      }
    }
  }
}
</style>
