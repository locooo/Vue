<template>
  <div class="bg">
    <van-nav-bar
      title="sass"
      safe-area-inset-top="true"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-button class="button">我是一个按钮</van-button>
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
/* .button {
    background-color: red;
  } */
</style>
<style lang="scss">
.button {
  $theme-nav-color2: red !global;
  background-color: $theme-nav-color2;
}
</style>
