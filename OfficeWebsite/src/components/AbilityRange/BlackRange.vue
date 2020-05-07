<template>
  <div class="blackrange">
      <div class="blackrange__flex">
          <h1>解决方案</h1>
          <ul class="ul-main">
              <li v-for="item of funclist" :key="item.id">
                  <h2>{{item.title}}</h2>
                  <p>{{item.main}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'BlackRange',
    data(){
        return {
            funclist:[
                {id:0,title:"行业应用开发与维护",main:'基于公司自主研发的产品TPBUS、DIBS，提供构建、实施和维护服务。企业应用集成'},
                {id:1,title:"行业应用开发与维护",main:'基于公司自主研发的产品TPBUS、DIBS，提供构建、实施和维护服务。企业应用集成'},
                {id:2,title:"行业应用开发与维护",main:'基于公司自主研发的产品TPBUS、DIBS，提供构建、实施和维护服务。企业应用集成'},
                {id:3,title:"行业应用开发与维护",main:'基于公司自主研发的产品TPBUS、DIBS，提供构建、实施和维护服务。企业应用集成'},
                {id:4,title:"行业应用开发与维护",main:'基于公司自主研发的产品TPBUS、DIBS，提供构建、实施和维护服务。企业应用集成'},
                {id:5,title:"行业应用开发与维护",main:'基于公司自主研发的产品TPBUS、DIBS，提供构建、实施和维护服务。企业应用集成'},
                {id:6,title:"行业应用开发与维护",main:'基于公司自主研发的产品TPBUS、DIBS，提供构建、实施和维护服务。企业应用集成'},
                {id:7,title:"行业应用开发与维护",main:'基于公司自主研发的产品TPBUS、DIBS，提供构建、实施和维护服务。企业应用集成'},
                {id:8,title:"行业应用开发与维护",main:'基于公司自主研发的产品TPBUS、DIBS，提供构建、实施和维护服务。企业应用集成'},
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import url('../../publicSass/public.scss');

    .blackrange{
        width:100%;
        background-color:rgb(244,244,244);
        padding:0 2rem;
        box-sizing: border-box;
        h1{
            font-size: 3rem;
            padding : 4rem 0 2rem 0;
        }
        .ul-main{
            column-gap: 3rem;
            @media screen and (max-width:1365px){
                columns: 3;
            }
            @media screen and (max-width:765px){
                columns: 1;
            }

            li{
                padding-bottom: 4rem;
                h2{
                    font-size: 1.4rem;
                    padding-bottom: 1.6rem;
                }
                p{
                    font-size: 1.2rem;
                }
            }
        }
    }
</style>