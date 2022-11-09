import {getMusicLyric, getPhonelogin} from '@/request/api/home.js'
// import {get} from 'core-js/core/dict'
import {createStore} from 'vuex'

export default createStore({
  state: {
    playlist: [
      // 默认播放列表
      {
        al: {
          id: 153717582,
          name: '黄昏',
          pic: 109951167996604000,
          picUrl:
            'https://p2.music.126.net/BdL4K5EJ3KR4dv4AfdyPCw==/109951167996604008.jpg',
          pic_str: '109951167996604008'
        },
        id: 1992049280,
        ar: [{name: '张小伙'}, {name: '粥粥zxr'}],
        name: '黄昏'
      }
    ],
    playlistIndex: 0, // 默认播放序号
    isbtnShow: true, // 暂停按钮显示
    isShowPopup: false, // 默认不展示弹出层
    musicLyric: {}, // 获取到的歌曲
    currentTime: 0, // 歌词的当前时间
    duration: 0, // 歌曲总时间
    isLogin: false, // 检验是否登录成功
    isFooterShow: true, // 判断是否显示底部组件
    token: '',
    user: {} // 用户信息
  },
  getters: {},
  mutations: {
    updataIsBtnShow(state, value) {
      state.isbtnShow = value
    },
    updataIsPlayList(state, value) {
      state.playlist = value
      console.log(state.playlist)
    },
    pushPlayList(state, value) {
      state.playlist.push(value)
    },
    updataIsPlayListIndex(state, value) {
      state.playlistIndex = value
    },
    updataisShowPopup(state) {
      state.isShowPopup = !state.isShowPopup
    },
    updataMusicLyric(state, value) {
      state.musicLyric = value
    },
    updataCurrentTime(state, value) {
      console.log(state.currentTime)
      state.currentTime = value
    },
    updataDuration(state, value) {
      console.log('歌曲总时间')
      console.log(state.duration)
      state.duration = value
    },
    updataIsLogin(state, value) {
      state.isLogin = value
    },
    updataToken(state, value) {
      state.token = value
      localStorage.setItem('token', state.token)
    },
    updataUser(state, value) {
      state.user = value
      localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
    async getLyric(context, value) {
      const {data: res} = await getMusicLyric(value)
      console.log('获取歌词')
      console.log(res)
      context.commit('updataMusicLyric', res.lrc)
    },
    async getLoginMessage(content, value) {
      const {data: res} = await getPhonelogin(value)
      // console.log(res)
      return res
    }
  },
  modules: {}
})
