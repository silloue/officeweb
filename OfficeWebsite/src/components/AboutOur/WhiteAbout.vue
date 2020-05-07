<template>
  <div class="whiteabout">
      <div class="whiteabout__flex">
          <div class="about-img">
              <img src="../../../static/aboutlogo.jpg" />
          </div>
          <div class="about-text">
              <h1>共睿科技简介</h1>
              <p>上海共睿信息技术有限公司（简称：共睿科技）成立于2010年，主营业务是为行业客户提供优质的数据和业务智能系列产品、行业应用解决方案及IT服务。</p>
              <p>公司自主或合作参与实施了国内众多银行和金融机构的核心业务系统、卡系统（借记卡/贷记卡/IC卡）、中间业务系统、前置系统、ESB、互联网金融平台等系统的建设；在政府、能源、工业等领域积累了丰富的数据集成、数据分析与报表及可视化等应用的经验，具备数据全栈应用的成熟产品和技术实施与服务能力。</p>
              <p>公司技术团队200余人，拥有一批熟悉金融、政府、制造、能源等行业的业务专家，获有“双软企业”、ISO-9001/20000/27001质量管理体系认定证书、CMMI3认证等资质。</p>
              <p>2017年，鲁信新北洋智能装备产业基金战略入股共睿科技，为公司注入新的能力和机遇。</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'WhiteAbout'
}
</script>

<style lang="scss" scoped>
    .whiteabout{
        padding:0rem 2rem 4rem;
        @media screen and (max-width:1365px){
            min-width: 1200px;
        }
        @media screen and (max-width:765px){
            min-width: auto;
        }
        &__flex{
            display: flex;
            flex-wrap:wrap;
            .about-img{
                @media screen and (max-width:1365px){
                    flex:0.7;
                }
                @media screen and (max-width:765px){
                    flex:auto;
                    width:100%;
                }
                img{
                    @media screen and (max-width:1365px){
                        margin-left:5%;
                        width:90%;
                    }
                    @media screen and (max-width:765px){
                        margin-left:0%;
                        width:100%;
                    }
                }
            }
            .about-text{
                flex:1;
                @media screen and (max-width:1365px){
                    padding-top:0rem;
                }
                @media screen and (max-width:765px){
                    padding-top:3rem;
                }
                h1{
                    font-size: 3rem;
                    margin-top:0;
                }
                p{
                    text-indent: 2em;
                    font-size:1.4rem;
                    line-height: 2.4rem;
                    padding-bottom: 0.6rem;
                }
            }
        }
    }
</style>