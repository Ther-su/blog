<template>
  <div id="all-box">
    <article-list :article="article"></article-list>
    <comment :num="article.comment" @add="addCommentNum"></comment>
  </div>
</template>
<script>
import articleList from '../components/article.vue'
import comment from '../components/comment.vue'
export default {
  components: {
    articleList,
    comment
  },
  data () {
    return {
      num: 1,
      article: {}
    }
  },
  created () {
    this.getArticle()
  },
  methods: {
    addCommentNum () {
      this.article.comment += 1
    },
    getArticle () {
      this.$http.get(`/article/${this.$route.params.id}`)
        .then((ret) => {
          if (ret.status !== 200) {
            alert('请求失败')
          }
          // alert('请求成功')
          this.article = ret.data
        })
    }
  }
}
</script>
<style scoped>

</style>
