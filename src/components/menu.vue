<template>
  <div>
    <!--PC端导航-->
    <div class="pc-nav">
      <div class="nav-item">
        <router-link tag="div" to="/home" class="link-item">
          <div class="icon-box"><img src="../assets/home.png" alt=""></div>
          <div>主页</div>
        </router-link>
      </div>
      <div class="nav-item" @mouseleave="isShow=false">
        <div class="link-item" @click="phoneShow" @mouseenter="isShow=true">
          <div class="icon-box"><img src="../assets/sort.png" alt=""></div>
          <div>分类</div>
          <div :class="['arrow',{'flip':isShow}]"></div>
        </div>
        <div :class="['collapse-box',{'no-collapse':isShow}]">
          <router-link tag="div" to="/sort/1" class="hover-nav">前端</router-link>
          <router-link tag="div" to="/sort/2" class="hover-nav">后端</router-link>
          <router-link tag="div" to="/sort/3" class="hover-nav">计算机网络</router-link>
          <router-link tag="div" to="/sort/4" class="hover-nav">操作系统</router-link>
          <router-link tag="div" to="/sort/5" class="hover-nav">算法</router-link>
        </div>
      </div>
      <div class="nav-item">
        <router-link tag="div" to="/about" class="link-item">
          <div class="icon-box"><img src="../assets/about.png" alt=""></div>
          <div>关于</div>
        </router-link>
      </div>
    </div>
    <!--移动端导航-->
    <div class="mobile-nav">
      <div class="header">
        <div class="img-box" @click="fold">
          <img src="../assets/sort.png" alt="">
        </div>
        <div>一个代码爱好者的博客</div>
      </div>
      <div class="hide-nav" v-show="isFold">
        <div class="nav-item">
          <router-link tag="div" to="/home" class="link-item">
            <div class="icon-box"><img src="../assets/home.png" alt=""></div>
            <div>主页</div>
          </router-link>
        </div>
        <div class="nav-item" @mouseleave="isShow=false" @click="phoneShow">
          <div class="link-item"  >
            <div class="icon-box"><img src="../assets/sort.png" alt=""></div>
            <div>分类</div>
            <div :class="['arrow',{'flip':isShow}]"></div>
          </div>
          <div :class="['collapse-box',{'no-collapse':isShow}]">
            <router-link tag="div" to="/sort/1" class="hover-nav">前端</router-link>
            <router-link tag="div" to="/sort/2" class="hover-nav">后端</router-link>
            <router-link tag="div" to="/sort/3" class="hover-nav">计算机网络</router-link>
            <router-link tag="div" to="/sort/4" class="hover-nav">操作系统</router-link>
            <router-link tag="div" to="/sort/5" class="hover-nav">算法</router-link>
          </div>
        </div>
        <div class="nav-item">
          <router-link tag="div" to="/about" class="link-item">
            <div class="icon-box"><img src="../assets/about.png" alt=""></div>
            <div>关于</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false,
      isFold: false
    }
  },
  watch: {
    $route (to, from) {
      this.isFold = false
    }
  },
  methods: {
    phoneShow () {
      if (this.isShow === false) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    fold () {
      if (this.isFold === true) {
        this.isFold = false
      } else {
        this.isFold = true
      }
    }
  }
}
</script>
<style scoped>
/*移动端*/
@media screen and (max-width: 600px) {
  .header {
    background: rgba(40, 42, 44, 0.6);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    width: 100%;
    height: 7vh;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .pc-nav {
    display: none;
  }
  .img-box {
    width:9vw;
  }
  img {
    width:100%;
    height: auto;
  }
  .hide-nav {
    z-index: 999;
    position: fixed;
    left: 0;
    top: 7vh;
    width: 100%;
    color:#bfcbd9;
  }
  .no-collapse{
    max-height: 40vh!important;
  }
  .collapse-box {
    transition: max-height 0.5s ease;
    overflow: hidden;
    max-height: 0vh;
  }
  .link-item {
    box-sizing: border-box;
    font-size: 3.4vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90vw;
    height: 8vh;
    justify-content: flex-start;
    padding-left: 6vw;
    background: #48456C;
  }
  .flip {
    transform: rotate(180deg);
    transition: all 0.4s ease;
  }
  .arrow {
    margin-left: 60vw;
    width: 0;
    height: 0;
    border-top: 1.6vw solid #fff;
    border-left: 1.6vw solid transparent;
    border-right: 1.6vw solid transparent;
  }
  .icon-box {
    width:5.4vw;
    height: 5.4vw;
  }
  .hover-nav {
    box-sizing: border-box;
    margin: 0 auto;
    background-color: #1f2d3d;
    width: 90vw;
    padding-left: 10vw;
    line-height: 8vh;
  }
  .link-item:hover,.hover-nav:hover {
    background-color: #48576a;
  }
}
/*PC端*/
@media screen and (min-width: 600px) {
  .mobile-nav {
    display: none;
  }
  .pc-nav {
    width: 100vw;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-content:center;
    background: rgba(40, 42, 44, 0.6);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    z-index: 100;
  }
  .icon-box {
    width:2.5vw;
    height: 2.5vw;
  }
  img {
    width:100%;
    height: auto;
  }
  .hover-nav {
    font-size: 1vw;
    background: rgba(73, 69, 107, 0.7);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    width: 15vw;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .no-collapse{
    max-height: 40vh!important;
  }
  .collapse-box {
    transition: max-height 0.5s ease;
    overflow: hidden;
    max-height: 0vh;
  }
  .hover-nav:hover {
    background-color: #64609E;
  }
  .link-item {
    font-size: 1vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 15vw;
    justify-content: center;
    height: 7vh;
  }
  .nav-item:hover {
    background:rgba(73, 69, 107, 0.7);
    cursor: pointer;
  }
}

</style>
