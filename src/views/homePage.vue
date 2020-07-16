<template>
  <div>
    <div v-if="catalogList.length===0" class="no-sort">
      <div class="text-box">
        作者正在努力搬运中...
      </div>
    </div>
    <catalog v-for="(item,index) in catalogList" :key="index" :info="item"></catalog>
  </div>
</template>
<script>
import catalog from '../components/catalog.vue'
export default {
  components: {
    catalog
  },
  created () {
    this.getCatelogList()
  },
  data () {
    return {
      catalogList: []
    }
  },
  methods: {
    getCatelogList () {
      this.$http.get('/catalogList')
        .then((ret) => {
          this.catalogList = ret.data
        })
        .catch(err => {
          this.$store.commit('setModalHint', { text: err.response.data.message })
        })
    }
  }
}
</script>
<style scoped>
@media screen and (min-width: 600px) {
  .no-sort {
    background-color: #fff;
    margin: 8vh auto;
    width: 50vw;
    height: 20vh;
    display: flex;
    align-items: center;
  }
  .text-box {
    width: 30vw;
    margin: 4vw auto;
  }
}
@media screen and (max-width: 600px) {
  .no-sort {
    background-color: #fff;
    margin: 8vh auto;
    width: 95vw;
    height: 20vh;
    display: flex;
    align-items: center;
  }
  .text-box {
    width: 30vw;
    margin: 4vw auto;
    font-size: 5vw;
  }
}
</style>
