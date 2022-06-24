import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import InputID from './components/InputID.vue'
import Upload from './components/Upload.vue'
import recognition from './components/recognition.vue'
import result from './components/result.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createStore } from 'vuex'

const app = createApp(App);

const store = createStore({
  state () {
    return {
      count: 0,
      id:0,
    }
  },
  mutations: {
    changecount (state,value) {
      state.count = value
      console.log(state.count)
    },
    changeid (state,value) {
      state.id = value
      console.log(state.id)
    }
  }
})

const routes = [
    { path: '/', component: InputID },
    {path:'/upload', component: Upload },
    {path:'/recognition', component: recognition },
    {path:'/result',component:result}
  ]
  
  const router = createRouter({
   
    history: createWebHashHistory(),
    routes, 
  })

app.use(router)
app.use(store)

app.use(Antd).mount('#app');