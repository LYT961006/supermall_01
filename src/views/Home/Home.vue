<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="content"
      ref="wrapper"
      :probeType="3"
      @scroll-backtop="scrollBacktop"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommends-view :recommends="recommends"></recommends-view>
      <feture-view>
        <img src="@/assets/img/home/recommend_bg.jpg" alt="" />
      </feture-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="home-control"
        @tab-click="tabClick"
      ></tab-control>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
        <li>33</li>
        <li>34</li>
        <li>35</li>
        <li>36</li>
        <li>37</li>
        <li>38</li>
        <li>39</li>
        <li>40</li>
        <li>41</li>
        <li>42</li>
        <li>43</li>
        <li>44</li>
        <li>45</li>
        <li>46</li>
        <li>47</li>
        <li>48</li>
        <li>49</li>
        <li>50</li>
        <li>51</li>
        <li>52</li>
        <li>53</li>
        <li>54</li>
        <li>55</li>
        <li>56</li>
        <li>57</li>
        <li>58</li>
        <li>59</li>
        <li>60</li>
        <li>61</li>
        <li>62</li>
        <li>63</li>
        <li>64</li>
        <li>65</li>
        <li>66</li>
        <li>67</li>
        <li>68</li>
        <li>69</li>
        <li>70</li>
        <li>71</li>
        <li>72</li>
        <li>73</li>
        <li>74</li>
        <li>75</li>
        <li>76</li>
        <li>77</li>
        <li>78</li>
        <li>79</li>
        <li>80</li>
      </ul>
      <!-- <goods-list :goods="showCurrentType"></goods-list> -->
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBacktop"></back-top>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/content/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "@/components/content/backtop/BackTop.vue";

import HomeSwiper from "./childrenComps/HomeSwiper.vue";
import RecommendsView from "./childrenComps/RecommendsView.vue";
import FetureView from "./childrenComps/FetureView.vue";

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
      currentType: "pop",
      isShowBacktop: false
    };
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    HomeSwiper,
    RecommendsView,
    FetureView,
    BackTop
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
    scrollBacktop(position) {
      console.log(position);
      this.isShowBacktop = -position.y > 1000;
    },
    backClick() {
      console.log("backClick");
      this.$refs.wrapper.scrollTo(0, 0);
    },
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
  height: 100vh;
  position: relative;
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
.fetureview img {
  width: 100%;
}
.home-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* 
.content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
