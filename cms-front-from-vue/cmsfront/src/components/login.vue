<template>
  <div>
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
  </div>
</template>

<script>
import { setToken,loginStatus } from "../utils/auth";
import { comeLogin,loginToken } from "../api/user";
export default {
  data() {
    return {
      loginDialogVisible: true,
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
  methods: {
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
              //所以此处打印的是用户状态信息
              console.log(res.data);
              localStorage.setItem("id", res.data.id);
              if (res.code === 1000) {
                loginToken(data).then(({ data }) => {
                  this.$message({
                    message: "登陆成功！请移动至前往个人信息修改个人昵称👉",
                    type: "success",
                  });
                  this.infoForm.nickname = res.data.nickName;
                  this.Username = res.data.uName;
                  this.nickName = res.data.nickName;
                  this.uId = res.data.id;
                  setToken(data.token, data.refreshToken);

                  this.isLogin = false;
                  this.loginDialogVisible = false;
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
};
</script>

<style>
</style>