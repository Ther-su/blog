<template>
  <div>
    <div>博客文章列表</div>
    <table width="100%" border="0" cellspacing="1" cellpadding="4" bgcolor="#cccccc">
      <tr>
        <td>标题</td>
        <td>编辑时间</td>
        <td>概况</td>
        <td colspan="2">操作</td>
      </tr>
      <tr v-for="(article,index) in articles" :key="index">
        <td>{{article.title}}</td>
        <td>{{article.time}}</td>
        <td>{{article.summary}}</td>
        <td><button>删除</button></td>
        <td><button>修改</button></td>
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
  }
}
</script>
