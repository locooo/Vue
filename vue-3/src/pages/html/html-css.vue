<template>
  <div class="bg">
    <van-nav-bar
      title="HTML"
      safe-area-inset-top="true"
      left-arrow
      @click-left="onClickLeft"
    />

    <div style="background-color: yellow; color: red">
      1、内联样式-在元素中使用‘style’属性
    </div>
    <div>2、外部引入-使用外部css文件</div>
    <div>3、内部样式表-使用&lt;style&gt;</div>
  </div>
</template>
<script>
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
</style>
