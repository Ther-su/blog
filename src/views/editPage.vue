<template>
  <div>
    <edit-article @submit="editSubmit" ref="editArticle" :type="2"></edit-article>
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
        img: require('../assets/upload.png')
      }
    }
  },
  mounted () {
    this.$refs.editArticle.article = this.article
  },
  methods: {
    editSubmit (article) {
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
