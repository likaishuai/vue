<template>
  <div class="detail-content">
    <main>
        <Information :data-detail="JSON.stringify(information)"></Information>
        <div class="main-conent">
            <Place :data-detail="JSON.stringify(place)"></Place>
            <PlayCity v-if="product.listPerform && product.listPerform.length>0"></PlayCity>
            <section>
                <h2>注意事项</h2>
                <p>
                    a)演出详情仅供参考，具体信息以现场为准；<br>
                    b)1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场；<br>
                    c)演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务，购票时请务必仔细核对并审慎下单。<br>
                    d)需要开具发票的购票客户，请您在演出/活动开始5天前提供相关发票信息至在线客服，演出/活动结束后将统一由演出/活动主办单位开具增值税发票。                  
                </p>
            </section>
            <TextContent :title="购票公告"
                :data-detail="product.BUY_AFFICHE"
             ></TextContent>
            <TextContent :title="演出详情"
                :data-detail="product.INTRODUCTION1"
            ></TextContent>
            <Quest></Quest>
            <Quest></Quest>
        </div>
        <Footer></Footer>
    </main>      
    <div class="bottom-nav">
        <b></b>
        <div class="buy">立即购买</div>
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

export default {
    data() {
        return {
            productId:'',
            result:{},
            information:{},
            place:{},
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

    async mounted() {
       this.productId = this.$route.params.id
        //请求数据
       this.result = await Http.get(`api/server/product/ticket-${ this.productId }.json`)
       this.product = this.result.product
       this.information = { 
           image: this.result.product.PBIGIMG,
           name: this.result.product.NAME,
           price: [this.result.product.MINPRICE,this.result.product.MAXPRICE] 
        }
        this.place = {
            tip: this.result.product.SPECIAL,
            time: this.result.product.BEGINDATE,
            address: this.result.product.VNAME
        }
       console.log(this.information)


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
