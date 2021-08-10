<template>
  <div>
    <el-col :span="6">
      <router-link :to="{ name: 'article' }">
        <el-card shadow="hover" class="card"
          ><img src="../Images/bxs-hot.png" alt="" />
          新闻时讯
        </el-card>
      </router-link>
    </el-col>
    <el-col :span="6">
      <router-link :to="{ name: 'company' }">
        <el-card shadow="hover" class="card"
          ><img src="../Images/bx-buildings.png" alt="" />
          公司动态
        </el-card>
      </router-link>
    </el-col>
    <el-col :span="6">
      <router-link :to="{ name: 'show' }">
        <el-card shadow="hover" class="card"
          ><img src="../Images/bxs-crown.png" alt="" />
          大神风采
        </el-card>
      </router-link>
    </el-col>
    <el-col :span="6">
      <router-link :to="{ name: 'about' }">
        <el-card shadow="hover" class="card"
          ><img src="../Images/bxs-group.png" alt="" />
          关于我们
        </el-card>
      </router-link>
    </el-col>
    <!-- </el-card> -->
  </div>
</template>

<script>
import { getArticles } from "../api/user";
export default {
  data() {
    return {
      path: "http://cmsapi.ssffyy.com:8090/",
      bannerHeight: "",
      screenWidth: 0,
      list: [],
      imgUrls: [
        { idView: require("./img/国乒1.jpg") },
        { idView: require("./img/国乒2.jpg") },
        { idView: require("./img/浣熊1.jpg") },
        { idView: require("./img/浣熊2.jpg") },
        { idView: require("./img/浣熊3.jpg") },
      ],
    };
  },
  methods: {
    img() {
      return this.path + this.imgUrls;
    },
  },
  mounted() {
    getArticles().then((res) => {
      this.imgUrls = res.data;
      // console.log(res.data);
    });
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

.el-carousel {
  max-height: 700px !important;
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

.card {
  /* height: 100px; */
  background: linear-gradient(45deg, #89e3e3, #acb0bc);
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

.card img a:hover {
  background-color: rgba(255, 255, 255, 4);
  color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
</style>