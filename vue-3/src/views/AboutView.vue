<template>
  <van-nav-bar title="About" left-text="返回" @click-left="onClickLeft" />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
<style>
body {
  height: 100%;
  background: white;
}
</style>
