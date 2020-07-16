<template>
  <transition name="fade">
    <div class="modalHint" v-show="isShowModalHint">
      {{text}}
    </div>
  </transition>
</template>
<script>
export default {
  props: ['text', 'isShowModalHint']
}
</script>
<style scoped>
.fade-leave-active {
  transition: all .8s ease;
}
.fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 600px) {
  .modalHint {
    background-color:#282828;
    border-radius: 4px;
    color: #fff;
    position: fixed;
    width: 70vw;
    left: 50vw;
    transform: translateX(-50%);
    top: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4vw;
    z-index: 999;
    padding: 0.4vh 2vw;
  }
}
@media screen and (min-width: 600px) {
  .modalHint {
    background-color:#282828;
    border-radius: 4px;
    color: #fff;
    position: fixed;
    width: 30vw;
    left: 50vw;
    transform: translateX(-50%);
    top: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1vw;
    z-index: 999;
    padding: 0.4vh 1vw;
  }
}
</style>
