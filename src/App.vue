<template>
  <div id="app">
    <menu-list></menu-list>
    <img-box id="img-box"></img-box>
    <div class="container">
      <router-view></router-view>
      <div>
        <info-box></info-box>
        <click-box></click-box>
      </div>
    </div>
    <loading v-show="$store.state.isLoading"></loading>
    <modal-hint :isShowModalHint="$store.state.modalHint.isShow"
    :text="$store.state.modalHint.text"></modal-hint>
  </div>
</template>

<script>
import loading from '../src/components/loading'
import menuList from './components/menu.vue'
import imgBox from './components/imgBox.vue'
import infoBox from './components/infoBox.vue'
import clickBox from './components/clickBox.vue'
import modalHint from './components/modalHint'
export default {
  components: {
    menuList,
    imgBox,
    infoBox,
    clickBox,
    loading,
    modalHint
  },
  mounted () {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-koharu/assets/',
        tagMode: false,
        debug: false,
        model: { jsonPath: '../live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },
        display: { position: 'right', width: 140, height: 210 },
        mobile: { show: true },
        log: false
      })
    }, 1000)
  }
}
</script>

<style>
  * {
  margin: 0px;
  padding: 0px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  html {
    width: 100vw;
    overflow-x: hidden;
  }
  @media screen and (max-width: 600px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #efefef;
    }
  }
  @media screen and (min-width: 600px) {
     html {
      min-width: 1500px;
    }
    .container {
      position: relative;
      width: 100vw;
      display: grid;
      grid-template-columns: 70% 30%;
      background-color: #efefef;
    }
  }
</style>
