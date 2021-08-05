<template>
  <div class="container">
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
    <!-- {{ this.$router.params.id }} -->
    <el-card :data="articleDetail" class="articleAction">
      <el-card class="incard">
        <router-link :to="{ path: '/article' }" class="back"> 返回 </router-link>
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
            src="../components/img/articleReadEyes.png"
            class="eye"
            align="absmiddle"
            alt=""
          />

          {{ articleDetail.aReadCount }}
          <b
            style="cursor: pointer; margin-left: 20px"
            @click="addStyleOrGetDate"
            :class="{ active: activeClass }"
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
            <div class="edit_container">
              <div class="ql-snow ql-editor" v-html="articleDetail.aText"></div>
              <!-- {{ articleDetail.aText }} -->
            </div>
          </div>
        </el-card>
        <el-card class="commentDetail">
          <br />
          <el-form
            class="user-change-key"
            ref="inputData"
            :rules="inputrules"
            :model="inputData"
          >
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
                v-if="item.userId == isId || articleDetail.userId == isId"
              >
                删除
              </button>
              <br />
            </div>
          </el-card>
        </el-card>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import {
  getArticleDetail,
  addComment,
  deleteComment,
  getArticleTalks,
  isArticleAPraises,
} from "../api/article";
import { comeLogin, loginToken, addRead, addPraises } from "../api/user";
import { setToken, loginStatus } from "../utils/auth";
export default {
  data() {
    return {
      articleId: this.$route.query.articleId,
      loginDialogVisible: false,
      isId: localStorage.getItem("id"),
      isArticleId: "",
      activeClass: false,
      articleDetail: {
        aReadCount: "",
      },
      articleComment: [],
      inputData: {
        input: "",
      },
      hasText: true,
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
      inputrules: {
        input: [{ required: true, message: "内容呢???", trigger: "blur" }],
      },
    };
  },
  componnent: {},
  props: ["id"],
  methods: {
    addStyleOrGetDate(e) {
      let data = {
        userId: this.isId,
        articleId: this.articleId,
      };
      console.log(data);
      addPraises(data).then((res) => {
        console.log(res);
        if (res.code === 1000) {
          this.activeClass = true;
        } else if (res.code === 6666) {
          this.activeClass = false;
        }
      });
      console.log(e);
      //获取事件的ID 值
      // //把ID 值 赋给  activeClass
      var onlyId = e.currentTarget.id;
      console.log(onlyId);
    },
    comment() {
      // this.$refs["inputData"].validate((valid) => {
      //   if (valid) {

      let userID = localStorage.getItem("id");
      this.isId = userID;
      console.log(userID);
      //   let articleDetailId= this.isArticleId;
      if (userID != null) {
        console.log(userID);
        // console.log(articleDetailId);
        let data = {
          userId: userID,
          articleId: this.articleId,
          atText: this.inputData.input,
        };
        console.log(data);
        addComment(data).then((res) => {
          if (res.code === 1000) {
            console.log(res.data);
            this.articleComment.push(res.data);
            console.log(this.articleComment);
            this.$message.success("评论成功!");
            this.$refs["inputData"].resetFields();
          }
        });
      } else {
        this.loginDialogVisible = true;
      }
    },
    getParams() {
      //   let routerParams = this.$route.query.articleId;
      console.log(this.articleId);
    },
    // 删除评论
    remove(talkId, index) {
      console.log(talkId);
      deleteComment(talkId).then((res) => {
        if (res.code === 1000) {
          this.articleComment.splice(index, 1);
          this.$message.success("删除成功!");
        } else {
          this.$message.error("网络错误!");
        }
        console.log(res);
      });
    },
    //登录请求
    handleLogin(formName) {
      // let mdpassword=md5(this.loginForm.password);
      // console.log(mdpassword);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.username != "" && this.form.password != "") {
            let data = {
              UName: this.form.username,
              Upassword: this.form.password,
            };
            console.log(data);
            comeLogin(data).then((res) => {
              //所以此处打印的是用户状态信息
              console.log(res.data);
              localStorage.setItem("id", res.data.id);
              if (res.code === 1000) {
                loginToken(data).then(({ data }) => {
                  this.$message({
                    message: "登陆成功！",
                    type: "success",
                  });
                  // this.infoForm.nickname = res.data.nickName;
                  this.Username = res.data.uName;
                  // this.nickName = res.data.nickName;
                  // this.uId = res.data.id;
                  setToken(data.token, data.refreshToken);

                  console.log(data);

                  // this.isLogin = false;
                  this.loginDialogVisible = false;
                  let userID = localStorage.getItem("id");
                  let articleId = this.isArticleId;
                  let commentData = {
                    userId: userID,
                    articleId: articleId,
                    atText: this.inputData.input,
                  };
                  console.log(commentData);
                  addComment(commentData).then((res) => {
                    if (res.code === 1000) {
                      console.log(res.data);
                      this.articleComment.push(res.data);
                      console.log(this.articleComment);

                      this.$message.success("评论成功!");
                      //   this.inputData = { brand_right: 0 };
                      this.$refs["inputData"].resetFields();
                    }
                  });
                  //   this.$router.push("/");
                });
                loginStatus(data.UName, data.Upassword);
              } else {
                this.$message.error("用户名或密码错误,请重新尝试！");
              }
            });
          }
        }
      });
    },
  },
  created() {
    this.getParams();
  },
  mounted() {
    getArticleTalks(this.articleId).then((res) => {
      console.log("我是文章Id:" + this.articleId);
      console.log(res.data);
      this.articleComment = res.data;

      console.log(this.articleComment);
    });
    getArticleDetail(this.articleId).then((res) => {
      this.articleDetail = res.data[0];
      let data = {
        userId: this.isId,
        articleId: res.data[0].id,
      };
      console.log(data);
      addRead(data).then((res) => {
        if (res.code === 1000) {
          this.articleDetail.aReadCount += 1;
        }
        console.log(data);
        console.log(res);
        // this.articlelist[index].aReadCount += 1;
      });
      console.log(this.articleDetail);
    });
    let uId = this.isId;
    let aId = this.articleId;
    isArticleAPraises(uId, aId).then((res) => {
      console.log(res.data);
      this.activeClass = res.data.isPraise;
    });
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
.articleAction {
  border: none;
  box-shadow: none;
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
.back{
    font-size: 18px;
    font-weight: 900;
    float: left;
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
.active {
  border: none;
  color: #ff0000;
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

.edit_container,
.quill-editor {
  background: #ffffff;
}
.ql-container {
  background: #ffffff;
}
.ql-toolbar.ql-snow {
  background: #ffffff;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "14px";
}
s .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "10px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "18px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "32px";
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "文本";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "标题1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "标题2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "标题3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "标题4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "标题5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "标题6";
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "标准字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  content: "衬线字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  content: "等宽字体";
}
</style>