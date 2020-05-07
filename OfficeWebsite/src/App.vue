<template>
  <div id="app">
    <ItemHeader />
    <router-view/>
  </div>
</template>

<script>
import ItemHeader from './components/HomePage/ItemHeader'
export default {
  name: 'App',
  components:{
    ItemHeader
  }
}
</script>

<style lang="scss">
  @import url('./publicSass/pageStyle.scss');

  #app{
    min-width:320px;
  }
</style>
