<template>
  <div>
    <edit-article @submit="editSubmit" ref="editArticle"></edit-article>
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
      article: {
        title: '',
        content: '',
        type: '',
        summary: '',
        base64Img: require('../assets/upload.png')
      }
    }
  },
  mounted () {
    console.log(this.$refs.editArticle)
    this.$refs.editArticle.article = this.article
  },
  methods: {
    editSubmit (article) {
      console.log(article)
      this.$http.post('/edit', article)
        .then((ret) => {
          if (ret.status !== 200) {
            alert('上传博文失败')
          }
          alert('上传成功')
        })
    }
  }
}
</script>
