<template>
  <div class="positionrote">
      <div class="position__detail">
        <i class="iconfont iconHome"></i>
        <span>当前位置：</span>
        <span>{{pos.onefloor}} <span>></span> {{pos.twofloor}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'PositionRote',
    data(){
        return {
            pos:{}
        }
    },
    props:['positions'],
    created(){
        // 获取props数据
        this.pos = this.positions;
    }
}
</script>

<style lang="scss" scoped>
@import url('../../iconfont/iconfont.css');

    .positionrote{
        width:100%;
        @media screen and (max-width:1365px){
            padding:3rem 4rem;
        }
        @media screen and (max-width:765px){
            padding:1.8rem 1.2rem;
        }
        box-sizing: border-box;
        .position__detail{
            i{
                font-size:2.2rem;
                color:#00add8;
            }
            span{
                vertical-align: 0.4rem;
                span{
                    vertical-align: 0rem;   
                }
                &:nth-of-type(1){
                    font-size:1.3rem;
                    color:#0d0d0d;
                }
                &:nth-of-type(2){
                    color:#00add8;
                    font-size:1.2rem;
                }
            }
        }
    }
</style>