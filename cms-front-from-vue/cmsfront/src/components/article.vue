<template>
  <div class="container" ref="container">
    <el-card
      class="topCard"
      :inline="true"
      v-for="item in articlelist"
      :key="item.value"
      style="margin-top: 1px"
    >
      <img src="./img/二维码1.png" alt="" style="float: left" />
      <br />
      <!-- <el-button @click="articleModals(item.id)" -->
      <h1>
        <router-link
          :to="{ path: `articleDetail/?articleId=${item.id}` }"
         
        >
          <!-- <el-button @click="toDetail(item.id)"> -->
          <span>{{ item.aTitle }}</span>
          <!-- </el-button> -->
        </router-link>
      </h1>
      <!-- </el-button> -->


        <el-card class="incard">
          <br />
          <h1>&nbsp;&nbsp;{{ articleDetail.aTitle }}</h1>
          <br />

          <el-card class="middle">
            &nbsp; &nbsp;
            {{ articleDetail.nickName }}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {{ articleDetail.createdTime }}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src="./img/articleReadEyes.png"
              class="eye"
              align="absmiddle"
              alt=""
            />

            {{ articleDetail.aReadCount }}
            <b
              style="cursor: pointer; margin-left: 20px"
              id="dxal"
              :class="activeClass == 'dxal' ? 'active' : ''"
              @click="addStyleOrGetDate"
            >
              &#10084;
            </b>
            <a href="#" class="power">版权</a>
          </el-card>
          <br />
          <div class="middletmp">
            <h3>Raccoon出品,必属精品</h3>
          </div>
          <br />
          <el-card class="inDetail">
            <div class="articleText">
              {{ articleDetail.aText }}
            </div>
          </el-card>
          <el-card class="commentDetail">
            <br />
            <el-form :inline="true" ref="inputData" :model="inputData">
              <el-form-item lable="输入" prop="input">
                <el-input
                  v-model="inputData.input"
                  type="text"
                  auto-complete="off"
                  style="width: 820px"
                  placeholder="优质评论可以帮助作者获得更高权重"
                  :disable="hasText"
                ></el-input>
                <el-button
                  type="primary"
                  style="margin-left: 15px"
                  @click="comment('inputData')"
                  >评论</el-button
                >
              </el-form-item>
            </el-form>
            <el-card
              class="articleCommentText"
              :inline="true"
              v-for="(item, index) in articleComment"
              ref="articleComment"
              :key="item.id"
            >
              <div class="articleArr">
                {{ item.uNickName }}：&nbsp;&nbsp;&nbsp;{{
                  item.talkText
                }}&nbsp;&nbsp;&nbsp;&nbsp;

                <button
                  class="remove"
                  @click="remove(item.talkId, index)"
                  v-if="item.userId == isId"
                >
                  删除
                </button>
                <br />
              </div>
            </el-card>
          </el-card>
        </el-card>

      <h4>{{ item.aIntro | ellipsis }}</h4>
      <br />
      <div style="display: flex">
        <p style="width: 20%">
          <span style="font-weight: 600"></span>{{ item.nickName }}
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
  // methods: {
  //   toDetail() {
  //     this.$router.push({
  //       path: "articleDetail",
  //     });
  //   },
  // addStyleOrGetDate(e) {
  //   //获取事件的ID 值
  //   // //把ID 值 赋给  activeClass
  //   var onlyId = e.currentTarget.id;
  //   this.activeClass = onlyId;
  // },
  // articleModals(index) {
  //   let data = this.articlelist[index];
  //   this.articleDetail = data;
  //   this.articleModal = true;
  //   let articleId = index + 1;
  //   this.isArticleId = articleId;
    // getArticleTalks(articleId).then((res) => {
    //   console.log("我是文章Id:" + articleId);
    //   console.log(res.data);
    //   this.articleComment = res.data;
    //   console.log(this.articleComment);
    // });
  // },

  // comment() {
  //   // this.$refs["inputData"].validate((valid) => {
  //   //   if (valid) {

  //   let userID = localStorage.getItem("id");
  //   this.isId = userID;
  //   console.log(userID);
  //   let articleId = this.isArticleId;
  //   if (userID != null) {
  //     console.log(userID);
  //     console.log(articleId);
  //     let data = {
  //       userId: userID,
  //       articleId: articleId,
  //       atText: this.inputData.input,
  //     };
  //     console.log(data);
  //     addComment(data).then((res) => {
  //       if (res.code === 1000) {
  //         console.log(res.data);
  //         this.articleComment.push(res.data);
  //         console.log(this.articleComment);
  //         this.$message.success("评论成功!");
  //         // this.$refs["inputData"].resetFields();
  //       }
  //     });
  //   } else {
  //     this.loginDialogVisible = true;
  //   }

  //   //   }
  //   // });
  // },
  // //登录请求
  // handleLogin(formName) {
  //   // let mdpassword=md5(this.loginForm.password);
  //   // console.log(mdpassword);
  //   this.$refs[formName].validate((valid) => {
  //     if (valid) {
  //       if (this.form.username != "" && this.form.password != "") {
  //         let data = {
  //           UName: this.form.username,
  //           Upassword: this.form.password,
  //         };
  //         console.log(data);
  //         comeLogin(data).then((res) => {
  //           //所以此处打印的是用户状态信息
  //           console.log(res.data);
  //           localStorage.setItem("id", res.data.id);
  //           if (res.code === 1000) {
  //             loginToken(data).then(({ data }) => {
  //               this.$message({
  //                 message: "登陆成功！",
  //                 type: "success",
  //               });
  //               // this.infoForm.nickname = res.data.nickName;
  //               this.Username = res.data.uName;
  //               // this.nickName = res.data.nickName;
  //               // this.uId = res.data.id;
  //               setToken(data.token, data.refreshToken);

  //               // this.isLogin = false;
  //               this.loginDialogVisible = false;
  //               let userID = localStorage.getItem("id");
  //               let articleId = this.isArticleId;
  //               let commentData = {
  //                 userId: userID,
  //                 articleId: articleId,
  //                 atText: this.inputData.input,
  //               };
  //               console.log(commentData);
  //               addComment(commentData).then((res) => {
  //                 if (res.code === 1000) {
  //                   console.log(res.data);
  //                   this.articleComment.push(res.data);
  //                   console.log(this.articleComment);
  //                   this.$message.success("评论成功!");
  //                   // this.$refs["inputData"].resetFields();
  //                 }
  //               });
  //               //   this.$router.push("/");
  //             });
  //             loginStatus(data.UName, data.Upassword);
  //           } else {
  //             this.$message.error("用户名或密码错误,请重新尝试！");
  //           }
  //         });
  //       }
  //     }
  //   });
  // },

  // 删除评论
  // remove(talkId, index) {
  //   console.log(talkId);
  //   deleteComment(talkId).then((res) => {
  //     if (res.code === 1000) {
  //       this.articleComment.splice(index, 1);
  //       this.$message.success("删除成功!");
  //     } else {
  //       this.$message.error("网络错误!");
  //     }
  //     console.log(res);
  //   });
  // },
  // },

  mounted() {
    getArticles().then((res) => {
      console.log(res);
      this.articlelist = res.data.reverse();
    });
    // $(function () {
    //   $(".like").click(function () {
    //     $(this).toggleClass("cs");
    //   });
    // });
  },
  computed: {},
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
</style>