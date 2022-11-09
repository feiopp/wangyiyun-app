<template>
  <div class="Footer-container">
    <div class="footLeft" @click="updataisShowPopup">
      <img :src="playlist[playlistIndex].al.picUrl" alt=" " />
      <div class="musicName">
        <span>{{ playlist[playlistIndex].name }}</span>
        <span>横滑可以切换上下首哦</span>
      </div>
    </div>
    <div class="footRight">
      <svg class="icon" aria-hidden="true" @click="play" v-if="this.isbtnShow">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
      <audio
        ref="audio"
        :src="`https://music.163.com/song/media/outer/url?id=${playlist[playlistIndex].id}.mp3`"
      ></audio>
      <van-popup
        v-model:show="isShowPopup"
        close-icon-position="top-left"
        position="right"
        :style="{height: '100%', width: '100%'}"
        duration="0.5"
      >
        <music-view
          :musicDetail="playlist[playlistIndex]"
          :play="play"
          :isbtnShow="isbtnShow"
          :addDuration="addDuration"
        ></music-view>
      </van-popup>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import MusicView from '../MusicItem/MusicView.vue'
export default {
  components: {MusicView},
  name: 'My-Footer',
  data() {
    return {
      interVal: 0
    }
  },
  computed: {
    // 解构出来使用
    ...mapState(['playlist', 'playlistIndex', 'isbtnShow', 'isShowPopup'])
  },
  updated() {
    // 更新页面时也获取歌曲数据
    this.$store.dispatch('getLyric', this.playlist[this.playlistIndex].id)
    // console.log('是否暂停中:')
    // console.log(this.$refs.audio.paused)
    // if (this.$refs.audio.paused) {
    //   clearInterval(this.interVal)
    // }
    // if (!this.$refs.audio.paused) {
    //   this.updataTime()
    // }
    // 歌单换歌更新页面是也需要获取歌曲总时间
    this.updataDuration()
    // 歌单换歌更新页面是也需要获取歌曲当前时间,调用定时器 updataTime
    this.$refs.audio.paused ? clearInterval(this.interVal) : this.updataTime()
  },
  mounted() {
    // console.log('是否暂停中:')
    // console.log(this.$refs.audio.paused)
    console.log(this.$refs)
    // 渲染界面时也获取歌词数据
    this.$store.dispatch('getLyric', this.playlist[this.playlistIndex].id)
    // if (this.$refs.audio.paused) {
    //   clearInterval(this.interVal)
    // } else {
    //   this.updataTime()
    // }
    // this.updataDuration()
  },
  methods: {
    play() {
      // 判断音乐是否播放
      if (this.$refs.audio.paused) {
        // 音乐暂停为 true
        this.$refs.audio.play()
        this.updataIsBtnShow(false)
        // console.log('此时的isBtnShow:')
        // console.log(this.$refs.audio.paused)
        // 调用定时器,播放则进行调用函数传值
        this.updataTime()
      } else {
        this.$refs.audio.pause()
        this.updataIsBtnShow(true)
        // console.log('此时的isBtnShow:')
        // console.log(this.$refs.audio.paused)
        // 清除定时器
        clearInterval(this.interVal)
      }
    },
    updataTime() {
      // 更新歌曲当前时间
      this.interVal = setInterval(() => {
        this.updataCurrentTime(this.$refs.audio.currentTime)
      }, 1000)
    },
    addDuration() {
      this.updataDuration(this.$refs.audio.duration)
    },
    ...mapMutations([
      'updataIsBtnShow',
      'updataisShowPopup',
      'updataCurrentTime',
      'updataDuration'
    ])
  },
  watch: {
    // 监听歌曲下标是否更新,更新则执行下面方法
    playlistIndex() {
      this.$refs.audio.autoplay = true
      // 如果是暂停状态,改变图标
    },
    // 监听歌曲列表是否更新，以达到播放图标的转换
    playlist() {
      this.$refs.audio.autoplay = true
      if (this.$refs.audio.pause) {
        this.updataIsBtnShow(false)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.Footer-container {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  border-top: 0.02rem solid #999;
  border-bottom: 0.02rem solid #fff;
  .footLeft {
    display: flex;
    justify-content: space-around;
    margin-left: 0.2rem;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
    }
    .musicName {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0.2rem 0 0 0.2rem;
      height: 0.7rem;
      span:first-child {
        width: 4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'SimHei';
        font-size: 14px;
        font-weight: 900;
      }
      span:last-child {
        font-size: 11px;
        color: rgb(158, 155, 155);
      }
    }
  }
  .footRight {
    // display: flex;
    // justify-content: space-between;
    .icon {
      margin-left: 0.2rem;
      margin-right: 0.2rem;
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>
