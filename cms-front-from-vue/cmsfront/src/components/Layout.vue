<template>
  <el-container class="top">
    <el-container class="scroll">
      <Header></Header>
      <div class="main-top">
        <el-carousel
          class="topCar"
          :interval="4000"
          arrow="never"
          height="900px"
        >
          <el-carousel-item v-for="(item, index) in topImgUrls" :key="index">
            <div class="topImg">
              <img :src="item.idView" alt="" class="topImgChild" />
            </div>
          </el-carousel-item>
        </el-carousel>
        <el-main>
          <!-- <div class="main-header"></div> -->
          <Card></Card>
          <section class="main">
            <article>
              <div class="outcard">
                <div class="context">
                  <router-view></router-view>
                </div>
              </div>
            </article>
            <aside>
              <el-card class="asidecard">
                <div class="block">
                  <img src="../../src/assets/黑衣人.webp" width="500px" height="280px"/>
                    
                  
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

                    <el-button
                      @click="show3 = !show3"
                      style="font-size: 12px; color: gray"
                      >更多</el-button
                    >

                    <el-card
                      style="float: left; width: 100%"
                      v-for="(item, index) in articleList"
                      :key="item.id"
                      class="rank"
                    >
                      <router-link
                        :to="{ path: `articleDetail/?articleId=${item.id}` }"
                      >
                        <span class="more-font" style="float: left"
                          >{{ index + 1 }}.{{ item.aTitle }}</span
                        >
                      </router-link>
                    </el-card>
                    <div style="margin-top: 20px">
                      <el-collapse-transition>
                        <div v-show="show3">
                          <el-card
                            style="float: left; width: 100%"
                            v-for="(item, index) in moreReadData"
                            :key="index.id"
                            class="transition-box rank"
                          >
                            <router-link
                              :to="{
                                path: `articleDetail/?articleId=${item.id}`,
                              }"
                            >
                              <span class="more-font" style="float: left"
                                >{{ index + 6 }}.{{ item.aTitle }}</span
                              >
                            </router-link>
                          </el-card>
                        </div>
                      </el-collapse-transition>
                    </div>
                  </h3>
                </el-card>
                <el-card class="rightSide">
                  <h3>
                    <img
                      src="../components/img/点赞推荐.png"
                      style="width: 24px; height: 24px"
                      alt=""
                    />10天点赞更多
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <el-button
                      @click="show4 = !show4"
                      style="font-size: 12px; color: gray"
                      >更多</el-button
                    >
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
                      <span class="more-font" style="float: left"
                        >{{ index + 1 }}.{{ item.aTitle }}</span
                      >
                    </router-link>
                  </el-card>
                  <div style="margin-top: 20px">
                    <el-collapse-transition>
                      <div v-show="show4">
                        <el-card
                          style="float: left; width: 100%"
                          v-for="(item, index) in morePraiseData"
                          :key="item.id"
                          class="transition-box rank"
                        >
                          <router-link
                            :to="{
                              path: `articleDetail/?articleId=${item.id}`,
                            }"
                          >
                            <span class="more-font" style="float: left"
                              >{{ index + 6 }}.{{ item.aTitle }}</span
                            >
                          </router-link>
                        </el-card>
                      </div>
                    </el-collapse-transition>
                  </div>
                </el-card>
                <el-card class="rightSide">
                  <h3>
                    <img
                      src="../components/img/评论推荐.png"
                      style="width: 24px; height: 24px"
                      alt=""
                    />10天评论排行
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <el-button
                      @click="show5 = !show5"
                      style="font-size: 12px; color: gray"
                      >更多</el-button
                    >
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
                      <span class="more-font" style="float: left"
                        >{{ index + 1 }}.{{ item.aTitle }}</span
                      >
                    </router-link>
                  </el-card>
                  <div style="margin-top: 20px">
                    <el-collapse-transition>
                      <div v-show="show5">
                        <el-card
                          style="float: left; width: 100%"
                          v-for="(item, index) in moreCommentData"
                          :key="item.id"
                          class="transition-box rank"
                        >
                          <router-link
                            :to="{
                              path: `articleDetail/?articleId=${item.id}`,
                            }"
                          >
                            <span class="more-font" style="float: left"
                              >{{ index + 6 }}.{{ item.aTitle }}</span
                            >
                          </router-link>
                        </el-card>
                      </div>
                    </el-collapse-transition>
                  </div>
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
                    >{{this.webInfo.icpCase}}</a
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
                  {{this.webInfo.pSecurit}}
                  </span
                >
              </el-card>
            </aside>
            <el-backtop>
              <i class="el-icon-caret-top" style="color: #ff6b81"></i>
            </el-backtop>
          </section>
        </el-main>
        <div class="main-footer">
          <Footer></Footer>
        </div>

        <el-footer>
          {{this.webInfo.copyright}}
          
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
import { getArticles } from "../api/user";
import {getWebInfo} from '../api/webInfo'
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
      path: "http://cmsapi.ssffyy.com:8090/",
      articleList: {},
      articleRead: {},
      praiseList: {},
      commentList: {},
      moreReadData: {},
      webInfo:[],
      morePraiseData: {},
      moreCommentData: {},
      imgUrls: [],
      show3: false,
      show4: false,
      show5: false,
      topImgUrls: [
        { idView: require("../headImg/6.jpg") },
        { idView: require("../headImg/7.jpg") },
        { idView: require("../headImg/18.jpg") },
        { idView: require("../headImg/19.jpg") },
        { idView: require("../headImg/20.jpg") },
        { idView: require("../headImg/21.jpg") },
        { idView: require("../headImg/22.jpg") },
        { idView: require("../headImg/23.jpg") },
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
    getArticles().then((res) => {
      this.imgUrls = res.data;
    
    });  
    // 获取站点信息
    getWebInfo().then(res=>{
      this.webInfo = res.data[0]
      console.log(res);
    })

    TheFirstReadCount().then((res) => {
      // console.log(res.data);
      if (res.data.length > 5) {
        this.articleList = res.data.slice(0, 5);
        // console.log(this.articleList);
        this.moreReadData = res.data.slice(5);
        // console.log(this.moreReadData);
      } else {
        this.articleList = res.data;
      }
      // console.log(res);
    });
    TheTenPraiseCount().then((res) => {
      if (res.data.length > 5) {
        this.praiseList = res.data.slice(0, 5);
        this.morePraiseData = res.data.slice(5);
        // console.log(this.morePraiseData);
        // console.log(this.praiseList);
      } else {
        this.praiseList = res.data;
      }
      // console.log(res);
    });
    TheTenTalkCount().then((res) => {
      if (res.data.length > 5) {
        this.commentList = res.data.slice(0, 5);
        this.moreCommentData = res.data.slice(5);
      } else {
        this.commentList = res.data;
      }
      // console.log(res);
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
  background-color: #ffffff !important;
}
.wrapper {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.load-more__btn {
  padding-top: 10px;
  display: inline-block;
}
.top {
  overflow-x: hidden;
}
.topImg {
  width: 100%;
  height: 900px;
  /* background-image: url("../headImg/1.jpg"); */
  background-size: cover;
}
.topCar {
  /* overflow-x: hidden; */
  /* margin-left: 5px; */
  width: 100%;
  height: 900px;
}
.topImgChild {
  width: 100%;
  height: 900px;
}

.el-footer {
  font-size: 15px;
  font-weight: 400;
  font-family: sans-serif;
  font-style: normal;
  text-transform: none;
  background-color: #dffcfd;
  box-shadow: 5px -2px 5px rgb(202, 207, 207);
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
a {
  text-decoration: none !important;
}
.main-header {
  margin: 0px auto;
  width: 80%;
  height: 700px;
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
  width: 100%;
  padding: 0;
  min-height: 1200px;
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
  margin-left: 8px;
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
  /* top: -1px; */
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
  border-top: 1px solid #EBEBEB;
  padding: 0;
  margin: 0;
  height: 300px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  /* position: relative !important;
  display: flex !important;
  justify-content: space-around !important;
  align-items: center !important;
  width: 100% !important;
  flex-wrap: wrap !important; */
}
.el-card rightSide is-always-shadow {
  height: 100px !important;
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
  margin-top: 5px;
}
.asidecard__body {
  background-color: #fff;
  /* border: none !important; */
  box-shadow: none !important;
  background-color: #f5f7fa !important;
}
.more-font {
  color: black !important;
  font-size: 17px !important;
  font-weight: 600 !important;
  font-family: sans-serif !important;
}
el-button{
  box-shadow: none !important;
  border: none !important;
}

::-webkit-scrollbar {
  width: 6px;
  height: 10px;
}
/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #00d2f7;
  border-radius: 3px;
}
/* .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  } */
</style>

 