import instance from '..'
// 1. 获取首页轮播图的数据
export function getApi() {
  return instance({
    method: 'GET',
    url: '/banner?type=2'
  })
}

// 后续需要获取的数据
// 1.获取歌单数据
export function getMusic() {
  return instance({
    method: 'GET',
    url: '/personalized?limit=30'
  })
}

// 2.获取歌单详情页数据
export function getMusicItemList(data) {
  return instance({
    method: 'GET',
    url: `/playlist/detail?id=${data}`
  })
}

// 3.获取歌单详情里的所有歌曲
export function getListMusic(data) {
  return instance({
    method: 'GET',
    url: `/playlist/track/all?id=${data}&limit&offset=1`,
    timeout: 100000000
  })
}

// 4.获取歌词
export function getMusicLyric(data) {
  return instance({
    method: 'GET',
    url: `/lyric?id=${data}`,
    timeout: 100000000
  })
}

// 5.获取搜索歌词
export function getSearchMusic(data) {
  return instance({
    method: 'GET',
    url: `/cloudsearch?keywords=${data}`
  })
}

// 6.获取登录接口
export function getPhonelogin(data) {
  return instance({
    method: 'GET',
    url: `/login/cellphone?phone=${data.phone}&password=${data.password}`
  })
}

// 7.获取用户信息
export function getUser(data) {
  return instance({
    method: 'GET',
    url: `/user/detail?uid=${data}`
  })
}
