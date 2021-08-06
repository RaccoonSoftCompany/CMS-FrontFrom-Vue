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
              <div class="outcard">
                <!-- <el-card> -->
                <!-- </el-card> -->

                <div class="context">
                  <router-view></router-view>
                </div>
              </div>
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
                  <h3>
                    <img
                      src="../components/img/阅读推荐.png"
                      style="width: 24px; height: 24px"
                      alt=""
                    />
                    48小时阅读排行
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <a
                      style="font-size: 12px; color: gray"
                      v-if="articleList.length >= 5"
                    >
                      更多
                    </a>
                  </h3>
                  <el-card
                    style="float: left; width: 100%"
                    v-for="(item, index) in articleList"
                    :key="item.id"
                    class="rank"
                  >
                    <router-link
                      :to="{ path: `articleDetail/?articleId=${item.id}` }"
                    >
                      <span style="float: left"
                        >{{ index + 1 }}.{{ item.aTitle }}</span
                      >
                    </router-link>
                  </el-card>
                </el-card>
                <el-card class="rightSide">
                  <h3>
                    <img
                      src="../components/img/点赞推荐.png"
                      style="width: 24px; height: 24px"
                      alt=""
                    />10天点赞更多
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      style="float: ; font-size: 12px; color: gray"
                      v-if="articleList.length >= 5"
                    >
                      更多
                    </a>
                  </h3>
                  <el-card
                    style="float: left; width: 100%"
                    v-for="(item, index) in praiseList"
                    :key="item.id"
                    class="rank"
                  >
                    <router-link
                      :to="{ path: `articleDetail/?articleId=${item.id}` }"
                    >
                      <span style="float: left"
                        >{{ index + 1 }}.{{ item.aTitle }}</span
                      >
                    </router-link>
                  </el-card>
                </el-card>
                <el-card class="rightSide">
                  <h3>
                    <img
                      src="../components/img/评论推荐.png"
                      style="width: 24px; height: 24px"
                      alt=""
                    />10天评论排行
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      style="float: ; font-size: 12px; color: gray"
                      v-if="articleList.length >= 5"
                    >
                      更多
                    </a>
                  </h3>

                  <el-card
                    style="float: left; width: 100%"
                    v-for="(item, index) in commentList"
                    :key="item.id"
                    class="rank"
                  >
                    <router-link
                      :to="{ path: `articleDetail/?articleId=${item.id}` }"
                    >
                      <span style="float: left"
                        >{{ index + 1 }}.{{ item.aTitle }}</span
                      >
                    </router-link>
                  </el-card>
                </el-card>
                <el-card class="connection">
                  <span style="color: #808080; font-size: 14px"
                    >联系我们 （工作时间：8:30-22:00）</span
                  ><br />
                  <span style="color: #808080;font-size:14px;float;left"
                    >RACCOON &#10084; raccoon.com</span
                  >
                </el-card>
                <el-card class="cultural">
                  <span style="color: #808080; font-size: 14px">
                    <a href="https://beian.miit.gov.cn/#/Integrated/index"
                      >闽ICP备398846号</a
                    ></span
                  ><br />
                  <span style="color: #808080;font-size:14px;float;left"
                    >经验性网站备案信息</span
                  ><br />
                  <span style="color: #808080;font-size:14px;float;left">
                    <img
                      src="../components/img/备案.png"
                      style="width: 16px; height: 16px"
                      alt=""
                    />
                    公安备案号1001011344</span
                  >
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
// import $ from "jquery";
import {
  TheFirstReadCount,
  TheTenPraiseCount,
  TheTenTalkCount,
} from "../api/article";
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
      articleList: {},
      praiseList: {},
      commentList: {},
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
  mounted() {
    // $(".some-list").wrapper({
    //   item: "div.item",
    //   count: 5,
    // });
    TheFirstReadCount().then((res) => {
      this.articleList = res.data;
      console.log(res);
    });
    TheTenPraiseCount().then((res) => {
      this.praiseList = res.data;
      console.log(res);
    });
    TheTenTalkCount().then((res) => {
      this.commentList = res.data;
      console.log(res);
    });
  },
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
.wrapper {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.load-more__btn {
  padding-top: 10px;
  display: inline-block;
}
.main-top {
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 560px;
  background: linear-gradient(45deg, #d4f6fc, #fadbfa);
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
  margin: 0px auto;
  width: 80%;
  height: 470px;
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

  margin: auto 0;
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
  width: 35%;
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
  /* display: flex; */
  /* align-items: center; */
  justify-content: space-between;
  border: none !important;
  box-shadow: none !important;
  /* margin-top: 5px; */
}

.rightSide .rank {
  width: 100%;
  float: left;
  /* border: 0.1px solid gray; */
  box-shadow: none;
}
.rank:hover {
  box-shadow: 0px 1rem 2rem 0px rgba(48, 55, 66, 0.15);
  transform: translate(0, -4px);
  transition-delay: 0s !important;
}
.connection {
  width: 100%;
  /* display: flex;
  align-items: center; */

  border: none !important;
  box-shadow: none !important;
  margin-top: 5px;
}
.cultural {
  width: 100%;
  /* display: flex;
  align-items: center; */

  border: none !important;
  box-shadow: none !important;
  margin-top: 2px;
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

 