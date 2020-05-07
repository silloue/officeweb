<template>
  <div class="home-page">
      <toTop />
      <Rotation />
      <MainCoverage />
      <FuncShow />
  </div>
</template>

<script>
import ItemHeader from './ItemHeader';
import Rotation from './Rotation';
import MainCoverage from './MainCoverage';
import FuncShow from './FuncShow';
import toTop from '../toTop'

export default {
    name:'HomePage',
    components:{
        ItemHeader,
        Rotation,
        MainCoverage,
        FuncShow,
        toTop
    }
}
</script>

<style lang="scss" scoped>
    .home-page{
        position: relative;
        width:100%;   
        @media screen and (max-width:1365px){
            min-width: 1200px;
        }
        @media screen and (max-width:765px){
            min-width: auto;
        } 
    }

</style>