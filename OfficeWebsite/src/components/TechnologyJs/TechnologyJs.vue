<template>
  <div class="technologyjs">
    <toTop />
    <PositionRote :positions="pos"/>
    <WhiteHeader :jsDetail="jsDetail" :col="colwhite"/>
    <WhiteHeader :jsDetail="jsProduct" :col="colblack"/>
    <WhiteHeader :jsDetail="jsStructure" :col="colwhite"/>
    <WhiteHeader :jsDetail="jsBackground" :col="colblack"/>
    <BottomPhone />
  </div>
</template>

<script>
import PositionRote from '../PositionRote'
import WhiteHeader from './WhiteHeader';
import BottomPhone from '../BottomPhone';
import toTop from '../toTop'



export default {
    name:'TechnologyJs',
    data(){
        return {
            jsDetail:{},
            jsProduct:{},
            colblack:'black',
            colwhite:'white',
            pos:{
                onefloor:'技术',
                twofloor:'JavaScript概述'
            }
        }
    },
    created(){
        // 数据请求
        this.jsDetail = {
            id:0,
            title:'JavaScript概述',
            discrible:' JavaScript 是一种跨平台，面向对象的脚本语言。作为一种小巧且轻量级的语言，JavaScript 无意于独立运行，而是被设计为可以轻易嵌入到其它的产品和应用中，比如 Web 浏览器。在宿主环境中，JavaScript 可以被连接到环境中的对象之上，以提供对其的编程控制。借由 JavaScript 的 LiveConnect 功能，您可以让 Java 和 JavaScript 间实现通讯。从 JavaScript 中，您可以创建 Java 对象并访问它们的公共方法和域。从 Java 中，也可以访问 JavaScript 的对象，属性和方法。',
            imgSrc:'http://www.coraise.cn/_nuxt/img/dibs-about-img1.5b003a2.png'
        }

        this.jsProduct = {
            id:0,
            title:'JavaScript产品',
            imgSrc:'http://www.coraise.cn/_nuxt/img/dibs-about-img2.cfd3633.png'
        }

        this.jsStructure = {
            id:0,
            title:'JavaScript体系结构',
            imgSrc:'https://img2018.cnblogs.com/blog/1585158/201902/1585158-20190218150231239-1503449038.png'
        }

        this.jsBackground = {
            id:0,
            title:'JavaScript应用场景',
            imgSrc:'http://www.coraise.cn/_nuxt/img/dibs-about-img4.666b9f0.png'
        }

    },
    components:{
        WhiteHeader,
        PositionRote,
        BottomPhone,
        toTop
    }
}
</script>

<style lang="scss" scoped>
    .technologyjs{
        width:100%;
        @media screen and (max-width:1365px){
                margin-top:6.6rem;
        }
        @media screen and (max-width:765px){
            margin-top:4rem;
        }
    }
</style>