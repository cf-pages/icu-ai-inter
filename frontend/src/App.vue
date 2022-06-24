<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">ICU AI Intervention</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
     <HelloWorld />
      <div id="content-warper">
         <router-view v-slot="{ Component }"> <transition appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__slideInUp"
        leave-active-class="animate__zoomOut">
    <component :is="Component" />
  </transition></router-view>
      </div>
      
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      ICU AI Intervention ©2022 HeartbeatAI
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import 'animate.css'


export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['1']),
    };
  },components: {
    HelloWorld
  }

});
  

</script>
<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}

#content-warper{
  height: calc(100vh - 271.2px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>