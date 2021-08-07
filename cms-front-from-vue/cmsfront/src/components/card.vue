<template>
  <div class="box-card">
    <div class="scrollcard"> 
      <el-carousel
        :interval="2500"
        arrow="always"
        :height="bannerHeight + 'px'"
      >
        <el-carousel-item v-for="item in imgUrls" :key="item.id">
          <el-row>
            <img
              ref="bannerHeight"
              :src="item.idView"
              class="bannerImg"
              @load="imgLoad"
            />
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>

    <el-col :span="6">
      <el-card shadow="hover" class="card"
        ><img src="../Images/bxs-hot.png" alt="" />
        <!-- <a href="http://localhost:8081/news"><span>新闻时讯</span></a> -->
        <router-link :to="{ name: 'article' }">新闻时讯</router-link>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover" class="card"
        ><img src="../Images/bx-buildings.png" alt="" />
        <!-- <a href="http://localhost:8081/company">公司动态</a> -->
        <router-link :to="{ name: 'company' }">公司动态</router-link>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover" class="card"
        ><img src="../Images/bxs-crown.png" alt="" />
        <!-- <a href="http://localhost:8081/show">大神风采</a> -->
        <router-link :to="{ name: 'show' }">大神风采</router-link>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover" class="card"
        ><img src="../Images/bxs-group.png" alt="" />
        <!-- <a href="http://localhost:8081/about">关于我们</a> -->
        <router-link :to="{ name: 'about' }">关于我们</router-link>
      </el-card>
    </el-col>
    <!-- </el-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerHeight: "",
      screenWidth: 0,
      list: [],
      imgUrls: [
        { id: 0, idView: require("./img/1.png") },
        { id: 1, idView: require("./img/2.png") },
        { id: 2, idView: require("./img/3.png") },
        { id: 3, idView: require("./img/4.png") },
        { id: 4, idView: require("./img/5.png") },
      ],
    };
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0];
        // console.log((this.bannerHeight = this.$refs.bannerHeight[0].height));
      });
    },
  },
  mounted() {
    this.imgLoad();
    window.addEventListener(
      "resize",
      () => {
        this.bannerHeight = this.$refs.bannerHeight[0];
        this.imgLoad();
      },
      false
    );
  },
};
</script>

<style scoped>
.text {
  font-size: 22px;
}

.item {
  padding: 18px 0;
}
.el-card {
  padding: 20px;
  box-shadow: 5px 3px 5px grey;
}
.box-card {
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 5%;
  width: 80%;
  /* height: 400px !important; */
}
/* .scrollcard{
  width: 100%;
  margin: 0 auto;
  height: 400px;
} */
.el-carousel {
  border-radius: 7px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.9;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-col {
  margin-top: 20px;
}
.card {
  margin-left: 9px;
  border-radius: 10px;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); */
  /* transition: opacity 0.3s ease-in-out; */
}
/* .card:hover { */
/* -webkit-transform: scale(1.25, 1.25); */
/* transform: scale(1.2, 1.2); */
/* } */
/* .card:hover::after { */
/* opacity: 1; */
/* } */

.card {
  height: 100px;
  background: linear-gradient(45deg, #eaccf7, #b2d5f8);
}
a {
  font-weight: 900;
  color: #fff6f6;
  text-decoration: none;
  font-size: 20px;
}
span {
  font-family: fantasy !important;
}
.bannerImg {
  width: 100%;
  height: inherit;
  max-height: 450px;
  min-width: 600px;
}
.card img a:hover {
  background-color: rgba(255, 255, 255, 4);
  color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
</style>