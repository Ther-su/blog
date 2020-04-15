<template>
  <div>
    <div class="title-box">修改博文</div>
    <div class="return-box" @click="returnManage">返回-></div>
    <edit-article @submit="modifySubmit" ref="modifyArticle" :type=1></edit-article>
  </div>
</template>
<script>
import editArticle from '../components/editArticle.vue'
export default {
  components: {
    editArticle
  },
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    modifySubmit (article) {
      this.$http.put(`/article/${this.$route.params.id}`, article)
        .then((ret) => {
          alert('修改成功')
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            alert('aa')
            console.log(error)
            console.log(error.message)
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
    },
    returnManage () {
      this.$router.push({
        path: '/manage'
      })
    },
    getArticle () {
      this.$http.get(`/modifyarticle/${this.$route.params.id}`)
        .then((ret) => {
          console.log(ret)
          console.log(ret.status)
          this.$refs.modifyArticle.article = ret.data
          // this.article = ret.data
          // console.log(this.article)
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
    }
  }
}
</script>
<style scoped>
.title-box {
  margin: 2vh auto;
  width: 10vw;
  font-size: 1.5vw;
  color: #444;
  font-weight: bold;
}
.return-box {
  color: #64609E;
  cursor: pointer;
}
</style>
