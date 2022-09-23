<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
// import HomeView from "./views/HomeView.vue";
</script>

<template>
  <!-- <div id="app" class="app"> -->
  <router-view></router-view>
  <!-- </div> -->
</template>
<script>
export default {
  setup() {
    console.log("11111111111");
    return {};
  },
  beforeCreate() {
    console.log("beforeCreate:在组件实例初始化完成之后立即调用");
  },
  created() {
    console.log("created:在组件实例处理完所有与状态相关的选项后调用");
  },
  beforeMount() {
    console.log("beforeMount:在组件被挂载之前调用");
  },
  mounted() {
    console.log("mounted:在组件被挂载之后调用");
  },
  beforeUpdate() {
    console.log("beforeUpdate:在组件即将因为一个响应式状态变更而更新其 DOM 树之前调用");
  },
  updated() {
    console.log("updated:在组件因为一个响应式状态变更而更新其 DOM 树之后调用");
  },
  beforeUnmount() {
    console.log("beforeUnmount:在一个组件实例被卸载之前调用");
  },
  unmounted() {
    console.log("unmounted:在一个组件实例被卸载之后调用");
  },
  errorCaptured() {
    console.log("errorCaptured:在捕获了后代组件传递的错误时调用");
  },
  renderTracked() {
    console.log("renderTracked:在一个响应式依赖被组件的渲染作用追踪后调用 Dev");
  },
  renderTriggered() {
    console.log("renderTriggered:在一个响应式依赖被组件触发了重新渲染之后调用 Dev");
  },
  activated() {
    console.log(
      "activated:若组件实例是 <KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用"
    );
  },
  deactivated() {
    console.log(
      "deactivated:若组件实例是 <KeepAlive> 缓存树的一部分，当组件从 DOM 中被移除时调用"
    );
  },
  serverPrefetch() {
    console.log("serverPrefetch:当组件实例在服务器上被渲染之前要完成的异步函数");
  },
};
</script>
<style scoped></style>
