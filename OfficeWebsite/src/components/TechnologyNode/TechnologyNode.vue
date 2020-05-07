<template>
  <div class="technolgynode">
      <PositionRote :positions="positions"/>
      <WhiteText />
      <BlackText />
      <TechnologyTrait />
      <BottomPhone />
      <toTop />
  </div>
</template>

<script>
import PositionRote from '../PositionRote'
import WhiteText from './WhiteText'
import BlackText from './BlackText'
import TechnologyTrait from './TechnologyTrait'
import BottomPhone from '../BottomPhone';
import toTop from '../toTop'



export default {
    name:'TechnologyNode',
    data(){
        return {
            positions:{
                onefloor:'技术',
                twofloor:'node概述'
            }
        }
        
    },
    components:{
        PositionRote,
        WhiteText,
        BlackText,
        TechnologyTrait,
        BottomPhone,
        toTop
    }
}
</script>

<style lang="scss" scoped>
    .technolgynode{
        width:100%;
        @media screen and (max-width:1365px){
            margin-top:6.6rem;
        }
        @media screen and (max-width:765px){
            margin-top:4rem;
        }
    }
</style>