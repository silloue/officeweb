<template>
  <div class="aboutour">
    <PositionRote :positions="positions"/>
    <WhiteAbout />
    <BlackAbout />
    <BottomPhone />
    <toTop />
  </div> 
</template>

<script>
import PositionRote from '../PositionRote'
import WhiteAbout from './WhiteAbout'
import BlackAbout from './BlackAbout'
import toTop from '../toTop'
import BottomPhone from '../BottomPhone'

export default {
    name:'AboutOur',
    data(){
        return {
            positions:{
                onefloor:'finally',
                twofloor:'关于我们'
            }
        }
    },
    components:{
        PositionRote,
        WhiteAbout,
        BlackAbout,
        toTop,
        BottomPhone
    }
}
</script>

<style lang="scss" scoped>
    .aboutour{
        width:100%;
        @media screen and (max-width:1365px){
            margin-top:6.6rem;
        }
        @media screen and (max-width:765px){
            margin-top:4rem;
        }
    }
</style>