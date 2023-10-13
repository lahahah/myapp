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
  }
 
</style>
