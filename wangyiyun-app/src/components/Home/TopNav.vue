<template>
  <div class="topnav-container">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-liebiao2"></use>
    </svg>
    <div class="topnav-content">
      <span @click="$router.push('/infoUser')">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'My-TopNav'
}
</script>

<style lang="less" scoped>
.icon {
  width: 0.5rem;
  height: 0.5rem;
}
.topnav-container {
  width: 100%;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .topnav-content {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.4rem;

    .active {
      font-weight: 900;
    }
  }
}
</style>
