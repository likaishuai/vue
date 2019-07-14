<template>
  <div class="detail-content">
    <main>
        <Information v-bind="informationData"></Information>
        <div class="main-conent">
            <Place v-bind="placeData" ></Place>
            <PlayCity v-if="plaucity.exist"></PlayCity>
            <TextContent :title="'注意事项'"
                v-if="hasText1"
                :data-detail="product.PRECAUTIONS"
             ></TextContent>
            <TextContent
                :title="'购票公告'"
                v-if="hasText2"
                :data-detail="product.BUY_AFFICHE"
             ></TextContent>
            <TextContent :title="'演出详情'"
                v-if="hasText3"
                :data-detail="product.INTRODUCTION"
            ></TextContent>
            <Quest :title="'FAQ'" :productId="productId"></Quest>
        </div>
        <Footer></Footer>
    </main>      
    <div class="bottom-nav">
        <b></b>
        <div class="buy" v-if="!isClose">立即购买</div>
        <div class="buy not" v-if="isClose">无法购票</div>
    </div>
</div>
</template>

<script>
import Information from './Information'
import Place from './Place'
import PlayCity from './PlayCity'
import TextContent from './TextContent'
import Quest from './Quest'
import Footer from '../components/Footer'

import Http from '../utils/http'
import { Indicator, Toast } from 'mint-ui' 

export default {
    data() {
        return {
            productId:'',
            isClose: true,

            hasText1: true,
            hasText2: true,
            hasText3: true,

            product: {},
            plaucity: { exist: false},
            informationData:{},
            placeData:{},
            questList:[]
        }
    },

    components:{
        Information,
        Place,
        PlayCity,
        TextContent,
        Quest,
        Footer
    },

    async created() {
        Indicator.open({
            text: 'Loading...',
            spinnerType: 'triple-bounce'
            })

        this.productId = this.$route.params.id
        //请求数据
        let result= await Http.get(`api/server/product/ticket-${ this.productId }.json`)
       this.product = result.product
        //判断是否在售票
        this.isClose = !(this.product.DISPLAY == 1) 
       //详情头部信息
        this.informationData = { 
            image: this.product.PBIGIMG,
            name: this.product.NAME,
            minPrice: this.product.MINPRICE,
            maxPrice: this.product.MAXPRICE            
        }
        //详情提示信息
        this.placeData = {
            id: this.product.VENUESID,
            tip: this.product.SPECIAL,
            time: this.product.BEGINDATE,
            address: this.product.VNAME
        }
        //巡演城市
        if(this.product.listPerform){
            this.listPerform= {
                ...this.listPerform,
                exist: true,
                cityList: [
                    "none"
                ]
            }
        }

        //判断是否存在文本
        if(!this.product.PRECAUTIONS) this.hasText1 = false
        if(!this.product.BUY_AFFICHE) this.hasText2 = false
        if(!this.product.INTRODUCTION) this.hasText3 = false

        Indicator.close()
    }
   
}
</script>

<style lang="stylus" scoped>
b 
    display inline-block
    background-size .5rem
    background-image url(../assets/img/product-icon.png) 
    background-repeat no-repeat  
.detail-content
    width 100% 
    height 100%
    display flex
    flex-direction column
    justify-content center
    main
        flex 1
        overflow scroll
        background #f5f6f7
        .main-conent
            display flex
            flex-direction column
            justify-content center
            align-items center
    .bottom-nav
        width 100% 
        height .6rem
        display flex
        justify-content center
        padding .08rem .2rem
        background #ffffff
        .not 
            background #7777 !important
        .buy
            width 3.17rem
            height .44rem
            line-height .44rem
            color #fff
            text-align center
            background linear-gradient(to right, #ff7e6f, #ff2959)
            border-radius .22rem
        b 
            width .44rem
            height .44rem
            background-position 0 -1.11rem
            margin-right .2rem
section
    display block
    width 3.35rem
    text-align left
h2
    height .3rem
    font-size .22rem
    line-height .2rem
    padding .05rem    
p 
    display block
    padding .1rem .1rem 0
    color #999
    font-size .14rem
</style>
