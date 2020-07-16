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
          this.article = ret.data
        })
        .catch(err => {
          this.$store.commit('setModalHint', { text: err.response.data.message })
        })
    }
  }
}
</script>
<style scoped>

</style>
