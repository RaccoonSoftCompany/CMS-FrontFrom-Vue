<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "App",
  components: {},
  beforeCreate() {
    let count = 0;

    let imgs = [
      //用require的方式添加图片地址，直接添加图片地址的话，在build打包之后会查找不到图片，因为打包之后的图片名称会有一个加密的字符串
      require("./headImg/6.jpg"),
      require("./headImg/7.jpg"),
      require("./headImg/18.jpg"),
      require("./headImg/19.jpg"),
      require("./headImg/20.jpg"),
      require("./headImg/21.jpg"),
      require("./headImg/22.jpg"),
      require("./headImg/23.jpg"),
    ];
    for (let img of imgs) {
      let image = new Image();

      image.onload = () => {
        // console.log(count);
        return count++;
      };
      image.src = img;
    }
  },
  // mounted() {
  //   // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
  //   window.onbeforeunload = function () {
  //     var storage = window.localStorage;
  //     storage.clear();
  //   };
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
