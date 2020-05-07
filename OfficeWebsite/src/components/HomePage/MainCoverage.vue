<template>
  <div class="mainconverage">
      <div class="mainconverage__all">
          <div class="noticfloat">
             <div class="left">
                 <h2>{{posh1.h}}</h2>
                 <p>{{posh1.p}}</p>
             </div>
             <div class="right">
                <h2>{{posh2.h}}</h2>
                <p>{{posh2.p}}</p>
                <button>{{posh2.more}}</button>
             </div>
          </div>
      </div>
        <div class="maincover">
            <h1>{{posh3.h1}}</h1>
            <h2>{{posh3.h2}}</h2>
            <ul class="oli">
                <li v-for="item of funcName" :key="item" @click="chooseFunc($event,item)">{{item}}</li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    name:'MainCoverage',
    data(){
        return {
            funcName:['我们优势','服务宗旨','服务特色','典型案例'],
            posh1:[],
            posh2:[],
            posh3:[]
        }
    },
    created(){
        this.pos = this.$store.state.props;
        this.$ajax.get(this.pos + '/maincover/1').then( res =>{
            this.posh1 = res.data[0];
        })
        this.$ajax.get(this.pos + '/maincover/2').then( res =>{
            this.posh2 = res.data[0];
        })
        this.$ajax.get(this.pos + '/maincover/3').then( res =>{
            this.posh3 = res.data[0];
        })
    },
    mounted(){
        // 初始化，第一次打开网页，默认选中第一个数据中心按钮
        let oli = document.getElementsByClassName("oli")[0];
        oli.children[0].className = 'active'
    },
    methods:{
        chooseFunc(e,item){
            // 点击功能按钮，样式改变触发
            let oli = document.getElementsByClassName("oli")[0];
            let len = oli.childElementCount;
            for(let i = 0; i < len; i++){
                oli.children[i].className = '';
            }
            e.path[0].className = 'active'

            // 数据传递
            if(item == '我们优势'){
                this.$store.state.count = 1;
            }else if(item == '服务宗旨'){
                this.$store.state.count = 2;
            }else if(item == '服务特色'){
                this.$store.state.count = 3;
            }else if(item == '典型案例'){
                this.$store.state.count = 4;
            }

        }
    }
}
</script>

<style lang="scss" scoped>
    @import url('../../publicSass/public.scss');

    .mainconverage{
        &__all{
            position: relative;
            width:100%;
            height:11rem;
            .noticfloat{
                // 公告栏样式
                position: absolute;
                display: flex;
                width:90%;
                height: 87%;
                background-color: #fff;
                box-shadow: 0.4rem 0.4rem 0.6rem #cdcdcd;
                border-radius: 0.4rem;
                @media screen and (max-width:1365px){
                    width:90%;
                    left:5%;
                    top:-45%;
                }
                @media screen and (max-width:765px){
                    width:100%;
                    left:0;
                    top:-10%;
                }
                .left{
                    padding:0rem 2rem 0rem 2rem;
                    margin:2rem 0 1rem 0;
                    flex:1;
                    border-right:1px solid rgba(235,235,235,0.8);
                    // 隐藏其中一条
                    @media screen and (max-width:1365px){
                        display: block;
                    }
                    @media screen and (max-width:765px){
                        display: none;
                    }
                    h2{
                        font-weight: 500;
                        margin-bottom: 1rem;
                    }
                    p{
                        font-size:1.2rem;
                        display: block;
                        width:100%;
                        height:50%;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2; 
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                .right{
                    flex:1;
                    padding:0rem 2rem 0rem 2rem;
                    @media screen and (max-width:1365px){
                        margin:2rem 0 1rem 0;
                    }
                    @media screen and (max-width:765px){
                       margin:1rem 0 1rem 0;
                    }
                    h2{
                        margin-bottom: 1rem;
                    }
                    p{
                        font-size:1.2rem;
                    }
                    button{
                        position: absolute;
                        right:3%;
                        bottom:20%;
                        border:0;
                        background-color: transparent;
                        color:rgb(22,180,218);
                        cursor: pointer;
                    }

                }
            }
        }

        .maincover{
            width:100%;
            padding-bottom:2rem;
            h1{
                font-weight: 500;
                text-align: center;
                margin-bottom: 1.6rem;
            }
            h2{
                font-weight: 300;
                text-align: center;
                margin-bottom: 1.6rem;
            }
            ul{
                display: flex;
                justify-content: space-around;
                @media screen and (max-width:1365px){
                    width:80%;
                    margin-left:10%;
                }
                @media screen and (max-width:765px){
                    width:100%;
                    margin-left:0%;
                }
                li{
                    position: relative;
                    flex-grow:1;
                    font-size:1.4rem;
                    text-align: center;
                    padding:1rem 0.4rem;
                    margin:0 1rem;
                    border:1px solid rgba(215,215,215,1);
                }
                li[class='active']::before{
                    position: absolute;
                    display: inline-block;
                    content:'';
                    width:0px;
                    height:0px;
                    left:50%;
                    // top:50%;
                    transform: translate(-50%,-25%);
                    bottom:-1.5rem;
                    border:0.6rem solid rgb(22,180,218);
                    border-left-color: transparent;
                    border-right-color: transparent;
                    border-bottom-color: transparent;
                }
                .active{
                    background-color: rgba(0,173,216,1);
                    color:#fff;
                    border:0;
                }
            }
        }
    }

    
</style>