import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

Vue.prototype.$axios = Axios
Vue.config.productionTip = false

Vue.filter('formatTime', (time) => {
  if (!time) return ''
  let date = new Date(time)
  let last_reply_time = new Date().getTime() - date.getTime()
  if (last_reply_time < 0) return ''
  else if (last_reply_time / 1000 <= 30) return '刚刚'
  else if (last_reply_time / 1000 <= 60) return parseInt(last_reply_time / 1000) + '秒前'
  else if (last_reply_time / 60000 <= 60) return parseInt(last_reply_time / 60000) + '分钟前'
  else if (last_reply_time / 3600000 <= 24) return parseInt(last_reply_time / 3600000) + '小时前'
  else if (last_reply_time / 86400000 <= 31) return parseInt(last_reply_time / 86400000) + '天前'
  else if (last_reply_time / 2592000000 <= 12) return parseInt(last_reply_time / 2592000000) + '月前'
  else if (last_reply_time / 31536000000 <= 1) return parseInt(last_reply_time / 31536000000) + '年前'
})

Vue.filter('formatTag', (post) => {
  if (post.good) return '精华'
  else if (post.top) return '置顶'
  else if (post.tab === 'ask')return '问答'
  else if (post.tab === 'share') return '分享'
  else return '招聘'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
