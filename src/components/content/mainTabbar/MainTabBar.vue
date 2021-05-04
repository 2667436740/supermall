<template>
  <tabbar>
    <tabbar-item path="/home" activeColor="darksalmon">
      <img slot="item-icon" src="~assets/img/tabbar/shouye.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shouye_active.png" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category" activeColor="darksalmon">
      <img slot="item-icon" src="~assets/img/tabbar/fenlei.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/fenlei_active.png" alt="">
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart" activeColor="darksalmon">
      <img slot="item-icon" src="~assets/img/tabbar/xiazai50.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/xiazai50_active.png" alt="">
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile" activeColor="darksalmon">
      <img slot="item-icon" src="~assets/img/tabbar/wodedangxuan.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/wodedangxuan_active.png" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import Tabbar from "./tabbar/Tabbar";
  import TabbarItem from "./tabbar/TabbarItem";

  export default {
    name: "MainTabBar",
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>

</style>
