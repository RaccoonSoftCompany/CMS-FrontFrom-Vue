<template>
  <!-- <div class="container"> -->
  <div class="footermain">
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <a href=""
            ><img src="../Images/银河护卫队-浣熊火箭48.jpg" alt="" />
            <span class="font">Raccoon</span>
          </a>
        </div></el-col
      >
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img src="../Images/底部二维码.jpg" width="150" alt="" />
        </div>
      </el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <img src="../Images/底部二维码.jpg" width="150" alt="" /></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <img src="../Images/底部二维码.jpg" width="150" alt="" /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  margin-top: 5px;
  border-radius: 4px;
}
.bg-purple-dark {
  background: #ffffff;
}
.bg-purple {
  background: #ffffff;
}
.bg-purple-light {
  background: #ffffff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: hsl(0, 0%, 100%);
}
.font {
  color: black;
  font-size: 28px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 600;
}
</style>