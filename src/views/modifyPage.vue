<template>
  <div>
    <edit-article @submit="modifySubmit" ref="modifyArticle"></edit-article>
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
    this.$refs.modifyArticle.article = this.article
  },
  created () {
    this.getArticle()
  },
  methods: {
    modifySubmit (article) {
      console.log(article)
      this.$http.post('/modify', article)
        .then((ret) => {
          if (ret.status !== 200) {
            alert('修改博文失败')
          }
          alert('修改成功')
        })
    },
    getArticle () {
      this.$http.get(`/article/${this.$route.params.id}`)
        .then((ret) => {
          if (ret.status !== 200) {
            alert('获取博文列表失败')
          }
          this.article = ret.data
        })
    }
  }
}
</script>
