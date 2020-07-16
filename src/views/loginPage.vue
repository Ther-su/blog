<template>
  <div class="main-box">
    <div class="title-box">
      后台登录入口
    </div>
    <div>
      <div class="text-box">用户名：</div>
      <input type="text" v-model="username">
    </div>
    <div>
      <div class="text-box">密码：</div>
      <input type="password" v-model="password">
    </div>
    <button @click="login">登录</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$http.post('/user', {
        username: this.username,
        password: this.password
      }).then((ret) => {
        window.sessionStorage.setItem('token', ret.data.token)
        this.$router.push('/manage')
      })
        .catch(err => {
          this.$store.commit('setModalHint', { text: err.response.data.message })
        })
    }
  }
}
</script>
<style scoped>
.title-box {
  color: #444;
  font-size: 2vw;
}
.main-box {
  width: 50vw;
  background-color: #fff;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 8vh auto;
}
.text-box {
  color: #444;
  font-size: 1vw;
}
input {
  width: 16vw;
  height: 3vh;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
  background-color: #efefef;
}
button {
  width: 5vw;
  height: 4vh;
  background-color: #97DFFD;
  color: #fff;
  border: #97DFFD;
  border-radius: 8px;
  font-size: 0.8vw;
}
button:hover {
  background-color: #48456D;
  cursor: pointer;
}
</style>
