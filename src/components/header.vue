<template>
  <div class="my-header">
    <div class="navbar clearfix">
      <a href=""><img src="../assets/cnodejs_light.svg" alt="cnode"></a>
      <input type="search">
      <ul class="nav-right">
        <li><a href="#">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登录</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "my-header"
  }
</script>

<style scoped>
.my-header { background: #444; padding: 7px 0;}
.navbar { max-width: 1224px; margin: 0 auto; }
.navbar > a { padding-right: 20px; }
.navbar > a > img { max-height: 28px; max-width: 120px; }
.navbar > [type] {
  border: none;outline: none;transition: all .3s;
  background-image: url('../assets/search.png');background-size: 14px 14px;
  background-repeat: no-repeat;background-position: 2% 50%;background-color: #888;
  border-radius: 15px;position: relative;bottom: 4px;padding: 6px 32px 5px 22px; }
.navbar > [type]:hover { background-color: #fff; }
.navbar > .nav-right { float: right; font-size: 13px; cursor: pointer; }
.navbar > .nav-right > li { display: inline-block; padding: 9px 15px; list-style: none; }
.navbar > .nav-right > li > a { text-decoration: none; color: #ccc; }
.navbar > .nav-right > li > a:hover { color: #fff; }
</style>