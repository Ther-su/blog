<template>
  <div class="main-box">
    <div class="title-box">关于我</div>
    <div class="text-box">
      欢迎来到本博客，我是<span>Ther</span>，一个大一学生，一个代码爱好者
      就让我们一起进步吧。
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-width: 600px) {
  .main-box {
    margin: 8vh auto;
    width: 95vw;
    background-color: #fff;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .title-box {
    color: #444;
    font-size: 6vw;
  }
  .text-box {
    width: 70vw;
  }
  span {
    color: rgb(76, 138, 209);
    font-size: 6.5vw;
  }
}
@media screen and (min-width: 600px) {
  .main-box {
    margin: 8vh auto;
    width: 50vw;
    background-color: #fff;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .title-box {
    color: #444;
    font-size: 1.7vw;
  }
  .text-box {
    width: 30vw;
  }
  span {
    color: rgb(76, 138, 209);
    font-size: 2vw;
  }
}
</style>
