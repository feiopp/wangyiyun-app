<template>
  <div class="loginBody">
    <p>网易账号登录</p>
    <input
      type="text"
      name="account"
      class="account"
      v-model.trim="account"
      placeholder="请输入手机号/账号"
    />
    <input
      type="password"
      name="password"
      class="password"
      v-model.trim="password"
      placeholder="请输入密码"
    />
    <button class="btn" @click="Login">登录</button>
  </div>
</template>

<script>
import {getUser} from '@/request/api/home.js'
export default {
  name: 'My-Login',
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    async Login() {
      const res = await this.$store.dispatch('getLoginMessage', {
        phone: this.account,
        password: this.password
      })
      console.log(res) // 个人中心数据
      if (res.code === 200) {
        // 如果返回的 code 是 200, 说明登入成功,跳转到个人中心页面
        this.$store.commit('updataIsLogin', true)
        this.$store.commit('updataToken', res.token)
        const result = await getUser(res.account.id)
        // console.log(result) // 用户详情数据
        this.$store.commit('updataUser', result)
        this.$router.push('/infoUser')
      } else {
        alert('手机号或密码错误')
        this.password = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.loginBody {
  width: 100%;
  padding: 0.2rem;
  p {
    font-size: 0.4rem;
    font-weight: 500;
  }
  .account {
    display: block;
    margin: 1rem 0 0.8rem 0;
    width: 100%;
    height: 0.6rem;
    border: none;
    border-bottom: 0.02rem solid rgb(224, 215, 215);
  }
  .password {
    display: block;
    margin: 0.8rem 0;
    width: 100%;
    height: 0.6rem;
    border: none;
    border-bottom: 0.02rem solid rgb(224, 215, 215);
  }
  .btn {
    display: block;
    margin-left: 0.16rem;
    padding: 8px;
    width: 95%;
    background-color: red;
    color: #fff;
    border-radius: 0.4rem;
    border: none;
    letter-spacing: 3px;
  }
}
</style>
