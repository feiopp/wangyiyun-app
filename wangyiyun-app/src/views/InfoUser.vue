<template>
  <div class="infoUser-container">
    <div class="goback">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou1"></use>
      </svg>
    </div>
    <img class="bgimg" :src="this.User.data.profile.backgroundUrl" alt="" />
    <img class="autorimg" :src="this.User.data.profile.avatarUrl" alt="" />
    <p class="word">{{ this.User.data.profile.nickname }}</p>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
export default {
  name: 'My-User',
  data() {
    return {
      User: {}
    }
  },
  // computed: {
  //   ...mapState(['user'])
  // },
  beforeMount() {
    this.User = JSON.parse(localStorage.getItem('user'))
    console.log(this.User, 'User')
  }
}
</script>

<style lang="less" scoped>
.infoUser-container {
  position: relative;
  width: 100%;
  height: 100%;
  .goback {
    position: relative;
    width: 100%;
    .icon {
      position: absolute;
      left: 0.26rem;
      top: 0.26rem;
      width: 0.6rem;
      height: 0.6rem;
      fill: #fff;
    }
  }
  .bgimg {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 5rem;
  }

  .autorimg {
    position: absolute;
    left: 3.23rem;
    top: 4.5rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }
  .word {
    position: absolute;
    left: 3.16rem;
    top: 5.88rem;
    font-size: 0.4rem;
    color: #000;
  }
}
</style>
