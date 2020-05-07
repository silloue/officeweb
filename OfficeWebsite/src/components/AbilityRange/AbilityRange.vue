<template>
  <div class="abilityrange">
      <PositionRote :positions="positions"/>
      <WhiteRange :info="info"/>
      <BlackRange />
      <WhiteTwoRange :info="info2"/>
      <BottomPhone />
      <toTop />
  </div>
</template>

<script>
import PositionRote from '../PositionRote'
import WhiteRange from './WhiteRange'
import BlackRange from './BlackRange'
import WhiteTwoRange from './WhiteTwoRange'
import BottomPhone from '../BottomPhone';
import toTop from '../toTop'


export default {
    name:'AbilityRange',
    data(){
        return {
            positions:{
                onefloor:'描述',
                twofloor:'能力范围'
            },
            info:{
                id:0,
                imgone:'../../../static/abilitylogo.jpg',
                title:'概述',
                describle:'随着软件服务外包产业的快速发展，越来越多的企业为了节约成本、快速响应市场用户需求，都将越来越多的非核心业务/研发外包给第三方服务企业。'
            },
            info2:{
                id:0,
                imgone:'../../../static/caselogo2.jpg',
                title:'优势',
                describle:'共睿科技基于优异的项目管理、流程、工作方法和工具，为客户提供完善的开发与运维服务。',
                describle2:'共睿科技的应用开发与维护服务将IT与业务需求统一起来，能够帮助用户降低总拥有成本、降低运作风险、减少系统故障、维护系统稳定性，并对设施规划、设计和建造进行有效管理，为客户提供低成本、高质量的服务。',
                describle3:'共睿科技凭借在IT领域的行业经验和技术专长，能够帮助客户在短时间内组建专门的开发、测试、以及技术支持团队，提供全天候现场技术服务。'
            }
        }
    },
    components:{
        PositionRote,
        WhiteRange,
        BlackRange,
        WhiteTwoRange,
        BottomPhone,
        toTop
    }
}
</script>

<style lang="scss" scoped>
    .abilityrange{
        width:100%;
        @media screen and (max-width:1365px){
            margin-top:6.6rem;
        }
        @media screen and (max-width:765px){
            margin-top:4rem;
        }
    }
</style>