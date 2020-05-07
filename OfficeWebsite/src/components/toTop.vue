<template>
  <div class="toTop">
      <div class="roofplacement" @click="totop">
          <span></span>
      </div>
  </div>
</template>

<script>
export default {
    name:'toTop',
    data(){
        return {
            roof:''
        }
    },
    mounted(){
        let oroof = document.getElementsByClassName("roofplacement")[0];
        window.addEventListener('scroll', (e) =>{
            if(document.documentElement.scrollTop > 70){
                oroof.style.opacity = 1;
            }else{
                oroof.style.opacity = 0;
            }
        })
    },
    methods:{
        totop(){
            document.documentElement.scrollTop = 0;
        }
    },
 }
</script>

<style lang="scss" scoped>
    .roofplacement{
        // 固定定位，减少重排
        position: fixed;
        right:2rem;
        bottom:3rem;
        width:4rem;
        height:4rem;
        border-radius: 50%;
        background-color: #fff;
        opacity: 0;
        transition: opacity 500ms linear;
        span{
            display: inline-block;
            transform: translate(91%,70%);
            width:0px;
            height:0px;
            border:0.7rem solid rgba(64,158,255,1);
            border-top-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
        }
    }
</style>