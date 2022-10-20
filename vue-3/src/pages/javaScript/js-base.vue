<template>
  <div class="bg">
    <van-nav-bar
      title="JS"
      safe-area-inset-top="true"
      left-arrow
      @click-left="onClickLeft"
    />
    <head>
      <title>这是一个带图片的标签</title>
    </head>
    <div class="center">
      <div>我是垂直居中的。</div>
      <div>sadasdasdssad</div>
      <div>sadasdasdssad</div>
      <div>sadasdasdssad</div>
      <div>sadasdasdssad</div>
    </div>
  </div>
</template>
<script>
// window.alert(11111);

// document.write(Date());
/*
 匿名函数
 箭头函数
 apply  call bind
 闭包
*/
let Runoob = class {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
};
console.log(Runoob.name);
console.log(Runoob.url);
console.log("".constructor.toString());

export default {
  setup() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style>
.van-nav-bar {
  --van-nav-bar-background-color: #b1d0e0;
}
body {
  height: 100%;
  background: white;
}
.bg {
  height: auto;
  background: white;
  height: 100%;
}
.center {
  margin: auto;
  width: fit-content;
  /* height: 200px; */
  border: 3px solid #73ad21;
  padding: 10px;
}
</style>
