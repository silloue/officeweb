<template>
  <div class="caseheader">
      <div class="caseheader__flex">
          <div class="case-img">
              <img src="../../../static/caselogo.png" />
              <span></span>
          </div>
          <div class="case-text">
              <h1>典型案例</h1>
              <ul>
                  <li v-for="item of liList" :key="item.id">
                        <h3>{{item.title}}</h3>
                        <p>{{item.text}}</p>
                        <p>{{item.text2}}</p>
                        <p>{{item.text3}}</p>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'CaseHeader',
    data(){
        return {
            liList:[
                {id:0,title:'背景',text:'如何在林火发生后及时发现并控制林火扩散范围和灾害影响程度，分析情况给出最优方案.对气象数据变化进行实时监测分析，结合5G信息处理效率高和无人机体积小、飞行便捷的特点，开发出一套能实时处理林火信息并迅速对火势变化问题分析的系统'},
                {id:1,title:'现状',text:'(1) 设备结合基于物联网的无人机和采用的资源预留方法，降低难度、缩短过程、提高效率', text2:'(2) 设备将检测到的数据对比后，运用算法分析得出目标区域检测信息，此方法使数据更具体化、更直观',text3:'(3) 利用无人机采集气象数据，可以灵活的改变观测点'},
                {id:2,title:'商业模式',text:'(1) 销售：分成线下销售、线上销售两部分',text2:'(2)出租： 由我们出租整套设备，同时包送我们的监测系统，提供包邮包咨询服务。',text3:'(3)承包：我们防火气象实时监测工作室的市场是面对全国。在我国范围内的客户都可以在网上预约我们外包服务。.'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('../../publicSass/public.scss');

    .caseheader{
        box-sizing: border-box;
        padding:0 2rem 2rem;
        @media screen and (max-width:1365px){
             min-width: 1200px;
        }   
        @media screen and (max-width:765px){
            min-width: auto;
        }
        &__flex{
            display:flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: center;
            .case-img{
                @media screen and (max-width:1365px){
                    width:50%;
                    margin-top:4rem;
                }   
                @media screen and (max-width:765px){
                    width:100%;
                }
                img{
                    width:100%;
                }
            }
            .case-text{
                flex:1;
                @media screen and (max-width:1365px){
                    padding:0 0 0 3rem;
                }   
                @media screen and (max-width:765px){
                    padding:5rem 0 4rem 0 ;
                }
                h1{
                    font-size:2.4rem;
                    padding-bottom: 1.4rem;
                }
                ul{
                    li{
                        h3{
                            font-size:1.4rem;
                            padding:1.5rem 0;
                        }
                        p{
                            line-height: 2.2rem;
                            font-size: 1.2rem;
                            opacity: 0.8;
                            
                        }
                    }
                    li:nth-of-type(1){
                        p{
                            text-indent:2em;
                        }
                    }
                }
            }
        }
    }
</style>