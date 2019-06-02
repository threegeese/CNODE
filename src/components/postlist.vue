<template>
  <div class="postlist">
    <div class="loading" v-if="isLoading">
    </div>
    <div class="posts" v-else>
      <div class="tagbar">
        <a href="#">全部</a>
        <a href="#">精华</a>
        <a href="#">分享</a>
        <a href="#">问答</a>
        <a href="#">招聘</a>
        <a href="#">客户端测试</a>
      </div>
      <ul>
        <li v-for="post in posts">
          <img :src="post.author.avatar_url" :alt="post.author.loginname">
          <span class="reply-pageview">
            <span>{{ post.reply_count }}</span>
            <span>/</span>
            <span>{{ post.visit_count }}</span>
          </span>
          <span :class="[{p_good: post.good, p_top: post.top, p_tab: (!post.good && !post.top)}, p_tag]">
            <span>{{ post | formatTag }}</span>
          </span>
          <span class="post-title">{{ post.title }}</span>
          <span class="last-reply-time">{{ post.last_reply_at | formatTime }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "postlist",
  data () {
    return {
        isLoading: false,
        posts: [],
        p_tag: 'p_tag'
    }
  },
  methods: {
    getDataFromCnode() {
      this.$axios.get('https://cnodejs.org/api/v1/topics', {
        page: 1,
        limit: 20
      })
        .then(response => {
          this.isLoading = false
          this.posts = response.data.data
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  beforeMount() {
    this.isLoading = true
    this.getDataFromCnode()
  }
}
</script>

<style scoped>
.postlist {  }
.posts > .tagbar { padding: 10px; background: #f6f6f6; border-radius: 3px 3px 0 0; }
.posts > .tagbar > a { text-decoration: none; margin: 0 10px; color: #80bd01; font-size: 14px; }
.posts > .tagbar > a:hover { color: #08c; }
li { list-style: none; padding: 10px 0 10px 10px; border-top: 1px solid #f0f0f0;
  font-size: 16px;
  line-height: 30px;
  color: #778087;
}
li:hover { background: #f5f5f5; }
img { width: 30px;height: 30px; border-radius: 3px; font-size: 14px; }
.p_tag {
  padding: 2px 4px; border-radius: 3px; background: #e5e5e5;
  border-radius: 3px; color: #999; font-size: 12px; margin-right: 5px; }
.p_top { background: #80bd01; color: #fff; }
.reply-pageview { display: inline-block; padding: 0 5px; }
.reply-pageview > span:first-child { font-size: 13px; color: #9e78c0; }
.reply-pageview > span:last-child { font-size: 10px; color: #b4b4b4; }
.last-reply-time { float: right; padding-right: 10px; color: #778087; font-size: 11px; }
</style>