<template>
  <div>
    <header>
      <a class="logo" href="article">
        <img src="../Images/银河护卫队-浣熊火箭48.jpg" />
        Raccoon
      </a>
      <ul>
        <!-- <el-buttom @click="bat">打到</el-buttom> -->
        <li>
          <router-link :to="{ name: 'article' }">首页</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'about' }">关于</router-link>
        </li>
        <li>
          <a href="#">服务</a>
        </li>
        <div v-if="isLogin">
          <!-- <div class="wrapper-inner-tab-backgrounds-second">
            <div class="sim-button button27" @click="login">登录</div>
            <div class="sim-button button27" @click="register">注册</div>
          </div> -->
          <el-button @click="login">登录</el-button>
          <el-button @click="register">注册</el-button>
        </div>

        <div v-else>
          <!--  下拉菜单-->
          <el-dropdown @command="handleCommand" class="drop"
            ><!--  绑定指令,在methods里定义-->
            <span class="el-dropdown-link">
              <div></div>
              <!-- <el-avater class="demo-type" :src="path + avaterImg" @error="errorHandler"> -->
              <!-- <img
                  
                  style="width: 40px; height: 40px; border-radius: 50%"
                /> -->
              <!-- </el-avater> -->
              <img
                style="width: 45px; height: 45px; border-radius: 50%"
                :size="40"
                :src="path + uImageUrl"
              />
              <!-- <img
                  src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                /> -->

              &nbsp;&nbsp;
              <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
              <span
                class="uName"
                style="font-weight: 900; font-size: 20px; color: #4b9daf"
              >
                {{ nickname }}</span
              >
            </span>
            <div></div>
            <el-dropdown-menu slot="dropdown">
              <!-- icon是修改图标 ，command是点击后传给方法的值-->
              <el-dropdown-item
                icon="el-icon-info"
                command="info"
                style="font-weight: 700; font-size: 15px"
                >个人信息</el-dropdown-item
              >
              <el-dropdown-item
                icon="el-icon-edit"
                command="edit"
                style="font-weight: 700; font-size: 15px"
                >修改密码</el-dropdown-item
              >

              <el-dropdown-item
                icon="el-icon-s-operation"
                command="quit"
                style="font-weight: 700; font-size: 15px"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <!--  下拉菜单结束-->
        </div>
      </ul>
    </header>

    <!-- <section class="banner"></section> -->

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
        <el-button @click="forgerPassword"
          ><i class="el-icon-question"></i>忘记密码</el-button
        >
      </el-form>
    </el-dialog>
    <!-- 登录结束 -->

    <!-- 忘记密码 -->
    <el-dialog :visible.sync="forgetDialogVisible" width="20%">
      <el-form
        class="user-change-key"
        ref="forgetForm"
        :model="forgetForm"
        :rules="forgetrules"
        label-width="100px"
        center
        title="ComfirmName"
      >
        <br />
        <el-form-item label="用户名:" prop="username">
          <el-input
            v-model="forgetForm.username"
            type="text"
            auto-complete="off"
            style="width: 80%"
          ></el-input>
          <br /><br />
        </el-form-item>
        <br /><br />
        <el-button @click="forgetNextone('forgetForm')" type="primary">
          下一步
        </el-button>
      </el-form>
    </el-dialog>
    <!-- 重新更改密码 -->
    <el-dialog :visible.sync="enNameDialogVisible" width="22%">
      <el-form
        class="user-change-key"
        ref="AnswerForm"
        :model="AnswerForm"
        :rules="forgetAnswerrules"
        label-width="100px"
        center
        title="ComfirmName"
      >
        <h2>密保问题:</h2>
        <br /><br />
        <h1>{{ showUserMatter }}</h1>
        <br />
        <br />
        <br />
        <br />
        <el-form-item label="密保答案：" prop="answer">
          <el-input
            v-model="AnswerForm.answer"
            type="text"
            auto-complete="off"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="npassword">
          <el-input
            v-model="AnswerForm.npassword"
            type="password"
            auto-complete="off"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="repassword">
          <el-input
            v-model="AnswerForm.repassword"
            type="password"
            auto-complete="off"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <br /><br />
        <el-button @click="forgetNexttwo('AnswerForm')" type="primary">
          重启人生
        </el-button>
      </el-form>
    </el-dialog>
    <!-- 重新更改密码结束 -->
    <!-- 忘记密码结束 -->

    <!-- 用户注册 -->
    <el-dialog
      title="用户注册"
      :visible.sync="registerDialogVisible"
      width="25%"
      center
    >
      <span slot="footer" class="dialog-footer">
        <el-form
          class="user-change-key"
          ref="registerform"
          :model="registerform"
          :rules="registerformrules"
          label-width="100px"
        >
          <el-form-item label="用户名：" prop="username">
            <el-input
              v-model="registerform.username"
              type="text"
              auto-complete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input
              v-model="registerform.password"
              type="password"
              auto-complete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码:" prop="repassword">
            <el-input
              v-model="registerform.repassword"
              type="password"
              auto-complete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="密保：" prop="problem">
            <el-select placeholder="请选择..." v-model="registerform.problem">
              <el-option
                v-for="(item, index) in options"
                :label="item.mName"
                :value="item.id"
                :key="index"
                @click.native="selectGet(item.id)"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="密保答案：" prop="answer">
            <el-input
              v-model="registerform.answer"
              type="text"
              auto-complete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>

          <el-button @click="handleCancel">取 消</el-button>
          <el-button type="primary" @click="handleRegister('registerform')"
            >开启人生</el-button
          >
        </el-form>
      </span>
    </el-dialog>
    <!-- 用户注册结束 -->

    <!-- 个人信息 -->
    <el-dialog
      title="UserInfo"
      :visible.sync="infoDialogVisible"
      :before-close="handleCancel"
      width="25%"
      center
    >
      <span slot="footer" class="dialog-footer">
        <el-form
          class="user-change-key"
          ref="infoForm"
          :model="infoForm"
          label-width="100px"
        >
          <el-row :span="6"
            ><div class="grid-content bg-purple-light">
              <div>
                <el-upload
                  class="avatar-uploader"
                  ref="upload"
                  :action="'http://localhost:5000/UploadFile/userimage/' + uId"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  :on-success="success"
                  :auto-upload="false"
                  list-type="picture-card"
                  :limit="1"
                >
                  <img
                    v-if="uImageUrl"
                    slot="trigger"
                    :src="path + uImageUrl"
                    class="avatar"
                  />
                </el-upload>
                <el-button
                  style="margin-left: 30px; margin-top: 40px"
                  size="small"
                  type="success"
                  @click="submitUpload"
                  >更新头像</el-button
                >
              </div>
            </div></el-row
          >
          <br />
          <!-- <el-form-item lable="头像" style="display: flex"> </el-form-item> -->

          <el-form-item label="用户名：">{{ showUsername }}</el-form-item>
          <el-form-item label="昵称：">
            <el-input v-model="infoForm.nickname"></el-input>
          </el-form-item>

          <span>性别：</span>
          <el-radio v-model="infoForm.sex" label="男">男</el-radio>
          <el-radio v-model="infoForm.sex" label="女">女</el-radio>
          <br />
          <br />
          <el-button @click="handleCancel">取 消</el-button>
          <el-button type="primary" @click="handleUpdate('infoForm')"
            >更新</el-button
          >
        </el-form>
      </span>
    </el-dialog>
    <!-- 个人信息 -->
    <!-- 注销 -->
    <el-dialog
      title="Tips"
      :visible.sync="centerDialogVisible"
      width="25%"
      center
    >
      <label class="logout">确定注销?</label>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 注销结束 -->

    <!-- 修改密码 -->
    <el-dialog
      title="密码修改"
      :visible.sync="changeDialogVisible"
      width="25%"
      center
    >
      <span slot="footer" class="dialog-footer">
        <el-form
          class="user-change-key"
          ref="changeForm"
          :model="changeForm"
          :rules="changeFormrules"
          label-width="100px"
        >
          <el-form-item label="旧密码" prop="oldpassword">
            <el-input
              v-model="changeForm.oldpassword"
              type="password"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newpassword">
            <el-input
              v-model="changeForm.newpassword"
              type="password"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="comfirmpassword">
            <el-input
              v-model="changeForm.comfirmpassword"
              type="password"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-button @click="handleCancel">取 消</el-button>
          <el-button type="primary" @click="handleChange('changeForm')"
            >修改</el-button
          >
        </el-form>
      </span>
    </el-dialog>
    <!-- 修改密码结束 -->
  </div>
