<template>
  <div class="technlogytrait">
      <div class="technlogytrait__detail">
          <h1>技术特点</h1>
          <ul class="ul-list">
              <li v-for="item of itemsData" :key="item.id">
                  <i :class="item.icon + ` iconfont`"></i>
                  <div class="text-main">
                    <h3>{{item.title}}</h3>
                    <p>{{item.discrible}}</p>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'TechnologyTrait',
    data(){
        return{
            itemsData:[
                {id:0,title:'异步事件驱动',icon:'iconshijian',discrible:'事件驱动的程序一般都有一个主循环(main loop)或称事件循环(event loop), 该循环不停地做两件事: 事件监测和事件处理。首先要监测是否发生了事件, 如果有事件发生则调用相应的事件处理程序, 处理完毕再继续监测新事件。事件循环只是在一个进程中运行的单个线程。'},
                {id:1,title:'阻塞式I/O',icon:'iconBlockingmouth',discrible:'I/O 编程模型指操作系统在处理 IO 时所采用的方式, 这些模型是为了解决 I/O 速度问题而诞生的。UNIX 下的 I/O 编程模型主要有以下 5 种。blocking I/O 、non-blocking I/O 、multiplexing I/O、signal driven I/O、ynchronous I/O'},
                {id:2,title:'单线程（这里指主线程）',icon:'iconshouye-xiancheng-',discrible:'单线程就是进程只有一个线程。单线程处理的优点：同步应用程序的开发比较容易，但由于需要在上一个任务完成后才能开始新的任务，所以其效率通常比多线程应用程序低。如果完成同步任务所用的时间比预计时间长，应用程序可能会不响应。'},
                {id:3,title:'性能出众',icon:'iconxingneng',discrible:'Node.js性能平台,平台( Node.js Performance Platform )是面向中大型 Node.js 应用提供性能监控、安全提醒、故障排查、性能优化等服务的整体性解决方案。 Node.js 性能平台凭借对 Node.js 内核深入的理解,提供完善的工具链和服务,协助客户主动、快速发现和定位线上问题'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('../../../iconfont/iconfont.css');
@import url('../../publicSass/public.scss');

    .technlogytrait{
        &__detail{
            h1{
                padding:2rem 1rem 3rem;
            }
            .ul-list{
                padding:0 1rem;
                box-sizing: border-box;
                li{
                    padding:2rem 0;
                    display: flex;
                    i{
                        margin-right:1.2rem;
                        color:rgba(40,186,222,1);
                        font-size:3rem;
                    }
                    .text-main{
                        h3{
                            font-size: 1.4rem;
                            padding:0 0 1rem 0;
                        }
                        p{
                            font-size:1.4rem;
                            line-height: 2.1rem;
                            opacity: 0.7;
                        }
                    }
                    
                }
            }
        }
    }
</style>