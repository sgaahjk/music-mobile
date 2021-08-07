<template>
  <div>
    <!-- <div class="userInfo">
      <img src="@/assets/img/avatar.jpg" alt="avatar">
      <span class="username">GL</span>
    </div> -->
    <van-grid :column-num="3" :border="false">
      <van-grid-item text="本地音乐">
        <template #icon>
          <img src="@/assets/img/my.png" alt="my" class="grid-icon">
        </template>
      </van-grid-item>
      <van-grid-item text="下载音乐">
        <template #icon>
          <img src="@/assets/img/download.png" alt="download" class="grid-icon">
        </template>
      </van-grid-item>
      <van-grid-item text="最近播放">
        <template #icon>
          <img src="@/assets/img/zjbf.png" alt="zjbf" class="grid-icon">
        </template>
      </van-grid-item>
      <van-grid-item text="我喜欢">
        <template #icon>
          <img src="@/assets/img/like.png" alt="like" class="grid-icon">
        </template>
      </van-grid-item>
      <van-grid-item text="已购音乐">
        <template #icon>
          <img src="@/assets/img/bought.png" alt="bought" class="grid-icon">
        </template>
      </van-grid-item>
      <van-grid-item text="跑步电台">
        <template #icon>
          <img src="@/assets/img/run.png" alt="run" class="grid-icon">
        </template>
      </van-grid-item>
    </van-grid>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.van-grid{
  margin-top: 20px;
}
.grid-icon{
  width: 2rem;
}
</style>
