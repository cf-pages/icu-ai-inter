
<template>

    <a-input-search
      v-model:value="value"
      placeholder="请输入病人样本ID"
      size="large"
      @search="search"
    >
    <template #prefix>
        <idcard-outlined />
      </template>
      <template #enterButton>
        <a-button>确认</a-button>
      </template>
    </a-input-search>

</template>
<script>
import { defineComponent, ref } from 'vue';
import { IdcardOutlined } from '@ant-design/icons-vue';
import HelloWorld from './HelloWorld.vue'
import { notification } from 'ant-design-vue';

export default defineComponent({
  setup() {
    const value = ref('');

    const onSearch = searchValue => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
      this.next()
    };
    const openNotificationWithIcon = type => {
      notification[type]({
        message: '输入的ID存在错误，请重试',
        description: '病人样本ID需要是0~99之间的数字，且不能为空以及包括其他字符！',
      });
    };

    return {
      value,
      onSearch,
      openNotificationWithIcon,
    };
  },
  components: {
    IdcardOutlined,
    HelloWorld
  },
  mounted () {
    this.$store.commit('changecount',0)
  },
  methods:{
     search(searchValue){
       console.log('use value', searchValue);
       if (searchValue!=""&&searchValue<100&&searchValue>=0){
       this.$store.commit('changeid',searchValue)
       this.$router.replace('./Upload')
       }else{
        this.openNotificationWithIcon('error')
       }
       
     }
   }
});
</script>


 
