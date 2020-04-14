<template>
  <div>
    <div class="main-box">
      <div class="tip-text">博文标题：</div>
      <input type="text" v-model="article.title">
      <div class="tip-text">类型：</div>
      <select v-model="article.type">
        <option value="1">
          前端
        </option>
        <option value="2">
          后端
        </option>
        <option value="3">
          计算机网络
        </option>
        <option value="4">
          操作系统
        </option>
        <option value="5">
          算法
        </option>
      </select>
      <div class="tip-text">概括：</div>
      <input type="text" v-model="article.summary">
      <div class="tip-text">上传封面图片：</div>
      <input type="file" id="input-file" @change="imgChange($event)" v-show="false" accept="image/*">
      <label for="input-file">
        <div class="img-box">
          <img :src="article.base64Img">
        </div>
      </label>
      <div class="tip-text">文章内容：</div>
    </div>
    <mavon-editor @change="change" class="editor"></mavon-editor>
    <div class="btn-box">
      <button :class="['btn',{'btn-hover':isHover}]" @mouseenter="isHover=true"
      @mouseleave="isHover=false" @click="editSubmit">点击提交</button>
    </div>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  data () {
    return {
      isHover: false,
      article: {}
    }
  },
  components: {
    mavonEditor
  },
  methods: {
    change (value, render) {
      // console.log(render)
      this.article.content = render
      console.log(this.article.content)
    },
    imgChange (e) {
      const img = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(img)
      reader.onload = () => {
        this.article.base64Img = reader.result
      }
    },
    editSubmit () {
      /*
      this.article.time = Date.now()
      this.$http.post('edit', this.article)
        .then((ret) => {
          if (ret.status !== 200) {
            alert('上传失败')
          }
          alert('上传成功')
        }) */
      this.article.time = Date.now()
      this.$emit('submit', this.article)
    }
  }
}
</script>
<style scoped>
.main-box {
  box-sizing: border-box;
  padding: 2vw 3vw;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60vw;
  height: 58vh;
  margin: 8vh auto;
}
.btn-box {
  width: 60vw;
  background-color: #fff;
  margin: 5vh auto;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
input,select {
  width: 25vw;
  height: 3.4vh;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
  background-color: #efefef;
}
.tip-text {
  font-size: 1vw;
}
.editor {
  width: 60vw;
  margin: 8vh auto;
}
.btn {
  width: 5vw;
  height: 4vh;
  background-color: #97DFFD;
  color: #fff;
  border: #97DFFD;
  border-radius: 8px;
  font-size: 0.8vw;
}
.btn-hover {
  background-color: #48456D;
  cursor: pointer;
}
#input-file {
  position: absolute;
}
img {
  width: 100%;
  height: auto;
}
.img-box {
  cursor: pointer;
  width:5vw;
  height:5vw;
  border: 1px solid rgb(100, 97, 97);
}
</style>
