<template>
  <body>
    <header class="navdiv"></header>
    <div class="scroll">
      <van-nav-bar title="Vue3" safe-area-inset-top="true" />
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
        <van-list>
          <van-cell
            v-for="(item, index) in listVue"
            :key="item"
            :title="item"
            @click="vueClick(index)"
          />
        </van-list>
      </div>

      <van-sticky :offset-top="44" @change="stickyChange">
        <van-tabs v-model:active="active">
          <van-tab title="HTML">
            <van-list class="tab_list">
              <van-cell
                v-for="(item, index) in listHTML"
                :key="item"
                :title="item"
                @click="htmlClick(index)"
              />
            </van-list>
          </van-tab>

          <van-tab title="CSS">
            <van-list
              class="tab_list"
              :style="{
                height: susp ? 'calc(80px)' : '',
              }"
            >
              <van-cell
                v-for="(item, index) in listCSS"
                :key="item"
                :title="item"
                @click="cssClick(index)"
              />
            </van-list>
          </van-tab>
          <van-tab title="javaScript"
            ><van-list class="tab_list">
              <van-cell
                v-for="(item, index) in listJS"
                :key="item"
                :title="item"
                @click="jsClick(index)"
              />
            </van-list>
          </van-tab>
        </van-tabs>
      </van-sticky>
      <div class="empty"></div>
    </div>
  </body>
</template>

<script>
import CenterItem from "./CenterItem.vue";
import { ref } from "vue";
export default {
  setup() {
    const listVue = ["vue样式绑定"];
    const listVuePath = ["/vue-styleLink"];

    const listHTML = ["基础", "CSS"];
    const listHTMLPath = ["/html-base", "/html-css"];
    const listCSS = ["sass", "less"];
    const listCSSPath = ["/sass-base", "/less-base"];
    const listJS = ["基础"];
    const listJSPath = ["/js-base"];
    var susp = false;

    return {
      listVue,
      listVuePath,
      listHTML,
      listHTMLPath,
      listCSS,
      listCSSPath,
      listJS,
      listJSPath,
      susp,
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
    stickyChange(ifFixed) {
      // this.susp = ifFixed;
      console.log(ifFixed);
      // if (ifFixed) {
      //   document.removeChild(document.getElementsByClassName("empty"));
      // }else{
      //   document.appendChild("")
      // }
    },
    vueClick(index) {
      this.$router.push(this.listVuePath[index]);
    },
    htmlClick(index) {
      console.log(index);
      // this.$router.push(this.listHTMLPath[index]);

      // document.body.style.setProperty("background", "yellow");
      // document.body.style.setProperty("--naMainColor", "#7F583F");
      document.documentElement.style.setProperty("--naMainColor", "yellow");
    },
    jsClick(index) {
      this.$router.push(this.listJSPath[index]);
    },
    cssClick(index) {
      console.log(index);
      this.$router.push(this.listCSSPath[index]);
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
  /* --van-nav-bar-background-color: #b1d0e0; */
  --van-nav-bar-background-color: var(--naMainColor);
}

/* body {
  height: 100%;
  background: white;
  padding-top: 0;
  padding-top: 0;
  padding-left: 0;
  padding-left: 0;
  padding-right: 0;
  padding-right: 0;
} */
.tab_list {
  width: 100vw;
  height: calc(40vh);
  overflow: scroll;
  background: rebeccapurple;
}
.lanmu {
  height: calc(20vw + 20px);
}
.scroll1 {
  overflow: auto;
  height: 30vh;
  background: red;
}
.scroll {
  overflow: auto;
  height: 100vh;
}
.scroll2 {
  overflow: scroll;

  background: red;
}
.lanmu {
  display: flex;
  justify-content: space-around;
}

.empty {
  height: 60vh;
}
</style>
