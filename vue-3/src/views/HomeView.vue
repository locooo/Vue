<template>
  <header class="navdiv"></header>
  <body>
    <div class="scroll">
      <van-nav-bar title="Vue3" />
      <van-sticky>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </van-sticky>

      <div class="lanmu">
        <CenterItem
          number="3"
          title="用印"
          title_color="rgb(0,0,0)"
          image_w="45px"
        ></CenterItem>
        <CenterItem
          :number="23"
          title="归档"
          title_color="black"
          image_w="45px"
        ></CenterItem>
        <CenterItem
          :number="23"
          title="印章"
          title_color="#000000"
          image_w="45px"
        ></CenterItem>
        <CenterItem :number="23" title="文件柜" image_w="45px"></CenterItem>
        <CenterItem title="更多" image_w="45px"></CenterItem>
      </div>

      <div class="scroll1">
        <van-list
          v-model:loading="loading"
          v-model:error="error"
          error-text="请求失败，点击重新加载"
          @load="onLoad"
          class="list1"
        >
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </div>

      <van-sticky :offset-top="44">
        <van-tabs v-model:active="active">
          <van-tab title="标签 1">内容 1</van-tab>
          <van-tab title="标签 2" disabled>内容 2</van-tab>
          <van-tab title="标签 3">内容 3</van-tab>
        </van-tabs>
      </van-sticky>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
      <div>我是一个搜索011</div>
    </div>
  </body>
</template>

<script>
import CenterItem from "./CenterItem.vue";
import { ref } from "vue";
export default {
  setup() {
    const activeName = ref("a");

    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    return {
      list,
      onLoad,
      loading,
      finished,
      activeName,
    };
  },
  components: {
    CenterItem,
  },
  methods: {
    click() {
      this.$router.push("/about");
    },
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.navmy {
  height: 100%;
}
.navdiv {
  background-color: aqua;
  background: aqua;
}
.van-nav-bar {
  /* padding-top: -10px; */
  --van-nav-bar-background-color: #b1d0e0;
}

body {
  height: 100%;
  background: rgb(228, 30, 30);
  padding-top: 0;
  padding-top: 0;
  padding-left: 0;
  padding-left: 0;
  padding-right: 0;
  padding-right: 0;
}
.list1 {
  height: 30vh;
  max-height: 30vh;
}
.scroll1 {
  overflow: auto;
  height: 30vh;
}
.scroll {
  overflow: auto;
  height: 100vh;
  width: 90vw;
  margin-left: 5vw;
}
.lanmu {
  display: flex;
  justify-content: space-around;
}
</style>
