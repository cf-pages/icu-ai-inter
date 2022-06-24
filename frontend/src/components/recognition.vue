<template>

  <a-skeleton active />
</template>

<script>
import { defineComponent} from 'vue';
import HelloWorld from './HelloWorld.vue'



export default defineComponent({
components: {
    HelloWorld
  },
  mounted () {
    this.$store.commit('changecount',2)
    setTimeout(() => {
         this.$router.replace('./result')
    }, 2000)
  },

});
  

</script>