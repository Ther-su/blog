<template>
  <div class="detail-box">
    <i class="iconfont icon-geren"></i><div class="people">发表于</div>
    <i class="iconfont icon-pinglun"></i><div class="time">{{time}}</div>
    <i class="iconfont icon-shijian"></i><div class="comment">有{{comment}}条评论</div>
  </div>
</template>
<script>
export default {
  props: ['time', 'comment']
}
</script>
<style scoped>
@media screen and (max-width: 600px) {
  .detail-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color:#555;
    font-size: 3.5vw;
  }
  .people-box{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  /* .people:before{
    content: '';
    background: url(../assets/people.png);
    width: 3vw;
    height: 3vw;
    display: inline-block;
    background-size:cover;
    text-align: center;
  }
  .time:before{
    content: '';
    background: url(../assets/time.png);
    width: 3vw;
    height: 3vw;
    display: inline-block;
    background-size:cover;
  }
  .comment:before{
    content: '';
    background: url(../assets/comment.png);
    width: 3vw;
    height: 3vw;
    display: inline-block;
    background-size:cover;
  } */
}
@media screen and (min-width: 600px) {
  .detail-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color:#555;
    font-size: 1vw;
  }
  /* .people:before{
    content: '';
    background: url(../assets/people.png);
    width: 1.2vw;
    height: 1.2vw;
    display: inline-block;
    background-size:cover;
  }
  .time:before{
    content: '';
    background: url(../assets/time.png);
    width: 1.2vw;
    height: 1.2vw;
    display: inline-block;
    background-size:cover;
  }
  .comment:before{
    content: '';
    background: url(../assets/comment.png);
    width: 1vw;
    height: 1vw;
    display: inline-block;
    background-size:cover;
  } */
}
</style>
