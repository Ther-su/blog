<template>
  <div class="view">
    <div class="programmer-box">
        <img src="../assets/programmer.gif" alt="">
    </div>
    <div class="gear">
      <img src="../assets/loading.svg" alt="">
    </div>
    <div class="loading-text">
      小编正在疯狂搬运中 . . .
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scope>
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,0.883);
  z-index: 999;
}
img {
  width: 100%;
  height: auto;
}
@media screen and (max-width: 600px){
  .programmer-box {
    width: 60vw;
  }
  .gear {
    width: 50vw;
  }
}
</style>
