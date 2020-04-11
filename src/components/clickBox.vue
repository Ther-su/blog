<template>
  <div class="click-box" @click="add">
    <div class="text-box">
      Do you like me?
    </div>
    <div class="content-box">
      <div class="img-box">
        <img src="../assets/heart.png" alt="">
      </div>
      <div class="num-box">{{click_num}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      click_num: 0,
      isShadow: false
    }
  },
  methods: {
    add () {
      this.click_num += 1
    }
  }
}
</script>
<style scoped>
.click-box:hover {
  -webkit-transform: translate(0, -2px);
  transform: translate(0, -2px);
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
img {
  width:100%;
  height: auto;
}
@media screen and (min-width: 600px) {
  .click-box {
    width: 25vw;
    height: 19vh;
    background-color: #fff;
    border-radius: 4px;
    color: red;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .text-box {
    font-size: 2vw;
  }
  .num-box {
    font-size: 3vw;
  }
  .content-box {
    width: 16vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}
@media screen and (max-width: 600px) {
  .click-box {
    width: 95vw;
    height: 19vh;
    background-color: #fff;
    border-radius: 4px;
    color: red;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 4vh auto;
  }
  .content-box {
    width: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .text-box {
    font-size: 5vw;
  }
  .img-box {
    width: 8vw;
  }
}
</style>
