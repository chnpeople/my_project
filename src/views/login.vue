<template>
  <div class="my-style">
    <div class="container w3">
      <h2>Login Now</h2>
      <form>
        <div class="username">
          <span class="username">Username:</span>
          <input type="text"
                 v-model="username"
                 class="name"
                 placeholder="输入我的名字"
                 required="">
          <div class="clear"></div>
        </div>
        <div class="password-agileits">
          <span class="username">Password:</span>
          <input type="password"
                 v-model="password"
                 class="password"
                 placeholder="我的QQ号">
          <div class="clear"></div>
        </div>
        <div class="rem-for-agile">
          <input type="checkbox"
                 v-model="remember"
                 @click="saveMyInfo"
                 class="remember">Remember me<br>
          <a href="#">Forgot Password</a><br>
        </div>
        <div class="login-w3">
          <el-button style="float: right; margin-right: 38px"
                     type="primary"
                     @click="login"
                     class="login">Login</el-button>
        </div>
        <div class="clear"></div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      remember: false,
    };
  },
  created() {
    this.checkName();
  },
  methods: {
    checkName() {
      let name = JSON.parse(window.localStorage.getItem('name'));
      if (name != null) {
        this.remember = true;
      }
      this.username = name || '';
    },
    saveMyInfo() {
      this.remember = !this.remember;
    },

    login() {
      console.log(111111);
      if (this.username == '' || this.password == '') {
        this.$message.warning('填下账号和密码吧...');
        return;
      } else {
        if (this.password === '289815438') {
					if (this.remember == true) {
						window.localStorage.setItem('name', JSON.stringify(this.username));
					}
          this.$router.push('/home');
        }else {
					this.$message.warning('密码错拉！');
				}
      }
    },
  },
};
</script>

<style scoped src="../assets/css/style.css">
.my-style {
  position: relative;
  height: 100%;
  font-family: Verdana;
  background: url('../assets/images/1.jpg') no-repeat 0px 0px !important;
  background-size: cover;

  background-attachment: fixed;
  background-position: center;
}
.login {
  float: right;
}
</style>