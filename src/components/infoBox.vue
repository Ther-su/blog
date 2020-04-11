<template>
  <div class="content-box">
    <div class="img-box">
      <img src="../assets/head.jpg">
    </div>
    <div class="author-box">作者：Ther</div>
    <div class="all-icon-box"  >
      <div :class="['icon-box',{'icon-hover':isActive===1}]" @mouseenter="isActive=1" @mouseleave="leave">
        <img :src="isActive===1?wxActive:wx">
      </div>
      <div :class="['icon-box',{'icon-hover':isActive===2}]" @mouseenter="isActive=2" @mouseleave="leave">
        <img :src="isActive===2?qqActive:qq">
      </div>
      <div :class="['icon-box',{'icon-hover':isActive===3}]" @mouseenter="isActive=3" @mouseleave="leave">
        <img :src="isActive===3?githubActive:github">
      </div>
      <div :class="['icon-box',{'icon-hover':isActive===4}]" @mouseenter="isActive=4" @mouseleave="leave">
        <img :src="isActive===4?csdnActive:csdn">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: 0,
      qq: require('../assets/QQ.png'),
      qqActive: require('../assets/QQ-active.png'),
      wx: require('../assets/wx.png'),
      wxActive: require('../assets/wx-active.png'),
      github: require('../assets/github.png'),
      githubActive: require('../assets/github-active.png'),
      csdn: require('../assets/csdn.png'),
      csdnActive: require('../assets/csdn-active.png')
    }
  },
  methods: {
    leave () {
      this.isActive = 0
    }
  }
}
</script>
<style scoped>
.img-box img {
  width: 100%;
  height: auto;
}
.icon-hover {
  background-color: #F4692C;
  cursor: pointer;
}
.all-icon-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.all-icon-box img {
  width: 70%;
  height: auto;
}
.content-box:hover {
  -webkit-transform: translate(0, -2px);
  transform: translate(0, -2px);
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width: 600px) {
  .content-box {
    margin: 8vh 0;
    background-color: #fff;
    width: 95vw;
    height:60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 4px;
  }
  .img-box {
    width:88vw;
  }
  .author-box {
    color: #444;
    font-size: 4vw;
  }
  .icon-box {
    width:7vw;
    height:7vw;
    border-radius: 50%;
    background-color: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .all-icon-box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 40vw;
  }
  .icon-hover {
    background-color: #F4692C;
    cursor: pointer;
  }
}
@media screen and (min-width: 600px) {
  .content-box {
    margin: 8vh 0;
    background-color: #fff;
    width: 25vw;
    height:60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 4px;
  }
  .img-box {
    width:23vw;
  }
  .icon-box {
    width:2.5vw;
    height:2.5vw;
    border-radius: 50%;
    background-color: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .all-icon-box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 15vw;
  }
  .icon-hover {
    background-color: #F4692C;
    cursor: pointer;
  }
  .author-box {
    color: #444;
    font-size: 1.2vw;
  }
}

</style>
