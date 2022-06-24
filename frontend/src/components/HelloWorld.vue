<template>
<div id="steps-warper">
  <a-steps :current="current" status="finish">

    <a-step  title="选择样本" @click="backtohome()">
      <template #icon>
        <solution-outlined />
      </template>
    </a-step>
  
    <a-step  title="上传样本">
      <template #icon>
        <cloud-upload-outlined />
      </template>
    </a-step>
    <a-step  title="识别样本">
      <template #icon>
        <dot-chart-outlined />
      </template>
    </a-step>
    <a-step  title="预测结果">
      <template #icon>
        <file-done-outlined />
      </template>
    </a-step>
  </a-steps>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { FileDoneOutlined,DotChartOutlined,CloudUploadOutlined, SolutionOutlined} from '@ant-design/icons-vue'; // UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined,
export default defineComponent({
  components: {
    //UserOutlined,
    //SolutionOutlined,
    //LoadingOutlined,
    //SmileOutlined,
    FileDoneOutlined,
    DotChartOutlined,
    CloudUploadOutlined,
    SolutionOutlined


  },
    computed: {
        current () {
      return this.$store.state.count
    }
    },
    methods:{
      backtohome(){
      this.$router.replace('./')}

      }
    
});
</script>