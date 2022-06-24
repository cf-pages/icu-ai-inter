<template>
  <a-image style="width:100%; object-fit: cover; height:100%; transform: scale(1.1,1.5) translateX(-60px) translateY(-65px);"
    :src="imgurl"
  />
</template>
<script>
import { notification } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
computed: {
        imgurl () {
      return require("../assets/patient_mat/test_"+this.$store.state.id+"/matrix.png")
    }
    }, mounted () {
    this.$store.commit('changecount',3)
    this.openNotificationWithIcon('success')
    setTimeout(() => {
         document.querySelector(".ant-image-mask").style.display=""
    }, 2000)
  },
  setup() {
    const openNotificationWithIcon = type => {
      notification[type]({
        message: '样本识别完成',
        description: '如需尝试其他样本可以点击屏幕左侧的“选择样本”重新输入ID进行选择',
        duration: 16,

      });
    };

    return {
      openNotificationWithIcon,
    };
  },

});

</script>
<style>
.ant-image{
    width:100%;
    height:100%;
    overflow: hidden;
}
.ant-image-mask{
    display:none;
}
</style>