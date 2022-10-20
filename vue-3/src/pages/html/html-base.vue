<template>
  <div class="bg">
    <van-nav-bar
      title="HTML"
      safe-area-inset-top="true"
      left-arrow
      @click-left="onClickLeft"
    />
    <head>
      <!-- 3秒刷新一次 -->
      <!-- <meta http-equiv="refresh" content="3" /> -->
      <title>这是一个带图片的标签</title>
    </head>
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>
    <a href="https://www.baidu.com">这是一个链接</a>
    <p>这是一个段落</p>
    <br />

    <img
      src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      alt=""
      style="height: 50px"
    />
    <br />

    <hr />
    水平线hr
    <br />

    <sup>上标sup</sup>
    <sub>下标sub</sub>
    <br />

    <div contenteditable="true">HTML字符实体 &lt;div &gt;</div>
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

<style scoped>
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
<style lang="scss" scoped></style>
