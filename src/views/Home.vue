<template>
  <div>
    <van-nav-bar :border="false" safe-area-inset-top >
      <template #left>
        <img src="@/assets/img/目录.png" alt="menu" @click="showSideBar"/>
      </template>
      <template #title>
        <router-link to="/">我的</router-link>
        <a href="#">音乐馆</a>
        <a href="#">发现</a>
      </template>
      <template #right>
        <van-icon name="plus" />
      </template>
    </van-nav-bar>
    <van-search placeholder="请输入搜索关键词" input-align="center" />
    <van-popup v-model="show" position="left"></van-popup>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: false,
    };
  },

  methods: {
    showSideBar() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: rgba(50, 194, 125, 1);
}
.van-nav-bar a {
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}
.van-nav-bar .van-icon {
  color: white;
}
.van-nav-bar img {
  width: 16px;
}

.van-search {
  background-color: rgba(50, 194, 125, 1);
}

.van-popup{
  height: 100%;
  width: 70%;
}
</style>