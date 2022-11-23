<template>
  <div class="bg">
    <van-nav-bar
      title="vue样式绑定"
      safe-area-inset-top="true"
      left-arrow
      @click-left="onClickLeft"
    />

    <div v-bind:class="{ objstyle: objstyleConfig, objstyle1: objstyleConfig1 }">
      class对象绑定样式
    </div>
    <van-button class="button" type="default" @click="toNext">改变样式</van-button>
    <div v-bind:class="a">class对象绑==计算属性样式</div>
    <div :class="objstyleConfig2">class对象绑定样式1</div>
    <div :class="[arrycss]">class数组语法绑定样式</div>
    <div :style="{ color: colorS }">class内联语法绑定样式</div>
    <div :style="styleObject">class内联语法绑定对象样式</div>
    <div :style="[styleObject, styleObject1]">
      class内联语法使用数组将多个样式对象应用到元素
    </div>
  </div>
</template>
<script>
import { computed, getCurrentInstance, reactive, ref, toRefs } from "vue";
export default {
  setup() {
    let objstyleConfig = true;
    let objstyleConfig1 = ref(true);
    const objstyleConfig2 = { objstyle: true };

    const arrycss = "objstyle1";
    const colorS = "#8367";

    const styleObject = { color: "red", fontSize: "30px" };
    const styleObject1 = { "font-weight": "bold" };

    return {
      objstyleConfig,
      objstyleConfig1,
      objstyleConfig2,
      arrycss,
      colorS,
      styleObject,
      styleObject1,
    };
  },
  computed: {
    a() {
      return { objstyle: this.objstyleConfig && this.objstyleConfig1 };
    },
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    toNext() {
      this.objstyleConfig1 = !this.objstyleConfig1;
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
.objstyle {
  background-color: aqua;
  color: black;
}
.objstyle1 {
  color: red;
}
</style>
