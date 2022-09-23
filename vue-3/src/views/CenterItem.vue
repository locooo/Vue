<template>
  <div class="all">
    <van-badge
      :content="number"
      :show-zero="false"
      position="top-right"
      :round="true"
      class="item"
      :offset="[-5, 15]"
    >
      <div>
        <van-image
          round
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          :style="{ '--image-w': image_w }"
        ></van-image>
        <div class="title-name" :style="{ '--title-color': title_color }">
          {{ title }}
        </div>
      </div>
    </van-badge>
  </div>
</template>
<script>
export default {
  props: {
    number: {
      type: String,
      default: "0",
    },
    image_w: {
      default: "80px",
    },
    title: {
      type: String,
      default: "",
    },
    title_color: {
      default: "black",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.item {
  margin-top: 15px;
}
.van-image {
  width: var(--image-w, 80px);
  height: var(--image-w, 80px);
  border-radius: calc(var(--image-w) * 0.5);
}
.title-name {
  color: var(--title-color);
  text-align: center;
  line-height: 1.2;
}
.all {
  text-align: center;
  display: flex;
  justify-content: space-around;
  --title-color: rgb(39, 14, 14);
}
</style>
