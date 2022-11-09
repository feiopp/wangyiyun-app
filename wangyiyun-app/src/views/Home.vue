<template>
  <div class="home-container">
    <top-nav></top-nav>
    <top-swipe></top-swipe>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
import TopNav from '@/components/Home/TopNav.vue'
import TopSwipe from '@/components/Home/TopSwipe.vue'
import IconList from '@/components/Home/IconList.vue'
import MusicList from '@/components/Home/MusicList.vue'
export default {
  components: {TopNav, TopSwipe, IconList, MusicList},
  name: 'My-Home'
}
</script>

<style lang="less" scoped></style>
