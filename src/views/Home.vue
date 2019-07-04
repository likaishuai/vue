<template>
    <div class="home-content">
        <div class="header-top">
            <span class="title">全国</span>
            <span class="seacher"><b>搜索</b></span>
        </div>
        <div class="swiper-container">            
            <div class="swiper-wrapper">
                <div class="swiper-slide" 
                v-for="img in silderList"                
                :key="img.URL"
                >
                    <img :src="img.IMG|imgAddress" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="options">
          <ul>
              <li><a href=""><i></i><span>演唱会</span></a></li>
              <li><a href=""><i></i><span>话剧舞台剧</span></a></li>
              <li><a href=""><i></i><span>体育赛事</span></a></li>
              <li><a href=""><i></i><span>儿童亲子</span></a></li>
              <li><a href=""><i></i><span>全部分类</span></a></li>
              <li><a href=""><i></i><span>活动</span></a></li>
              <li><a href=""><i></i><span>永乐说</span></a></li>
              <li><a href=""><i></i><span>我的</span></a></li>
          </ul>
        </div>
        <div class="ad-middle">
            <a href=""><img class="first-adv" :src="firstAdv.IMG|imgAddress"/></a>
            <div class="second-adv">
                 <div
                   v-for="secAdv in secondAdv" 
                  :key="secAdv.LINKID" 
                 >
                     <a href=""> <img class="sec-adv" :src="secAdv.IMG|imgAddress" />  </a>
                </div>                 
            </div>            
        </div>
        <div class="content-header">
            <router-link active-class="active" tag="span" to="/home/recommend">推荐</router-link>
            <router-link active-class="active" tag="span" to="/home/stadium" >场馆</router-link>            
        </div>
        <router-view></router-view> 
        <Footer></Footer>
    </div>
</template>
<script>
import Swiper from 'swiper'
import Http from '../utils/http'

import Recommend from '../views/home/Recommend'
import Stadium from '../views/home/Stadium'
import Footer from '../components/Footer'

import imgAddress from '../filter/imgAddress'
export default {
    data(){
        return {
            silderList: [],
            firstAdv: [],
            secondAdv: []
        }
    },

    methods:{
        _initSwiper(){
            let myswiper = new Swiper(".swiper-container",{
                autoplay:true,
                loop: true,
                disableOnInteraction: false,
                //修改swiper自己豁子元素的自动初始化swiper
                observer: true,
                //修改swiper父元素时自动初始化swiper
                observeParents: true,
                pagination: {
                    el: '.swiper-pagination',
                }
           })
        }
        },

    async mounted(){
        let result = await Http.get("/api/server/content/index.json")
        this.silderList = result.slideList.slice(0,5)
        this.firstAdv = result.blockRec[0]
        this.secondAdv = result.subjectList
        this.$nextTick(()=>{
            this._initSwiper()
        })
    },

    components:{
        Recommend,
        Stadium,
        Footer
    }

}
</script>

<style lang="stylus" scoped>
  @import '../../node_modules/swiper/dist/css/swiper.css'
  add(a, b, n)
    a + b*n
.home-content  
    height max-content
.header-top
    height  .48rem
    line-height .48rem        
    background #ff7e6f
    display flex
    justify-content center
    align-items center
    .title
        font-size  .14rem
        margin-right .1rem
        color white
    .seacher
        width 2.84rem
        height .34rem
        padding 0 .2rem 0 .2rem
        display flex
        justify-content center
        align-items center
        background white
        border-radius .17rem  
.swiper-container 
    width 100%
    height 1.52rem
    border-radius 0 0 .1rem .1rem
    img 
        height 1.52rem
.options
    width 100%
    height 1.85rem
    padding .25rem .2rem
    ul 
        display flex
        justify-content space-between
        align-items center
        align-content space-around
        flex-wrap wrap
        li
            width .83rem
            height .55rem
            a 
                color #999
                font-weight 600 
                display flex
                flex-direction column
                justify-content center 
                align-items center                
                i 
                    background-image url(https://m2static.228.cn/images/icon.png) 
                    background-repeat no-repeat
                    background-size .75rem
                    display block 
                    height .36rem
                    width .36rem
        li:nth-child(1)
            i
                background-position   0  add(-692px, -44, 0)
        li:nth-child(2)
            i
                background-position   0  add(-692px, -44, 1)
        li:nth-child(3)
            i
                background-position   0  add(-692px, -44, 2)
         li:nth-child(4)
            i
                background-position   0  add(-692px, -44, 3)
        li:nth-child(5)
            i
                background-position   0  add(-692px, -44, 4)
        li:nth-child(6)
            i
                background-position   0  add(-692px, -44, 5)
         li:nth-child(7)
            i
                background-position   0  add(-692px, -44, 6)
        li:nth-child(8)
            i
                background-position   0  add(-692px, -44, 7)
.ad-middle
    width 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    .first-adv 
        width 3.35rem
        height 1.5rem
        border-radius .1rem
    .second-adv
        display flex
        justify-content space-around 
        align-items center
        align-content space-around
        div 
            padding 0  .1rem 
            .sec-adv            
                margin-top .2rem
                width 1.62rem
                height .67rem
                border-radius .1rem
.content-header 
    width 100%
    height .45rem   
    padding-top .1rem
    padding-bottom .1rem
    padding-left .2rem
    font-size .23rem
    font-weight 800
    color #999
    span  
        margin-right .2rem 
    span.active 
        color #000
</style>
