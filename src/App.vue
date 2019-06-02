<template>
  <div id="app">
    <my-header/>
    <my-main/>
  </div>
</template>

<script>
import header from './components/header'
import main from './components/main'
export default {
  name: 'app',
  components: {
    'my-header': header,
    'my-main': main
  }
}
</script>

<style>
* { padding: 0; margin: 0; box-sizing: border-box; }
body { background: #e1e1e1; }
.clearfix::after,  .clearfix::before { content: ''; display: block; clear: both; }
</style>
