<template>
  <div class="successcase">
    <PositionRote :positions="positions"/>
    <CaseHeader />
    <BottomPhone />
    <toTop />
  </div>
</template>

<script>
import CaseHeader from './CaseHeader'
import PositionRote from '../PositionRote'
import toTop from '../toTop'
import BottomPhone from '../BottomPhone'

export default {
    name:'SuccessCase',
    data(){
      return {
        positions:{
          onefloor:'展示',
          twofloor:'案例展示'
        }
      }
    },
    components:{
      CaseHeader,
      PositionRote,
      BottomPhone,
      toTop
    }
}
</script>

<style lang="scss" scoped>
    .successcase{
        width:100%;
        @media screen and (max-width:1365px){
            margin-top:6.6rem;
        }
        @media screen and (max-width:765px){
            margin-top:4rem;
        }
    }
</style>