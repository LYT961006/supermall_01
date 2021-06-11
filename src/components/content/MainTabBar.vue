<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="@/assets/img/tabbar/首页.svg" alt="" slot="icon" />
      <img src="@/assets/img/tabbar/首页 (1).svg" alt="" slot="icon-active" />
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cat">
      <img src="@/assets/img/tabbar/cart_empty.svg" alt="" slot="icon" />
      <img src="@/assets/img/tabbar/cart_empty (1).svg" alt="" slot="icon-active" />
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/order">
      <img src="@/assets/img/tabbar/订单.svg" alt="" slot="icon" />
      <img src="@/assets/img/tabbar/订单 (1).svg" alt="" slot="icon-active" />
      <div slot="text">订单</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="@/assets/img/tabbar/user.svg" alt="" slot="icon" />
      <img src="@/assets/img/tabbar/user (1).svg" alt="" slot="icon-active" />
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";
import TabBar from "@/components/common/tabbar/TabBar.vue";
export default {
  name: "MainTabBar",
  components: { TabBar, TabBarItem },
  data() {
    return {};
  },
  props: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped></style>
