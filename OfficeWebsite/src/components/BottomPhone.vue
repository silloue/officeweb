<template>
  <div class="">
      <div class="adress">
          <p>地址：佛山市禅城区岭南天地</p>
          <p>联系方式：13129062645</p>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .adress{
            width:100%;
            margin:0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            text-align: center;
            background-color: rgba(253,234,218,1);
            padding:0 5%;
            box-sizing: border-box;
            @media screen and (max-width:1365px){
                p{
                    line-height: 3rem;
                    font-size:1.4rem;
                }
                p:nth-of-type(1){
                    text-align: left;
                }
                p:nth-of-type(2){
                    text-align: right;
                }
            }
            @media screen and (max-width:765px){
                p{
                    line-height: 1.6rem;
                    font-size:1rem;
                }
                p:nth-of-type(1){
                    width:100%;
                    text-align: center;
                }
                p:nth-of-type(2){
                    width:100%;
                    text-align: center;
                }
            }
            
        }
</style>