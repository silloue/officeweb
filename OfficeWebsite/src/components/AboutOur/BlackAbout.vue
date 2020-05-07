<template>
  <div class="blackabout">
      <h1>我们优势</h1>
      <div class="blackabout__flex">
            <ul class="ul-list">
                <li v-for="item of advantage" :key="item.id">
                    <i :class="`iconfont `  + item.icon"></i>
                    <span>{{item.describle}}</span>
                </li>
            </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'BlackAbout',
    data(){
        return {
            advantage:[
                {id:0,icon:'iconjinpai',describle:'了解数据业务，剖解行业痛点，理解客户需求'},
                {id:1,icon:'iconxianchengchi',describle:'了解数据业务，剖解行业痛点，理解客户需求'},
                {id:2,icon:'iconrenyuan',describle:'了解数据业务，剖解行业痛点，理解客户需求'},
                {id:3,icon:'iconBlockingmouth',describle:'了解数据业务，剖解行业痛点，理解客户需求'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('../../publicSass/public.scss');
@import url('../../../iconfont/iconfont.css');
    .blackabout{
        background-color: rgb(244,244,244);
        padding:2.5rem 5rem;
        @media screen and (max-width:1365px){
            padding:2.5rem 5rem;
        }
        @media screen and (max-width:765px){
            padding:2.5rem 2rem;
        }
        h1{
            font-size:3.7rem;
            font-weight: 600;
            padding-bottom: 3rem;
        }
        &__flex{
            .ul-list{
                @media screen and (max-width:1365px){
                    columns: 2;
                }
                @media screen and (max-width:765px){
                    columns: 1;
                }
                li{
                    padding:2rem 0;
                    i{
                        font-size:2rem;
                        vertical-align: -0.2rem;
                        padding-right:0.6rem;
                    }
                    span{
                        font-size: 1.4rem;
                    }
                }
            }
        }
    }
</style>