<template>
  <div class="iconList-container">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhibo"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'My-iconList'
}
</script>

<style lang="less" scoped>
.iconList-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0.2rem 0 0 0;
  .iconItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    .icon {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
