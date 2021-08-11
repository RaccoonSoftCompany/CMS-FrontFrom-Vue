<template>
  <div class="container" ref="container">
    <div class="infinite-list-wrapper" style="overflow: auto">
      <!-- <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
      >
        <li v-for="i in count" key="i.id" class="list-item">{{ i }}</li>
      </ul> -->
      <div class="demo-image">
      <el-card
        class="topCard"
        :inline="true"
        v-for="item in articlelist"
        :key="item.value"
        style="margin-top: 1px"
      >
        <el-image
          v-if="item.aImageUrl"
          :src="`http://cmsapi.ssffyy.com:8090/` + item.aImageUrl"
          fit="cover"
          alt=""
          style="float: left; width: 250px; height: 250px; border-radius: 1%"
        />
        <br />

        <h1>
          <router-link :to="{ path: `articleDetail/?articleId=${item.id}` }">
            <span  class="articleTitles">{{ item.aTitle }}</span>
          </router-link>
        </h1>
        <br />
        <h4>{{ item.aIntro | ellipsis }}</h4>
        <br />
        <div style="display: flex">
          <p style="width: 20%">
            <span class="articleText" style="font-weight: 600"></span
            >{{ item.nickName }}
          </p>
          <p style="width: 25%">
            <img src="../Images/bx-calendar-alt.png" alt="" />
            <span style="font-weight: 600"></span> {{ item.createdTime }}
          </p>
          <p style="width: 20%">
            <img src="../Images/bxs-like.png" alt="" />
            <span style="font-weight: 600"></span>
            {{ item.aPraiseCount }}
          </p>
          <p style="width: 20%">
            <img src="../Images/bx-chat.png" alt="" />
            <span style="font-weight: 600"></span>
            {{ item.aTalkCount }}
          </p>
          <p style="width: 20%">
            <img src="../Images/bx-book-open.png" alt="" />
            <span style="font-weight: 600"></span>
            {{ item.aReadCount }}
          </p>
        </div>
      </el-card>
      </div>
      <!-- <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p> -->
    </div>

    <!-- 登录 -->
    <el-dialog :visible.sync="loginDialogVisible" width="25%">
      <el-form
        class="user-change-key"
        ref="form"
        :model="form"
        :rules="rules"
        label-width="100px"
        center
        title="登录"
      >
        <h1 style="font-size: 35px">Login</h1>
        <br /><br />
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="form.username"
            type="text"
            auto-complete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            auto-complete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleLogin('form')"
          >开始非凡之旅吧</el-button
        >
        <!-- <el-button @click="forgerPassword"
          ><i class="el-icon-question"></i>忘记密码</el-button
        > -->
      </el-form>
    </el-dialog>
    <!-- 登录结束 -->
  </div>
</template>
<script>
import "./css/index.css";
// import $ from "jquery";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { setToken, loginStatus } from "../utils/auth";
// import { comeLogin, loginToken } from "../api/user";
// import { isLogin } from "../utils/auth";
import { getArticles } from "../api/user";
// import { getArticleTalks} from "../api/article";
import Login from "../components/login.vue";
export default {
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 8) {
        return value.slice(0, 100) + "...";
      }
      return value;
    },
  },
  data() {
    return {
      count: 5,
      loading: false,
      activeClass: "0",
      hasText: true,
      articleComment: [],
      isArticleId: "",
      isId: localStorage.getItem("id"),
      inputData: {
        input: "",
      },
      articlelist: [],
      articleModal: false,
      articleDetail: {
        // aTitle: "",
        // aText: "",
        // aPraiseCount: "",
        // aTalkCount: "",
        // aReadCount: "",
      },
      loginDialogVisible: false,
      Username: "",
      form: {
        username: "",
        password: "",
      },
      //登录规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  component: {
    Login,
  },
  props: ["articleId"],
  methods: {
    // load() {
    //   this.loading = true;
    //   setTimeout(() => {
    //     // this.articlelist += 1;
    //     this.loading = false;
    //   }, 2000);
    // },
  },

  mounted() {
    getArticles().then((res) => {
      // console.log(res);
      this.articlelist = res.data;
    });
    // $(function () {
    //   $(".like").click(function () {
    //     $(this).toggleClass("cs");
    //   });
    // });
  },
  computed: {
    // noMore() {
    //   return this.articlelist >= 10;
    // },
    // disabled() {
    //   return this.loading || this.noMore;
    // },
  },
};
</script>

<style>
.container {
  overflow: hidden;
  border: none;
  box-shadow: none;
  /* height: 1000px; */
  width: 100%;
  overflow-y: auto;
}
.topCard {
  border: none;
  box-shadow: none;
}
.topCard body {
  padding: 5px !important;
}
.middletmp {
  margin: 0 auto;
  width: 48vw;
  height: 5vh;
  border: 0.5px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.power {
  margin-right: 20px;
  float: right;
}
.active {
  border: none;
  color: #ff0000;
}

.el-link:hover {
  transform: scale(1.2, 1.2);
}
p {
  font-size: 15px;
  color: #999aaa;
  font-weight: 600;
}
h4 {
  font-size: 16px;
  font-weight: 600;
  color: #555666;
}
.articleText {
  font-size: 16px;
  font-weight: 500;
}
.articleTitles {
  color: #222226 !important;
  /* background-color: rgba(225, 225, 225 4);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px; */
}
.inDetail {
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  border: none;
  box-shadow: none !important;
}
.commentDetail {
  width: 100%;
  height: auto;
  margin: auto;
  box-shadow: none !important;
  display: flex;
  align-items: center;
  justify-content: center !important;
  border: none !important;
  box-shadow: none !important;
}
.articleCommentText {
  width: 48vw;
  border: none !important;
  box-shadow: none !important;

  /* margin: auto; */
  background-color: #ffffff;
}
.articleArr {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #222226;
  border-bottom: 1px solid #e8e8ee;
}
.remove {
  border: none;
  background-color: #ffffff;
  box-shadow: none;
  color: #5893c2;
  cursor: pointer;
}

.ivu-modal-footer {
  display: none;
}
.incard {
  margin: 0 auto;
  width: 50% !important;
}
.eye {
  width: 24px;
  height: 22px;
}
.middle {
  border: none;
  box-shadow: none;
  background-color: #f8f8f8;
  font-size: 14px;
  width: 100vh;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
}
router-link span {
  color: #222226 !important;
}
</style>