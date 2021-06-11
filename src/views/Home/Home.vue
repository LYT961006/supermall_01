<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <recommends-view :recommends="recommends"></recommends-view>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue"
import RecommendsView from './childrenComps/RecommendsView.vue'
import { getHomeMultidata } from "@/network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends:[]
    };
  },
  components: {
    NavBar,
    RecommendsView
  },
  props: {},
  watch: {},
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
    });
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.home-nav {
  background-color: #ff8e97;
  color: #fff;
}
</style>
