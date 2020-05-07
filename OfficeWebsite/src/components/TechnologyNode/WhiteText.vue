<template>
  <div class="whitetext">
      <div class="whitetext__flex">
          <div class="text-img">
              <img src="http://www.coraise.cn/_nuxt/img/dibs-data-img1.f6ecb79.png" />
          </div>
          <div class="text-text">
              <h1>Node.js概述</h1>
              <p>如果你是一个前端程序员，你不懂得像PHP、Python或Ruby等动态编程语言，然后你想创建自己的服务，那么Node.js是一个非常好的选择。Node.js 是运行在服务端的 JavaScript，如果你熟悉Javascript，那么你将会很容易的学会Node.js。</p>
              <p>Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way.Those interfaces may return null in certain cases where the methods and properties are not relevant. They may throw an exception — for example when adding children to a node type for which no children can exist.</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'WhiteText'
}
</script>

<style lang="scss" scoped>
    .whitetext{
        &__flex{
            box-sizing: border-box;
            color:rgba(0,0,0,0.7);
            line-height: 2.3rem;
            width:100%;
            display: flex;
            flex-wrap: wrap;
            @media screen and (max-width:1365px){
                min-width: 120.5rem;
                justify-content: space-around;
                padding:1rem 2rem 2rem;
            }
            @media screen and (max-width:765px){
                min-width: auto;
                padding:0 1rem;
            }
            .text-img{
                img{
                    width:100%;
                }
            }

            .text-text{
                box-sizing: border-box;
                @media screen and (max-width:1365px){
                    padding:0 3rem;
                    flex:1;
                }
                @media screen and (max-width:765px){
                    flex:auto;
                    padding:0 1.5rem;
                }
                h1{
                    @media screen and (max-width:1365px){
                        font-size:2.8rem;
                    }
                    @media screen and (max-width:765px){
                        font-size: 2.3rem;
                    }
                }
                p:nth-of-type(1){
                    font-size:1.4rem;
                    text-indent:2em;
                }
                p:nth-of-type(2){
                    font-size:1.4rem;
                    text-indent:2em;
                }
            }
        }
    }
</style>