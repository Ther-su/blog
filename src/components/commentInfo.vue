<template>
  <div class="comment-box">
    <div class="img-box">
      <img src="../assets/comment.jpg" alt="">
    </div>
    <div class="detail-info">
      <div class="name-box" v-if="type===1">
        {{comment.name}}
      </div>
      <div class="name-box" v-if="type===2">
        {{comment.responder}}回复{{comment.reviewer}}
      </div>
      <div class="time-box">
        {{comment.time | dateFormat}}
      </div>
      <div class="say-box">
        {{comment.content}}
      </div>
      <div class="apply-box" @click="turnReply">
        回复
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    myName () {
      if (this.type === 1) {
        return this.comment.name
      } else {
        return this.comment.responder
      }
    }
  },
  methods: {
    turnReply () {
      this.$emit('reply', this.index, this.myName, this.rid)
      document.getElementById('comment-content').scrollIntoView()
    }
  },
  props: ['comment', 'index', 'rid', 'type']
}
</script>
<style scoped>
img {
  width: 100%;
  height: auto;
}
@media screen and (max-width: 600px) {
  .comment-box {
    box-sizing: border-box;
    padding: 2vh;
    height: 16vh;
    width: 88vw;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-column-gap:6vw;
    border-bottom: 1px solid #e5eaed;
  }
  .detail-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .img-box {
    width:15vw;
    height: 15vw;
    border-radius: 50%;
    overflow: hidden;
  }
  .name-box {
    font-size: 4.4vw;
    color: #444;
  }
  .time-box {
    font-size: 2.8vw;
    color: #AAA;
  }
  .say-box {
    color: #444;
    font-size: 3.6vw;
  }
  .apply-box {
    color: #64609E;
    font-size: 3vw;
    cursor: pointer;
  }
}
@media screen and (min-width: 600px) {
  .comment-box {
    padding: 2vh;
    height: 15vh;
    display: grid;
    grid-template-columns: 15% 95%;
    border-bottom: 1px solid #e5eaed;
  }
  .detail-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .img-box {
    width:4vw;
    height: 4vw;
    border-radius: 50%;
    overflow: hidden;
  }
  .name-box {
    font-size: 1.3vw;
    color: #444;
  }
  .time-box {
    font-size: 1vw;
    color: #AAA;
  }
  .say-box {
    color: #444;
    font-size: 1vw;
  }
  .apply-box {
    color: #64609E;
    font-size: 1.1vw;
    cursor: pointer;
  }
}
</style>
