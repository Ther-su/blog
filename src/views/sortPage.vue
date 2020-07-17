<template>
  <div>
    <div v-if="sortList.length===0" class="no-sort">
      <div class="text-box">
        作者正在努力搬运中...
      </div>
    </div>
    <catalog v-for="(item,index) in sortList" :key="index" :info="item"></catalog>
  </div>
</template>
<script>
import catalog from '../components/catalog.vue'
export default {
  components: {
    catalog
  },
  created () {
    this.getSortList()
  },
  data () {
    return {
      sortList: []
    }
  },
  watch: {
    $route (to, from) {
      if (from.path.indexOf('sort') !== -1) {
        this.getSortList()
      }
    }
  },
  methods: {
    getSortList () {
      this.$http.get(`/sort/${this.$route.params.type}`)
        .then((ret) => {
          this.sortList = ret.data
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
