<template>
  <div class="main">
    <post-list/>
  </div>
</template>

<script>
import postlist from './postlist'
export default {
  name: "my-main",
  components: {
    'post-list': postlist
  }
}
</script>

<style scoped>
.main { width: 90%; max-width: 1400px; min-width: 960px; margin: 15px auto; background: #fff; border-radius: 4px; }
</style>