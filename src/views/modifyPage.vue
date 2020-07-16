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
          this.$store.commit('setModalHint', { text: '修改成功' })
        })
        .catch((err) => {
          this.$store.commit('setModalHint', { text: err.response.data.message })
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
          this.$refs.modifyArticle.article = ret.data
        })
        .catch((err) => {
          this.$store.commit('setModalHint', { text: err.response.data.message })
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
