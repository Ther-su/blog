<template>
  <div class="edit-box">
    <div class="send-text" v-if="type===1">发表评论</div>
    <div class="send-text" v-else>你回复{{replyName}}的评论</div>
    <input type="text" placeholder="麻烦输入你的名字哦" v-model="name">
    <textarea id="comment-content" cols="30" rows="10" placeholder="说点什么吧``" v-model="content"></textarea>
    <button id="send-btn" @click="sendComment">发送^</button>
    <button id="cancel-btn" @click="cancelReply">取消</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      content: '',
      // commentType: this.type,
      isHover: false
      // isShow: false
    }
  },
  methods: {
    sendComment () {
      this.$emit('send', this.content, this.name)
      this.content = ''
      this.name = ''
    },
    cancelReply () {
      this.$emit('cancel')
      this.content = ''
      this.name = ''
    }
  },
  props: ['type', 'replyName']
  /* mounted () {
    var that = this
    this.$on('turnShow', () => {
      that.isShow = true
    })
  } */
}
</script>
<style scoped>
@media screen and (max-width: 600px) {
  input {
    padding: 0 1vw;
    height: 3.5vh;
    border: 1px solid #bfcbd9;
    background-color: #efefef;
    border-radius: 4px;
    outline-color: #97dffd;
    font-size: 4vw;
    color: #444;
  }
  textarea {
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    background-color: #efefef;
    padding: 1vw;
    outline-color: #97dffd;
    font-size: 4vw;
    color: #444;
  }
  button {
    background-color: #97dffd;
    border-radius: 4px;
    border: 1px solid #97dffd;
    color: #fff;
    height: 3.8vh;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    outline-color: #97dffd;
    font-size: 3.4vw;
  }
  #send-btn:hover {
    background-color: #48456D;
  }
  #cancel-btn:hover {
    background-color: #48456D;
  }
  .edit-box {
    padding: 3vw;
    box-sizing: border-box;
    height: 59vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 4px;
  }
  .send-text {
    font-size: 5vw;
    color: #444;
    font-weight: bold;
  }
}
@media screen and (min-width: 600px) {
  input {
    font-size: 1.1vw;
    padding: 0 1vw;
    height: 3.5vh;
    border: 1px solid #bfcbd9;
    background-color: #efefef;
    border-radius: 4px;
    color: #444;
  }
  textarea {
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    background-color: #efefef;
    padding: 1vw;
    font-size: 1.1vw;
    color: #444;
  }
  button {
    background-color: #97dffd;
    border-radius: 4px;
    border: 1px solid #97dffd;
    color: #fff;
    height: 3.6vh;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-size: 1.1vw;
  }
  #send-btn:hover {
    background-color: #48456D;
  }
  #cancel-btn:hover {
    background-color: #48456D;
  }
  .edit-box {
    padding: 3vw;
    box-sizing: border-box;
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 4px;
  }
  .send-text {
    font-size: 1.6vw;
    color:#444;
  }
}

</style>
