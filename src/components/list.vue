<template>
  <div class="detail-box">
    <div class="people">发表于</div>
    <div class="time">{{time}}</div>
    <div class="comment">有{{comment}}条评论</div>
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
  .people:before{
    content: '';
    background: url(../assets/people.png);
    width: 3vw;
    height: 3vw;
    display: inline-block;
    background-size:cover;
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
  }
}
@media screen and (min-width: 600px) {
  .detail-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color:#555;
    font-size: 1vw;
  }
  .people:before{
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
  }
}
</style>
