<template>
  <div class="main-box">
    <div class="title-box" @click="skipToArticle">
      {{info.title}}
    </div>
    <list :time="info.time | dateFormat" :comment="info.comment"></list>
    <div class="label">
      {{info.type | typeFormat}}
    </div>
    <div class="summary-box">
      {{info.summary}}
    </div>
    <div class="img-box">
      <img :src="info.img">
    </div>
    <button class="btn" @click="skipToArticle">
      阅读全文>>
    </button>
  </div>
</template>
<script>
import list from '../components/list.vue'
export default {
  components: {
    list
  },
  computed: {
    /* myImg () {
      return require('../assets/' + this.info.img)
    } */
  },
  data () {
    return {
    }
  },
  methods: {
    skipToArticle () {
      this.$router.push({
        path: `/article/${this.info.id}`
      })
    }
  },
  props: ['info']
}
</script>
<style scoped>
img {
    width: 100%;
    height: auto;
  }
.btn:hover {
  background-color: #48456D;
  cursor: pointer;
}
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
  .img-box {
    width: 88vw;
  }
  .summary-box {
    margin: 4vh auto;
    width: 70vw;
    color: #444;
    font-size: 4.5vw;
  }
  .title-box {
    margin: 6vh auto;
    font-size: 10vw;
    color: #444;
    cursor: pointer;
    width: 80vw;
  }
  .btn {
    margin: 4vh auto;
    width: 18vw;
    height: 4vh;
    background-color: #97DFFD;
    color: #fff;
    border: #97DFFD;
    border-radius: 4px;
    font-size: 2.8vw;
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
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
  }
  .img-box {
    width: 40vw;
  }
  .summary-box {
    margin: 4vh auto;
    width: 30vw;
    font-size: 1.2vw;
    color: #444;
  }
  .title-box {
    margin: 6vh auto;
    font-size: 3vw;
    color: #444;
    cursor: pointer;
  }
  .btn {
    margin: 4vh auto;
    width: 5vw;
    height: 4vh;
    background-color: #97DFFD;
    color: #fff;
    border: #97DFFD;
    border-radius: 8px;
    font-size: 0.8vw;
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
    left: -21.9vw;
    border-radius: 0 4px 4px 0;
    display: inline-block;
    color: #fff;
  }
}
</style>
