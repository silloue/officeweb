<template>
  <div class="funcshow">
      <div class="funcshow__all">
          <div class="func-title">
              <h1>{{datas.title}}</h1>
              <p>{{datas.describle}}</p>
          </div>
          <div class="func-img">
              <img :src="datas.imgSrc" />
          </div>
      </div>
      <BottomPhone />
  </div>
</template>

<script>
import BottomPhone from '../BottomPhone'
export default {
    name:'FuncShow',
    data(){
        return {
            datas:{}
        }
    },
    created(){
        let pos = this.$store.state.props;
        this.pos = pos;
        // 获取vuex变量，把请求提到全局变量
        this.$ajax.get(this.pos + '/funshow').then((res) =>{
            this.datas = res.data[0]
        })
    },
    watch:{
        '$store.state.count':function (e) {
            this.$ajax.get(this.pos + '/funshow').then((res) =>{
               if(e == 1){
                   this.datas = res.data[0]
               }else if(e == 2){
                   this.datas = res.data[1]
               }else if(e == 3){
                   this.datas = res.data[2]
               }else if(e == 4){
                   this.datas = res.data[3]
               }
            })
        }
    },
    components:{
        BottomPhone
    }
}
</script>

<style lang="scss" scoped>
    .funcshow{
        width:100%;
        &__all{
            width:100%;
            padding:2rem 1rem;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            background-color: rgb(50,62,80);
            @media screen and (max-width:1365px){
                justify-content: space-between;
            }
            @media screen and (max-width:765px){
                justify-content: center;
            }
            .func-title{
                color:blanchedalmond;
                @media screen and (max-width:1365px){
                    padding-left:5rem;
                    padding-top:6rem;
                }
                @media screen and (max-width:765px){
                    padding-left:0rem;
                    padding-top:0rem;
                }
                h1{
                    font-weight: 400;
                    padding-bottom: 3rem;
                }
                p{
                    font-size:1.3rem;
                    line-height: 2.4rem;
                    font-weight: 100;
                }
            }
            .func-img{
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
</style>