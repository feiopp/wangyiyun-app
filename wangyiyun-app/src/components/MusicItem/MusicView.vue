<template>
  <img :src="musicDetail.al.picUrl" alt="" class="bgimg" />
  <div class="detailTop">
    <div class="detailTopLeft">
      <svg class="icon" aria-hidden="true" @click="homeBack">
        <use xlink:href="#icon-zuojiantou1"></use>
      </svg>
      <div class="detailTopName">
        <Vue3Marquee>{{ musicDetail.name }} </Vue3Marquee>
        <div class="musicAutor">
          <span
            v-for="item in musicDetail.ar"
            :key="item"
            style="margin-right: 5px"
          >
            {{ item.name }}
          </span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="detailTopRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
  </div>
  <div class="detailContent" v-show="!isLyricShow">
    <!-- 磁盘 -->
    <img src="@/assets/cp1.png" alt="" class="img_cp" />
    <!-- 磁针 -->
    <img
      src="@/assets/ap.png"
      alt=""
      class="img_ap"
      :class="{img_ap_active: !isbtnShow}"
    />
    <!-- 专辑图片 -->
    <img
      :src="musicDetail.al.picUrl"
      alt=""
      class="img_al"
      :class="{img_al_active: !isbtnShow, img_al_paused: isbtnShow}"
      @click="isLyricShow = true"
    />
  </div>
  <!-- 将获取到的歌词渲染到盒子 -->
  <div class="musicLyric" ref="musicLyric" v-show="isLyricShow">
    <!-- {{ musicLyric.lyric }}
    {{ lyric }} -->
    <p
      v-for="item in lyric"
      :key="item"
      @click="isLyricShow = false"
      :class="{
        p_active:
          currentTime * 1000 >= item.time && currentTime * 1000 <= item.pre
      }"
    >
      {{ item.lrc }}
    </p>
  </div>
  <div class="detailFooter">
    <div class="footerTop">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-aixin"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiazai-wenjianxiazai-07"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinlechangpian"></use>
      </svg>
      <div class="countspan">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi-copy"></use>
        </svg>
        <img
          :src="musicDetail.al.picUrl"
          alt=""
          style="
             {
              width: 35px;
              height: 20px;
              position: absolute;
              top: -4px;
              left: 0.24rem;
              z-index: 998;
              filter: blur(0.12rem);
            }
          "
        />
        <span>10w+</span>
      </div>

      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao-dian-copy"></use>
      </svg>
    </div>
    <div class="footerContent">
      <input
        type="range"
        class="range"
        min="0"
        :max="duration"
        v-model="currentTime"
        step="0.05"
      />
    </div>
    <div class="footerBottom">
      <svg class="icon1" aria-hidden="true">
        <use xlink:href="#icon-24gl-repeatOnce2"></use>
      </svg>
      <svg class="icon2" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg class="icon3" aria-hidden="true" v-if="this.isbtnShow" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon3" aria-hidden="true" v-else @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon4" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon5" aria-hidden="true">
        <use xlink:href="#icon-liebiaozhankai"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import {Vue3Marquee} from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import {mapMutations, mapState} from 'vuex'
