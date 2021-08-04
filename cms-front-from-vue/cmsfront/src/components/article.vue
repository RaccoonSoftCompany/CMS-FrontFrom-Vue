<template>
  <div class="container" ref="container">
    <el-card
      class="topCard"
      :inline="true"
      v-for="(item, index) in articlelist"
      :key="item.id"
      style="margin-top: 1px"
    >
      <img src="./img/二维码1.png" alt="" style="float: left" />
      <br />
      <Button @click="articleModals(index)"
        ><h1>
          <span>{{ item.aTitle }}</span>
        </h1></Button
      >

      <Modal fullscreen title="" v-model="articleModal" :data="articleDetail">
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
          <div class="middletmp"></div>
          <br />
          <el-card class="inDetail">
            <div class="articleText">
              {{ articleDetail.aText }}
            </div>
          </el-card>
          <el-card class="commentDetail">
            <br />
            <el-form :inline="true" :model="inputData" ref="inputData">
              <el-form-item lable="" prop="input">
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
              v-for="(item,index) in articleComment"
              ref="articleComment"
              :key="item.id"
            >
              <div class="articleArr">
                {{ item.uNickName }}：&nbsp;&nbsp;&nbsp;{{ item.talkText
                }}<button @click="remove(item.talkId,index)">删除</button>
                <br />
              </div>
            </el-card>
          </el-card>
        </el-card>
      </Modal>

      <h4>{{ item.aText | ellipsis }}</h4>
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
  </div>
</template>
<script>
import "./css/index.css";
// import $ from "jquery";
// import "bootstrap/dist/css/bootstrap.min.css";
import { getArticles } from "../api/user";
import { getArticleTalks, addComment,deleteComment } from "../api/article";
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
    };
  },
  props: ["articleId"],
  methods: {
    addStyleOrGetDate(e) {
      //获取事件的ID 值
      // //把ID 值 赋给  activeClass
      var onlyId = e.currentTarget.id;
      this.activeClass = onlyId;
    },
    articleModals(index) {
      let data = this.articlelist[index];
      this.articleDetail = data;
      this.articleModal = true;
      let articleId = index + 1;
      getArticleTalks(articleId).then((res) => {
        console.log("我是文章Id:" + articleId);
        console.log(res.data);
        this.articleComment = res.data;
        console.log(this.articleComment);
      });
    },

    comment() {
      let data = {
        userId: "1",
        articleId: "1",
        atText: this.inputData.input,
      };
      console.log(data);
      addComment(data).then((res) => {
        if (res.code === 1000) {
          console.log(res.data);
          this.articleComment.push(res.data);
          console.log(this.articleComment);
          this.$message.success("评论成功!");
          // this.$refs["inputData"].resetFields();
        }
      });
    },
    remove(talkId,index) {
      
      console.log(talkId);
      deleteComment(talkId).then(res=>{
        if(res.code === 1000){
          this.articleComment.splice(index,1)
          this.$message.success("删除成功!")
        }else{
          this.$message.error("网络错误!")
        }
        console.log(res);
      })
    },
  },

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
}
.power {
  margin-right: 20px;
  float: right;
}
.active {
  border: none;
  color: #ff0000;
}
/* .like { */
/* font-size: 22px;
  color: #ccc;
  cursor: pointer;
  float: left;
  margin-right: 0.1cm; */
/* } */
/* .cs {
  color: #ffffff;
} */
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
/* .el-input {
  display: inline-block;
  width: 80%;
} */
/* .custom-input {
			position: relative;
			padding-top: 20px;
			margin-bottom: 10px;
		} */

/* .custom-input input {
			padding-left: 15px;
		} */

/* .custom-input label {
			cursor: text;
			margin: 0;
			padding: 0;
			left: 15px;
			top: 27px;
			position: absolute;
			font-size: 14px;
			color: #ccc;
			font-weight: normal;
			transition: all .3s ease;
		}

		.custom-input label.active {
			top: 0;
			left: 0;
			font-size: 12px;
		}

		.custom-input label.active.focusIn {
			color: #66afe9;
		} */
</style>