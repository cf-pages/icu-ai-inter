<template>

  <a-progress type="circle" :percent="progress" />
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  name: 'UploadPage',
  components:{
    HelloWorld
  },

  data () {
    return {
      progress: 0,
    }
  },

   mounted () {
    setTimeout(() => {
        this.progress=3
    }, 500)
    setTimeout(() => {
        this.progress=10
    }, 1000)
    setTimeout(() => {
        this.progress=16
    }, 1300)
    setTimeout(() => {
        this.progress=27
    }, 2000)
    setTimeout(() => {
        this.progress=50
    }, 3000)
    setTimeout(() => {
        this.progress=70
    }, 4000)
    setTimeout(() => {
        this.progress=80
    }, 4300)
    setTimeout(() => {
        this.progress=90
    }, 4600)
    setTimeout(() => {
        this.progress=100
    }, 5000)
    setTimeout(() => {
         this.$router.replace('./recognition')
    }, 6000)
    this.$store.commit('changecount',1)
  
 
  }

}
</script>