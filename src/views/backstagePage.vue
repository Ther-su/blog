<template>
  <div class="main-box">
    <div class="tab-box">
      <router-link tag="div" to="/edit" class="tab">编辑新博客</router-link>
      <router-link tag="div" to="/manage" class="tab">管理旧博客</router-link>
      <div :class="['line',{'line-1':isActive===1},{'line-2':isActive===2}]"></div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  watch: {
    $route () {
      if (this.$route.path === '/edit') {
        this.isActive = 1
      } else if (this.$route.path === '/manage') {
        this.isActive = 2
      }
    }
  },
  data () {
    return {
      isActive: 1
    }
  }
}
</script>
<style scoped>
.main-box {
  background-color: #fff;
  margin: 8vh auto;
  padding: 4vw;
  width: 60vw;
}
.tab-box {
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 20vw;
}
.tab-box:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #e4e7ed;
}
.tab {
  cursor: pointer;
  width: 20vw;
  height: 6vh;
  text-align: center;
  line-height: 6vh;
}
.line {
  width:10vw;
  position: absolute;
  background-color: #2BAFEA;
  border: #2BAFEA 1px solid;
  bottom: 0;
  z-index: 5;
  transition: all 0.3s ease;
}
.line-1 {
  left: 0;
}
.line-2 {
  left:10vw;
}
</style>
