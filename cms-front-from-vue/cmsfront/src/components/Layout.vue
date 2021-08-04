<template>
  <el-container class="top">
    <el-container>
      <Header></Header>
      <div class="main-top">
        <el-main>
          <div class="main-header">
            <Card></Card>
          </div>
          <section class="main">
            <article>
              <el-card class="outcard">
                <div class="context">
                  <router-view></router-view>
                </div>
              </el-card>
            </article>
            <aside>
              <el-card class="asidecard">
                <div class="block">
                  <el-carousel height="150px">
                    <el-carousel-item v-for="item in imgUrls" :key="item.id">
                      <h3 class="small">
                        <img :src="item.idView" alt="" />
                      </h3>
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <el-card class="rightSide">
                  <h3>48小时阅读排行</h3>
                  <span class="text1">1.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">2.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">3.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">4.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">5.xxxxxxxxxxxxxx</span>
                </el-card>
                <el-card class="rightSide">
                  <h3>10天编辑推荐更多</h3>
                  <span class="text1">1.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">2.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">3.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">4.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">5.xxxxxxxxxxxxxx</span>
                </el-card>
                <el-card class="rightSide">
                  <h3>10天评论排行</h3>
                  <span class="text1">1.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">2.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">3.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">4.xxxxxxxxxxxxxx</span><br />
                  <span class="text1">5.xxxxxxxxxxxxxx</span>
                </el-card>
              </el-card>
            </aside>
            <el-backtop>
              <i class="el-icon-caret-top" style="color: #ff6b81"></i>
            </el-backtop>
          </section>
          <div class="main-footer">
            <Footer></Footer>
          </div>
        </el-main>

        <el-footer>
          Copyright © 2021 - 2021 Raccoon. All Rights Reserved.
        </el-footer>
      </div>
    </el-container>
  </el-container>
</template>

<script>
// import $ from 'jquery'
import Card from "./card.vue";
import Header from "./Header";
import Footer from "./footer.vue";
export default {
  components: {
    Header,
    Card,
    Footer,
  },
  data() {
    return {
      list: [],
      imgUrls: [
        { id: 0, idView: require("./img/csdn.png") },
        { id: 1, idView: require("./img/csdn2.jpg") },
      ],
    };
  },
  methods: {
    // imgLoad() {
    //   this.$nextTick(() => {
    //     this.bannerHeight = this.$refs.bannerHeight[0].height;
    //     console.log((this.bannerHeight = this.$refs.bannerHeight[0].height));
    //   });
    // },
  },
  computed: {},
  // mounted() {
  //   this.imgLoad();
  //   window.addEventListener(
  //     "resize",
  //     () => {
  //       this.bannerHeight = this.$refs.bannerHeight[0];
  //       this.imgLoad();
  //     },
  //     false
  //   );
  // },
};
</script>

<style>
body {
  margin: 0;
  background-color: #f5f7fa !important;
}

.main-top {
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 680px;
  background: linear-gradient(45deg, #fad4fc, #dae6f1);
  box-shadow: 5px 8px 5px rgb(221, 220, 220);
}
.el-footer {
  font-size: 12px;
  font-weight: 400;
  font-family: sans-serif;
  font-style: normal;
  text-transform: none;
  background-color: #ffffff;
  box-shadow: 5px -2px 5px rgb(221, 220, 220);
  color: #bbbbbb;
  text-align: center;
  line-height: 60px;
  /* height: 100%; */
  /* background-attachment: fixed; */
}
.side {
  height: 80vh;
  align-items: center;
}

.el-main {
  overflow-y: scroll;
  max-height: (100vh- 120px);
}
body > .el-container {
  margin-bottom: 40px;
}
.el-card__body {
  padding: 5px !important;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

a {
  text-decoration: none !important;
}
.main-header {
  width: 80%;
  margin: 0px auto;
}
.text {
  font-size: 14px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.context {
  width: 100%;
}
/* main */
.main {
  width: 90%;

  margin: 10px auto 0;
  display: flex;
}
.main h1 {
  font-size: 30px;
  /* font-weight: lighter; */
  margin-bottom: 23px;
}
.main h1 samp {
  font-size: 30px;
  color: #7c7c7c;
}
.main > aside {
  /* float: right; */
  overflow: hidden;
  width: 25%;
}
.main > aside > dl {
  position: relative;
  display: block;
  height: 74px;
  margin-bottom: 17px;
}
.main > aside > dl > dt {
  position: absolute;
  display: block;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  text-decoration: underline;
  top: -1px;
  left: 92px;
}
.main > aside > dl > dd:first-of-type {
  position: absolute;
  left: 0;
}
.main > aside > dl > dd:last-of-type {
  position: absolute;
  top: 20px;
  left: 90px;
}
.main > article {
  /* margin: 0 auto; */

  float: left;
  width: 100%;
  overflow: hidden;
}
.main > article > p,
.main > article > img {
  margin-bottom: 20px;
}
.main-footer {
  position: relative !important;
  display: flex !important;
  justify-content: space-around !important;
  align-items: center !important;
  width: 100% !important;
  flex-wrap: wrap !important;
}
.rightSide {
  width: 100%;
  border: none !important;
  box-shadow: none !important;
  margin-top: 6px;
}
.outcard {
  border: none !important;
  box-shadow: none !important;
  background-color: #f5f7fa !important;
}
.asidecard {
  border: none !important;
  box-shadow: none !important;
  background-color: #f5f7fa !important;
}
</style>

 