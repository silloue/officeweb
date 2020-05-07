<template>
  <div class="blacktext">
      <div class="blacktext-flex">
          <div class="text-text">
              <h1>Node构成</h1>
              <div v-for="item of datasList" :key="item.id" class="text-items">
                  <h2>{{item.title}}</h2>
                  <p>{{item.text}}</p>
                  <p>{{item.text2}}</p>
              </div>
          </div>
          <div class="text-img">
              <img src="http://www.coraise.cn/_nuxt/img/dibs-data-img2.171c195.png" />
          </div>
      </div>
  </div>
</template> 

<script>
export default {
    name:'BlackText',
    data() {
        return {
            datasList:[
                {id:0,title:'数据交换',text:'Node bindings，这一层是 Javascript 与底层 C/C++ 能够沟通的关键，前者通过 bindings 调用后者，相互交换数据',text2:'V8：Google 推出的 Javascript VM，也是 Node.js 为什么使用的是 Javascript 的关键，它为 Javascript 提供了在非浏览器端运行的环境，它的高效是 Node.js 之所以高效的原因之一'},
                {id:1,title:'Libuv平台',text:'它为 Node.js 提供了跨平台，线程池，事件池，异步 I/O 等能力，是 Node.js 如此强大的关键。'}
            ]
        }
    },

}
</script>

<style lang="scss" scoped>
    .blacktext{
        background: rgb(244,244,244);
        padding: 2rem 2rem 4rem;
        &-flex{
            display: flex;
            flex-wrap: wrap;
            @media screen and (max-width:1365px){
                min-width: 120.5rem;
                justify-content: space-around;
            }
            @media screen and (max-width:765px){
                min-width: auto;
            }
            .text-text{
                padding:0 4rem 0 0;
                box-sizing: border-box;
                flex:1;
                h1{
                    @media screen and (max-width:1365px){
                        font-size:2.8rem;
                    }
                    @media screen and (max-width:765px){
                        font-size: 2.3rem;
                    }
                }
                .text-items{
                    h2{

                    }
                    P{
                        line-height: 2rem;
                    }
                    p:nth-of-type(1){
                        font-size:1.2rem;
                    }
                    p:nth-of-type(2){
                        font-size:1.2rem;
                    }
                }
            }
            .text-img{
                img{
                    width:100%;
                }
            }
        }
    }
</style>