export default {
  name: 'My-MusicView',
  data() {
    return {
      isLyricShow: false // 歌词是否展示,默认不展示
    }
  },
  // 自定义属性获取来自父级的数据
  props: ['musicDetail', 'play', 'isbtnShow', 'addDuration'],
  methods: {
    // 返回到歌单列表是将磁盘显示
    homeBack() {
      this.isLyricShow = false
      this.updataisShowPopup()
    },
    goPlay(num) {
      let index = this.playlistIndex + num
      if (index < 0) {
        index = this.playlist.length - 1
      } else if (index === this.playlist.length) {
        index = 0
      }
      this.updataIsPlayListIndex(index)
    },
    // 解构 弹出层组件 的状态更新
    ...mapMutations(['updataisShowPopup', 'updataIsPlayListIndex'])
  },
  components: {Vue3Marquee},
  computed: {
    // 解构歌词数据,供页面渲染
    ...mapState([
      'musicLyric',
      'currentTime',
      'playlist',
      'playlistIndex',
      'duration'
    ]),
    // 计算属性
    lyric() {
      // var r = this.musicLyric.lyric.split(/s*\n*[.*?]s*/).filter((v) => !!v)
      // console.log(r)
      let arr
      if (this.musicLyric.lyric) {
        arr = this.musicLyric.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          // const min = item.match(/\d{2}(?=:)/gm)
          // const min = item.match(/\d{2}(?=:)/g)
          // const sec = item.match(/\d{2}(?=\.)/g)
          // const millsec = item.match(/\d{2,3}(?=])/g)
          // const lrc = item.slice(0).match(/([^\]]+)$/g)
          // const time =
          //   parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + millsec
          // return {min, sec, millsec, lrc, time}
          var min = item.slice(1, 3)
          var sec = item.slice(4, 6)
          var mill = item.slice(7, 10)
          var lrc = item.slice(11, item.length)
          var time =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill)
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9)
            lrc = item.slice(10, item.length)
            time =
              parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill)
          }
          return {min, sec, mill, lrc, time}
        })
        // 获取下一句歌词的时间,以及到达最后一句歌词是时间归零,不在播放
        arr.forEach((item, i) => {
          if (i === arr.length - 1 || isNaN(arr[i + 1].time)) {
            item.pre = 1000000
          } else {
            item.pre = arr[i + 1].time
          }
        })
      }
      // 截取的歌词
      console.log(arr)
      return arr
    }
  },
  mounted() {
    // 通过自定义属性获取到父级里面的单个的歌曲数据
    console.log(this.musicDetail)
    // 歌词
    console.log(this.musicLyric.lyric)
    // // 调用,获取歌曲总时长
    // this.addDuration()
  },
  updated() {
    // 调用,获取歌曲总时长
    this.addDuration()
  },
  // 监听器,监听当前时间的变化
  watch: {
    currentTime(newValue) {
      var p = document.querySelector('p.p_active')
      // 监听到的[p_active]属性
      console.log([p])
      if (p) {
        if (p.offsetTop >= 300) {
          this.$refs.musicLyric.scrollTop = p.offsetTop - 300
        }
      }
      if (newValue === this.duration) {
        if (this.playlistIndex === this.playlist.length - 1) {
          this.updataIsPlayListIndex(0)
          this.play()
        } else {
          this.updataIsPlayListIndex(this.playlistIndex + 1)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detailTop {
  background-color: rgba(151, 147, 147, 0.586);

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3rem;
  width: 100%;
  height: 1rem;
  .detailTopLeft {
    display: flex;
    justify-content: space-between;
    margin-left: 0.2rem;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      margin-bottom: -0.2rem;
      fill: #fff;
    }
    .detailTopName {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 0.4rem;
      .vue3-marquee {
        width: 100px;
        font-size: 0.28rem;
        font-family: '微软雅黑';
        color: #fff;
      }
      .musicAutor {
        display: flex;
        justify-content: flex-start;
        font-size: 0.24rem;
        color: rgb(83, 80, 80);
        .icon {
          margin-top: 0.075rem;
          width: 0.2rem;
          height: 0.2rem;
          fill: rgb(134, 128, 128);
        }
      }
    }
  }
  .detailTopRight {
    margin-right: 0.2rem;
    .icon {
      margin-bottom: -0.1rem;
      width: 0.6rem;
      height: 0.6rem;
      fill: #fff;
    }
  }
}
.bgimg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: drop-shadow(-4px 107px 6px gray);
  filter: blur(0.1rem);
  opacity: 0.9999;
}
.detailContent {
  background-color: rgba(151, 147, 147, 0.586);

  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .img_cp {
    width: 4.4rem;
    position: absolute;
    left: 1.56rem;
    top: 1.62rem;
  }
  .img_ap {
    width: 2rem;
    position: absolute;
    top: 0.0368rem;
    left: 4.48rem;
    margin-left: -1rem;
    z-index: 2;
    transform-origin: 0 0;
    transform: rotate(-20deg);
    transition: all 1s;
  }
  .img_ap_active {
    width: 100px;
    position: absolute;
    top: 0.0368rem;
    left: 4.48rem;
    margin-left: -1rem;
    z-index: 2;
    transform-origin: 0 0;
    transform: rotate(-1deg);
    transition: all 1s;
  }
  .img_al {
    position: absolute;
    top: 2.46rem;
    left: 2.4078rem;
    width: 2.74rem;
    border-radius: 50%;
    // z-index: -1;
    animation: rotate_al 25s linear infinite;
  }
  .img_al_active {
    animation-play-state: running;
  }
  .img_al_paused {
    animation-play-state: paused;
  }
  @keyframes rotate_al {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
}
.musicLyric {
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 0.2rem;
  // margin-bottom: 1rem;
  width: 100%;
  height: 8.6736rem;
  overflow: scroll;
  scroll-behavior: auto;
  transition: all 1s;
  background-color: rgba(151, 147, 147, 0.586);

  p {
    font-size: 0.28rem;
    margin-bottom: 0.3rem;
    color: rgb(27, 251, 154);
  }
  .p_active {
    font-size: 0.36rem;
    color: rgb(248, 232, 232);
  }
}
.detailFooter {
  background-color: rgba(151, 147, 147, 0.586);

  width: 100%;
  .footerTop {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      fill: #fff;
      span {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .countspan {
      position: relative;
      span {
        position: absolute;
        top: 0;
        left: 0.24rem;
        font-size: 0.24rem;
        color: #fff;
        z-index: 999;
        // background-color: rgb(204, 192, 192);
      }
    }
  }
  .footerContent {
    width: 100%;
    height: 1rem;
    .range {
      width: 100%;
      height: 0.02rem;
    }
  }

  .footerBottom {
    background-color: rgba(151, 147, 147, 0.586);

    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon1 {
      width: 0.4rem;
      height: 0.4rem;
    }
    .icon2 {
      fill: rgba(255, 255, 255, 0.888);
      width: 0.4rem;
      height: 0.4rem;
    }
    .icon3 {
      fill: #fff;
      width: 0.8rem;
      height: 0.8rem;
    }
    .icon4 {
      fill: rgba(255, 255, 255, 0.888);
      width: 0.4rem;
      height: 0.4rem;
    }
    .icon5 {
      fill: rgba(255, 255, 255, 0.888);
      width: 0.38rem;
      height: 0.38rem;
    }
  }
}
</style>
