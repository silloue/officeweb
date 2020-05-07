<template>
  <div class="home-header">
      <div class="homehead-logo">
        <img src="../../assets/logo.jpg" alt="logo">
      </div>
      <ul class="homehead-list">
          <li @click="toHeader">首页</li>
          <li>技术描述
              <div class="flo" >
                  <span @click="toAboutJs">javaScript概述</span>
                  <span @click="toNode">NodeJs概述</span>
              </div>
          </li>
          <li @click="toability">技术支持</li>
          <li @click="toCase">案例</li>
          <li @click="toaboutour">关于我们</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'ItemHeader',
    methods:{
        toHeader(){
            this.getRoute('/')
        },
        toAboutJs(){
            this.getRoute('/aboutjs')
        },
        toNode(){
            this.getRoute('/aboutNode')
        },
        toCase(){
            this.getRoute("/aboutsuccesscase")
        },
        toability(){
            this.getRoute("/aboutabilityrange")
        },
        toaboutour(){
            this.getRoute("/aboutour")
        },
        getRoute(e){
            this.$router.push({path:e})
        }
    }
}
</script>

<style lang="scss" scoped>
    @import url('../../publicSass/public.scss');

    $myColor : rgb(253,234,218);

    .home-header{
        display: flex;
        position: fixed;
        top:0px;
        width:100%;
        background-color:rgb(37,46,59);
        z-index:999;
        @media screen and (max-width:1365px){
           height:6.6rem;
        }
        @media screen and (max-width:765px){
           height:4.0rem;
        }
       .homehead-logo{
           @media screen and (max-width:1365px){
               width:150px;
           }
           @media screen and (max-width:765px){
               width:100px;
           }
           @media screen and (max-width:365px){
               width:80px;
           }
           img{
               width:100%;
               height:100%;
           }
       }
       .homehead-list{
            flex:6;
            display: flex;
            @media screen and (max-width:1365px){
                padding-left:42em; 
            }
            @media screen and (max-width:1000px){
                padding-left:20em; 
            }
            @media screen and (max-width:765px){
                padding-left:10rem;
            }
            @media screen and (max-width:565px){
                padding-left:0rem;
            }
           li{
                width:100%;
                text-align: center;
                flex:1;
                color:$myColor;
                cursor: pointer;
                @media screen and (max-width:1365px){
                    font-size:1.4rem;
                    line-height: 6.6rem; 
                }
                @media screen and (max-width:765px){
                    font-size:1rem;
                    line-height: 4.0rem; 
                }
                .flo{
                    background-color: rgb(23,40,58);
                    display: none;
                    // hover后，大屏幕显示一部分，手机端显示全屏宽度兼容
                    @media screen and (max-width:1365px){
                        position:relative;
                    }
                    @media screen and (max-width:765px){
                        position: absolute;
                        left:0;
                        width:100%;
                    }
                    span{
                        display: block;
                        line-height: 4rem;
                        @media screen and (max-width:1365px){
                            text-align: center;
                        }
                        @media screen and (max-width:765px){
                            text-align: left;
                            padding:0 2rem;
                        }
                    }
                }
                // hove控制显示和隐藏
                &:nth-of-type(2):hover .flo{
                    display: block;
                }
           }
           
       }
    }


</style>