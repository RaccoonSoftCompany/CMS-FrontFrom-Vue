<template>
  <div class="container" ref="container">
    <el-card
      v-for="(item, index) in articlelist"
      :key="item.id"
      style="margin-top: 10px"
    >
      <img src="./img/二维码1.png" alt="" style="float: left" />

      <Button @click="articleModals(index)"
        ><h1>
          <span>{{ item.aTitle }}</span>
        </h1></Button
      >

      <Modal fullscreen title="" v-model="articleModal" :data="articleDetail">
        <h1 style="text-align: center">{{ articleDetail.aTitle }}</h1>
        <br />
        <hr />
        <br />
        <el-card class="inDetail">
          <div style="font-size: 20px; font-weight: 700">
            {{ articleDetail.aText }}
          </div>
        </el-card>
        <el-card class="commentDetail">
          <!-- <img
            class="raccoon"
            src="../Images/银河护卫队-浣熊火箭48.jpg"
            alt=""
            style="float: left"
          /> -->
          <el-form :inline="true">
            <el-form-item>
              <div class="like">&#10084;</div>
              <el-input type="text" style="width: 750px" placeholder="优质评论可以帮助作者获得更高权重"></el-input>
              <el-button type="primary" style="margin-left:15px">评论</el-button>
            </el-form-item>
          </el-form>

          <!-- <div class="custom-input"> -->
          <!-- <input type="text" class="form-control" id="firstname" /> -->
          <!-- </div> -->
        </el-card>
        <el-card class="inDetail"> </el-card>
        <br />
      </Modal>

      <!-- <button class="xd-trigger hover-shadow">
        <h1>{{ item.aTitle }}</h1>
      </button> -->
      <br /><br />
      <h4>{{ item.aText | ellipsis }}</h4>
      <br /><br />
      <div style="display: flex">
        <p style="width: 35%">
          <img src="../Images/bx-calendar-alt.png" alt="" />
          <span style="font-weight: 600"></span> {{ item.createdTime }}
        </p>
        <p style="width: 25%">
          <img src="../Images/bxs-like.png" alt="" />
          <span style="font-weight: 600"></span>
          {{ item.aPraiseCount }}
        </p>
        <p style="width: 25%">
          <img src="../Images/bx-chat.png" alt="" />
          <span style="font-weight: 600"></span>
          {{ item.aTalkCount }}
        </p>
        <p style="width: 25%">
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
import $ from "jquery";
// import "bootstrap/dist/css/bootstrap.min.css";
import { getArticles } from "../api/user";
export default {
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 8) {
        return value.slice(0, 30) + "...";
      }
      return value;
    },
  },
  data() {
    return {
      articlelist: [
        // {
        // aPraiseCount:"",
        // aTitleImage: "",
        // aTitle: "",
        // aText: "",
        // createdTime: "",
        // aPraiseCount: "",
        // aTalkCount: "",
        // aReadCount: "",
        // },
      ],
      articleForm: {},
      articleModal: false,
      articleDetail: {
        aTitle: "",
        aText: "",
        aPraiseCount: "",
        aTalkCount: "",
        aReadCount: "",
      },
    };
  },
  props: ["articleId"],
  methods: {
    articleModals(index) {
      let data = this.articlelist[index];
      this.articleDetail = data;
      this.articleModal = true;
    },
  },
  mounted() {
    getArticles().then((res) => {
      console.log(res);
      this.articlelist = res.data;
    });
    $(function () {
      $(".like").click(function () {
        $(this).toggleClass("cs");
      });
    });
  },
};
</script>

<style>
.container {
  /* height: 1000px; */
  width: 100%;
  overflow-y: auto;
}
.like {
  font-size: 22px;
  color: #ccc;
  cursor: pointer;
  float: left;
  margin-right: 0.4cm;
}
.cs {
  color: #f00;
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
.inDetail {
  width: 50%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  /* border: none; */
  box-shadow: none !important;
}
.commentDetail {
  width: 50%;
  height: auto;
  margin: auto;
  text-align: center;
  box-shadow: none !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ivu-modal-footer{
  display: none;
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