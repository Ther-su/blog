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
          this.$store.commit('setModalHint', { text: '上传博文成功' })
        })
        .catch(err => {
          this.$store.commit('setModalHint', { text: err.response.data.message })
        })
    }
  }
}
</script>
