<template>
  <div id="app">
    <router-view />  <!-- 组件出口-->
  </div>
</template>

<style lang="less">
  html,body,h3,p{  //去掉默认样式
    margin: 0;
    padding: 0;
    //overflow: hidden;  //就是溢出隐藏的意思，滚动条就隐藏了，但也不能下滑了
    /* 隐藏滚动条 */
    ::-webkit-scrollbar {
      display: none;
    }

    /* 其他的滚动条样式，例如滚动条轨道的背景颜色 */
    .wrap-scrollbar {
      /* 滚动条轨道的背景颜色 */
      background-color: #eee;

      /* 确保内容不会溢出滚动条 */
      overflow-y: scroll;
    }
  }

 
</style>
