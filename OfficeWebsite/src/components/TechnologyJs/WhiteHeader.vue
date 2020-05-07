<template>
  <div :class="`whiteheader ` + cols">
      <div class="discrible">
            <!-- 标题 -->
            <h1>{{datas.title}}</h1>
            <!-- 描述 -->
            <p>
                {{datas.discrible}}
            </p>
            <!-- 图片 -->
            <div class="discrible-img">
                <img :src="datas.imgSrc" />
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'WhiteHeader',
    data(){
        return {
            datas:{},
            cols:''
        }
    },
    props:['jsDetail','col'],
    mounted(){
        this.datas = this.jsDetail;
        this.cols = this.col
    }
}
</script>

<style lang="scss" scoped>
    .whiteheader{
        @media screen and (max-width:1365px){
            padding:1.3rem 0;
        }
        @media screen and (max-width:765px){
            padding:1.3rem 0;
        }
        .discrible{
            @media screen and (max-width:1365px){
                padding:0 5rem  2rem;
            }
            @media screen and (max-width:765px){
                padding:0 1.7rem  2rem;
            }
            h1{
                text-align: center;
                font-weight: 600;
                @media screen and (max-width:1365px){
                    font-size:3.5rem;
                }
                @media screen and (max-width:765px){
                    font-size:2.3rem;
                }
            }
            p{
                text-align: left;
                text-indent: 2em;
                font-size:1.4rem;
                line-height: 2.4rem;
                color:rgba(0,0,0,0.6);
            }
            .discrible-img{
                padding-top:1.5rem;
                margin: 0 auto;
                @media screen and (max-width:1365px){
                    width:80%;
                }
                @media screen and (max-width:765px){
                    width:90%;
                }
                img{
                    width: 100%;
                }
            }
        }
    }

    .black{
        background: rgb(244,244,244);
    }
    .white{
        background: rgb(255,255,255);
    }
</style>