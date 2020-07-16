<template>
  <div class="main-box">
    <div class="title-box">{{article.title}}</div>
    <list :time="article.time | dateFormat" :comment="article.comment"></list>
    <div class="label">
      {{article.type | typeFormat}}
    </div>
    <div class="article-box" v-html="article.content" v-highlight></div>
  </div>
</template>
<script>
import list from '../components/list.vue'
export default {
  components: {
    list
  },
  data () {
    return {
    }
  },
  props: ['article']
}
</script>
<style scoped>
@media screen and (max-width: 600px) {
  .main-box {
    margin: 8vh auto;
    width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
  }
  .title-box {
    margin: 2vh auto;
    font-size: 8vw;
    font-weight: bold;
    color: #444;
  }
  .article-box {
    margin: 13vh auto;
    width: 88vw;
  }
  .article-box >>> img {
    width: 80vw;
    height: auto;
  }
  .label {
    width:20vw;
    text-align: center;
    line-height: 4vh;
    height: 4vh;
    border-color: #97dffd;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background-color: #97dffd;
    font-size: 3.3vw;
    position: relative;
    left: -40vw;
    border-radius: 0 4px 4px 0;
    display: inline-block;
    color: #fff;
  }
}
@media screen and (min-width: 600px) {
  .main-box {
    margin: 8vh auto;
    width: 55vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
  }
  .title-box {
    margin: 4vh auto;
    font-size: 2vw;
    font-weight: bold;
  }
  .article-box {
    margin: 18vh auto;
    width: 40vw;
  }
  .article-box >>> img {
    width: 40vw;
    height: auto;
  }
  .label {
    width:8vw;
    text-align: center;
    line-height: 4vh;
    height: 4vh;
    border-color: #97dffd;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background-color: #97dffd;
    font-size: 14px;
    position: relative;
    left: -24.4vw;
    border-radius: 0 4px 4px 0;
    display: inline-block;
    color: #fff;
  }
}

</style>
