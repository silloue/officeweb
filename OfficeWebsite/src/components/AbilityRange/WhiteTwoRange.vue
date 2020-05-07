<template>
  <div class="whitetworange">
      <div class="whitetworange__flex">
          <div class="range__text">
                <h1>{{datas.title}}</h1>
                <p>{{datas.describle}}</p>
                <p>{{datas.describle2}}</p>
                <p>{{datas.describle3}}</p>
          </div>
          <div class="range__firstimg">
              <img :src="datas.imgone" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'WhiteTwoRange',
    data(){
        return {
            datas:{}
        }
    },
    props:['info'],
    created(){
        this.datas = this.info;
    }
}
</script>

<style lang="scss" scoped>
    .whitetworange{
        width:100%;
        box-sizing: border-box;
        @media screen and (max-width:1365px){
            padding:3rem 2rem 5rem;
        }
        @media screen and (max-width:765px){
            padding:1rem 2rem 2rem;
        }
        &__flex{
            display: flex;
            flex-wrap: wrap;
            .range__firstimg{
                @media screen and (max-width:1365px){
                    flex:1.5;
                    width:70%;
                }   
                @media screen and (max-width:765px){
                    flex:auto;
                    width:100%;
                }
                img{
                    width:100%;
                }
            }
            .range__text{
                flex:2;
                @media screen and (max-width:1365px){
                    padding:0rem 3rem 0 0;
                }   
                @media screen and (max-width:765px){
                    padding:0rem 0 4rem 0;
                }
                h1{
                    font-size: 2.4rem;
                    padding-bottom: 0.5rem;
                }
                p{
                    font-size: 1.3rem;
                    opacity: 0.6;
                    line-height: 3rem;
                    text-indent: 2em;
                }
            }
        }
    }
</style>