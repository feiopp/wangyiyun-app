<template>
  <div class="musicItem-container">
    <top-item :playList="state.musicItemList"></top-item>
    <middle-item
      :songsList="state.itemMusic"
      :subscribedCount="state.musicItemList.subscribedCount"
    ></middle-item>
  </div>
</template>

<script>
// useRoute 属于vue-router 里面的方法
import {useRoute} from 'vue-router'
import {onMounted, reactive} from 'vue'
import {getMusicItemList, getListMusic} from '@/request/api/home.js'
import '../../public/js/rem.js'
// 导入组件
import TopItem from '@/components/MusicItem/TopItem.vue'
import MiddleItem from '@/components/MusicItem/MiddleItem.vue'
export default {
  components: {TopItem, MiddleItem},
  name: 'My-MusicItem',
  setup() {
    const state = reactive({
      musicItemList: {}, // 歌单详情页
      itemMusic: [] // 歌单的歌曲
    })
    onMounted(async () => {
      const id = useRoute().query.id // 获取歌单详情页的id
      console.log('歌单详情页的id:' + id)
      console.log(id)
      // 获取歌单详情页
      const {data: res} = await getMusicItemList(id)
      console.log('歌单详情页:' + res)
      console.log(res)
      state.musicItemList = res.playlist

      // 获取歌单的歌曲
      const {data: result} = await getListMusic(id)
      console.log('歌单歌曲:' + result)
      console.log(result)
      state.itemMusic = result.songs
      // 防止数据丢失,用 sessionStorage 在本地保存
      sessionStorage.setItem('itemDetail', JSON.stringify(state))
    })
    return {state}
  }
}
</script>

<style lang="less" scoped></style>