</template>



<script>
import "./headercss/main.css";
import {
  setToken,
  removeToken,
  loginStatus,
  removeLoginStatus,
  isLogin,
} from "../utils/auth";
import {
  comeLogin,
  comeRegister,
  changePassword,
  forgetPassword,
  forgetPasswordtoUsername,
  getMatters,
  changeUserInfos,
  getUserInfos,
  // loginToken,
} from "../api/user";
// import Cookies from "js-cookie";
export default {
  data() {
    return {
      path: "http://localhost:5000/",
      avaterImg: "",
      fileList: [],
      values: "",
      Username: "",
      nickName: "",
      uImageUrl: localStorage.getItem("uImageUrl"),
      uId: localStorage.getItem("id"),
      getProblemId: "",
      isLogin: true,
      infoDialogVisible: false,
      centerDialogVisible: false,
      changeDialogVisible: false,
      loginDialogVisible: false,
      registerDialogVisible: false,
      forgetDialogVisible: false,
      enNameDialogVisible: false,
      rechangePasswordDialogVisible: false,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      size: ["large", "medium", "small"],
      radio: "1",
      showUserMatter: null,
      form: {
        username: "",
        password: "",
      },
      registerform: {
        username: "",
        password: "",
        repassword: "",
        problem: "",
        matter: "",
        answer: "",
      },
      infoForm: {
        nickname: "",
        sex: "",
      },
      forgetForm: {
        username: "",
      },
      AnswerForm: {
        answer: "",
        npassword: "",
        repassword: "",
      },
      rechangeForm: {
        npassword: "",
        repassword: "",
      },
      changeForm: {
        oldpassword: "",
        newpassword: "",
        comfirmpassword: "",
      },

      // 设置密保数据
      options: [],
      //登录规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      // 注册用户rules
      registerformrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        repassword: [
          { required: true, message: "请确认密码", trigger: "blur" },
        ],
        problem: [
          { required: true, message: "密保问题为必选项", trigger: "change" },
        ],
        answer: [
          { required: true, message: "密保答案不能为空", trigger: "bulr" },
        ],
      },
      // 忘记密码-密保答案rules
      forgetAnswerrules: {
        answer: [{ required: true, message: "答案不能为空", trigger: "blur" }],
        npassword: [
          { required: true, message: "新密码不能为空", trigger: "blur" },
        ],
        repassword: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
        ],
      },
      // 忘记密码-用户名rules
      forgetrules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
      },
      // 登陆成功-密码修改rules
      changeFormrules: {
        oldpassword: [
          { required: true, message: "请输入旧密码", trigger: "blur" },
        ],
        newpassword: [
          { required: true, message: "请输入新密码", trigger: "blur" },
        ],
        comfirmpassword: [
          { required: true, message: "请确认密码", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    success(file) {
      let newImg = file.data;
      console.log(file);
      localStorage.removeItem("uImageUrl");
      localStorage.setItem("uImageUrl", newImg);
      this.uImageUrl = newImg;
      this.$refs.upload.clearFiles();
    },
    submitUpload() {
      if (this.fileList==0) {
        this.$message.info("请选择图片");
      }
      
      this.$refs.upload.submit();
    },
    handleRemove(file, imageUrl) {
      console.log(file, imageUrl);
    },
    handlePreview(file) {
      console.log(file);
    },
    // bat() {
    //   console.log(this.path);
    //   console.log(this.avaterImg);
    //   this.path += this.avaterImg;
    //   console.log(this.path);
    // },
    // 登录按钮
    login() {
      this.loginDialogVisible = true;
      this.$nextTick(() => {
        this.$refs.form.resetFields(); //等弹窗里的form表单的dom渲染完在执行this.$refs.staffForm.resetFields()，去除验证
      });
    },
    // 登录请求
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
              console.log(res.data);
              if (res.code === 1000) {
                this.$message({
                  message: "登陆成功！请修改您的个人信息👉",
                  type: "success",
                });
                localStorage.setItem("uImageUrl", res.data.uImageUrl);

                this.uImageUrl = res.data.uImageUrl;
                localStorage.setItem("id", res.data.id);
                setToken(res.data.token, res.data.refreshToken);

                this.infoForm.nickname = res.data.nickName;
                this.Username = res.data.uName;
                this.nickName = res.data.nickName;
                this.uId = res.data.id;

                this.isLogin = false;
                this.loginDialogVisible = false;
                // });
                loginStatus(data.UName, data.Upassword);
              } else {
                this.$message.error("用户名或密码错误,请重新尝试！");
              }
              //所以此处打印的是用户状态信息
              console.log(res.data);
              console.log(res.data.uImageUrl);
            });
          }
        }
      });
    },
    // 注册按钮
    register() {
      this.registerDialogVisible = true;
      this.$nextTick(() => {
        this.$refs.registerform.resetFields(); //等弹窗里的form表单的dom渲染完在执行this.$refs.staffForm.resetFields()，去除验证
      });
    },
    // 注册按钮
    handleRegister(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.registerform.username != "" &&
            this.registerform.password != "" &&
            this.registerform.repassword != "" &&
            this.registerform.problem != "" &&
            this.registerform.answer != ""
          ) {
            this.toRegister();
          }
        }
      });
    },
    // 注册请求
    toRegister() {
      let data = {
        UName: this.registerform.username,
        Upassword: this.registerform.password,
        reUPassword: this.registerform.repassword,
        MatterId: this.registerform.problem,
        Mkey: this.registerform.answer,
      };
      console.log(data);
      comeRegister(data).then((res) => {
        //所以此处打印的是用户状态信息
        console.log(res);
        if (res.code === 1000) {
          this.$message({
            message: "注册成功!",
            type: "success",
            duration: "4000",
          });

          this.registerDialogVisible = false;

          // setToken();
          this.$router.push("/");
        } else if (res.code === 1113) {
          this.$message.error("两次密码不一致!");
        } else {
          this.$message.error("用户名已存在!");
        }
      });
    },
    selectGet(value) {
      console.log(value);
    },
    // 忘记密码按钮
    forgerPassword() {
      this.forgetDialogVisible = true;
      this.loginDialogVisible = false;
      this.$nextTick(() => {
        this.$refs.forgetForm.resetFields(); //等弹窗里的form表单的dom渲染完在执行this.$refs.staffForm.resetFields()，去除验证
      });
      // this.$nextTick(() => {
      //   this.$refs.AnswerForm.resetFields(); //等弹窗里的form表单的dom渲染完在执行this.$refs.staffForm.resetFields()，去除验证
      // });
    },
    // 忘记密码第一步
    forgetNextone(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.forgetForm.username != "") {
            let data = {
              UName: this.forgetForm.username,
            };
            console.log(data);
            forgetPasswordtoUsername(data.UName).then((res) => {
              console.log(res);
              this.getProblemId = res.data.uId;
              if (res.code === 1000) {
                this.showUserMatter = this.Username;
                this.forgetDialogVisible = false;
                this.enNameDialogVisible = true;
              } else {
                this.$message.error("用户名不存在,请重新尝试！");
              }
            });
          }
        }
      });
    },
    // 忘记密码第二步
    forgetNexttwo(formName) {
      console.log(formName);

      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.AnswerForm.answer != "" &&
            this.AnswerForm.npassword != "" &&
            this.AnswerForm.repassword != "" &&
            this.AnswerForm.npassword === this.AnswerForm.repassword
          ) {
            let uId = this.getProblemId;
            console.log(uId);
            let data = {
              MKey: this.AnswerForm.answer,
              Upassword: this.AnswerForm.npassword,
              reUpassword: this.AnswerForm.repassword,
            };

            console.log(data);
            forgetPassword(uId, data).then((res) => {
              if (res.code === 1000) {
                this.enNameDialogVisible = false;
                this.$nextTick(() => {
                  this.$refs.AnswerForm.resetFields();
                });
                this.rechangePasswordDialogVisible = true;
                this.$message({
                  message: "修改成功!",
                  type: "success",
                });
              } else if (res.code === 1116) {
                this.$message.error("密保答案不正确,请联系管理员!");
                this.$nextTick(() => {
                  this.$refs.AnswerForm.resetFields();
                });
              }
              console.log(res);
            });
          } else {
            this.$message.error("两次密码不一致！");
          }
        }
      });
    },
    // 所有取消
    handleCancel() {
      this.registerDialogVisible = false;
      this.loginDialogVisible = false;
      this.changeDialogVisible = false;
      this.centerDialogVisible = false;
      this.infoDialogVisible = false;
      this.$refs.upload.clearFiles();
    },
    // 登陆成功用户功能
    handleCommand(command) {
      switch (command) {
        case "info":
          // console.log("个人信息");

          this.infoDialogVisible = true;

          getUserInfos(this.uId).then((res) => {
            this.infoForm.sex = res.data.sex;

            // localStorage.setItem("uImageUrl", res.data.imageURL);
            this.uImageUrl = res.data.imageURL;
            console.log(res);
          });

          break;
        case "edit":
          // console.log("修改密码");
          this.changeDialogVisible = true;
          break;
        case "quit": {
          // console.log("退出登录");
          this.centerDialogVisible = true;
          break;
        }
      }
    },
    // 更新个人信息
    handleUpdate() {
      let id = this.uId;
      let data = {
        NickName: this.infoForm.nickname,
        Sex: this.infoForm.sex,
      };
      console.log(data);
      console.log(id);
      changeUserInfos(id, data).then((res) => {
        console.log(res);
        this.$message({
          message: "更新成功!",
          type: "success",
        });
        this.nickName = data.NickName;
        this.$router.push("/");

        this.infoDialogVisible = false;
        console.log(res);
      });
    },
    // 确认注销
    handleConfirm() {
      this.centerDialogVisible = false;
      removeLoginStatus();
      this.isLogin = true;
      removeToken();
      localStorage.setItem("uImageUrl", null);
      this.$router.push("/");
      // window.location.replace("/");
    },
    // 登陆成功修改密码
    handleChange(formName) {
      this.$nextTick(() => {
        this.$refs.form.resetFields(); //等弹窗里的form表单的dom渲染完在执行this.$refs.staffForm.resetFields()，去除验证
      });
      console.log(formName);
      console.log(this.form);
      this.form.id = this.uId;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.changeForm.oldpassword === this.changeForm.newpassword) {
            this.$message.error("原密码不能与新密码相同");
          }
          if (this.changeForm.newpassword != this.changeForm.comfirmpassword) {
            this.$message.error("确认密码与新密码不一致");
          } else {
            this.$confirm("确认修改吗?", "提示", {}).then(() => {
              let params = {
                inUpassword: this.changeForm.oldpassword,
                Upassword: this.changeForm.newpassword,
                reUpassword: this.changeForm.comfirmpassword,
              };
              console.log(params);

              changePassword(this.uId, params).then((res) => {
                console.log(res);
                if (res.code === 1000) {
                  this.changeDialogVisible = false;
                  removeToken();
                  removeLoginStatus();
                  this.isLogin = true;
                  this.$router.push("/");
                  this.$message.success("修改成功,请重新登录!");
                } else if (res.code === 1118) {
                  this.$message.error("原密码错误,请确认后重试");
                } else {
                  this.$message.error("网络错误!");
                }
              });
            });
          }
        }
      });
      // }
    },
    // 获取密保问题
    fetchMatters() {
      getMatters().then((res) => {
        this.options = res.data;
        console.log(res);
      });
    },
    // 图标加载失败
    errorHandler() {
      return true;
    },
  },

  mounted() {
    addEventListener("scroll", () => {
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
    getMatters().then((res) => {
      this.options = res.data;
      // console.log(res.data);
    });
  },
  computed: {
    showUsername() {
      return this.Username;
    },
    nickname() {
      return this.nickName;
    },
    // showUserMatter() {
    //   return Cookies.get("mName");
    // },
  },
  created: function () {
    if (isLogin()) {
      this.isLogin = false;
      let data = {
        UName: localStorage.getItem("username"),
        Upassword: localStorage.getItem("password"),
      };
      comeLogin(data).then((res) => {
        this.infoForm.nickname = res.data.nickName;
        this.Username = res.data.uName;
        this.nickName = res.data.nickName;
        this.uId = res.data.id;
      });
    } else {
      removeLoginStatus();
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  word-wrap: break-word;
  font-family: "微软雅黑";
}
body {
  background: #000;
  min-height: 100vh;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.6s;
  padding: 40px 100px;
  z-index: 999;
}
header.sticky {
  padding: 5px 100px;
  background: #fff;
}
header .logo {
  position: relative;
  font-weight: 700;
  color: rgb(250, 250, 250);
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0;
}
header ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
header ul li {
  font-size: 18px;
  position: relative;
  list-style: none;
}
header ul li a {
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500px;
  transition: 0.5s;
}

/* .banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
} */
header.sticky .logo,
header.sticky ul li a {
  color: #000;
}
.uName {
  font-family: fantasy;
  font-size: 15px;
  cursor: pointer;
  color: #ffffff;
}
.dropdown{
  cursor: pointer;
}
.el-dropdown-link {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.el-button {
  background: #e0e2f3;
  border: none;
  font-size: 17px;
  font-family: "微软雅黑";
  color: #ffffff;
  margin: 0 15px;
  transition: 0.5s;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>