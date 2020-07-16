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
.modalHint {
  background-color:#282828;
  border-radius: 4px;
  color: #fff;
  position: absolute;
  width: 70vw;
  left: 50%;
  transform: translateX(-50%);
  top: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  z-index: 999;
  padding: 0.4vh 2vw;
}
</style>
