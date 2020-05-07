<template>
  <div class="rotations">
      <div class="rotations--slider">
          <ul class="slider-ul">
              <li  v-for="item of imgUrl" :key="item.id">
                  <img :src="item.src" />
              </li>
          </ul>
          <!-- <div class="leftbtn" @click="backoff">
              <i class="iconfont iconhoutui"></i>
          </div>
          <div class="rightbtn" @click="forward">
              <i class="iconfont iconqianjin"></i>
          </div> -->
          <!-- 索引点 -->
          <div class="index">
              <span :class="oneActive"></span>
              <span :class="twoActive"></span>
              <span :class="threeActive"></span>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    name:'Rotation',
    data () {
        return {
             imgUrl:[
                {id:0,src:'../../../static/one.jpg'},
                {id:1,src:'../../../static/two.jpg'},
                {id:2,src:'../../../static/three.jpg'},
                {id:3,src:'../../../static/one.jpg'},
            ],
            pos:0,
            oneActive:'active',
            twoActive:'',
            threeActive:''

        }
    },
    mounted(){
        let oSlider = document.getElementsByClassName("slider-ul")[0];
        let oSliderActive = setInterval(() => {
            _active(this.pos);
            this.pos += 100;
            if(this.pos == 300){this.pos = 0;this.oneActive = 'active';this.twoActive = '';this.threeActive = '';}
            if(this.pos == 0){this.oneActive = 'active';this.twoActive = '';this.threeActive = '';}
            if(this.pos == 100){this.oneActive = '';this.twoActive = 'active';this.threeActive = '';}
            if(this.pos == 200){ this.oneActive = ''; this.twoActive = ''; this.threeActive = 'active';}
        }, 3000);

        function _active(e) {
            let nums = e;
            let num = 0;
            let active = setInterval(() => {
                if(num == 100){
                    clearInterval(active);
                }
                oSlider.style.left = '-' + (nums + num) + '%';
                num++;
            }, 10);
        }
        
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
@import url('../../publicSass/public.scss');
@import url('../../../iconfont/iconfont.css');

    .rotations{
        width:100%;
        @media screen and (max-width:1365px){
                margin-top:6.6rem;
        }
        @media screen and (max-width:765px){
            margin-top:4rem;
        }
       
        &--slider{
            width:100%;
            position: relative;
            overflow: hidden;
            ul{
                position: relative;
                left:0%;
                width:400%;
                li{
                    width:25%;
                    display: inline-block;
                    img{
                        width:100%;
                        @media screen and (max-width:1350px){
                            height:88.6vh;
                        }
                        @media screen and (max-width:1000px){
                            height:auto;
                        }
                    }
                }
            }
            .leftbtn{
                position: absolute;
                top:40%;
                left:3%;
                background-color: rgba(235,235,235,0.4);
                padding-left:0.5rem;
                box-sizing: border-box;
                border-radius: 50%;
                @media screen and (max-width:1350px){
                    width:4rem;
                    height:4rem;
                }
                @media screen and (max-width:765px){
                    width:3rem;
                    height:3rem;
                }
                i{
                    font-size:3rem;
                    color:rgba(255,255,255,0.6);
                @media screen and (max-width:1350px){
                    font-size: 3rem;
                    line-height: 4rem;
                }
                @media screen and (max-width:765px){
                    font-size:2rem;
                    line-height: 3rem;
                }
                }
            }
            .rightbtn{
                position: absolute;
                top:40%;
                right:3%;
                background-color: rgba(235,235,235,0.4);
                padding-left:0.5rem;
                box-sizing: border-box;
                border-radius: 50%;
                @media screen and (max-width:1350px){
                    width:4rem;
                    height:4rem;
                }
                @media screen and (max-width:765px){
                    width:3rem;
                    height:3rem;
                }
                i{
                    font-size:3rem;
                    color:rgba(255,255,255,0.6);
                @media screen and (max-width:1350px){
                    font-size: 3rem;
                    line-height: 4rem;
                }
                @media screen and (max-width:765px){
                    font-size:2rem;
                    line-height: 3rem;
                }
                }
            }

            .index{
                position: absolute;
                bottom:15%;
                left:50%;
                transform: translate(-50%,0);
                span{
                    display: inline-block;
                    width:3rem;
                    height: 0.2rem;
                    margin:0 0.3rem 0 0.3rem;
                    background-color: rgba(253,234,218,0.6);
                }
                .active{
                    background-color: rgba(253,234,218,1);
                }
            }
        }
    }
</style>