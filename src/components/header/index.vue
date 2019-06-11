<template>
  <el-header class="header-wrap">
    <div class="logo">动态表单设计</div>
    <el-dropdown trigger="click" class="dropdown" placement="bottom">
      <span class="el-dropdown-link">
        <strong>{{username}}</strong>
        <i class="el-icon-caret-bottom drop-icon"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="changePass()">修改密码</el-dropdown-item>
        <el-dropdown-item @click.native="loginout()">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  data () {
    return {
      name: 'Hello World',
    }
  },
  computed: {
    username () {
      let userInfo = this.$util.getLStorage('loanuser', 'decode')
      return userInfo ? userInfo.username : this.name
    },
  },
  methods: {
    changePass () { },
    loginout () {
      window.localStorage.removeItem('loanuser')
      this.$router.replace('/login')
    },
  },
}
</script>

<style scoped>
.header-wrap {
  position: relative;
  width: 100%;
  line-height: 60px;
  display: flex;
  color: #fff;
  box-sizing: border-box;
  background-color: #24292e;
}
.logo {
  font-size: 22px;
  flex: 1;
}
.dropdown {
  height: 100%;
  color: #eee;
  user-select: none;
}
.el-dropdown-link {
  cursor: pointer;
}
</style>
