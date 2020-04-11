<template>
  <div class="main-box">
    <div class="show-box">
      <div class="comment-text">评论</div>
      <div v-if="comment.length===0" class="no-comment">
        这里还空空如也，我来写第一条评论吧
      </div>
      <div v-for="(item,i1) in comment" :key="'father'+i1">
        <comment-info :comment="item" @reply="changeCommentBox" :index="i1" :type=1 :rid="item.id"></comment-info>
        <div v-for="(item1,i2) in item.apply" :key="'children'+i2">
          <comment-info :comment="item1" :index="i1" :type=2 class="small-comment"
          @reply="changeCommentBox" :rid="item.id"></comment-info>
        </div>
      </div>
    </div>
    <input-comment :type="type" :replyName="newName" @cancel="cancelComment"
    id="comment-content" @send="sendComment"></input-comment>
  </div>
</template>
<script>
import inputComment from '../components/inputComment.vue'
import commentInfo from '../components/commentInfo.vue'
export default {
  components: {
    inputComment,
    commentInfo
  },
  created () {
    this.getCommentList()
  },
  props: ['num'],
  methods: {
    getCommentList () {
      this.$http.get(`/comment/${this.$route.params.id}`)
        .then((ret) => {
          if (ret.status !== 200) {
            alert('获取评论失败')
          }
          this.comment = ret.data
        })
    },
    sendComment (content, name) {
      if (this.type === 1) {
        const info = {
          name: name,
          content: content,
          time: Date.now(),
          apply: [],
          aid: this.$route.params.id,
          comment: this.num + 1
        }
        console.log(info)
        this.$http.post('/comment', info)
          .then((ret) => {
            if (ret.status !== 200) {
              alert('上传评论失败')
            }
            this.comment.push(info)
            this.$emit('add')
          })
      } else {
        const info = {
          responder: name,
          reviewer: this.newName,
          content: content,
          time: Date.now(),
          rid: this.rid,
          comment: this.num + 1
          // apply: []
        }
        console.log(info)
        this.$http.post('/reply', info)
          .then((ret) => {
            if (ret.status !== 200) {
              alert('上传评论失败')
            }
            this.comment[this.index].apply.push(info)
            this.$emit('add')
          })
      }
    },
    changeCommentBox (index, name, rid) {
      console.log(rid)
      this.newName = name
      this.type = 2
      this.index = index
      this.rid = rid
    },
    cancelComment () {
      this.type = 1
    }
  },
  data () {
    return {
      rid: 0,
      index: -1,
      type: 1, // 为1展示不回复
      newName: '',
      comment: []
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 600px) {
  .main-box {
    margin: 6vh auto;
    width: 95vw;
    background-color: #fff;
    border-radius: 4px;
  }
  .no-comment {
    color: #444;
    font-size: 4vw;
  }
  .comment-text {
    color:#444;
    font-size: 6vw;
    margin-bottom: 4vh;
    border-left:4px solid #444 ;
    padding-left: 3vw;
  }
  .show-box {
    padding: 3vw;
  }
  .small-comment {
    padding: 2vh 0 2vh 12vw;
  }
}
@media screen and (min-width: 600px) {
  .main-box {
    margin: 6vh auto;
    width: 55vw;
    background-color: #fff;
    border-radius: 4px;
  }
  .no-comment {
    color: #444;
    font-size: 1.5vw;
  }
  .comment-text {
    padding-left: 2vw;
    font-size: 2vw;
    margin-bottom: 4vh;
    border-left:4px solid #444 ;
  }
  .show-box {
    padding: 3vw;
  }
  .small-comment {
    padding: 2vh 5vw;
  }
}
</style>
