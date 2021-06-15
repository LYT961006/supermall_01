<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <recommends-view :recommends="recommends"></recommends-view>
    <ul>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
    </ul>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="home-control"
      @tab-click="tabClick"
    ></tab-control>
    <ul>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
      <li>{$}</li>
    </ul>
    <goods-list :goods="showCurrentType"></goods-list>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/content/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import RecommendsView from "./childrenComps/RecommendsView.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    RecommendsView
  },
  props: {},
  computed: {
    showCurrentType() {
      return this.goods[this.currentType].list;
    }
  },
  watch: {},
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
  methods: {
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: #ff8e97;
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.home-control {
  position: sticky;
  top: 44px;
}
</style>
