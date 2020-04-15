<template>
  <div>
    <div class="title-box">博客文章列表</div>
    <table width="100%" border="0" cellspacing="1" cellpadding="4" bgcolor="#cccccc">
      <tr class="t-header">
        <td>标题</td>
        <td>编辑时间</td>
        <td>概况</td>
        <td colspan="2" style="text-align:center">操作</td>
      </tr>
      <tr v-for="(article,index) in articles" :key="index" :class="[{'btbg':index%2===0},'striped']">
        <td>{{article.title}}</td>
        <td>{{article.time | dateFormat}}</td>
        <td>{{article.summary}}</td>
        <td><button class="edit-btn" @click="turnEdit(article.id)">编辑</button></td>
        <td><button class="del-btn" @click="deleteArticle(article.id)">删除</button></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  created () {
    this.getArticlesList()
  },
  methods: {
    turnEdit (id) {
      this.$router.push({
        path: `/modify/${id}`
      })
    },
    deleteArticle (id) {
      this.$http.delete(`/article/${id}`)
        .then((ret) => {
          if (ret.status !== 200) {
            alert('删除文章失败')
          }
          this.getArticlesList()
          alert('删除文章成功')
        })
    },
    getArticlesList () {
      this.$http.get('/catalogList')
        .then((ret) => {
          if (ret.status !== 200) {
            alert('获取失败')
          }
          // alert('请求成功')
          this.articles = ret.data
        })
    }
  }
}
</script>
<style scoped>
.title-box {
  margin: 5vh auto;
  color: #444;
  font-size: 2vw;
}
table {
  background-color: #fff;
  border-collapse:collapse;
  cursor: default;
}
td {
  padding: 2vh 2vw;
}
.t-header {
  color: #909399;
  font-size: 1.4vw;
  font-weight: bold;
}
.btbg {
  background-color: #fafafa;
}
.striped:hover {
  background-color: #f5f7fa;
}
.edit-btn {
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: #409eff;
  border: #409eff 1px solid;
  border-radius: 4px;
  width: 5vw;
  height: 5vh;
}
.edit-btn:hover {
  background-color: #66b1ef;
}
.del-btn {
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: #f56c6c;
  border: #f56c6c 1px solid;
  border-radius: 4px;
  width: 5vw;
  height: 5vh;
}
.del-btn:hover {
  background-color: #f78989;
}
</style>
