<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "App",
  components: {},
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
